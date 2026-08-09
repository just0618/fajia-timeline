# 法嘉时间档案 V0.2 手账原型

这一版重点验证四件事：

1. 应援色正式进入主视觉：粉 `#FF8AA1`、金 `#FFE25B`；
2. 手机端翻页改成“经历页 → 公开页 → 下一事件经历页”；
3. 本地图片优先于社交平台临时图片 URL，用于长期档案保存；
4. 用真实素材测试手账照片排版。

## 预览

Windows 双击：

`open_preview_windows.bat`

也可以直接打开 `index.html`。

## 数据

- `data/dual_timeline.json`：现实事件 + 公开发布双时间线
- `data/timeline-data.js`：供本地双击预览使用
- `data/media-assets.json`：本地素材清单
- `data/media-assets.js`：供网页直接读取的本地素材清单

## 当前素材试挂

- Arena 拍摄：3 张
- 泰国演唱会：2 张
- V Generation：2 张，暂存在 `media/inbox/`，尚未关联事件
- 见面会：2 张，暂存在 `media/inbox/`，尚未关联事件

没有来源链接的图片不会凭空补写来源。后续确认原始微博/小红书/抖音/Instagram 链接后，再把 `source_url` 补入正式 `media_assets` 数据。

## 推荐长期素材结构

```
media/
├─ events/
│  ├─ 2026-06-16_arena/
│  └─ 2026-07-25_bangkok-concert/
└─ inbox/
```

`inbox` 用于“已经保存到电脑，但暂时还不知道该挂到哪个现实事件”的素材。
