# 法嘉时间档案 · V0.1 手账网站原型

这是一个**独立网站原型**，不会修改 `fajia-timeline-data` 主数据库。

## 这版验证什么

- 封面 → 开书动画
- PC 双页摊开
- 翻页动画 / 键盘左右键 / 底部事件索引
- 左页：现实发生时间（exact / range / inferred）
- 右页：与该事件关联的公开发布记录
- 关联物料较多时打开“物料抽屉”
- 手机端单页模式：“经历页 / 公开页”切换，并支持滑动
- 数据不是写死在 HTML 里，而是读取导出的双时间线数据

## 本版真实数据

`data/dual_timeline.json` 来自当前事件层导出。打包时包含：

- 4 个现实事件
- 323 条公开发布记录
- 18 条事件—帖子关联

## 本地预览

直接双击：

`open_preview_windows.bat`

或直接打开 `index.html`。

## 以后更新数据

从 `fajia-timeline-data` 重新导出最新 `dual_timeline.json`，覆盖：

`data/dual_timeline.json`

然后运行：

`D:\anaconda3\python.exe scripts\sync_data.py`

它会生成新的 `data/timeline-data.js`。网站代码本身不用随着事件数量增加而修改。

## 建议仓库

建议将网站单独作为新仓库，例如：

`fajia-time-archive`

数据工程仍保留：

`fajia-timeline-data`

后续可以再用脚本 / GitHub Actions 把数据工程的导出结果同步到网站仓库。

## V0.1 暂时没有做的事情

- 不追求最终视觉精装修
- 不把 323 条帖子全部做成独立页面
- 不做后台编辑（继续使用现有事件编辑器）
- 不保存外部图片到本地，关联照片暂时读取社交平台公开图片 URL
- 不做完整月历、地图、直播档案、独立素材库

这些都留到 V0.2 / V0.3，在真实使用后再决定优先级。
