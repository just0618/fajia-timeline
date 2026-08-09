from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "data" / "dual_timeline.json"
out = ROOT / "data" / "timeline-data.js"

if not src.exists():
    raise SystemExit(f"找不到: {src}")

data = json.loads(src.read_text(encoding="utf-8"))
out.write_text(
    "window.TIMELINE_DATA = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n",
    encoding="utf-8",
)
print(f"已同步: {src.name} -> {out.name}")
print(f"events={len(data.get('experience_timeline', []))}, posts={len(data.get('release_timeline', []))}")
