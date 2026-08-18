window.FAJIA_TIMELINE_MASTER = {
  "schema_version": "1.0.0",
  "generated_at": "2026-08-19",
  "principles": [
    "现实时间线优先；能确认拍摄/发生日期的物料按实际日期排列。",
    "公开日期不自动等同于拍摄日期。",
    "无直接证据的节点保留推定/待确认状态，不在前台伪装成已确认事实。",
    "城市级私人动线可作为背景节点，但不展示车次、精确站点、航班等敏感细节。",
    "前台默认只展示 default_visible=true；考据层可展开 archive_detail。"
  ],
  "periods": [
    {
      "key": "2025-Q4",
      "label": "2025 Q4",
      "start": "2025-10-10",
      "end": "2025-12-31",
      "primary_view": "timeline",
      "subtitle": "相识 → 剧组 → 杀青",
      "status": "data_ready"
    },
    {
      "key": "2026-Q1",
      "label": "2026 Q1",
      "start": "2026-01-01",
      "end": "2026-03-31",
      "primary_view": "timeline",
      "subtitle": "杀青后 → 北京重聚 → 三月",
      "status": "data_ready"
    },
    {
      "key": "2026-04",
      "label": "April 2026",
      "start": "2026-04-01",
      "end": "2026-04-30",
      "primary_view": "calendar",
      "subtitle": "单月事件开始变密",
      "status": "data_ready"
    },
    {
      "key": "2026-05",
      "label": "May 2026",
      "start": "2026-05-01",
      "end": "2026-05-31",
      "primary_view": "calendar",
      "subtitle": "剧宣 / 直播 / 天津 / 音乐节",
      "status": "data_ready"
    },
    {
      "key": "2026-06",
      "label": "June 2026",
      "start": "2026-06-01",
      "end": "2026-06-30",
      "primary_view": "calendar",
      "subtitle": "源头事件 / 后续公开",
      "status": "data_ready"
    },
    {
      "key": "2026-07",
      "label": "July 2026",
      "start": "2026-07-01",
      "end": "2026-07-31",
      "primary_view": "calendar",
      "subtitle": "工作节点高密度",
      "status": "data_ready"
    },
    {
      "key": "2026-08",
      "label": "August 2026",
      "start": "2026-08-01",
      "end": "2026-08-31",
      "primary_view": "calendar",
      "subtitle": "待继续整理",
      "status": "skeleton"
    }
  ],
  "events": [
    {
      "id": "evt_20251010_online_first_meet",
      "period_key": "2025-Q4",
      "date_start": "2025-10-10",
      "date_end": "2025-10-10",
      "date_label": "10.10",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "relationship_milestone",
      "title": "线上初见",
      "summary": "开机采访中回溯到的线上初见节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5297016940268488",
          "source_doc_paragraph": 11
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251024_offline_first_meet",
      "period_key": "2025-Q4",
      "date_start": "2025-10-24",
      "date_end": "2025-10-24",
      "date_label": "10.24",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "relationship_milestone",
      "title": "线下初见",
      "summary": "第一次线下见面。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/SC1mrCt",
          "source_doc_paragraph": 13
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251024_script_read",
      "period_key": "2025-Q4",
      "date_start": "2025-10-24",
      "date_end": "2025-10-24",
      "date_label": "10.24",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "production",
      "title": "主创剧本围读",
      "summary": "主创一起剧本围读；文档注明当时两人甚至还没加微信。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/SC1mrCt",
          "source_doc_paragraph": 13
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "围读信息来自时间线文档正文；直播回溯作为同日背景参考。"
    },
    {
      "id": "evt_20251025_27_hotel_rehearsal",
      "period_key": "2025-Q4",
      "date_start": "2025-10-25",
      "date_end": "2025-10-27",
      "date_label": "10.25–10.27",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "rehearsal",
      "title": "酒店排戏",
      "summary": "文档标为“推测时间线”，以10.25导演组、10.26初吻排戏、10.27吵架排戏物料作为间接证据。",
      "confidence": "medium",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5305429515047115",
          "source_doc_paragraph": 17
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7871161749/5300262162138091",
          "source_doc_paragraph": 18
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5295910045091527",
          "source_doc_paragraph": 19
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8346542571/5308296525255900",
          "source_doc_paragraph": 19
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "无直接证据，保留推定标记。"
    },
    {
      "id": "evt_20251028_costume",
      "period_key": "2025-Q4",
      "date_start": "2025-10-28",
      "date_end": "2025-10-28",
      "date_label": "10.28 日间",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "production",
      "title": "剧组定妆",
      "summary": "日间进行剧组定妆。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5299215338046218",
          "source_doc_paragraph": 21
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5295908988130965",
          "source_doc_paragraph": 22
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251028_rehearsal",
      "period_key": "2025-Q4",
      "date_start": "2025-10-28",
      "date_end": "2025-10-28",
      "date_label": "10.28 晚",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "rehearsal",
      "title": "车震排戏",
      "summary": "定妆结束回酒店后进行排戏；文档通过同套私服进行交叉判断。",
      "confidence": "high",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5296742355703399",
          "source_doc_paragraph": 23
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7102020060/5301403794801110",
          "source_doc_paragraph": 23
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5299215338046218",
          "source_doc_paragraph": 24
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251029_30_hotel_rehearsal",
      "period_key": "2025-Q4",
      "date_start": "2025-10-29",
      "date_end": "2025-10-30",
      "date_label": "10.29–10.30",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "rehearsal",
      "title": "酒店排戏",
      "summary": "文档将10.29–10.30继续列为酒店排戏阶段。",
      "confidence": "medium",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "正文有节点但未附单独直接链接。"
    },
    {
      "id": "evt_20251031_promo_shoot",
      "period_key": "2025-Q4",
      "date_start": "2025-10-31",
      "date_end": "2025-10-31",
      "date_label": "10.31",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "shoot",
      "title": "宣传物料拍摄",
      "summary": "拍摄“我漂亮吗”“你很漂亮”、开机采访与海报侧拍等宣传物料。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5291938997341469",
          "source_doc_paragraph": 29
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5295220990149695",
          "source_doc_paragraph": 30
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5297016940268488",
          "source_doc_paragraph": 31
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5319172957/5322097997648396",
          "source_doc_paragraph": 32
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7608830314/5304969653651993",
          "source_doc_paragraph": 32
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_202511_campus_visit",
      "period_key": "2025-Q4",
      "date_start": "2025-11-01",
      "date_end": "2025-11-30",
      "date_label": "11月 · 日期待定",
      "date_precision": "month_unknown",
      "kind": "real_event",
      "subtype": "public_moment",
      "title": "探班校园戏 / 操场 / 晚餐",
      "summary": "探班主产校园戏，在操场上玩，晚上与其他演员老师一起吃饭。",
      "confidence": "high",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5298112981631150",
          "source_doc_paragraph": 53
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7409381623/5307329419412338",
          "source_doc_paragraph": 53
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "具体日期在文档中未锁定。"
    },
    {
      "id": "evt_202511_out_with_child",
      "period_key": "2025-Q4",
      "date_start": "2025-11-01",
      "date_end": "2025-11-30",
      "date_label": "11月 · 日期待定",
      "date_precision": "month_unknown",
      "kind": "real_event",
      "subtype": "public_moment",
      "title": "一起出门带娃",
      "summary": "文档记录两人一起出门带娃，后续小号公开过相关照片。",
      "confidence": "high",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7284077028/5302859576116903",
          "source_doc_paragraph": 55
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "具体日期未锁定。"
    },
    {
      "id": "evt_20251102_start_shoot",
      "period_key": "2025-Q4",
      "date_start": "2025-11-02",
      "date_end": "2025-11-02",
      "date_label": "11.02",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "production_milestone",
      "title": "《双程》开机",
      "summary": "《双程》开机；文档列出开机第一场对手戏、开机礼物、开机Vlog、P图教学等当日内容。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5298853747623687",
          "source_doc_paragraph": 37
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7766620005/5304267579328430",
          "source_doc_paragraph": 38
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5300737894515341",
          "source_doc_paragraph": 39
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7163227210/5306917704436481",
          "source_doc_paragraph": 40
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5297381036000201",
          "source_doc_paragraph": 41
        },
        {
          "label": "夸克网盘分享",
          "url": "https://pan.quark.cn/s/8cbf33c8028f?pwd=ZRyv",
          "source_doc_paragraph": 42
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7278425339/5319948167548892",
          "source_doc_paragraph": 43
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5537307919/5305078404615645",
          "source_doc_paragraph": 44
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_202511_month_filming",
      "period_key": "2025-Q4",
      "date_start": "2025-11-03",
      "date_end": "2025-11-30",
      "date_label": "11月整月",
      "date_precision": "range",
      "kind": "context",
      "subtype": "production_period",
      "title": "《双程》拍摄期",
      "summary": "11月作为连续剧组拍摄阶段；除关键拍摄外也存在较多休息与生活碎片。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "timeline_context",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5298853747623687",
          "source_doc_paragraph": 49
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5891904708/5298855295058906",
          "source_doc_paragraph": 49
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251117_school_return",
      "period_key": "2025-Q4",
      "date_start": "2025-11-17",
      "date_end": "2025-11-17",
      "date_label": "11.17",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "public_moment",
      "title": "贺嘉述回学校 / 法宣阁表示想念",
      "summary": "文档记录贺嘉述回学校，同期出现法宣阁表达想念的公开内容。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8007226764/5307538422631859",
          "source_doc_paragraph": 51
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7409381623/5307329419412338",
          "source_doc_paragraph": 51
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7608830314/5305110517517318",
          "source_doc_paragraph": 51
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_202511_wrap_gift",
      "period_key": "2025-Q4",
      "date_start": "2025-11-20",
      "date_end": "2025-12-02",
      "date_label": "快杀青时",
      "date_precision": "approx",
      "kind": "real_event",
      "subtype": "gift",
      "title": "杀青礼物",
      "summary": "快杀青阶段，贺嘉述给法宣阁准备杀青礼物。",
      "confidence": "high",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/SC1mrCt",
          "source_doc_paragraph": 58
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public",
          "target": "evt_20251219_gift_photo"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20251203_wrap",
      "period_key": "2025-Q4",
      "date_start": "2025-12-03",
      "date_end": "2025-12-03",
      "date_label": "12.03",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "production_milestone",
      "title": "《双程》杀青",
      "summary": "《双程》杀青，剧组阶段进入尾声。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251204_nantong_zoo",
      "period_key": "2025-Q4",
      "date_start": "2025-12-04",
      "date_end": "2025-12-04",
      "date_label": "12.04",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "trip",
      "title": "南通动物园",
      "summary": "路人偶遇主创拍摄并留下动物园相关记录。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "南通",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6995945396/5306902525252629",
          "source_doc_paragraph": 62
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/3016793151/5306908283242085",
          "source_doc_paragraph": 63
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251205_pingjiang_interview",
      "period_key": "2025-Q4",
      "date_start": "2025-12-05",
      "date_end": "2025-12-11",
      "date_label": "12.05–?",
      "date_precision": "range_open",
      "kind": "real_event",
      "subtype": "shoot",
      "title": "苏州平江路 & 杀青采访",
      "summary": "文档将平江路物料和杀青采访放在12.05之后、12.12之前的阶段，具体日期未完全锁定。",
      "confidence": "high",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "苏州",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8346542571/5308661179877412",
          "source_doc_paragraph": 65
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5309707935809718",
          "source_doc_paragraph": 67
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251212_wrap_post",
      "period_key": "2025-Q4",
      "date_start": "2025-12-12",
      "date_end": "2025-12-12",
      "date_label": "12.12",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "小号杀青博",
      "summary": "贺嘉述小号发布杀青博；文档据此判断剧组相关工作应在这天前结束。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5243157650606580",
          "source_doc_paragraph": 69
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251215_ferris_wish",
      "period_key": "2025-Q4",
      "date_start": "2025-12-15",
      "date_end": "2025-12-15",
      "date_label": "12.15",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "“过年前想坐摩天轮”",
      "summary": "贺嘉述小号公开提到“过年前想坐摩天轮”。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5243908359722999",
          "source_doc_paragraph": 70
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251218_song_share",
      "period_key": "2025-Q4",
      "date_start": "2025-12-18",
      "date_end": "2025-12-18",
      "date_label": "12.18",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "music_share",
      "title": "分享《不占地方》",
      "summary": "贺嘉述小号分享最近爱听的《不占地方》。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5245204716326068",
          "source_doc_paragraph": 71
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20251219_gift_photo",
      "period_key": "2025-Q4",
      "date_start": "2025-12-19",
      "date_end": "2025-12-19",
      "date_label": "12.19",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "杀青礼物制作照公开",
      "summary": "贺嘉述小号发布送给法宣阁的杀青礼物之一——拼豆制作照片。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5245627082213308",
          "source_doc_paragraph": 72
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "evidence_for",
          "target": "evt_202511_wrap_gift"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20251224_old_dinner_photo",
      "period_key": "2025-Q4",
      "date_start": "2025-12-24",
      "date_end": "2025-12-24",
      "date_label": "12.24",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "剧组时期吃饭照片公开",
      "summary": "法宣阁发布剧组时期与贺嘉述一起吃饭当天的照片。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5247431614922959",
          "source_doc_paragraph": 73
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260102_essay",
      "period_key": "2026-Q1",
      "date_start": "2026-01-02",
      "date_end": "2026-01-02",
      "date_label": "01.02",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "小号小作文",
      "summary": "贺嘉述小号发布小作文，其中提到“百分之二十”。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5250485594620944",
          "source_doc_paragraph": 77
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260108_11_beijing_reunion",
      "period_key": "2026-Q1",
      "date_start": "2026-01-08",
      "date_end": "2026-01-11",
      "date_label": "01.08–01.11左右",
      "date_precision": "range",
      "kind": "public_clue",
      "subtype": "location_clue",
      "title": "北京重聚线索",
      "summary": "文档根据小号评论区IP线索判断贺嘉述在01.08及之前到北京、01.11晚仍在北京。",
      "confidence": "medium",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "city_level",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5247735387129490",
          "source_doc_paragraph": 79
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5250485594620944",
          "source_doc_paragraph": 79
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5246007731818122",
          "source_doc_paragraph": 81
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5253284391554109",
          "source_doc_paragraph": 81
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "IP属地仅作为公开线索，不等同精确实时行程。"
    },
    {
      "id": "evt_20260109_phonebooth",
      "period_key": "2026-Q1",
      "date_start": "2026-01-09",
      "date_end": "2026-01-09",
      "date_label": "01.09",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "北京街头电话亭",
      "summary": "贺嘉述小号发布北京街头散步时拍摄的电话亭照片。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5253284391554109",
          "source_doc_paragraph": 80
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260112_song_voice",
      "period_key": "2026-Q1",
      "date_start": "2026-01-12",
      "date_end": "2026-01-12",
      "date_label": "01.12",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "《不占地方》歌词动态",
      "summary": "法宣阁发布《不占地方》歌词相关动态，文档注明P4露出贺嘉述声音。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5254350211384153",
          "source_doc_paragraph": 83
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260112_live_cluster",
      "period_key": "2026-Q1",
      "date_start": "2026-01-12",
      "date_end": "2026-01-31",
      "date_label": "01.12起",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "live_period",
      "title": "一月直播阶段",
      "summary": "文档记录01.12当晚贺嘉述开直播，此后一段时间多次直播，法宣阁也一直在看。",
      "confidence": "medium",
      "default_visible": true,
      "display_mode": "timeline_context",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8346542571/5292732580889821",
          "source_doc_paragraph": 85
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "流出切片有限，部分日期无法逐场锁定。"
    },
    {
      "id": "evt_202601_unknown_live",
      "period_key": "2026-Q1",
      "date_start": "2026-01-12",
      "date_end": "2026-01-31",
      "date_label": "01.??",
      "date_precision": "unknown_in_month",
      "kind": "public_post",
      "subtype": "live_clip",
      "title": "直播切片：青岛 / “可爱🫰”",
      "summary": "未锁定具体日期的直播切片，包含想去青岛旅游、“自己是被追的”等内容，以及法宣阁弹幕“可爱🫰”。",
      "confidence": "medium",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8346542571/5292732580889821",
          "source_doc_paragraph": 85
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260116_id_and_live",
      "period_key": "2026-Q1",
      "date_start": "2026-01-16",
      "date_end": "2026-01-16",
      "date_label": "01.16",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "account_update",
      "title": "小号改名 + 当晚直播",
      "summary": "贺嘉述小号在这天及之前改名为“shu_coming”；当晚直播也有老粉文字转述。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5255746820509666",
          "source_doc_paragraph": 86
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8000015247/5256218215189458",
          "source_doc_paragraph": 87
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260122_like",
      "period_key": "2026-Q1",
      "date_start": "2026-01-22",
      "date_end": "2026-01-22",
      "date_label": "01.22",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "like",
      "title": "小号点赞记录",
      "summary": "贺嘉述小号点赞“根本没有完美的性格”，后续已取消。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260123_douyin",
      "period_key": "2026-Q1",
      "date_start": "2026-01-23",
      "date_end": "2026-01-23",
      "date_label": "01.23",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "douyin",
      "title": "“谈恋爱就应该谈我这样的”",
      "summary": "贺嘉述发布相关抖音。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "谈恋爱就应该谈我这样的#谈恋爱就应该谈我这样的 - 抖音",
          "url": "https://v.douyin.com/RbOXxo5w50Q/",
          "source_doc_paragraph": 89
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260124_live_clip",
      "period_key": "2026-Q1",
      "date_start": "2026-01-24",
      "date_end": "2026-01-24",
      "date_label": "01.24",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "live_clip",
      "title": "直播切片：喜欢你 / 老虎",
      "summary": "直播切片中出现“老给别人唱《喜欢你》”以及“第一次有人跟我说我像一只老虎”等内容。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/9068800891/5300832775701778",
          "source_doc_paragraph": 90
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260125_guitar",
      "period_key": "2026-Q1",
      "date_start": "2026-01-25",
      "date_end": "2026-01-25",
      "date_label": "01.25",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "music_post",
      "title": "吉他弹唱《小宇》",
      "summary": "法宣阁发布吉他弹唱《小宇》。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "总有些惊奇的际遇#小宇 - 抖音",
          "url": "https://v.douyin.com/4NiF24zgagM/",
          "source_doc_paragraph": 91
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260126_bird_essay",
      "period_key": "2026-Q1",
      "date_start": "2026-01-26",
      "date_end": "2026-01-26",
      "date_label": "01.26",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "“雏鸟情节”小作文",
      "summary": "贺嘉述小号发布“雏鸟情节”小作文，配乐《言不由衷》。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5259150381549343",
          "source_doc_paragraph": 92
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260214_fxg_friend_photos",
      "period_key": "2026-Q1",
      "date_start": "2026-02-08",
      "date_end": "2026-02-14",
      "date_label": "02.08 / 02.14",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "法宣阁与发小出游照片",
      "summary": "法宣阁在02.08与02.14发布与发小一起出去玩的图片。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5264122973523122",
          "source_doc_paragraph": 96
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5266296954425694",
          "source_doc_paragraph": 96
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260214_valentine",
      "period_key": "2026-Q1",
      "date_start": "2026-02-14",
      "date_end": "2026-02-14",
      "date_label": "02.14",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "情人节 / 贺嘉述大号首博",
      "summary": "贺嘉述02.12注册大号，02.14情人节发布第一条微博。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5266360021816117",
          "source_doc_paragraph": 95
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260307_beijing_move",
      "period_key": "2026-Q1",
      "date_start": "2026-03-07",
      "date_end": "2026-03-07",
      "date_label": "03.07",
      "date_precision": "exact",
      "kind": "public_clue",
      "subtype": "city_movement",
      "title": "杭州 → 北京",
      "summary": "文档记录贺嘉述从杭州到北京，并据此延伸出后续关系判断。",
      "confidence": "high",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "city_level",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "杭州 → 北京",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "城市级背景动线，不展示车次/精确行程。"
    },
    {
      "id": "evt_20260307_cohabit_inference",
      "period_key": "2026-Q1",
      "date_start": "2026-03-07",
      "date_end": "2026-03-07",
      "date_label": "03.07起",
      "date_precision": "approx",
      "kind": "public_clue",
      "subtype": "relationship_inference",
      "title": "疑似开始同居",
      "summary": "文档明确使用“疑似”表述；作为内部候选关系保留，不默认前台展示。",
      "confidence": "medium",
      "default_visible": false,
      "display_mode": "hidden_dev",
      "privacy_level": "private_inference",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "不作为公开事实表述。"
    },
    {
      "id": "evt_20260312_colorblind",
      "period_key": "2026-Q1",
      "date_start": "2026-03-12",
      "date_end": "2026-03-12",
      "date_label": "03.12 凌晨",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "music_share",
      "title": "分享《色盲》",
      "summary": "贺嘉述小号分享裘德《色盲》。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5275460999053895",
          "source_doc_paragraph": 103
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260316_friend_douyin",
      "period_key": "2026-Q1",
      "date_start": "2026-03-16",
      "date_end": "2026-03-16",
      "date_label": "03.16 晚",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "douyin",
      "title": "“做他的朋友也好”",
      "summary": "贺嘉述发布“做他的朋友也好”，后来与04.11法宣阁同主题抖音形成对应。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "做他的朋友也好 - 抖音",
          "url": "https://v.douyin.com/79k5-ru45As/",
          "source_doc_paragraph": 105
        },
        {
          "label": "做他的朋友也好 - 抖音",
          "url": "https://v.douyin.com/Yz0hSFMq__w/",
          "source_doc_paragraph": 105
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "paired_publication",
          "target": "evt_20260411_first_duo_photo"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260316_small_post",
      "period_key": "2026-Q1",
      "date_start": "2026-03-16",
      "date_end": "2026-03-16",
      "date_label": "03.16 零点",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "小号卡点发布",
      "summary": "贺嘉述小号零点卡点发布；此后小号停更四个月。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5276883186620032",
          "source_doc_paragraph": 104
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260320_21_pingjiang_release",
      "period_key": "2026-Q1",
      "date_start": "2026-03-20",
      "date_end": "2026-03-21",
      "date_label": "03.20–03.21",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "平江路照片公开",
      "summary": "法宣阁发布平江路照片；素材源自更早的苏州阶段。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5278626955134847",
          "source_doc_paragraph": 106
        },
        {
          "label": "#明星不止AB面 - 小红书",
          "url": "http://xhslink.cn/o/3tgPHodtJ6h",
          "source_doc_paragraph": 106
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20251205_pingjiang_interview"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260323_29_outing_photos",
      "period_key": "2026-Q1",
      "date_start": "2026-03-23",
      "date_end": "2026-03-29",
      "date_label": "03.23 / 03.29",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "一起出游照片分别公开",
      "summary": "贺嘉述与法宣阁分别更新一起出去玩的单人照片。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5279767948689940",
          "source_doc_paragraph": 107
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5281855421284647",
          "source_doc_paragraph": 107
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260328_oba",
      "period_key": "2026-Q1",
      "date_start": "2026-03-28",
      "date_end": "2026-03-28",
      "date_label": "03.28",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "#欧巴 / 乌鸦为什么像写字台",
      "summary": "贺嘉述更新抖音与小红书内容。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "#欧巴 - 抖音",
          "url": "https://v.douyin.com/XQJ29BhjkUs/",
          "source_doc_paragraph": 108
        },
        {
          "label": "乌鸦为什么像写字台 - 小红书",
          "url": "http://xhslink.cn/o/3SOnfkXE4P0",
          "source_doc_paragraph": 108
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260402_tamburins",
      "period_key": "2026-04",
      "date_start": "2026-04-02",
      "date_end": "2026-04-02",
      "date_label": "04.02",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "brand_event",
      "title": "Tamburins 一日店长 / 陪同上班",
      "summary": "贺嘉述在北京参加Tamburins一日店长活动；文档记录法宣阁陪同上班。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6474170257/5331187274875408",
          "source_doc_paragraph": 111
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260403_store_post",
      "period_key": "2026-04",
      "date_start": "2026-04-03",
      "date_end": "2026-04-03",
      "date_label": "04.03",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "一日店长图公开",
      "summary": "贺嘉述更新一日店长图及小红书内容。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "calendar_secondary",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5283697958063081",
          "source_doc_paragraph": 113
        },
        {
          "label": "要不要和我一起逛逛 - 小红书",
          "url": "http://xhslink.cn/o/2CSZqpsWKa7",
          "source_doc_paragraph": 113
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260408_to_beijing",
      "period_key": "2026-04",
      "date_start": "2026-04-08",
      "date_end": "2026-04-08",
      "date_label": "04.08",
      "date_precision": "exact",
      "kind": "public_clue",
      "subtype": "city_movement",
      "title": "杭州 → 北京",
      "summary": "文档记录贺嘉述从杭州前往北京。",
      "confidence": "high",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "city_level",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "杭州 → 北京",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260411_first_duo_photo",
      "period_key": "2026-04",
      "date_start": "2026-04-11",
      "date_end": "2026-04-11",
      "date_label": "04.11",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "public_moment",
      "title": "外出 / 第一组双人照",
      "summary": "贺嘉述与朋友外出吃饭、看演唱会；当天公开内容中出现法嘉第一组双人照，法宣阁也发布对应主题抖音。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6231073055/5302849925286872",
          "source_doc_paragraph": 115
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5286541563792815",
          "source_doc_paragraph": 116
        },
        {
          "label": "做他的朋友也好 - 抖音",
          "url": "https://v.douyin.com/Yz0hSFMq__w/",
          "source_doc_paragraph": 117
        },
        {
          "label": "做他的朋友也好 - 抖音",
          "url": "https://v.douyin.com/79k5-ru45As/",
          "source_doc_paragraph": 117
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "paired_publication",
          "target": "evt_20260316_friend_douyin"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260417_bar_subway",
      "period_key": "2026-04",
      "date_start": "2026-04-17",
      "date_end": "2026-04-17",
      "date_label": "04.17",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "public_moment",
      "title": "酒馆 · 南锣鼓巷 · 地铁偶遇",
      "summary": "两人在酒馆、南锣鼓巷、地铁被偶遇；当天还拍摄了一批后来陆续公开的图频。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6352620398/5289490564516019",
          "source_doc_paragraph": 119
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6534867498/5297849681053685",
          "source_doc_paragraph": 119
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5289088586614952",
          "source_doc_paragraph": 120
        },
        {
          "label": "开盖有惊喜 - 小红书",
          "url": "http://xhslink.cn/o/8ufNijf61cm",
          "source_doc_paragraph": 120
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5289474847670987",
          "source_doc_paragraph": 120
        },
        {
          "label": "喝一杯吗🍺 - 抖音",
          "url": "https://v.douyin.com/en1wnue6um0/",
          "source_doc_paragraph": 121
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5290937775557691",
          "source_doc_paragraph": 121
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5301039604438105",
          "source_doc_paragraph": 121
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public",
          "target": "evt_20260418_apr17_release"
        },
        {
          "type": "later_public",
          "target": "evt_20260419_apr17_release"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260418_apr17_release",
      "period_key": "2026-04",
      "date_start": "2026-04-18",
      "date_end": "2026-04-18",
      "date_label": "04.18",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "04.17相关物料公开",
      "summary": "法宣阁更新04.17相关内容，贺嘉述公开内容也出现同款衣服等线索。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5289088586614952",
          "source_doc_paragraph": 123
        },
        {
          "label": "开盖有惊喜 - 小红书",
          "url": "http://xhslink.cn/o/8ufNijf61cm",
          "source_doc_paragraph": 123
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5288857109004864",
          "source_doc_paragraph": 123
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20260417_bar_subway"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260419_apr17_release",
      "period_key": "2026-04",
      "date_start": "2026-04-19",
      "date_end": "2026-04-19",
      "date_label": "04.19",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "“喝一杯吗🍺”等公开",
      "summary": "法宣阁继续公开04.17相关微博/抖音。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5289474847670987",
          "source_doc_paragraph": 124
        },
        {
          "label": "喝一杯吗🍺 - 抖音",
          "url": "https://v.douyin.com/en1wnue6um0/",
          "source_doc_paragraph": 124
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20260417_bar_subway"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260420_mijiao_announce",
      "period_key": "2026-04",
      "date_start": "2026-04-20",
      "date_end": "2026-04-20",
      "date_label": "04.20",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "official_announcement",
      "title": "米椒娱乐官宣艺人",
      "summary": "米椒娱乐官宣艺人；贺嘉述更新公式照相关抖音，法宣阁评论“好看”。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "在记录 - 抖音",
          "url": "https://v.douyin.com/rE2dHgXnxB8/",
          "source_doc_paragraph": 125
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260421_first_comment",
      "period_key": "2026-04",
      "date_start": "2026-04-21",
      "date_end": "2026-04-21",
      "date_label": "04.21",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "comment",
      "title": "评论区第一次互动",
      "summary": "在04.19相关公开内容评论区出现第一次互动。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5289474847670987",
          "source_doc_paragraph": 126
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "interaction_on",
          "target": "evt_20260419_apr17_release"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260423_return_hangzhou",
      "period_key": "2026-04",
      "date_start": "2026-04-23",
      "date_end": "2026-04-23",
      "date_label": "04.23",
      "date_precision": "exact",
      "kind": "public_clue",
      "subtype": "city_movement",
      "title": "北京 → 杭州",
      "summary": "文档记录贺嘉述当晚回学校，票由04.22改签到04.23。",
      "confidence": "high",
      "default_visible": false,
      "display_mode": "archive_detail",
      "privacy_level": "city_level",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "北京 → 杭州",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7018199591/5304007372573081",
          "source_doc_paragraph": 129
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260423_shadow_post",
      "period_key": "2026-04",
      "date_start": "2026-04-23",
      "date_end": "2026-04-23",
      "date_label": "04.23",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "影子照公开",
      "summary": "贺嘉述更新微博，其中包含影子照。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "calendar_secondary",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5290937775557691",
          "source_doc_paragraph": 128
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260424_private_mood",
      "period_key": "2026-04",
      "date_start": "2026-04-24",
      "date_end": "2026-04-24",
      "date_label": "04.24",
      "date_precision": "exact",
      "kind": "context",
      "subtype": "private_context",
      "title": "私域心情记录",
      "summary": "文档记录当日私域心情及音乐分享。",
      "confidence": "medium",
      "default_visible": false,
      "display_mode": "hidden_dev",
      "privacy_level": "private_context",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "不默认放入公开网站。"
    },
    {
      "id": "evt_20260425_both_posts",
      "period_key": "2026-04",
      "date_start": "2026-04-25",
      "date_end": "2026-04-25",
      "date_label": "04.25",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "public_moment",
      "title": "双方更新 / 评论互动",
      "summary": "法宣阁、贺嘉述分别更新，评论区均有互动。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5291658182658462",
          "source_doc_paragraph": 132
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5291667628231137",
          "source_doc_paragraph": 132
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260427_lst_visit",
      "period_key": "2026-04",
      "date_start": "2026-04-27",
      "date_end": "2026-04-27",
      "date_label": "04.27",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "public_moment",
      "title": "LST来杭州 / 评论区互动",
      "summary": "LST来杭州见贺嘉述，法宣阁在评论区互动。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "杭州",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6231073055/5292461763331248",
          "source_doc_paragraph": 133
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260430_first_cocreate",
      "period_key": "2026-04",
      "date_start": "2026-04-30",
      "date_end": "2026-04-30",
      "date_label": "04.30",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "co_creation",
      "title": "第一条双人共创",
      "summary": "两人发布第一条双人共创《在感受》。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "在感受 - 抖音",
          "url": "https://v.douyin.com/DeCKu-n1-r0/",
          "source_doc_paragraph": 134
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260502_duo_live_post",
      "period_key": "2026-05",
      "date_start": "2026-05-02",
      "date_end": "2026-05-02",
      "date_label": "05.02",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "双人live照片公开",
      "summary": "贺嘉述发布微博，其中包含一张双人live。",
      "confidence": "confirmed",
      "default_visible": false,
      "display_mode": "calendar_secondary",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5294170601164627",
          "source_doc_paragraph": 137
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "site_comment_20260503",
      "period_key": "2026-05",
      "date_start": "2026-05-03",
      "date_end": "2026-05-03",
      "date_label": "03",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "comment_spread",
      "title": "评论区小互动",
      "summary": "这页记录的是 05.03 当天发生的评论互动，而不是把母帖里的影像拍摄时间也推定成 05.03。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5294512171913373",
          "source_doc_paragraph": 138
        },
        {
          "label": "这是一条没有文案的视频 - 抖音",
          "url": "https://v.douyin.com/EjlTvfAGST8/",
          "source_doc_paragraph": 139
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/9134952953/5294616564993203",
          "source_doc_paragraph": 139
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0503_comment_interaction/comment-thread.jpg",
          "caption": "05.03 · 评论区公开小互动",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0503_comment_interaction/mother-post.jpg",
          "caption": "05.03 · 法宣阁抖音母帖（互动发生的上下文）",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "把“互动发生时间”作为本页主时间锚点，把母帖本身留作上下文。"
    },
    {
      "id": "evt_20260504_station_pickup",
      "period_key": "2026-05",
      "date_start": "2026-05-04",
      "date_end": "2026-05-04",
      "date_label": "05.04",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "city_movement",
      "title": "回北京 / 接高铁",
      "summary": "05.04，贺嘉述从苏州回北京，法宣阁前往接高铁。该节点只作为城市级私人行程文字记录，不展示偶遇图频。",
      "confidence": "high",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "city_level",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "苏州 → 北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6534867498/5294877898178642",
          "source_doc_paragraph": 142
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6534867498/5295203059500229",
          "source_doc_paragraph": 142
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6534867498/5294894412205129",
          "source_doc_paragraph": 143
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6629778606/5294896413150617",
          "source_doc_paragraph": 143
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/2890536854/5294881066453900",
          "source_doc_paragraph": 143
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": "公开网站只保留城市级动线，不展示车次/精确站点。 前台展示规则：该节点属于私人行程，只保留文字，不设置图片占位。",
      "media_policy": "text_only"
    },
    {
      "id": "evt_20260505_duo_photoshoot",
      "period_key": "2026-05",
      "date_start": "2026-05-05",
      "date_end": "2026-05-05",
      "date_label": "05.05",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "shoot",
      "title": "双人约拍 · 四套造型",
      "summary": "两人进行双人约拍，文档记录当天共拍四套衣服：栏杆、港味、楼梯、出租屋。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "小发夹集合 - 小红书",
          "url": "https://xhslink.cn/o/6aVDyU5n9yY",
          "source_doc_paragraph": 146
        },
        {
          "label": "这两位老师是聊起来就顾不上镜头的 - 抖音",
          "url": "https://v.douyin.com/t5_OeRNJxao/",
          "source_doc_paragraph": 146
        },
        {
          "label": "你能读懂我的心事吗 - 小红书",
          "url": "https://xhslink.cn/o/8SPbVeQBZjL",
          "source_doc_paragraph": 147
        },
        {
          "label": "整理好衣服我们就要拍照喽 - 抖音",
          "url": "https://v.douyin.com/3VHfsIRkuN8/",
          "source_doc_paragraph": 147
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5298209375126654",
          "source_doc_paragraph": 148
        },
        {
          "label": "你就是我的风景 - 抖音",
          "url": "https://v.douyin.com/CBjtLCRezWg/",
          "source_doc_paragraph": 149
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5298501110203552",
          "source_doc_paragraph": 149
        },
        {
          "label": "出租屋- 抖音",
          "url": "https://v.douyin.com/jS4X-mGdrDM/",
          "source_doc_paragraph": 149
        },
        {
          "label": "药味 - 小红书",
          "url": "http://xhslink.cn/o/6NwDZew6Ho9",
          "source_doc_paragraph": 149
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5301039604438105",
          "source_doc_paragraph": 150
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6882357769/5300326484937154",
          "source_doc_paragraph": 150
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5295329897349337",
          "source_doc_paragraph": 151
        },
        {
          "label": "拨开天空的乌云 - 抖音",
          "url": "https://v.douyin.com/FKSU07XdGzw/",
          "source_doc_paragraph": 151
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public",
          "target": "evt_20260513_photoshoot_release"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260506_re12",
      "period_key": "2026-05",
      "date_start": "2026-05-06",
      "date_end": "2026-05-06",
      "date_label": "05.06",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "recording",
      "title": "《双程》EP1&2 RE录制",
      "summary": "录制《双程》EP1&2 RE，并有当日物料与互动记录。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5297109616299472",
          "source_doc_paragraph": 153
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5295566754155683",
          "source_doc_paragraph": 154
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5297153247548426",
          "source_doc_paragraph": 155
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5299539976389711",
          "source_doc_paragraph": 155
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260508_polaroid",
      "period_key": "2026-05",
      "date_start": "2026-05-08",
      "date_end": "2026-05-08",
      "date_label": "05.08",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post",
      "title": "双人拍立得公开",
      "summary": "两人分别更新双人拍立得，并有拍摄花絮。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5296374258074075",
          "source_doc_paragraph": 156
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5296375681254675",
          "source_doc_paragraph": 156
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/4087085723/5296633315328382",
          "source_doc_paragraph": 156
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "site_study_20260510",
      "period_key": "2026-05",
      "date_start": "2026-05-10",
      "date_end": "2026-05-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "赶论文小记",
      "summary": "这类轻量日常不一定是“大事件”，但很适合让五月看起来像真正被过完的一个月。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5296832748193204",
          "source_doc_paragraph": 157
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0510_post/post-study.jpg",
          "caption": "05.10 · 有人还在赶论文",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "这一页以公开发布时间为主，不额外推定更细的现实拍摄时刻。"
    },
    {
      "id": "evt_20260511_theatre",
      "period_key": "2026-05",
      "date_start": "2026-05-11",
      "date_end": "2026-05-11",
      "date_label": "05.11",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "offline_event",
      "title": "一起看话剧",
      "summary": "文档记录两人一起看话剧。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6311062803/5301387362828770",
          "source_doc_paragraph": 158
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260513_photoshoot_release",
      "period_key": "2026-05",
      "date_start": "2026-05-13",
      "date_end": "2026-05-13",
      "date_label": "05.13",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "05.05约拍图频释出",
      "summary": "05.05约拍的出租屋共创与楼梯合照等在05.13释出。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "你就是我的风景 - 抖音",
          "url": "https://v.douyin.com/CBjtLCRezWg/",
          "source_doc_paragraph": 159
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5298209375126654",
          "source_doc_paragraph": 159
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20260505_duo_photoshoot"
        }
      ],
      "notes": ""
    },
    {
      "id": "site_littlehero_20260514",
      "period_key": "2026-05",
      "date_start": "2026-05-14",
      "date_end": "2026-05-14",
      "date_label": "14",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "music_release_spread",
      "title": "小英雄 · 双人宣传",
      "summary": "05.14，法宣阁与贺嘉述分别发布《小英雄》相关微博宣传。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/05/0514_littlehero/post-fxg.jpg",
          "caption": "05.14 · 法宣阁《小英雄》相关微博",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0514_littlehero/post-hjs.jpg",
          "caption": "05.14 · 贺嘉述《小英雄》相关微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "05.14 的“宣传”和“直播”是两个不同节点，共享同一个日期，但不强行合并。"
    },
    {
      "id": "site_live_20260514",
      "period_key": "2026-05",
      "date_start": "2026-05-14",
      "date_end": "2026-05-14",
      "date_label": "14",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "视频号直播",
      "summary": "05.14，两人进行了视频号双人直播。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5298501110203552",
          "source_doc_paragraph": 161
        },
        {
          "label": "我看看 - 抖音",
          "url": "https://v.douyin.com/ii4_az9Xo2Q/",
          "source_doc_paragraph": 162
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5853956059/5298540209242820",
          "source_doc_paragraph": 162
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7931965714/5298605724533995",
          "source_doc_paragraph": 163
        },
        {
          "label": "b23.tv",
          "url": "https://b23.tv/SC1mrCt",
          "source_doc_paragraph": 164
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0514_live/cover.JPG",
          "caption": "05.14 · 视频号直播画面",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "同一天可以有多个节点；这里记录的是直播，而不是歌曲宣传。"
    },
    {
      "id": "evt_20260515_joox",
      "period_key": "2026-05",
      "date_start": "2026-05-15",
      "date_end": "2026-05-15",
      "date_label": "05.15",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "online_interaction",
      "title": "JOOX空降 / 评论区互动",
      "summary": "JOOX空降，同日法宣阁发布抖音并出现评论区互动。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7984575517/5298961323659249",
          "source_doc_paragraph": 166
        },
        {
          "label": "oi 小鬼 - 抖音",
          "url": "https://v.douyin.com/GpGpAtwO10I/",
          "source_doc_paragraph": 167
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6474170257/5298981997383740",
          "source_doc_paragraph": 167
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "site_live_20260517",
      "period_key": "2026-05",
      "date_start": "2026-05-17",
      "date_end": "2026-05-17",
      "date_label": "17",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "双人直播",
      "summary": "05.17 直播已经从占位页换成你补充的真实画面。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/NpummfK",
          "source_doc_paragraph": 169
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0517_live/cover.JPG",
          "caption": "05.17 · 双人直播画面",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "现实发生与公开同步，直接作为当日直播节点处理。"
    },
    {
      "id": "site_tianjin_20260518_19",
      "period_key": "2026-05",
      "date_start": "2026-05-18",
      "date_end": "2026-05-19",
      "date_label": "18–19",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "trip_spread",
      "title": "天津行程 · 摩天轮直播",
      "summary": "现实发生留在 05.18–19，后来公开的天津内容再挂回这一页。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/9068800891/5300029602668064",
          "source_doc_paragraph": 171
        },
        {
          "label": "怎么哄？在线等!急! - 抖音",
          "url": "https://v.douyin.com/hmTbIFRq6wE/",
          "source_doc_paragraph": 171
        },
        {
          "label": "b23.tv",
          "url": "https://b23.tv/IBKrEpR",
          "source_doc_paragraph": 172
        },
        {
          "label": "那一起散步吧 - 抖音",
          "url": "https://v.douyin.com/2LEh3uDVBD0/",
          "source_doc_paragraph": 173
        },
        {
          "label": "走吧 - 抖音",
          "url": "https://v.douyin.com/Skv7TyqRlQk/",
          "source_doc_paragraph": 173
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5300746098835869",
          "source_doc_paragraph": 173
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5307579521829045",
          "source_doc_paragraph": 174
        },
        {
          "label": "夸克网盘分享",
          "url": "https://pan.quark.cn/s/9b23190aacfe?pwd=kjB4",
          "source_doc_paragraph": 176
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6474170257/5300276835649014",
          "source_doc_paragraph": 177
        },
        {
          "label": "看我 - 抖音",
          "url": "https://v.douyin.com/h3p5IGxtiwk/",
          "source_doc_paragraph": 178
        },
        {
          "label": "和你 - 抖音",
          "url": "https://v.douyin.com/ERA8Qv-2F3Q/",
          "source_doc_paragraph": 178
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7365631292/5300404498730464",
          "source_doc_paragraph": 180
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0518_tianjin_ferris_live/cover.JPG",
          "caption": "05.18 · 摩天轮直播",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0518_tianjin_ferris_live/tianjin-vlog.png",
          "caption": "摩天轮画面 · 后续天津碎片中公开",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0518_tianjin_ferris_live/douyin-0522.png",
          "caption": "05.22 · 天津相关抖音公开",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0518_tianjin_ferris_live/weibo-0608.jpg",
          "caption": "06.08 · 「一点天津的小碎片」完整微博",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0518_tianjin_ferris_live/live-blue.JPG",
          "caption": "05.18 · 直播画面",
          "role": "gallery"
        }
      ],
      "relations": [
        {
          "type": "later_public",
          "target": "evt_20260527_flash"
        }
      ],
      "notes": "现实时间主轴与后来公开时间同时保留。"
    },
    {
      "id": "evt_20260519_re34_mutualshoot",
      "period_key": "2026-05",
      "date_start": "2026-05-19",
      "date_end": "2026-05-19",
      "date_label": "05.19",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "recording_shoot",
      "title": "天津→北京 / EP3&4 RE / 520互拍",
      "summary": "从天津回北京，当天录制《双程》EP3&4 RE，并拍摄后来于05.20公开的“看我 / 和你”互拍。",
      "confidence": "high",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "city_level",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "天津 → 北京",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "夸克网盘分享",
          "url": "https://pan.quark.cn/s/9b23190aacfe?pwd=kjB4",
          "source_doc_paragraph": 176
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6474170257/5300276835649014",
          "source_doc_paragraph": 177
        },
        {
          "label": "看我 - 抖音",
          "url": "https://v.douyin.com/h3p5IGxtiwk/",
          "source_doc_paragraph": 178
        },
        {
          "label": "和你 - 抖音",
          "url": "https://v.douyin.com/ERA8Qv-2F3Q/",
          "source_doc_paragraph": 178
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5307579521829045",
          "source_doc_paragraph": 179
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7365631292/5300404498730464",
          "source_doc_paragraph": 180
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public",
          "target": "evt_20260520_mutual_release"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260520_mutual_release",
      "period_key": "2026-05",
      "date_start": "2026-05-20",
      "date_end": "2026-05-20",
      "date_label": "05.20",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "520互拍 / 《喜欢你》共创公开",
      "summary": "05.20下午发布前一晚拍摄的“看我 / 和你”互拍，晚上发布《喜欢你》弹唱共创。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "看我 - 抖音",
          "url": "https://v.douyin.com/h3p5IGxtiwk/",
          "source_doc_paragraph": 182
        },
        {
          "label": "和你 - 抖音",
          "url": "https://v.douyin.com/ERA8Qv-2F3Q/",
          "source_doc_paragraph": 182
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5300746098835869",
          "source_doc_paragraph": 183
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5300747685598566",
          "source_doc_paragraph": 183
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20260519_re34_mutualshoot"
        }
      ],
      "notes": ""
    },
    {
      "id": "site_barwalk_20260520_21",
      "period_key": "2026-05",
      "date_start": "2026-05-20",
      "date_end": "2026-05-21",
      "date_label": "20–21",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "night_walk_spread",
      "title": "小酒馆 · 凌晨散步",
      "summary": "现实里跨夜发生的小事件，公开痕迹主要存在于限时日常。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "看我 - 抖音",
          "url": "https://v.douyin.com/h3p5IGxtiwk/",
          "source_doc_paragraph": 182
        },
        {
          "label": "和你 - 抖音",
          "url": "https://v.douyin.com/ERA8Qv-2F3Q/",
          "source_doc_paragraph": 182
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5300746098835869",
          "source_doc_paragraph": 183
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5300747685598566",
          "source_doc_paragraph": 183
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/9068800891/5300787318358025",
          "source_doc_paragraph": 184
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5537611328/5300793297343502",
          "source_doc_paragraph": 184
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7455038680/5300818091967502",
          "source_doc_paragraph": 185
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5301039604438105",
          "source_doc_paragraph": 186
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0520-21_bar_walk/bar_frame.jpg",
          "caption": "05.20 · 小酒馆夜晚记录",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0520-21_bar_walk/walk_frame.jpg",
          "caption": "05.21 凌晨散步",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "现实事件页先立住，限时公开痕迹作为右页记录。 素材校正：深蓝双人直播截图已移出，该图实际属于05.18直播。"
    },
    {
      "id": "evt_20260522_tianjin_release",
      "period_key": "2026-05",
      "date_start": "2026-05-22",
      "date_end": "2026-05-22",
      "date_label": "05.22",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "天津小视频后续公开",
      "summary": "法宣阁发布05.18天津拍摄的“怎么哄？在线等！急！”小视频。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "怎么哄？在线等!急! - 抖音",
          "url": "https://v.douyin.com/hmTbIFRq6wE/",
          "source_doc_paragraph": 187
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_tianjin_20260518_19"
        }
      ],
      "notes": ""
    },
    {
      "id": "site_live_20260523",
      "period_key": "2026-05",
      "date_start": "2026-05-23",
      "date_end": "2026-05-23",
      "date_label": "23",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "05.23 直播",
      "summary": "你补充的 05.23 直播图已经正式落位。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "夸克网盘分享",
          "url": "https://pan.quark.cn/s/1d4354c921bb?pwd=hTsn",
          "source_doc_paragraph": 189
        },
        {
          "label": "b23.tv",
          "url": "https://b23.tv/fhsyyYj",
          "source_doc_paragraph": 190
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0523_live/cover.JPG",
          "caption": "05.23 · 直播画面",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "直播发生和公开同步，直接落在 05.23。"
    },
    {
      "id": "site_festival_20260524",
      "period_key": "2026-05",
      "date_start": "2026-05-24",
      "date_end": "2026-05-24",
      "date_label": "24",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "stage_spread",
      "title": "大眼音乐节",
      "summary": "音乐节当天发生，也在当天留下了明确公开记录。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/R9cV2rq",
          "source_doc_paragraph": 193
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6474170257/5302129976673151",
          "source_doc_paragraph": 194
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/1118449424/5302135872816816",
          "source_doc_paragraph": 195
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5302156501451384",
          "source_doc_paragraph": 195
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0524_musicfestival/duo-01.JPG",
          "caption": "05.24 · 大眼音乐节双人合照",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0524_musicfestival/duo-02.JPG",
          "caption": "05.24 · 音乐节双人合照",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0524_musicfestival/stage.JPG",
          "caption": "05.24 · 大眼音乐节舞台",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0524_musicfestival/weibo-fxg.jpg",
          "caption": "法宣阁 05.24 音乐节微博",
          "role": "gallery"
        },
        {
          "src": "media/2026/05/0524_musicfestival/weibo-hjs.jpg",
          "caption": "贺嘉述 05.24 音乐节微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "现实发生日与公开日相同，所以归为当日公开型。"
    },
    {
      "id": "site_live_20260525",
      "period_key": "2026-05",
      "date_start": "2026-05-25",
      "date_end": "2026-05-25",
      "date_label": "25",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "05.25 直播",
      "summary": "05.25 直播这次也从空白日期变成了有真实素材的一页。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/R9cV2rq",
          "source_doc_paragraph": 197
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0525_live/cover-01.JPG",
          "caption": "05.25 · 直播画面 01",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0525_live/cover-02.JPG",
          "caption": "05.25 · 直播画面 02",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "作为现实直播节点落在 05.25。"
    },
    {
      "id": "evt_20260526_lst_vlog",
      "period_key": "2026-05",
      "date_start": "2026-05-26",
      "date_end": "2026-05-26",
      "date_label": "05.26",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "04.11外出Vlog后续公开",
      "summary": "LST发布04.11与贺嘉述一起出门的Vlog，法宣阁继续在评论区互动。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/6231073055/5302849925286872",
          "source_doc_paragraph": 199
        }
      ],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "evt_20260411_first_duo_photo"
        }
      ],
      "notes": ""
    },
    {
      "id": "evt_20260527_flash",
      "period_key": "2026-05",
      "date_start": "2026-05-27",
      "date_end": "2026-05-27",
      "date_label": "05.27",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "抖音“闪现一下⚡”",
      "summary": "该抖音素材属于05.18–19天津阶段，05.27后续公开。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "calendar_secondary",
      "privacy_level": "public",
      "participants": [
        "法宣阁"
      ],
      "location_general": "",
      "source_basis": "user_confirmed_20260818",
      "sources": [],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_tianjin_20260518_19"
        }
      ],
      "notes": "当前素材包尚未补入完整截图。"
    },
    {
      "id": "evt_20260528_oba_shoot",
      "period_key": "2026-05",
      "date_start": "2026-05-28",
      "date_end": "2026-05-28",
      "date_label": "05.28",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "shoot_public",
      "title": "“你应该知道#欧巴” / 当日拍摄",
      "summary": "贺嘉述发布“你应该知道#欧巴”，文档注明同天拍摄且法宣阁陪拍。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "你应该知道#欧巴 - 抖音",
          "url": "https://v.douyin.com/U2P53f7okjw/",
          "source_doc_paragraph": 200
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5304008567688402",
          "source_doc_paragraph": 200
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "site_youtube_20260529",
      "period_key": "2026-05",
      "date_start": "2026-05-29",
      "date_end": "2026-05-29",
      "date_label": "29",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "interaction_spread",
      "title": "YouTube 空降互动",
      "summary": "05.29 继续按“公开互动节点”处理，这次已经把你补充的两张真实互动截图接进来了。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5689124696/5304018263872174",
          "source_doc_paragraph": 203
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5304008567688402",
          "source_doc_paragraph": 204
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0529_youtube/interaction-01.JPG",
          "caption": "05.29 · YouTube 空降回复截图 01",
          "role": "hero"
        },
        {
          "src": "media/2026/05/0529_youtube/interaction-02.JPG",
          "caption": "05.29 · YouTube 空降回复截图 02",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "以互动发生时间为主锚点，底层内容的拍摄时间另行处理。"
    },
    {
      "id": "evt_20260530_photoshoot_friends",
      "period_key": "2026-05",
      "date_start": "2026-05-30",
      "date_end": "2026-05-30",
      "date_label": "05.30",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "mixed_day",
      "title": "约拍 + 演员朋友聚会",
      "summary": "日间继续约拍，晚上与《双程》演员朋友聚会并留下公开视频。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述",
        "《双程》演员朋友"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [
        {
          "label": "你和我🍃 - 小红书",
          "url": "https://xhslink.cn/o/7xWYGA3DZmq",
          "source_doc_paragraph": 206
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/8348577978/5307145125890060",
          "source_doc_paragraph": 206
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/7945343231/5319902829481416",
          "source_doc_paragraph": 206
        },
        {
          "label": "weibo.com",
          "url": "https://weibo.com/5256877731/5306190591691946",
          "source_doc_paragraph": 207
        },
        {
          "label": "三个i人夜晚在大马路上起了大跳一下的冲动 - 抖音",
          "url": "https://v.douyin.com/elg6OLDKVoY/",
          "source_doc_paragraph": 207
        }
      ],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "evt_20260531_defense",
      "period_key": "2026-05",
      "date_start": "2026-05-31",
      "date_end": "2026-05-31",
      "date_label": "05.31 中午",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "education",
      "title": "毕业答辩",
      "summary": "贺嘉述中午完成毕业答辩；晚上另有异地双人直播。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "word_20260818",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": ""
    },
    {
      "id": "site_live_20260531",
      "period_key": "2026-05",
      "date_start": "2026-05-31",
      "date_end": "2026-05-31",
      "date_label": "31",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "05.31 直播",
      "summary": "五月最后一天也已经有真实素材可以落位，不再放在待归档栏里。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085 + word_20260818",
      "sources": [
        {
          "label": "b23.tv",
          "url": "https://b23.tv/q7FIBwl",
          "source_doc_paragraph": 210
        }
      ],
      "local_media": [
        {
          "src": "media/2026/05/0531_live/cover.JPG",
          "caption": "05.31 · 直播画面",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "05.31 已有明确直播素材，因此从 archive-only 转为现实直播节点。"
    },
    {
      "id": "site_thesis_ack_20260601",
      "period_key": "2026-06",
      "date_start": "2026-06-01",
      "date_end": "2026-06-01",
      "date_label": "01",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "document_post_spread",
      "title": "毕业论文致谢公开",
      "summary": "06.01，贺嘉述公开毕业论文致谢相关内容，其中出现了对法宣阁的致谢。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0601_thesis_ack/source-weibo.jpg",
          "caption": "06.01 · 贺嘉述毕业论文致谢微博",
          "role": "hero"
        },
        {
          "src": "media/2026/06/0601_thesis_ack/thesis-page.jpg",
          "caption": "毕业论文致谢页面",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "本页以“公开发生”作为主节点；内容生成时间另行保留 unknown。"
    },
    {
      "id": "site_tolerance_live_20260603",
      "period_key": "2026-06",
      "date_start": "2026-06-03",
      "date_end": "2026-06-03",
      "date_label": "03",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "容忍度挑战直播",
      "summary": "六月第一个标准直播节点，用来确认五月已经建立的 live_spread 可以直接跨月复用。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0603_tolerance_live/cover.JPG",
          "caption": "06.03 · 容忍度挑战直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "这一页验证直播模板能够直接跨月份继续使用。"
    },
    {
      "id": "site_meet_live_20260606",
      "period_key": "2026-06",
      "date_start": "2026-06-06",
      "date_end": "2026-06-06",
      "date_label": "06",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "一起唱《遇见》直播",
      "summary": "同样是直播，但内容主题更偏音乐；后续视觉精修时可以与普通直播模板拉开一点差异。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0606_meet_live/cover.JPG",
          "caption": "06.06 · 一起唱《遇见》直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "结构仍复用 live_spread，但视觉层可以在以后做音乐主题变化。"
    },
    {
      "id": "site_vshoot_20260608",
      "period_key": "2026-06",
      "date_start": "2026-06-08",
      "date_end": "2026-06-08",
      "date_label": "08",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "shooting_spread",
      "title": "V中文拍摄 · 草莓蛋糕随播",
      "summary": "06.08 可以确认当天存在 V中文拍摄相关直播，因此这里作为现实拍摄节点落位；真正对应的 V 杂志后续微博公开发生在 7 月，等 July 章节整理后再正式回挂。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0608_vshoot/live.jpg",
          "caption": "06.08 · 拍摄期间直播画面",
          "role": "hero",
          "fit": "cover"
        }
      ],
      "relations": [
        {
          "type": "later_public",
          "target": "site_v_public_20260714"
        }
      ],
      "notes": "06.08 是现实拍摄 / 直播节点；与它真正相关的后续公开在 7 月。与此同时，06.08 这一天还恰好存在五月天津章节的一条 later-public 回声，但那是“同日另一件事”，不是 V中文拍摄的证据。"
    },
    {
      "id": "site_live_20260610",
      "period_key": "2026-06",
      "date_start": "2026-06-10",
      "date_end": "2026-06-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "6月10日双人直播",
      "summary": "06.10 是六月很好的“同日多节点”测试：直播确定当天发生，而拍立得相关公开记录的实际拍摄时间未知。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0610_polaroid_live/cover.jpg",
          "caption": "06.10 · 双人直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "06.10 的直播与同日公开的拍立得内容拆成两个节点。"
    },
    {
      "id": "site_magazine_shoot_20260610",
      "period_key": "2026-06",
      "date_start": "2026-06-10",
      "date_end": "2026-06-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "pitao_shoot",
      "title": "屁桃拍摄 · 具体物料待核",
      "summary": "此前页面把这一天误写成“杂志拍摄”。根据本轮素材核对，06.10 更适合记录为屁桃相关拍摄；具体项目/物料名称后续再补。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0610_pitao_shoot/bts.JPG",
          "caption": "06.10 · 屁桃拍摄花絮",
          "role": "hero",
          "fit": "contain"
        }
      ],
      "relations": [
        {
          "type": "later_public",
          "target": "site_mag_bts_20260715"
        }
      ],
      "notes": "本轮人工校正：06.10 不再标作杂志拍摄，改为屁桃相关拍摄；内部ID暂保留以避免破坏既有关系。"
    },
    {
      "id": "site_polaroid_post_20260610",
      "period_key": "2026-06",
      "date_start": "2026-06-10",
      "date_end": "2026-06-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post_spread",
      "title": "翻转拍立得 · 同日公开记录",
      "summary": "06.10 能确认的是这组拍立得相关内容被公开；实际拍摄日期不据此推定。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0610_polaroid_live/gallery-01.JPG",
          "caption": "06.10 · 拍立得相关公开素材",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "把“公开”与“拍摄”分开，是六月对五月时间模型的第一次真正压力测试。"
    },
    {
      "id": "site_camping_material_20260611",
      "period_key": "2026-06",
      "date_start": "2026-06-11",
      "date_end": "2026-06-11",
      "date_label": "11",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "daily_shoot_spread",
      "title": "露营日记素材拍摄",
      "summary": "07.05 首饰盒“出逃山野露营日记”的素材可由服装与 06.11 晚间直播交叉确认拍摄于这一天，因此单独补一个现实素材拍摄节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0611_camping_material/cover.JPG",
          "caption": "06.11 · 露营日记拍摄素材",
          "role": "hero",
          "fit": "contain"
        }
      ],
      "relations": [
        {
          "type": "later_public",
          "target": "site_camping_diary_20260705"
        }
      ],
      "notes": "服装等稳定线索可以用于确认素材拍摄日；发布日仍单独保留在 07.05。"
    },
    {
      "id": "site_life_love_live_20260611",
      "period_key": "2026-06",
      "date_start": "2026-06-11",
      "date_end": "2026-06-11",
      "date_label": "11",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "“生命自由爱”直播",
      "summary": "06.11 先把直播本身作为 REAL EVENT 落位；直播过程中又发生了“提醒可以发一下”的公开发布行为，因此同一天还会有一个独立 PUBLIC POST 节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0611_life_freedom_love/cover.JPG",
          "caption": "06.11 · “生命自由爱”直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "06.11 的直播与微博 / 小红书发布发生在同一天，但它们是两个不同节点；帖内照片的拍摄日期继续保持 unknown。"
    },
    {
      "id": "site_life_love_posts_20260611",
      "period_key": "2026-06",
      "date_start": "2026-06-11",
      "date_end": "2026-06-11",
      "date_label": "11",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post_spread",
      "title": "直播中被提醒后发布 · 微博 / 小红书",
      "summary": "这两条内容是在 06.11 直播过程中，经贺嘉述提醒“可以发一下”后发布的；因此发布时间与触发上下文很明确，但照片本身何时拍摄仍不能由此反推。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0611_life_freedom_love/source-weibo.jpg",
          "caption": "06.11 · 法宣阁同日公开内容截图",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "把“直播发生”“发布行为发生”“照片何时拍摄”拆成三层时间事实：前两者明确为 06.11，第三层保持 unknown。"
    },
    {
      "id": "site_ip_clue_20260612",
      "period_key": "2026-06",
      "date_start": "2026-06-12",
      "date_end": "2026-06-12",
      "date_label": "12",
      "date_precision": "exact",
      "kind": "public_clue",
      "subtype": "clue_spread",
      "title": "公开 IP 属地变化线索",
      "summary": "六月出现了五月里没有的新类型：公开线索。它可以进入时间档案，但绝不能直接被当作本人真实行程。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0612_ip_clue/evidence-ip.JPG",
          "caption": "06.12 · 平台公开 IP 属地变化记录",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "PUBLIC CLUE 是独立节点类型：可以记录，但不能升级成 REAL EVENT。"
    },
    {
      "id": "site_hangzhou_live_20260614",
      "period_key": "2026-06",
      "date_start": "2026-06-14",
      "date_end": "2026-06-14",
      "date_label": "14",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "凌晨杭州直播",
      "summary": "一个标准的城市背景 + 直播现实事件节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0614_hangzhou_live/cover.JPG",
          "caption": "06.14 · 凌晨杭州直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "地点只保持城市级，不扩展到精确位置。"
    },
    {
      "id": "site_arena_shoot_20260616_17",
      "period_key": "2026-06",
      "date_start": "2026-06-16",
      "date_end": "2026-06-17",
      "date_label": "16–17",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "shooting_spread",
      "title": "Arena HOMME+ 双人物料拍摄",
      "summary": "这页专门测试“现实事件可以被推定为一个日期区间，而不是精确某一天”。当前综合公开采访、行程与后续物料，推定拍摄在 06.16–17。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0616-17_arena/02-cover.jpg",
          "caption": "Arena HOMME+ · 后续公开封面",
          "role": "hero"
        },
        {
          "src": "media/2026/06/0616-17_arena/01-coming-soon.png",
          "caption": "coming soon 公开物料",
          "role": "gallery"
        },
        {
          "src": "media/2026/06/0616-17_arena/03-editorial.jpg",
          "caption": "editorial 公开物料",
          "role": "gallery"
        },
        {
          "src": "media/2026/06/0616-17_arena/source-weibo.jpg",
          "caption": "公开来源截图",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "“推定现实事件”可以进入手账，但必须把日期精度与置信度显示出来。"
    },
    {
      "id": "site_story_back_20260617",
      "period_key": "2026-06",
      "date_start": "2026-06-17",
      "date_end": "2026-06-17",
      "date_label": "17",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "story_spread",
      "title": "凌晨限时日常 · 背影",
      "summary": "06.17 同时可能落在 Arena 推定拍摄区间内，又有一条明确发生的限时日常节点；两者共享日期但保持独立。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0617_story_back/poster.jpg",
          "caption": "06.17 · 凌晨限时日常",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "同一日期可以存在“推定现实拍摄”与“确定的限时公开节点”，两者不强行合并。"
    },
    {
      "id": "site_perfume_live_20260619",
      "period_key": "2026-06",
      "date_start": "2026-06-19",
      "date_end": "2026-06-19",
      "date_label": "19",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "香水主题直播",
      "summary": "六月中段的标准直播节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0619_perfume_live/cover.JPG",
          "caption": "06.19 · 香水主题直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "标准直播节点继续验证模板稳定性。"
    },
    {
      "id": "site_live_20260621",
      "period_key": "2026-06",
      "date_start": "2026-06-21",
      "date_end": "2026-06-21",
      "date_label": "21",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "6月21日直播",
      "summary": "现实直播日期确认，但具体活动名称尚待核，因此标题保持中性。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0621_live/cover.JPG",
          "caption": "06.21 · 双人直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "“事实确认”和“名称确认”是两件事；标题不抢跑。"
    },
    {
      "id": "site_answer_you_20260623",
      "period_key": "2026-06",
      "date_start": "2026-06-23",
      "date_end": "2026-06-23",
      "date_label": "23",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "interaction_spread",
      "title": "《答案是你》公开互动",
      "summary": "和 05.03 评论区互动一样，这一页的主时间锚点是“公开互动发生在 06.23”。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0623_answer_is_you/cover.JPG",
          "caption": "06.23 · 《答案是你》公开互动",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "六月再次验证“公开互动”节点可以独立于内容实际拍摄时间。"
    },
    {
      "id": "site_qingdao_live_20260625",
      "period_key": "2026-06",
      "date_start": "2026-06-25",
      "date_end": "2026-06-25",
      "date_label": "25",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "青岛直播 · 互写信 / 互抹眼泪",
      "summary": "06.25 同一天既有直播，也处在青岛拍摄区间内；V0.8.1 继续用“同日多节点”而不是硬合并。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0625_qingdao_live/cover.JPG",
          "caption": "06.25 · 青岛直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "直播是精确日节点；青岛拍摄则是跨日区间节点，两者并列存在。"
    },
    {
      "id": "site_qingdao_shoot_20260625_27",
      "period_key": "2026-06",
      "date_start": "2026-06-25",
      "date_end": "2026-06-27",
      "date_label": "25–27",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "shooting_spread",
      "title": "青岛拍摄",
      "summary": "这页测试“一个现实事件横跨三天”的呈现：在 25、26、27 日历格里都能看到同一节点，但只对应一个章节。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0625-27_qingdao_shoot/polaroid-01.jpg",
          "caption": "06.25–27 · 青岛拍摄拍立得",
          "role": "hero"
        },
        {
          "src": "media/2026/06/0625-27_qingdao_shoot/polaroid-02.jpg",
          "caption": "青岛拍摄拍立得 02",
          "role": "gallery"
        },
        {
          "src": "media/2026/06/0625-27_qingdao_shoot/polaroid-03.JPG",
          "caption": "青岛拍摄拍立得 03",
          "role": "gallery"
        },
        {
          "src": "media/2026/06/0625-27_qingdao_shoot/polaroid-04.JPG",
          "caption": "青岛拍摄拍立得 04",
          "role": "gallery"
        },
        {
          "src": "media/2026/06/0625-27_qingdao_shoot/fxg-0627-source.jpg",
          "caption": "06.27 · 青岛小短片拍摄周期相关公开",
          "role": "gallery"
        }
      ],
      "relations": [
        {
          "type": "later_public",
          "target": "site_qingdao_short_post_20260703"
        },
        {
          "type": "later_public_inferred",
          "target": "site_hjs_share_20260708"
        },
        {
          "type": "later_public",
          "target": "site_qingdao_teaser_20260717"
        }
      ],
      "notes": "跨日事件在月历上覆盖多个日期，并允许 7 月多条后来公开内容反向挂回同一青岛拍摄区间。"
    },
    {
      "id": "site_qingdao_walk_20260626",
      "period_key": "2026-06",
      "date_start": "2026-06-26",
      "date_end": "2026-06-26",
      "date_label": "26",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "night_walk_spread",
      "title": "限时日常 · 情人坝散步",
      "summary": "06.26 一方面仍处在青岛拍摄区间，另一方面有一个明确的限时日常散步节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/06/0626_qingdao_walk/cover.jpg",
          "caption": "06.26 · 青岛情人坝散步",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "“大区间事件”内部仍然可以有更具体的小节点；层级不冲突。"
    },
    {
      "id": "site_home_live_20260702",
      "period_key": "2026-07",
      "date_start": "2026-07-02",
      "date_end": "2026-07-02",
      "date_label": "02",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "双人居家直播",
      "summary": "七月第一个已确认的直播现实节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0702_home_live/cover.JPG",
          "caption": "07.02 · 双人居家直播",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0702_home_live/gallery-01.JPG",
          "caption": "07.02 · 直播画面 02",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "标准直播节点。"
    },
    {
      "id": "site_july_schedule_20260702",
      "period_key": "2026-07",
      "date_start": "2026-07-02",
      "date_end": "2026-07-02",
      "date_label": "02",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post_spread",
      "title": "首饰盒 · 七月启程 / 行程更新",
      "summary": "月初公开行程 / 月份更新节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0702_schedule/overview.JPG",
          "caption": "2026年7月 · 行程总览",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0702_schedule/reference.JPG",
          "caption": "2026年7月 · 行程对应图片总览",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "公开发布节点与同日直播并列。 已接入朋友整理的七月行程总览与对应图片，仅作为月份公开记录/索引，不替代单事件证据。"
    },
    {
      "id": "site_qingdao_short_post_20260703",
      "period_key": "2026-07",
      "date_start": "2026-07-03",
      "date_end": "2026-07-03",
      "date_label": "03",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "public_post_spread",
      "title": "IG 共创 / 双人短内容（原抖音下架）",
      "summary": "公开发生在 07.03，但素材本身来自 06.25–27 青岛拍摄期；原抖音内容后来被下架。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_qingdao_shoot_20260625_27"
        }
      ],
      "notes": "later-public 节点不创造新的 07.03 拍摄事件。"
    },
    {
      "id": "site_gaga_part1_20260704",
      "period_key": "2026-07",
      "date_start": "2026-07-04",
      "date_end": "2026-07-04",
      "date_label": "04",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "interview_spread",
      "title": "GagaOOLala 快问快答 Part 1",
      "summary": "Instagram 端确认 07.04 发布；采访录制属于《双程》拍摄期，具体录制日期暂不由发布日反推。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0704_gaga/ig-source.png",
          "caption": "07.04 · GagaOOLala 快问快答 Instagram 原帖",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "采访公开节点与实际录制时间分开。"
    },
    {
      "id": "site_camping_diary_20260705",
      "period_key": "2026-07",
      "date_start": "2026-07-05",
      "date_end": "2026-07-05",
      "date_label": "05",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public_spread",
      "title": "首饰盒 · 出逃山野露营日记",
      "summary": "07.05 是公开日；素材实际拍摄于 06.11，可由同日晚间直播服装交叉确认。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0705_camping/cover.JPG",
          "caption": "07.05 · 「出逃山野露营日记」公开截图",
          "role": "hero"
        }
      ],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_camping_material_20260611"
        }
      ],
      "notes": "发布与拍摄分开，跨月回挂。"
    },
    {
      "id": "site_fxg_daily_20260705",
      "period_key": "2026-07",
      "date_start": "2026-07-05",
      "date_end": "2026-07-05",
      "date_label": "05",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "法宣阁 · 最近🍃",
      "summary": "07.05 能确认的是公开时间；图片实际拍摄日暂不额外推断。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0705_daily/fxg-weibo.jpg",
          "caption": "07.05 · 法宣阁「最近🍃」微博",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "PUBLIC POST 只锁公开日。"
    },
    {
      "id": "site_hjs_daily_20260705",
      "period_key": "2026-07",
      "date_start": "2026-07-05",
      "date_end": "2026-07-05",
      "date_label": "05",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "贺嘉述 · 述说日常🍃～",
      "summary": "与法宣阁同日更新，但仍不自动把照片拍摄时间写成 07.05。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0705_daily/hjs-weibo.jpg",
          "caption": "07.05 · 贺嘉述日常微博",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "同日多节点继续保持独立。"
    },
    {
      "id": "site_concert_announce_20260706",
      "period_key": "2026-07",
      "date_start": "2026-07-06",
      "date_end": "2026-07-06",
      "date_label": "06",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "announcement_spread",
      "title": "「宿命回响·双程」曼谷演唱会官宣",
      "summary": "日历漏项补入：为 07.25 的现实演唱会建立提前公开节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0706_concert_announce/hjs-weibo.jpg",
          "caption": "07.06 · 曼谷演唱会官宣微博",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "官宣是公开节点，活动本体仍在 07.25。"
    },
    {
      "id": "site_funnyelves_announce_20260708",
      "period_key": "2026-07",
      "date_start": "2026-07-08",
      "date_end": "2026-07-08",
      "date_label": "08",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "brand_spread",
      "title": "FunnyElves 方里 · 品牌挚友联合官宣",
      "summary": "方里商务节点以公开官宣时间落位。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "商务官宣按发布日记录。"
    },
    {
      "id": "site_hjs_share_20260708",
      "period_key": "2026-07",
      "date_start": "2026-07-08",
      "date_end": "2026-07-08",
      "date_label": "08",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "贺嘉述 · 分享图片🍃",
      "summary": "公开日在 07.08；根据现有线索推断图片可能拍于 06.25–27 青岛，当前保留 medium 置信度。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0708_hjs_share/cover.jpg",
          "caption": "07.08 · 贺嘉述「分享图片🍃」微博",
          "role": "hero"
        }
      ],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_qingdao_shoot_20260625_27"
        }
      ],
      "notes": "推断关系必须把置信度留在页面上。"
    },
    {
      "id": "site_fe_bts_20260709",
      "period_key": "2026-07",
      "date_start": "2026-07-09",
      "date_end": "2026-07-09",
      "date_label": "09",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "bts_spread",
      "title": "首饰盒 · 快门间隙~现场小碎片分享",
      "summary": "判断为方里拍摄花絮；07.09 是公开日，具体拍摄日期暂不确认。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "公开节点成立，拍摄时间保持 unknown。"
    },
    {
      "id": "site_jicao_sign_20260709",
      "period_key": "2026-07",
      "date_start": "2026-07-09",
      "date_end": "2026-07-09",
      "date_label": "09",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "bts_spread",
      "title": "集草文化 · 签名花絮",
      "summary": "另一账号在 07.09 22:47 发布签名花絮；签名 / 拍摄实际日期仍 unknown。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "不同账号的同日花絮分开保留。"
    },
    {
      "id": "site_meeting_announce_20260710",
      "period_key": "2026-07",
      "date_start": "2026-07-10",
      "date_end": "2026-07-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "announcement_spread",
      "title": "「宣你述说」曼谷双人见面会官宣",
      "summary": "日历漏项补入；后续 07.20 还有一次场地 / 时间变更公告。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "活动官宣与后续 event_update 都指向 07.26 同一个现实活动。"
    },
    {
      "id": "site_snack_live_20260710",
      "period_key": "2026-07",
      "date_start": "2026-07-10",
      "date_end": "2026-07-10",
      "date_label": "10",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "双人直播 · 零食局",
      "summary": "标准的同日直播现实节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0710_snack_live/cover.JPG",
          "caption": "07.10 · 双人直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "直播本体与同日见面会官宣并列。"
    },
    {
      "id": "site_gaga_part2_20260711",
      "period_key": "2026-07",
      "date_start": "2026-07-11",
      "date_end": "2026-07-11",
      "date_label": "11",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "interview_spread",
      "title": "GagaOOLala 快问快答 Part 2",
      "summary": "采访系列第二部分继续作为公开节点；录制时间仍属于《双程》拍摄期，不由 07.11 反推。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "发布日与录制日分开。"
    },
    {
      "id": "site_shu_post_20260712",
      "period_key": "2026-07",
      "date_start": "2026-07-12",
      "date_end": "2026-07-12",
      "date_label": "12",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "shu_coming · 好久不见🍃",
      "summary": "这条微博被人工确认是当日实时发生 / 发布，所以可以直接把 07.12 当作节点时间。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "当现实与公开能确认在同一天时，可直接放在同一章节。"
    },
    {
      "id": "site_live_20260714",
      "period_key": "2026-07",
      "date_start": "2026-07-14",
      "date_end": "2026-07-14",
      "date_label": "14",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "07.14 双人直播",
      "summary": "V 正式公开当天同时还有一场直播，因此 07.14 使用同日多节点而不是合并。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0714_live/cover.JPG",
          "caption": "07.14 · 双人直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "07.14 的杂志公开与直播是两个独立节点。"
    },
    {
      "id": "site_v_public_20260714",
      "period_key": "2026-07",
      "date_start": "2026-07-14",
      "date_end": "2026-07-14",
      "date_label": "14",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "magazine_release_spread",
      "title": "V Generation《情愫四序》正式公开 / 开售 / 采访",
      "summary": "不单列面向粉丝的数据准备 / 预热；跨月关系从 06.08 拍摄直接连接到 07.14 正式公开。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0714_v_public/fxg-repost.jpg",
          "caption": "07.14 · V Generation 相关公开 · 法宣阁转发",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0714_v_public/hjs-repost.jpg",
          "caption": "07.14 · 贺嘉述转发",
          "role": "gallery"
        }
      ],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_vshoot_20260608"
        }
      ],
      "notes": "只保留真正正式公开，不把宣发准备预热做成独立主节点。"
    },
    {
      "id": "site_mag_bts_20260715",
      "period_key": "2026-07",
      "date_start": "2026-07-15",
      "date_end": "2026-07-15",
      "date_label": "15",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "bts_spread",
      "title": "首饰盒 · 屁桃拍摄花絮",
      "summary": "花絮公开于 07.15，素材实际拍摄于 06.10；本轮根据人工核对改为屁桃相关拍摄花絮，不再标作杂志拍摄。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0715_mag_bts/box-post.jpg",
          "caption": "07.15 · 首饰盒杂志拍摄花絮原帖",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0715_mag_bts/video-frame.jpg",
          "caption": "07.15 · 花絮视频画面",
          "role": "gallery"
        },
        {
          "src": "media/2026/07/0715_mag_bts/hjs-post.jpg",
          "caption": "07.15 · 贺嘉述同日微博",
          "role": "gallery"
        }
      ],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_magazine_shoot_20260610"
        }
      ],
      "notes": "本轮人工校正：此前“杂志拍摄花絮”改为“屁桃拍摄花絮”；06.10 → 07.15 的 later-public 关系保留。"
    },
    {
      "id": "site_qingdao_teaser_20260717",
      "period_key": "2026-07",
      "date_start": "2026-07-17",
      "date_end": "2026-07-17",
      "date_label": "17",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "shortfilm_spread",
      "title": "青岛小短片预告 / 两人同主题微博",
      "summary": "两人的短片预告属于青岛小短片，实际拍摄在 06.25–27 青岛拍摄期。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0717_qingdao_teaser/fxg-weibo.jpg",
          "caption": "07.17 · 法宣阁青岛小短片预告",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0717_qingdao_teaser/hjs-weibo.jpg",
          "caption": "07.17 · 贺嘉述青岛短片预告",
          "role": "gallery"
        }
      ],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_qingdao_shoot_20260625_27"
        }
      ],
      "notes": "青岛拍摄形成一个跨月素材源，7 月可以有多条 later-public。"
    },
    {
      "id": "site_workday_post_20260717",
      "period_key": "2026-07",
      "date_start": "2026-07-17",
      "date_end": "2026-07-17",
      "date_label": "17",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "首饰盒 · 是一个普通的工作日",
      "summary": "公开日在 07.17，但实际拍摄日无法确认，所以不和青岛短片预告自动绑定。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "同日出现的两条内容也不意味着它们来自同一拍摄日。"
    },
    {
      "id": "site_birthday_mall_20260718",
      "period_key": "2026-07",
      "date_start": "2026-07-18",
      "date_end": "2026-07-18",
      "date_label": "18",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "event_spread",
      "title": "法宣阁生日粉丝应援 · 商场现场",
      "summary": "粉丝为法宣阁布置生日应援商场；两人先给粉丝购买约 50 杯奶茶，下午到现场。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "把粉丝应援现场作为现实节点，交通只做 P1 背景。"
    },
    {
      "id": "site_car_live_20260718",
      "period_key": "2026-07",
      "date_start": "2026-07-18",
      "date_end": "2026-07-18",
      "date_label": "18",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "车上短随播",
      "summary": "从应援现场结束后，在前往机场的路程中短随播十几分钟，网络较卡。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "直播节点与交通动线分开；不记录具体机场 / 航班。"
    },
    {
      "id": "site_dance_post_20260719",
      "period_key": "2026-07",
      "date_start": "2026-07-19",
      "date_end": "2026-07-19",
      "date_label": "19",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "dance_spread",
      "title": "双人共创舞发布",
      "summary": "从妆造判断这段共创舞大约拍于 07.18；07.19 是公开日。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "推定拍摄日与公开日分开显示。"
    },
    {
      "id": "site_fe_live_20260719",
      "period_key": "2026-07",
      "date_start": "2026-07-19",
      "date_end": "2026-07-19",
      "date_label": "19",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "brand_live_spread",
      "title": "FunnyElves 方里直播",
      "summary": "标准商务直播现实节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0719_funnyelves_live/cover.JPG",
          "caption": "07.19 · FunnyElves 方里直播",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0719_funnyelves_live/fxg-weibo.jpg",
          "caption": "07.19 · 法宣阁方里直播相关微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "与同日多条公开内容并列。"
    },
    {
      "id": "site_rehearsal_post_20260719",
      "period_key": "2026-07",
      "date_start": "2026-07-19",
      "date_end": "2026-07-19",
      "date_label": "19",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "bts_spread",
      "title": "首饰盒 · 排练视频",
      "summary": "视频在 07.19 公开，但实际排练 / 拍摄时间无法确认。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "公开日期明确，实际排练时间继续 unknown。"
    },
    {
      "id": "site_tie_posts_20260719",
      "period_key": "2026-07",
      "date_start": "2026-07-19",
      "date_end": "2026-07-19",
      "date_label": "19",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "paired_post_spread",
      "title": "两人「贴贴」微博",
      "summary": "这组微博判断为当天拍摄、当天发布，因此可以把拍摄与公开都放在 07.19。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0719_tie_posts/hjs-weibo.jpg",
          "caption": "07.19 · 贺嘉述同日微博",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "能确认同日拍摄时，就不需要保留 unknown。"
    },
    {
      "id": "site_meeting_update_20260720",
      "period_key": "2026-07",
      "date_start": "2026-07-20",
      "date_end": "2026-07-20",
      "date_label": "20",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "announcement_spread",
      "title": "「宣你述说」见面会时间 / 场地变更公告",
      "summary": "这不是新的活动，而是 07.26 见面会的 event_update。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "event_update 不重复创建现实活动。"
    },
    {
      "id": "site_blackwhite_posts_20260721",
      "period_key": "2026-07",
      "date_start": "2026-07-21",
      "date_end": "2026-07-21",
      "date_label": "21",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "paired_post_spread",
      "title": "「小黑和小白 / 小白和小黑」",
      "summary": "两条微博在 07.21 公开，但实际拍摄可判断为 07.19。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0721_blackwhite/fxg-weibo.jpg",
          "caption": "07.21 · 法宣阁微博",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0721_blackwhite/hjs-weibo.jpg",
          "caption": "07.21 · 贺嘉述微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "same-month later-public 也按相同规则处理。"
    },
    {
      "id": "site_gift_post_20260721",
      "period_key": "2026-07",
      "date_start": "2026-07-21",
      "date_end": "2026-07-21",
      "date_label": "21",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "首饰盒 · 专属于小发夹的礼物",
      "summary": "公开日可锁，先作为独立 PUBLIC POST。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "没有必要强行给它补未知拍摄日。"
    },
    {
      "id": "site_failed_live_20260722",
      "period_key": "2026-07",
      "date_start": "2026-07-22",
      "date_end": "2026-07-22",
      "date_label": "22",
      "date_precision": "exact",
      "kind": "public_interaction",
      "subtype": "interaction_spread",
      "title": "随播失败版 · 网络太卡",
      "summary": "首饰盒 01:56 明确说明本想聊天，但因网络太卡无法继续。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0722_failed_live/cover.JPG",
          "caption": "07.22 · 网络卡顿的随播画面",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "未成功完成的随播仍然是一段真实发生的公开互动。"
    },
    {
      "id": "site_birthday_live_20260723_24",
      "period_key": "2026-07",
      "date_start": "2026-07-23",
      "date_end": "2026-07-24",
      "date_label": "23–24",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "cross_midnight_spread",
      "title": "法宣阁生日双人直播 / DR 礼物",
      "summary": "生日直播跨过午夜，DR 礼物发生在 07.24 凌晨，因此不把所有事情压回 07.23。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0723_birthday_live/cover.JPG",
          "caption": "07.23 · 生日双人直播",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0723_birthday_live/dr.JPG",
          "caption": "07.24 凌晨 · DR 礼物",
          "role": "gallery"
        },
        {
          "src": "media/2026/07/0723_birthday_live/fxg-birthday.jpg",
          "caption": "07.23 · 法宣阁生日微博",
          "role": "gallery"
        },
        {
          "src": "media/2026/07/0723_birthday_live/hjs-birthday.jpg",
          "caption": "07.23 · 贺嘉述庆生微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "跨午夜事件可以占据两个日期，但仍保持一个章节。"
    },
    {
      "id": "site_stage_countdown_20260724",
      "period_key": "2026-07",
      "date_start": "2026-07-24",
      "date_end": "2026-07-24",
      "date_label": "24",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "announcement_spread",
      "title": "首饰盒 · 舞台倒计时",
      "summary": "为 07.25 曼谷演唱会形成前夜公开节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "前置宣传仍然和活动本体分开。"
    },
    {
      "id": "site_concert_20260725",
      "period_key": "2026-07",
      "date_start": "2026-07-25",
      "date_end": "2026-07-25",
      "date_label": "25",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "stage_spread",
      "title": "「宿命回响·双程」曼谷演唱会",
      "summary": "七月的大型现实舞台节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0725_concert/hjs-stage-post.jpg",
          "caption": "07.25 · 曼谷演唱会舞台相关公开",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "官宣在 07.06，现实活动本体在 07.25。"
    },
    {
      "id": "site_concert_posts_20260725",
      "period_key": "2026-07",
      "date_start": "2026-07-25",
      "date_end": "2026-07-25",
      "date_label": "25",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "paired_post_spread",
      "title": "两人出发图 / 首饰盒「红玫瑰和黑西装」",
      "summary": "活动当天还有两人出发图与首饰盒“红玫瑰和黑西装”等公开内容。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0725_concert/fxg-departure.jpg",
          "caption": "07.25 · 法宣阁演唱会出发图",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0725_concert/hjs-stage-post.jpg",
          "caption": "07.25 · 贺嘉述演唱会相关微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "现实活动与当日公开内容保持多节点。"
    },
    {
      "id": "site_meeting_20260726",
      "period_key": "2026-07",
      "date_start": "2026-07-26",
      "date_end": "2026-07-26",
      "date_label": "26",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "event_spread",
      "title": "「宣你述说」曼谷双人见面会",
      "summary": "现实活动在 07.26 举行；07.20 的时间 / 场地变更公告作为 event_update 指向这里。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0726_meeting/fxg-weibo.jpg",
          "caption": "07.26 · 法宣阁曼谷见面会相关微博",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0726_meeting/hjs-weibo.jpg",
          "caption": "07.26 · 贺嘉述曼谷见面会相关微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "07.20 只更新信息，不创建第二个活动。"
    },
    {
      "id": "site_jewelry_20260727",
      "period_key": "2026-07",
      "date_start": "2026-07-27",
      "date_end": "2026-07-27",
      "date_label": "27",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "首饰盒 · 慢慢遇见所有美好",
      "summary": "07.27 公开日可锁；虽然同日处在外出物料拍摄区间，但暂时不强行认定两者同源。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "同日存在现实拍摄也不能自动认定所有发布都来自它。"
    },
    {
      "id": "site_material_shoot_20260727_28",
      "period_key": "2026-07",
      "date_start": "2026-07-27",
      "date_end": "2026-07-28",
      "date_label": "27–28",
      "date_precision": "range",
      "kind": "real_event",
      "subtype": "shooting_spread",
      "title": "外出物料拍摄",
      "summary": "现实拍摄确认发生在 07.27–28；对应视频直到 08.09 才公开，因此这里新增 July → August 的 future relation。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [
        {
          "type": "later_public",
          "target": "future_20260809_material_release"
        }
      ],
      "notes": "第三个月开始向第四个月产生真实跨月关系，说明底层模型已经能够继续生长。"
    },
    {
      "id": "site_fresh_cover_20260729",
      "period_key": "2026-07",
      "date_start": "2026-07-29",
      "date_end": "2026-07-29",
      "date_label": "29",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "magazine_release_spread",
      "title": "贺嘉述 Fresh 封面公开",
      "summary": "杂志封面公开节点先按发布日落位；具体拍摄日后续若有证据再补。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "杂志公开日不自动等于拍摄日。"
    },
    {
      "id": "site_worknote_20260729",
      "period_key": "2026-07",
      "date_start": "2026-07-29",
      "date_end": "2026-07-29",
      "date_label": "29",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "首饰盒 · 滴～一则工作小记",
      "summary": "公开日确认，先作为独立工作记录节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [],
      "relations": [],
      "notes": "先锁发布，不强行补拍摄时间。"
    },
    {
      "id": "site_cute_post_20260730",
      "period_key": "2026-07",
      "date_start": "2026-07-30",
      "date_end": "2026-07-30",
      "date_label": "30",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "daily_post_spread",
      "title": "贺嘉述 · 我觉得此博主太可爱—法宣阁留",
      "summary": "同日直播之外的独立公开发布节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0730_cute_post/comment.jpg",
          "caption": "07.30 · 法宣阁在贺嘉述微博留言",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "同日直播与微博分开。"
    },
    {
      "id": "site_home_live_20260730",
      "period_key": "2026-07",
      "date_start": "2026-07-30",
      "date_end": "2026-07-30",
      "date_label": "30",
      "date_precision": "exact",
      "kind": "real_event",
      "subtype": "live_spread",
      "title": "双人居家直播 · 约 2h",
      "summary": "七月底的长时双人直播现实节点。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0730_home_live/cover.JPG",
          "caption": "07.30 · 双人居家直播",
          "role": "hero"
        }
      ],
      "relations": [],
      "notes": "标准长时直播节点。"
    },
    {
      "id": "site_shortfilm_release_20260731",
      "period_key": "2026-07",
      "date_start": "2026-07-31",
      "date_end": "2026-07-31",
      "date_label": "31",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "shortfilm_spread",
      "title": "双人短片上线 / 两人同步微博",
      "summary": "两人 17:20 同步内容可以锁定为 07.31 的公开节点；短片实际拍摄日期暂时不据此推断。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "main",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "site_v085",
      "sources": [],
      "local_media": [
        {
          "src": "media/2026/07/0731_shortfilm/fxg-weibo.jpg",
          "caption": "07.31 · 法宣阁青岛短片共创微博",
          "role": "hero"
        },
        {
          "src": "media/2026/07/0731_shortfilm/hjs-weibo.jpg",
          "caption": "07.31 · 贺嘉述青岛短片共创微博",
          "role": "gallery"
        }
      ],
      "relations": [],
      "notes": "先锁公开日期；若以后确认拍摄来源，再建立 later-public 关系。"
    },
    {
      "id": "future_20260809_material_release",
      "period_key": "2026-08",
      "date_start": "2026-08-09",
      "date_end": "2026-08-09",
      "date_label": "08.09",
      "date_precision": "exact",
      "kind": "public_post",
      "subtype": "later_public",
      "title": "07.27–28外出物料对应视频公开",
      "summary": "07.27–28拍摄的外出物料在08.09公开。",
      "confidence": "confirmed",
      "default_visible": true,
      "display_mode": "calendar_secondary",
      "privacy_level": "public",
      "participants": [
        "法宣阁",
        "贺嘉述"
      ],
      "location_general": "",
      "source_basis": "user_confirmed_20260818",
      "sources": [],
      "local_media": [],
      "relations": [
        {
          "type": "later_public_of",
          "target": "site_material_shoot_20260727_28"
        }
      ],
      "notes": "August正式页面尚未搭建；先作为跨月关系终点落入底层表。"
    }
  ],
  "relations": [
    {
      "from": "evt_202511_wrap_gift",
      "to": "evt_20251219_gift_photo",
      "type": "later_public"
    },
    {
      "from": "evt_20251219_gift_photo",
      "to": "evt_202511_wrap_gift",
      "type": "evidence_for"
    },
    {
      "from": "evt_20260316_friend_douyin",
      "to": "evt_20260411_first_duo_photo",
      "type": "paired_publication"
    },
    {
      "from": "evt_20260320_21_pingjiang_release",
      "to": "evt_20251205_pingjiang_interview",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260411_first_duo_photo",
      "to": "evt_20260316_friend_douyin",
      "type": "paired_publication"
    },
    {
      "from": "evt_20260417_bar_subway",
      "to": "evt_20260418_apr17_release",
      "type": "later_public"
    },
    {
      "from": "evt_20260417_bar_subway",
      "to": "evt_20260419_apr17_release",
      "type": "later_public"
    },
    {
      "from": "evt_20260418_apr17_release",
      "to": "evt_20260417_bar_subway",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260419_apr17_release",
      "to": "evt_20260417_bar_subway",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260421_first_comment",
      "to": "evt_20260419_apr17_release",
      "type": "interaction_on"
    },
    {
      "from": "evt_20260505_duo_photoshoot",
      "to": "evt_20260513_photoshoot_release",
      "type": "later_public"
    },
    {
      "from": "evt_20260513_photoshoot_release",
      "to": "evt_20260505_duo_photoshoot",
      "type": "later_public_of"
    },
    {
      "from": "site_tianjin_20260518_19",
      "to": "evt_20260527_flash",
      "type": "later_public"
    },
    {
      "from": "evt_20260519_re34_mutualshoot",
      "to": "evt_20260520_mutual_release",
      "type": "later_public"
    },
    {
      "from": "evt_20260520_mutual_release",
      "to": "evt_20260519_re34_mutualshoot",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260522_tianjin_release",
      "to": "site_tianjin_20260518_19",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260526_lst_vlog",
      "to": "evt_20260411_first_duo_photo",
      "type": "later_public_of"
    },
    {
      "from": "evt_20260527_flash",
      "to": "site_tianjin_20260518_19",
      "type": "later_public_of"
    },
    {
      "from": "site_vshoot_20260608",
      "to": "site_v_public_20260714",
      "type": "later_public"
    },
    {
      "from": "site_magazine_shoot_20260610",
      "to": "site_mag_bts_20260715",
      "type": "later_public"
    },
    {
      "from": "site_camping_material_20260611",
      "to": "site_camping_diary_20260705",
      "type": "later_public"
    },
    {
      "from": "site_qingdao_shoot_20260625_27",
      "to": "site_qingdao_short_post_20260703",
      "type": "later_public"
    },
    {
      "from": "site_qingdao_shoot_20260625_27",
      "to": "site_hjs_share_20260708",
      "type": "later_public_inferred"
    },
    {
      "from": "site_qingdao_shoot_20260625_27",
      "to": "site_qingdao_teaser_20260717",
      "type": "later_public"
    },
    {
      "from": "site_qingdao_short_post_20260703",
      "to": "site_qingdao_shoot_20260625_27",
      "type": "later_public_of"
    },
    {
      "from": "site_camping_diary_20260705",
      "to": "site_camping_material_20260611",
      "type": "later_public_of"
    },
    {
      "from": "site_hjs_share_20260708",
      "to": "site_qingdao_shoot_20260625_27",
      "type": "later_public_of"
    },
    {
      "from": "site_v_public_20260714",
      "to": "site_vshoot_20260608",
      "type": "later_public_of"
    },
    {
      "from": "site_mag_bts_20260715",
      "to": "site_magazine_shoot_20260610",
      "type": "later_public_of"
    },
    {
      "from": "site_qingdao_teaser_20260717",
      "to": "site_qingdao_shoot_20260625_27",
      "type": "later_public_of"
    },
    {
      "from": "site_material_shoot_20260727_28",
      "to": "future_20260809_material_release",
      "type": "later_public"
    },
    {
      "from": "future_20260809_material_release",
      "to": "site_material_shoot_20260727_28",
      "type": "later_public_of"
    }
  ],
  "source_documents": [
    {
      "name": "法嘉时间线26.8.18.docx",
      "coverage": "2025-10 至 2026-05",
      "role": "historical backbone"
    },
    {
      "name": "V0.8.5 current site data",
      "coverage": "2026-05 至 2026-07",
      "role": "current site nodes"
    }
  ],
  "version": "0.9.3"
};
