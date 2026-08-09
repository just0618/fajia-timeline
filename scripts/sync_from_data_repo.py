from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path, PureWindowsPath

WEB_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REPO = Path(r"E:\fajia-timeline\fajia-timeline-data")


def load_extra(asset: dict) -> dict:
    extra = asset.get("extra_json")
    if isinstance(extra, dict):
        return extra
    if isinstance(extra, str) and extra.strip():
        try:
            parsed = json.loads(extra)
            return parsed if isinstance(parsed, dict) else {}
        except Exception:
            return {}
    return {}


def web_rel(path: Path) -> str:
    return path.relative_to(WEB_ROOT).as_posix()


def resolve_asset_source(raw: str, repo_root: Path) -> Path | None:
    if not raw:
        return None
    # Repo-relative paths such as media/2026/05/...
    normalized = raw.replace("\\", "/")
    if not (":" in raw[:3] or raw.startswith("/")):
        p = repo_root / normalized
        return p if p.exists() else None
    # Windows absolute paths (script runs on Windows in the normal workflow)
    p = Path(raw)
    return p if p.exists() else None


def main() -> int:
    repo_root = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_REPO
    source_json = repo_root / "data" / "export" / "dual_timeline.json"
    if not source_json.exists():
        print(f"ERROR: 找不到最新双时间线：{source_json}")
        print("请先确认 fajia-timeline-data 已完成导出。")
        return 2

    data = json.loads(source_json.read_text(encoding="utf-8"))
    events = list(data.get("experience_timeline") or [])
    posts = list(data.get("release_timeline") or [])
    may_events = [e for e in events if str(e.get("occurred_at_start") or "").startswith("2026-05")]
    june_events = [e for e in events if str(e.get("occurred_at_start") or "").startswith("2026-06")]

    print("法嘉时间档案 · 数据同步检查")
    print(f"源文件：{source_json}")
    print(f"事件：{len(events)} ｜ 五月：{len(may_events)} ｜ 六月：{len(june_events)} ｜ 公开记录：{len(posts)}")

    # The formal May V1 importer should leave far more than the old single May node.
    if len(may_events) < 12:
        print("\nSTOP: 当前导出文件看起来还不是『五月正式事件集 V1』。")
        print("请先在数据仓库运行：import_may_2026_chapter_windows.bat")
        print("正常情况下，五月应看到约 16 个正式现实节点。为避免旧数据覆盖网站，本次没有同步。")
        return 3

    # Copy repo media tree first. This safely picks up the May formal media folder.
    repo_media = repo_root / "media"
    web_media = WEB_ROOT / "media"
    if repo_media.exists():
        shutil.copytree(repo_media, web_media, dirs_exist_ok=True)

    data_dir = WEB_ROOT / "data"
    data_dir.mkdir(parents=True, exist_ok=True)
    pretty = json.dumps(data, ensure_ascii=False, indent=2)
    compact = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    (data_dir / "dual_timeline.json").write_text(pretty, encoding="utf-8")
    (data_dir / "timeline-data.json").write_text(pretty, encoding="utf-8")
    (data_dir / "timeline-data.js").write_text("window.TIMELINE_DATA = " + compact + ";\n", encoding="utf-8")

    # Build the browser-friendly media asset map from the database export.
    existing_assets = []
    existing_path = data_dir / "media-assets.json"
    if existing_path.exists():
        try:
            existing_assets = json.loads(existing_path.read_text(encoding="utf-8"))
        except Exception:
            existing_assets = []
    existing_by_key = {(a.get("event_id"), a.get("asset_id"), a.get("caption")): a for a in existing_assets if isinstance(a, dict)}

    assets = []
    seen = set()
    imported_root = web_media / "imported"

    for event in events:
        event_id = event.get("event_id") or "unknown"
        for asset in (event.get("media_assets") or []):
            if not isinstance(asset, dict):
                continue
            item = dict(asset)
            extra = load_extra(item)
            item["display_role"] = item.get("display_role") or extra.get("display_role") or ("cover" if extra.get("is_cover") else "gallery")
            item["sort_order"] = item.get("sort_order") if item.get("sort_order") is not None else extra.get("sort_order", 0)
            raw = str(item.get("local_path") or "")
            src = resolve_asset_source(raw, repo_root)

            if src and src.exists():
                # Preserve repo-relative media paths; import absolute external files into a safe web folder.
                normalized = raw.replace("\\", "/")
                if not (":" in raw[:3] or raw.startswith("/")) and normalized.startswith("media/"):
                    dst = WEB_ROOT / normalized
                    dst.parent.mkdir(parents=True, exist_ok=True)
                    if src.resolve() != dst.resolve():
                        shutil.copy2(src, dst)
                else:
                    dst_dir = imported_root / event_id
                    dst_dir.mkdir(parents=True, exist_ok=True)
                    dst = dst_dir / src.name
                    if src.resolve() != dst.resolve():
                        shutil.copy2(src, dst)
                item["local_path"] = web_rel(dst)
            else:
                old = existing_by_key.get((item.get("event_id"), item.get("asset_id"), item.get("caption")))
                if old and old.get("local_path") and (WEB_ROOT / old["local_path"]).exists():
                    item["local_path"] = old["local_path"]
                elif raw.replace("\\", "/").startswith("media/") and (WEB_ROOT / raw.replace("\\", "/")).exists():
                    item["local_path"] = raw.replace("\\", "/")
                else:
                    # Keep metadata out of the browser map if the local file cannot be served.
                    continue

            key = (item.get("event_id"), item.get("local_path"), item.get("caption"))
            if key in seen:
                continue
            seen.add(key)
            assets.append(item)

    assets.sort(key=lambda a: (str(a.get("event_id") or ""), int(a.get("sort_order") or 0), str(a.get("local_path") or "")))
    (data_dir / "media-assets.json").write_text(json.dumps(assets, ensure_ascii=False, indent=2), encoding="utf-8")
    (data_dir / "media-assets.js").write_text("window.MEDIA_ASSETS = " + json.dumps(assets, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")

    print("\nOK: 已同步最新数据库导出到网站。")
    print(f"网站五月节点：{len(may_events)}")
    print(f"可用本地素材映射：{len(assets)}")
    print(f"目标：{WEB_ROOT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
