const modeConfig = {
  later_public: {cardLabel:'后续公开记录',small:'LATER PUBLIC · 后续公开',heading:'后来，这件事又被看见了。',summary:'现实里先发生，之后才在社交平台再次被看见。',chip:'现实日 ≠ 公开日'},
  same_day_public: {cardLabel:'当日公开记录',small:'SAME-DAY PUBLIC · 当日公开',heading:'这件事在当天就公开了。',summary:'现实发生或互动发生与公开可见基本同步。',chip:'节点日 ≈ 公开日'},
  ephemeral_story: {cardLabel:'限时日常记录',small:'EPHEMERAL STORY · 限时日常',heading:'这件事主要留在限时日常里。',summary:'不是没有记录，而是公开痕迹主要存在于短时内容。',chip:'限时 / 非长期挂载'},
  archive_only: {cardLabel:'待归档公开碎片',small:'PUBLIC ARCHIVE · 待归档',heading:'这部分先不要急着贴回现实日期。',summary:'只知道何时公开，不知道应该贴回哪一天时，先收在档案袋。',chip:'暂不回贴'}
};

const nodeTypeConfig = {
  real_event:{chip:'REAL EVENT',zh:'现实事件',short:'现实事件',letter:'R'},
  public_post:{chip:'PUBLIC POST',zh:'公开发布',short:'公开发布',letter:'P'},
  public_interaction:{chip:'PUBLIC INTERACTION',zh:'公开互动',short:'公开互动',letter:'I'},
  public_clue:{chip:'PUBLIC CLUE',zh:'公开线索',short:'公开线索',letter:'C'}
};

const mayData = {
  month:{year:2026,month:5,title:'May 2026'},
  events:[
    {
      key:'comment_20260503',node_type:'public_interaction',chapter:'PART 01',layout_type:'comment_spread',evidence_mode:'same_day_public',title:'评论区小互动',short_title:'评论区互动',tagline:'公开互动节点',priority:'P0',range:[3],year:2026,
      hero:{type:'image',src:'media/2026/05/0503_comment_interaction/comment-thread.jpg',caption:'05.03 · 评论区公开小互动'},
      left_intro:'这页记录的是 05.03 当天发生的评论互动，而不是把母帖里的影像拍摄时间也推定成 05.03。',
      time_anchors:[
        {label:'互动发生时间',value:'05.03',note:'最稳定的时间锚点。',tone:'pink'},
        {label:'母帖公开上下文',value:'05.03 可见',note:'母帖作为互动发生的上下文。',tone:'yellow'},
        {label:'母帖影像拍摄时间',value:'unknown',note:'不能由评论日期反推。',tone:'blue'}
      ],
      fact_memos:[{type:'pink',title:'这页真正记录：',text:'05.03 的公开评论互动。'},{type:'blue',title:'不做的推断：',text:'不把母帖照片 / 视频自动视为 05.03 拍摄。'}],
      real_timeline:[{date:'05.03',title:'评论区往来',text:'公开互动在这一天发生。'},{date:'未来',title:'若找到母帖真实拍摄日',text:'母帖还可以另外挂回对应的现实事件页。',soft:true,tag:'LINK'}],
      left_note:'interaction time first ✦',
      context_box:{small:'CONTEXT · 互动上下文',title:'互动时间和母帖拍摄时间分开记。',text:'同一条公开内容可以在 05.03 承担“互动上下文”，未来也可以在更早的真实日期承担“后续公开证据”。',items:[{label:'记录对象',value:'评论区互动本身'},{label:'母帖用途',value:'互动上下文'},{label:'母帖拍摄时间',value:'unknown / 待确认'},{label:'未来链接',value:'找到真实日期后再建立关系'}],note:'一条帖子不必只能属于一个日期；关键是每次挂载时说明它扮演什么角色。'},
      public_evidence:[{published_at:'2026-05-03',platform:'COMMENT THREAD',title:'评论区对话截图',relation:'interaction proof',text:'这张截图证明互动在 05.03 发生且公开可见。',url:'',art:'postcard'}],
      reading_logic:'把“互动发生时间”作为本页主时间锚点，把母帖本身留作上下文。'
    },
    {
      key:'study_20260510',node_type:'public_post',chapter:'PART 02',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'赶论文小记',short_title:'赶论文小记',tagline:'日常公开发布',priority:'P0',range:[10],year:2026,
      hero:{type:'image',src:'media/2026/05/0510_post/post-study.jpg',caption:'05.10 · 有人还在赶论文'},
      left_intro:'这类轻量日常不一定是“大事件”，但很适合让五月看起来像真正被过完的一个月。',
      time_anchors:[{label:'公开发布时间',value:'05.10',note:'当前最稳定的时间锚点。',tone:'pink'},{label:'画面拍摄时间',value:'未进一步确认',note:'不额外做精确推断。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'公开发布。'},{type:'yellow',title:'页面气质：',text:'保留轻一点的生活碎片感。'}],
      real_timeline:[{date:'05.10',title:'日常发博',text:'公开动态形成这一天的一页小记录。'}],
      left_note:'daily fragment ☁',
      public_evidence:[{published_at:'2026-05-10',platform:'WEIBO',title:'日常动态截图',relation:'same-day public',text:'公开发布时间明确。',url:'',art:'video'}],
      reading_logic:'这一页以公开发布时间为主，不额外推定更细的现实拍摄时刻。'
    },
    {
      key:'littlehero_20260514',node_type:'public_post',chapter:'PART 03A',layout_type:'music_release_spread',evidence_mode:'same_day_public',title:'小英雄 · 双人宣传',short_title:'小英雄宣传',tagline:'同日节点 ① · 公开发布',priority:'P0',range:[14],year:2026,
      hero:{type:'image',src:'media/2026/05/0514_littlehero/selfie-main.jpg',caption:'05.14 · 小英雄相关合照'},
      gallery:[{src:'media/2026/05/0514_littlehero/selfie-strip.jpg',caption:'连拍条带'},{src:'media/2026/05/0514_littlehero/post-fxg.jpg',caption:'法宣阁 05.14 公开帖'},{src:'media/2026/05/0514_littlehero/post-hjs.jpg',caption:'贺嘉述 05.14 公开帖'}],
      left_intro:'05.14 不只有一件事：这一页专门记录《小英雄》相关公开宣传。',
      time_anchors:[{label:'公开发布时间',value:'05.14',note:'双人同日公开。',tone:'pink'},{label:'同日另一个节点',value:'视频号直播',note:'在月历同一天单独保留另一页。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST / 双人宣传。'},{type:'blue',title:'同日多节点：',text:'不把宣传和直播硬揉成一个事件，而是允许 05.14 同时存在两页。'}],
      real_timeline:[{date:'05.14',title:'歌曲相关宣传',text:'公开文案、音乐链接与双人素材集中出现。'},{date:'05.14',title:'同日还有直播',text:'通过“同日多节点”机制保留为另一章节。',soft:true,tag:'2 NODES'}],
      left_note:'same day, different node ♫',
      public_evidence:[{published_at:'2026-05-14',platform:'WEIBO · 法宣阁',title:'歌曲相关公开文案',relation:'same-day public',text:'当天公开。',url:'',art:'video'},{published_at:'2026-05-14',platform:'WEIBO · 贺嘉述',title:'歌曲相关公开文案',relation:'same-day public',text:'当天公开。',url:'',art:'video'}],
      reading_logic:'05.14 的“宣传”和“直播”是两个不同节点，共享同一个日期，但不强行合并。'
    },
    {
      key:'live_20260514',node_type:'real_event',chapter:'PART 03B',layout_type:'live_spread',evidence_mode:'same_day_public',title:'视频号直播',short_title:'视频号直播',tagline:'同日节点 ② · 直播',priority:'P0',range:[14],year:2026,
      hero:{type:'image',src:'media/2026/05/0514_live/cover.JPG',caption:'05.14 · 视频号直播画面'},
      left_intro:'这一页单独记录 05.14 的直播本身，和当天《小英雄》宣传并列，而不是互相覆盖。',
      time_anchors:[{label:'现实 / 直播时间',value:'05.14',note:'直播节点当天发生。',tone:'pink'},{label:'公开方式',value:'同步公开',note:'直播本身即公开。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'REAL EVENT / 直播。'},{type:'blue',title:'同日关系：',text:'与《小英雄》宣传共享 05.14，但属于不同节点类型。'}],
      real_timeline:[{date:'05.14',title:'视频号直播',text:'直播画面作为这页的现实事件主视觉。'}],
      left_note:'live on the same day ✦',
      public_evidence:[{published_at:'2026-05-14',platform:'VIDEO ACCOUNT LIVE',title:'直播同步公开',relation:'same-day public',text:'直播本身同时承担现实事件与公开可见记录。',url:'',art:'video'}],
      reading_logic:'同一天可以有多个节点；这里记录的是直播，而不是歌曲宣传。'
    },
    {
      key:'live_20260517',node_type:'real_event',chapter:'PART 04',layout_type:'live_spread',evidence_mode:'same_day_public',title:'双人直播',short_title:'双人直播',tagline:'直播记录页',priority:'P0',range:[17],year:2026,
      hero:{type:'image',src:'media/2026/05/0517_live/cover.JPG',caption:'05.17 · 双人直播画面'},
      left_intro:'05.17 直播已经从占位页换成你补充的真实画面。',
      time_anchors:[{label:'现实发生时间',value:'05.17',note:'直播现场日期。',tone:'pink'},{label:'公开方式',value:'当日公开',note:'直播同步公开。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'这版更新：',text:'真实直播图已接入。'}],
      real_timeline:[{date:'05.17',title:'双人直播',text:'作为独立现实事件页落位。'}],
      left_note:'live page filled ✦',
      public_evidence:[{published_at:'2026-05-17',platform:'LIVE',title:'直播当日公开',relation:'same-day public',text:'直播发生与公开同步。',url:'',art:'video'}],
      reading_logic:'现实发生与公开同步，直接作为当日直播节点处理。'
    },
    {
      key:'tianjin_20260518_19',node_type:'real_event',chapter:'PART 05',layout_type:'trip_spread',evidence_mode:'later_public',title:'天津行程 · 摩天轮直播',short_title:'天津行程',tagline:'现实事件 + 后续公开',priority:'P0',range:[18,19],year:2026,
      hero:{type:'image',src:'media/2026/05/0518_tianjin_ferris_live/cover.JPG',caption:'05.18 · 摩天轮直播'},
      gallery:[{src:'media/2026/05/0518_tianjin_ferris_live/douyin-0522.png',caption:'05.22 抖音后来公开'}],
      left_intro:'现实发生留在 05.18–19，后来公开的天津内容再挂回这一页。',
      time_anchors:[{label:'现实发生时间',value:'05.18–05.19',note:'天津主事件与城市级动线。',tone:'pink'},{label:'后续公开',value:'05.22 / 06.08',note:'作为 later-public 证据。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'天津出行 + 摩天轮直播。'},{type:'yellow',title:'规则：',text:'后续发帖不替代现实发生日期。'}],
      real_timeline:[{date:'05.18',title:'天津 / 摩天轮直播',text:'主事件。'},{date:'05.19',title:'天津 → 北京',text:'城市级 P1 背景动线。',soft:true,tag:'P1'}],
      left_note:'real time first ↗',
      public_evidence:[{published_at:'2026-05-22',platform:'DOUYIN',title:'怎么哄？在线等!急!',relation:'possible same trip',text:'疑似同次天津出行素材，不把 05.22 当成拍摄日。',url:'',art:'video'},{published_at:'2026-06-08',platform:'WEIBO',title:'一点天津的小碎片',relation:'retrospective',text:'作为后续公开材料挂回天津页。',url:'',art:'postcard'}],
      reading_logic:'现实时间主轴与后来公开时间同时保留。'
    },
    {
      key:'barwalk_20260520_21',node_type:'real_event',chapter:'PART 06',layout_type:'night_walk_spread',evidence_mode:'ephemeral_story',title:'小酒馆 · 凌晨散步',short_title:'小酒馆 / 散步',tagline:'跨夜现实事件 + 限时日常',priority:'P0',range:[20,21],year:2026,
      hero:{type:'image',src:'media/2026/05/0520-21_bar_walk/bar_frame.jpg',caption:'05.20 · 小酒馆夜晚记录'},
      gallery:[{src:'media/2026/05/0520-21_bar_walk/walk_frame.jpg',caption:'05.21 凌晨散步'},{src:'media/2026/05/0520-21_bar_walk/blue-story.jpg',caption:'同晚限时氛围截图'}],
      left_intro:'现实里跨夜发生的小事件，公开痕迹主要存在于限时日常。',
      time_anchors:[{label:'现实发生时间',value:'05.20–05.21',note:'跨零点但视作同一篇夜间记录。',tone:'pink'},{label:'公开方式',value:'限时日常',note:'story-like 内容。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'小酒馆 → 凌晨散步。'},{type:'blue',title:'素材：',text:'已接入酒馆、散步与蓝调限时图。'}],
      real_timeline:[{date:'05.20',title:'小酒馆',text:'夜晚场景。'},{date:'05.21',title:'凌晨散步',text:'延续上一晚。'}],
      left_note:'same night, one spread ✦',
      public_evidence:[{published_at:'05.20–21',platform:'STORY',title:'限时日常记录',relation:'ephemeral',text:'不要求必须挂靠长期主页内容。',url:'',art:'video'}],
      reading_logic:'现实事件页先立住，限时公开痕迹作为右页记录。'
    },
    {
      key:'live_20260523',node_type:'real_event',chapter:'PART 07',layout_type:'live_spread',evidence_mode:'same_day_public',title:'05.23 直播',short_title:'直播',tagline:'直播记录页',priority:'P0',range:[23],year:2026,
      hero:{type:'image',src:'media/2026/05/0523_live/cover.JPG',caption:'05.23 · 直播画面'},
      left_intro:'你补充的 05.23 直播图已经正式落位。',
      time_anchors:[{label:'直播发生时间',value:'05.23',note:'日期明确。',tone:'pink'},{label:'公开方式',value:'当日公开',note:'直播同步可见。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'REAL EVENT / 直播。'}],
      real_timeline:[{date:'05.23',title:'直播',text:'以真实直播画面作为页面主视觉。'}],
      left_note:'another live day ✦',
      public_evidence:[{published_at:'2026-05-23',platform:'LIVE',title:'直播同步公开',relation:'same-day public',text:'直播节点当天可见。',url:'',art:'video'}],
      reading_logic:'直播发生和公开同步，直接落在 05.23。'
    },
    {
      key:'festival_20260524',node_type:'real_event',chapter:'PART 08',layout_type:'stage_spread',evidence_mode:'same_day_public',title:'大眼音乐节',short_title:'大眼音乐节',tagline:'舞台活动 + 当日公开',priority:'P0',range:[24],year:2026,
      hero:{type:'image',src:'media/2026/05/0524_musicfestival/couch.jpg',caption:'05.24 · 活动相关双人画面'},
      gallery:[{src:'media/2026/05/0524_musicfestival/weibo-fxg.jpg',caption:'法宣阁 05.24 音乐节微博'},{src:'media/2026/05/0524_musicfestival/weibo-hjs.jpg',caption:'贺嘉述 05.24 音乐节微博'}],
      left_intro:'音乐节当天发生，也在当天留下了明确公开记录。',
      time_anchors:[{label:'现实发生时间',value:'05.24',note:'音乐节当天。',tone:'pink'},{label:'公开时间',value:'05.24',note:'双人同日公开微博。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'大眼音乐节。'},{type:'yellow',title:'公开方式：',text:'当日同步公开。'}],
      real_timeline:[{date:'05.24',title:'音乐节',text:'舞台活动与当天公开帖共同构成完整页面。'}],
      left_note:'festival energy ♫',
      public_evidence:[{published_at:'2026-05-24',platform:'WEIBO · 法宣阁',title:'音乐节当天公开微博',relation:'same-day public',text:'当天公开。',url:'',art:'video'},{published_at:'2026-05-24',platform:'WEIBO · 贺嘉述',title:'音乐节当天公开微博',relation:'same-day public',text:'当天公开。',url:'',art:'video'}],
      reading_logic:'现实发生日与公开日相同，所以归为当日公开型。'
    },
    {
      key:'live_20260525',node_type:'real_event',chapter:'PART 09',layout_type:'live_spread',evidence_mode:'same_day_public',title:'05.25 直播',short_title:'直播',tagline:'直播记录页 + 双图素材',priority:'P0',range:[25],year:2026,
      hero:{type:'image',src:'media/2026/05/0525_live/cover-01.JPG',caption:'05.25 · 直播画面 01'},
      gallery:[{src:'media/2026/05/0525_live/cover-02.JPG',caption:'05.25 · 直播画面 02'}],
      left_intro:'05.25 直播这次也从空白日期变成了有真实素材的一页。',
      time_anchors:[{label:'直播发生时间',value:'05.25',note:'日期明确。',tone:'pink'},{label:'公开方式',value:'当日公开',note:'直播同步可见。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'这版更新：',text:'接入两张 05.25 直播画面。'}],
      real_timeline:[{date:'05.25',title:'直播',text:'两张画面共同作为该日视觉记录。'}],
      left_note:'two frames, one night ✦',
      public_evidence:[{published_at:'2026-05-25',platform:'LIVE',title:'直播同步公开',relation:'same-day public',text:'直播发生与公开同步。',url:'',art:'video'}],
      reading_logic:'作为现实直播节点落在 05.25。'
    },
    {
      key:'youtube_20260529',node_type:'public_interaction',chapter:'PART 10',layout_type:'interaction_spread',evidence_mode:'same_day_public',title:'YouTube 空降互动',short_title:'YouTube 空降',tagline:'公开互动 + 真实截图',priority:'P0',range:[29],year:2026,
      hero:{type:'image',src:'media/2026/05/0529_youtube/interaction-01.JPG',caption:'05.29 · YouTube 空降回复截图 01'},
      gallery:[{src:'media/2026/05/0529_youtube/interaction-02.JPG',caption:'05.29 · YouTube 空降回复截图 02'}],
      left_intro:'05.29 继续按“公开互动节点”处理，这次已经把你补充的两张真实互动截图接进来了。',
      time_anchors:[{label:'互动发生时间',value:'05.29',note:'空降回复发生在这一天。',tone:'pink'},{label:'节点类型',value:'PUBLIC INTERACTION',note:'不是线下现实活动。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'记录对象：',text:'YouTube 空降互动本身。'},{type:'blue',title:'这版更新：',text:'真实回复截图已接入。'}],
      real_timeline:[{date:'05.29',title:'空降回复',text:'公开互动节点。'}],
      left_note:'interaction filled ↗',
      context_box:{small:'CONTEXT · 互动节点',title:'这里记录的是“什么时候互动”，而不是依托内容何时拍摄。',text:'和 05.03 评论区互动一样，先把互动本身的时间锚点立稳。',items:[{label:'节点类型',value:'公开互动'},{label:'发生日期',value:'05.29'},{label:'素材',value:'两张回复截图'},{label:'底层内容拍摄时间',value:'如无证据则不推定'}],note:'这套规则可以复用到评论、回复、空降、直播弹幕互动等数字事件。'},
      public_evidence:[{published_at:'2026-05-29',platform:'YOUTUBE',title:'空降互动截图',relation:'interaction proof',text:'截图证明互动在该日公开发生。',url:'',art:'postcard'}],
      reading_logic:'以互动发生时间为主锚点，底层内容的拍摄时间另行处理。'
    },
    {
      key:'live_20260531',node_type:'real_event',chapter:'PART 11',layout_type:'live_spread',evidence_mode:'same_day_public',title:'05.31 直播',short_title:'直播',tagline:'五月收尾直播页',priority:'P0',range:[31],year:2026,
      hero:{type:'image',src:'media/2026/05/0531_live/cover.JPG',caption:'05.31 · 直播画面'},
      left_intro:'五月最后一天也已经有真实素材可以落位，不再放在待归档栏里。',
      time_anchors:[{label:'直播发生时间',value:'05.31',note:'日期明确。',tone:'pink'},{label:'公开方式',value:'当日公开',note:'直播同步可见。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'五月收尾：',text:'05.31 直播作为现实节点正式进入月历。'}],
      real_timeline:[{date:'05.31',title:'直播',text:'五月最后一个已落位的现实节点。'}],
      left_note:'end of May ♡',
      public_evidence:[{published_at:'2026-05-31',platform:'LIVE',title:'直播同步公开',relation:'same-day public',text:'直播节点当天公开。',url:'',art:'video'}],
      reading_logic:'05.31 已有明确直播素材，因此从 archive-only 转为现实直播节点。'
    }
  ],
  public_archive:[
    {published_at:'2026-05-13',platform:'WEIBO',title:'公开内容待归档',text:'知道发布时间，但现实拍摄日期还没有足够证据，因此暂时只放在公开档案。',url:''},
    {published_at:'2026-05-27',platform:'DOUYIN',title:'闪现一下⚡',text:'发布时间已知，但当前还没有足够证据决定应该贴回哪条现实事件。',url:''}
  ]
};
mayData.meta = {
  key:'2026-05', name:'May', num:'05', year:2026,
  lead:'五月已经作为第一套样板跑通；现在它会和六月一起组成真正的月份章节簿。',
  rule:'五月继续保留现有结构，同时允许六月的 later-public 证据反向链接回来。',
  corner:'May notes ✎',
  rightTitle:'五月是第一章样板：现实事件、公开互动、同日多节点都已经跑起来。',
  introTitle:'May 2026 · 第一套完整样板',
  introText:'五月继续保留现有内容，不为了适配六月而重做。V0.8.1 的重点，是验证同一套模型能否自然延伸到第二个月。',
  chapterTitle:'五月现有章节保持不变'
};

const juneData = {
  month:{year:2026,month:6,title:'June 2026'},
  meta:{
    key:'2026-06', name:'June', num:'06', year:2026,
    lead:'六月先搭大体框架，不追求每页一次性填满；用第二个月测试我们的时间模型。',
    rule:'六月重点检验：同日多节点、推定日期、限时日常、公开互动、跨月 later-public。',
    corner:'June chapter ✦',
    rightTitle:'第二个月不是复制五月，而是拿更多真实情况来压力测试这套系统。',
    introTitle:'June 2026 · 架构压力测试',
    introText:'六月现有数据里同时存在直播、公开发布、公开线索、推定拍摄区间、限时日常和同日多节点。先把这些节点放对位置，再逐步补照片与细节。',
    chapterTitle:'六月先搭出一套可继续生长的章节骨架'
  },
  events:[
    {
      key:'thesis_ack_20260601',node_type:'public_post',chapter:'JUN 01',layout_type:'document_post_spread',evidence_mode:'same_day_public',title:'毕业论文致谢公开',short_title:'论文致谢公开',tagline:'公开发布 · 写作时间早于公开时间',priority:'P0',range:[1],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0601_thesis_ack/cover.jpg',caption:'06.01 · 毕业论文致谢公开记录'},
      left_intro:'这一页特别适合验证“公开时间明确，但内容生成时间更早且未知”的情况：06.01 能确认的是公开时间，不把论文致谢实际写作时间也写成 06.01。',
      time_anchors:[{label:'公开时间',value:'06.01 22:39',note:'当前可精确确认。',tone:'pink'},{label:'致谢写作时间',value:'unknown / 早于公开',note:'不由微博公开日反推具体写作日。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST / 公开发布。'},{type:'blue',title:'时间处理：',text:'公开日期进入 06.01；文档实际写作时间保持 unknown。'}],
      real_timeline:[{date:'06.01',title:'公开毕业论文致谢页面',text:'公开内容中出现对法宣阁的致谢。'},{date:'更早',title:'实际写作时间',text:'确定早于公开，但具体日期暂不确认。',soft:true,tag:'UNKNOWN'}],
      left_note:'publish time ≠ writing time ✎',
      context_box:{small:'TIME MODEL · 时间模型',title:'“什么时候公开”与“什么时候写下”分开。',text:'这和 05.03 评论互动的逻辑是一致的：时间档案记录明确发生的节点，但不把附着内容的未知生成时间强行塞进同一天。',items:[{label:'06.01 记录什么',value:'致谢页面被公开'},{label:'不记录成 06.01 的',value:'论文致谢实际写作日期'}],note:'以后如果获得更明确的论文完成 / 致谢写作时间，可以再建立额外关联。'},
      public_evidence:[{published_at:'2026-06-01',platform:'WEIBO',title:'毕业论文致谢公开截图',relation:'same-day public',text:'06.01 的公开时间可以确认。',art:'postcard'}],
      reading_logic:'本页以“公开发生”作为主节点；内容生成时间另行保留 unknown。'
    },
    {
      key:'tolerance_live_20260603',node_type:'real_event',chapter:'JUN 02',layout_type:'live_spread',evidence_mode:'same_day_public',title:'容忍度挑战直播',short_title:'容忍度挑战',tagline:'双人直播 · 当日公开',priority:'P0',range:[3],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0603_tolerance_live/cover.JPG',caption:'06.03 · 容忍度挑战直播'},
      left_intro:'六月第一个标准直播节点，用来确认五月已经建立的 live_spread 可以直接跨月复用。',
      time_anchors:[{label:'现实发生时间',value:'06.03',note:'直播日期确认。',tone:'pink'},{label:'公开方式',value:'直播同步公开',note:'现实事件与公开可见几乎同步。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'两人进行“容忍度挑战”直播。'}],
      real_timeline:[{date:'06.03',title:'容忍度挑战直播',text:'标准双人直播事件。'}],
      left_note:'June live begins ✦',
      public_evidence:[{published_at:'2026-06-03',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'直播本身同时承担现实事件与公开记录。',art:'video'}],
      reading_logic:'这一页验证直播模板能够直接跨月份继续使用。'
    },
    {
      key:'meet_live_20260606',node_type:'real_event',chapter:'JUN 03',layout_type:'live_spread',evidence_mode:'same_day_public',title:'一起唱《遇见》直播',short_title:'《遇见》直播',tagline:'音乐直播 · 当日公开',priority:'P0',range:[6],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0606_meet_live/cover.JPG',caption:'06.06 · 一起唱《遇见》直播'},
      left_intro:'同样是直播，但内容主题更偏音乐；后续视觉精修时可以与普通直播模板拉开一点差异。',
      time_anchors:[{label:'现实发生时间',value:'06.06',note:'直播日期确认。',tone:'pink'}],
      fact_memos:[{type:'pink',title:'核心记录：',text:'直播中一起唱《遇见》。'},{type:'yellow',title:'未来版式：',text:'可增加歌词纸条、音符、音乐播放器式小卡。'}],
      real_timeline:[{date:'06.06',title:'一起唱《遇见》',text:'音乐主题直播。'}],
      left_note:'music live ♫',
      public_evidence:[{published_at:'2026-06-06',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'当日同步公开。',art:'video'}],
      reading_logic:'结构仍复用 live_spread，但视觉层可以在以后做音乐主题变化。'
    },
    {
      key:'vshoot_20260608',node_type:'real_event',chapter:'JUN 04',layout_type:'shooting_spread',evidence_mode:'later_public',title:'V中文拍摄 · 草莓蛋糕随播',short_title:'V中文拍摄',tagline:'现实拍摄节点 · 后续公开在 7 月',priority:'P0',range:[8],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'placeholder',stamp:'V',caption:'06.08 · V中文拍摄 / 草莓蛋糕随播'},
      left_intro:'06.08 可以确认当天存在 V中文拍摄相关直播，因此这里作为现实拍摄节点落位；真正对应的 V 杂志后续微博公开发生在 7 月，等 July 章节整理后再正式回挂。',
      time_anchors:[{label:'现实拍摄 / 直播日期',value:'06.08',note:'当天直播与拍摄关系可确认。',tone:'pink'},{label:'后续公开月份',value:'July 2026',note:'V 杂志微博后续公开；具体 7 月节点待整理。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'06.08 记录 V中文拍摄相关直播与拍摄。'},{type:'blue',title:'跨月处理：',text:'后续 V 杂志微博属于 later-public；现在先指向 July 待整理，不拿 06.08 当公开日。'}],
      real_timeline:[{date:'06.08',title:'V中文拍摄 / 随播',text:'现实拍摄节点确认。'},{date:'July',title:'V 杂志微博后续公开',text:'待 7 月框架整理后建立正式 later-public 回链。',soft:true,tag:'LATER PUBLIC'}],
      left_note:'shoot now, publish later ✎',
      future_relation:{month_key:'2026-07',month_label:'July 2026',title:'07.14 V Generation《情愫四序》正式公开',status:'已接通',text:'06.08 的现实拍摄节点现在已经与 07.14 的正式公开 / 开售 / 采访建立 later-public 跨月关系。'},
      public_evidence:[{published_at:'2026-07-14',platform:'V中文 / WEIBO',title:'V Generation《情愫四序》正式公开',relation:'later public',text:'07.14 正式公开 / 开售 / 采访，回挂 06.08 V中文拍摄。',art:'postcard'}],
      reading_logic:'06.08 是现实拍摄 / 直播节点；与它真正相关的后续公开在 7 月。与此同时，06.08 这一天还恰好存在五月天津章节的一条 later-public 回声，但那是“同日另一件事”，不是 V中文拍摄的证据。'
    },
    {
      key:'live_20260610',node_type:'real_event',chapter:'JUN 05A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'6月10日双人直播',short_title:'06.10 直播',tagline:'同日节点 ① · 现实直播',priority:'P0',range:[10],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0610_polaroid_live/cover.jpg',caption:'06.10 · 双人直播'},
      left_intro:'06.10 是六月很好的“同日多节点”测试：直播确定当天发生，而拍立得相关公开记录的实际拍摄时间未知。',
      time_anchors:[{label:'直播发生时间',value:'06.10',note:'现实事件确认。',tone:'pink'},{label:'同日另一个节点',value:'拍立得公开记录',note:'单独作为 PUBLIC POST，不自动等同当天拍摄。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'REAL EVENT / 直播。'},{type:'blue',title:'同日拆分：',text:'拍立得公开记录另开一页，避免把实际拍摄时间误写成 06.10。'}],
      real_timeline:[{date:'06.10',title:'双人直播',text:'现实发生时间可确认。'}],
      left_note:'same date, two clocks ✦',
      public_evidence:[{published_at:'2026-06-10',platform:'LIVE',title:'直播同步公开',relation:'same-day public',text:'直播同步可见。',art:'video'}],
      reading_logic:'06.10 的直播与同日公开的拍立得内容拆成两个节点。'
    },
    {
      key:'polaroid_post_20260610',node_type:'public_post',chapter:'JUN 05B',layout_type:'public_post_spread',evidence_mode:'same_day_public',title:'翻转拍立得 · 同日公开记录',short_title:'拍立得公开',tagline:'同日节点 ② · 拍摄时间未知',priority:'P0',range:[10],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0610_polaroid_live/gallery-01.JPG',caption:'06.10 · 拍立得相关公开素材'},
      left_intro:'06.10 能确认的是这组拍立得相关内容被公开；实际拍摄日期不据此推定。',
      time_anchors:[{label:'公开时间',value:'06.10',note:'公开记录明确。',tone:'pink'},{label:'实际拍摄时间',value:'unknown',note:'已从直播现实时间线中拆出。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST / 公开记录。'},{type:'blue',title:'不做的推断：',text:'不把拍立得实际拍摄日期自动写成 06.10。'}],
      real_timeline:[{date:'06.10',title:'公开拍立得相关内容',text:'明确的是被看见的日期。'},{date:'unknown',title:'拍立得实际拍摄',text:'等待更充分证据。',soft:true,tag:'UNKNOWN'}],
      left_note:'publish ≠ shoot ✎',
      context_box:{small:'SAME DAY · 同日关系',title:'和 06.10 直播同一天公开，但不是同一个时间事实。',text:'这正是 V0.8.1 希望验证的情况：一个日期可以同时存在 REAL EVENT 与 PUBLIC POST，而两者的“现实发生时间”规则并不相同。',items:[{label:'直播',value:'06.10 现实发生'},{label:'拍立得',value:'06.10 公开；拍摄时间 unknown'}]},
      public_evidence:[{published_at:'2026-06-10',platform:'WEIBO / PUBLIC',title:'拍立得相关公开记录',relation:'same-day public',text:'只证明公开时间。',art:'postcard'}],
      reading_logic:'把“公开”与“拍摄”分开，是六月对五月时间模型的第一次真正压力测试。'
    },
    {
      key:'magazine_shoot_20260610',node_type:'real_event',chapter:'JUN 05C',layout_type:'shooting_spread',evidence_mode:'later_public',title:'杂志拍摄 · 具体刊物暂不强绑',short_title:'06.10 杂志拍摄',tagline:'同日节点 ③ · later-public 在 07.15',priority:'P0',range:[10],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'placeholder',stamp:'MAG',caption:'06.10 · 杂志拍摄（骨架先落位）'},
      left_intro:'根据最新人工核对，07.15 首饰盒发布的杂志拍摄花絮实际拍于 06.10。这里新增一个独立 REAL EVENT，但暂时不强行绑定具体刊物名称。',
      time_anchors:[{label:'现实拍摄时间',value:'06.10',note:'人工核对确认。',tone:'pink'},{label:'后续公开',value:'07.15',note:'首饰盒“滴~花絮加载完毕”。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'新增关系：',text:'06.10 杂志拍摄 → 07.15 首饰盒杂志花絮。'},{type:'blue',title:'谨慎处理：',text:'具体刊物身份暂不强绑，避免和 06.08 V中文拍摄混淆。'}],
      real_timeline:[{date:'06.10',title:'杂志拍摄',text:'现实拍摄节点确认。'},{date:'07.15',title:'首饰盒花絮公开',text:'作为 later-public 回挂。',soft:true,tag:'LATER PUBLIC'}],
      left_note:'shoot first, bts later ✎',
      public_evidence:[{published_at:'2026-07-15',platform:'小发夹的首饰盒',title:'滴~花絮加载完毕',relation:'later public',text:'07.15 公开的杂志花絮，素材拍摄于 06.10。',art:'postcard'}],
      reading_logic:'新增一个 06.10 的现实拍摄节点，使 07.15 的花絮可以有正确的现实来源。'
    },
    {
      key:'life_love_live_20260611',node_type:'real_event',chapter:'JUN 06A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'“生命自由爱”直播',short_title:'生命自由爱直播',tagline:'同日节点 ① · 现实直播',priority:'P0',range:[11],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0611_life_freedom_love/cover.JPG',caption:'06.11 · “生命自由爱”直播'},
      left_intro:'06.11 先把直播本身作为 REAL EVENT 落位；直播过程中又发生了“提醒可以发一下”的公开发布行为，因此同一天还会有一个独立 PUBLIC POST 节点。',
      time_anchors:[{label:'直播发生时间',value:'06.11',note:'现实事件确认。',tone:'pink'},{label:'同日另一个节点',value:'微博 / 小红书发布',note:'直播过程中被提醒后发布，另开 PUBLIC POST 节点。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'当天进行了“生命自由爱”相关直播。'},{type:'blue',title:'不混在一起：',text:'微博 / 小红书的发布时间是 06.11，但帖内照片实际拍摄日期仍为 unknown。'}],
      real_timeline:[{date:'06.11',title:'双人直播',text:'现实事件主轴。'},{date:'06.11',title:'直播中提醒发布内容',text:'触发同日 PUBLIC POST 节点；不等于照片当天拍摄。',soft:true,tag:'TRIGGER'}],
      left_note:'live ≠ photo shoot time ✦',
      public_evidence:[{published_at:'2026-06-11',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'直播本身同步公开可见。',art:'video'}],
      reading_logic:'06.11 的直播与微博 / 小红书发布发生在同一天，但它们是两个不同节点；帖内照片的拍摄日期继续保持 unknown。'
    },
    {
      key:'camping_material_20260611',node_type:'real_event',chapter:'JUN 06C',layout_type:'daily_shoot_spread',evidence_mode:'later_public',title:'露营日记素材拍摄',short_title:'露营素材拍摄',tagline:'同日节点 ③ · 07.05 后续公开',priority:'P0',range:[11],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'placeholder',stamp:'CAMP',caption:'06.11 · 露营日记素材拍摄（素材后补）'},
      left_intro:'07.05 首饰盒“出逃山野露营日记”的素材可由服装与 06.11 晚间直播交叉确认拍摄于这一天，因此单独补一个现实素材拍摄节点。',
      time_anchors:[{label:'素材拍摄日期',value:'06.11',note:'由同日晚间直播服装交叉确认。',tone:'pink'},{label:'公开日期',value:'07.05',note:'首饰盒后来公开。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'跨月关系：',text:'06.11 拍摄 → 07.05 公开。'}],
      real_timeline:[{date:'06.11',title:'露营日记素材拍摄',text:'现实素材生成日。'},{date:'07.05',title:'首饰盒公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],
      left_note:'June shoot → July diary ✦',
      public_evidence:[{published_at:'2026-07-05',platform:'小发夹的首饰盒',title:'出逃山野露营日记',relation:'later public',text:'07.05 公开；素材拍摄于 06.11。',art:'video'}],
      reading_logic:'服装等稳定线索可以用于确认素材拍摄日；发布日仍单独保留在 07.05。'
    },
    {
      key:'life_love_posts_20260611',node_type:'public_post',chapter:'JUN 06B',layout_type:'public_post_spread',evidence_mode:'same_day_public',title:'直播中被提醒后发布 · 微博 / 小红书',short_title:'同日微博 / 小红书',tagline:'同日节点 ② · 发布时间确定，拍摄时间未知',priority:'P0',range:[11],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0611_life_freedom_love/source-weibo.jpg',caption:'06.11 · 法宣阁同日公开内容截图'},
      left_intro:'这两条内容是在 06.11 直播过程中，经贺嘉述提醒“可以发一下”后发布的；因此发布时间与触发上下文很明确，但照片本身何时拍摄仍不能由此反推。',
      time_anchors:[{label:'微博发布时间',value:'06.11',note:'直播期间被提醒后发布。',tone:'pink'},{label:'小红书发布时间',value:'06.11',note:'与微博同日发布。',tone:'pink'},{label:'内容拍摄时间',value:'unknown',note:'目前尚未推测出实际拍摄日期。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST / 同日发布。'},{type:'yellow',title:'触发关系：',text:'发布行为与当日直播存在明确上下文关系：直播时被提醒后发布。'},{type:'blue',title:'时间边界：',text:'“06.11 发布”只说明公开时间，不说明照片拍摄于 06.11。'}],
      real_timeline:[{date:'06.11',title:'微博 / 小红书发布',text:'发布行为发生在直播期间。'},{date:'unknown',title:'帖内照片拍摄',text:'等待后续证据，不强行归到 06.11。',soft:true,tag:'UNKNOWN'}],
      left_note:'prompted to post, not shot today ✎',
      context_box:{small:'TRIGGER RELATION · 触发关系',title:'直播解释“为什么这时发”，但不解释“照片什么时候拍”。',text:'贺嘉述在直播中提醒可以发一下，随后出现微博与小红书内容。这个关系可以记录为 prompted_during_live；但图片拍摄时间仍是独立问题。',items:[{label:'触发节点',value:'06.11 “生命自由爱”直播'},{label:'发布节点',value:'法宣阁微博 + 小红书'},{label:'关系',value:'prompted_during_live'},{label:'拍摄日期',value:'unknown'}],note:'以后如果找到照片真实拍摄日期，这两个 PUBLIC POST 可以继续作为 later-public / same-day-public 证据挂回那个现实节点，而 06.11 的“发布行为”仍然保留。'},
      public_evidence:[{published_at:'2026-06-11',platform:'WEIBO',title:'直播中被提醒后发布',relation:'prompted during live',text:'发布时间明确为 06.11；图片拍摄时间 unknown。',art:'postcard'},{published_at:'2026-06-11',platform:'XIAOHONGSHU',title:'同日小红书发布',relation:'prompted during live',text:'同样属于 06.11 的公开发布行为；不据此推定拍摄日。',art:'postcard'}],
      reading_logic:'把“直播发生”“发布行为发生”“照片何时拍摄”拆成三层时间事实：前两者明确为 06.11，第三层保持 unknown。'
    },
    {
      key:'ip_clue_20260612',node_type:'public_clue',chapter:'JUN 07',layout_type:'clue_spread',evidence_mode:'same_day_public',title:'公开 IP 属地变化线索',short_title:'IP 属地线索',tagline:'PUBLIC CLUE · 不等同真实行程',priority:'P0',range:[12],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0612_ip_clue/evidence-ip.JPG',caption:'06.12 · 平台公开 IP 属地变化记录'},
      left_intro:'六月出现了五月里没有的新类型：公开线索。它可以进入时间档案，但绝不能直接被当作本人真实行程。',
      time_anchors:[{label:'线索公开日期',value:'06.12',note:'平台显示记录可确认。',tone:'pink'},{label:'真实行程',value:'不可由此直接推出',note:'IP 属地 ≠ 本人真实地理位置。',tone:'blue'}],
      fact_memos:[{type:'blue',title:'严格边界：',text:'只记录平台公开显示的 IP 属地变化，不把它等同于现实行程。'}],
      real_timeline:[{date:'06.12',title:'公开 IP 属地变化',text:'北京 → 山东 → 安徽的公开显示变化。'},{date:'—',title:'真实行程',text:'不由 IP 线索直接推断。',soft:true,tag:'NO INFERENCE'}],
      left_note:'clue is not reality ⚑',
      public_evidence:[{published_at:'2026-06-12',platform:'PUBLIC PLATFORM',title:'IP 属地公开线索',relation:'public clue',text:'作为线索存档，而非现实行动证据。',art:'postcard'}],
      reading_logic:'PUBLIC CLUE 是独立节点类型：可以记录，但不能升级成 REAL EVENT。'
    },
    {
      key:'hangzhou_live_20260614',node_type:'real_event',chapter:'JUN 08',layout_type:'live_spread',evidence_mode:'same_day_public',title:'凌晨杭州直播',short_title:'杭州直播',tagline:'杭州 · 凌晨直播',priority:'P0',range:[14],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0614_hangzhou_live/cover.JPG',caption:'06.14 · 凌晨杭州直播'},
      left_intro:'一个标准的城市背景 + 直播现实事件节点。',
      time_anchors:[{label:'现实发生时间',value:'06.14 凌晨',note:'直播时间确认。',tone:'pink'},{label:'地点',value:'杭州',note:'公开信息可确认到城市级。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'凌晨在杭州进行直播。'}],
      real_timeline:[{date:'06.14',title:'杭州凌晨直播',text:'城市级背景信息保留。'}],
      left_note:'Hangzhou night ✦',
      public_evidence:[{published_at:'2026-06-14',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'直播同步公开。',art:'video'}],
      reading_logic:'地点只保持城市级，不扩展到精确位置。'
    },
    {
      key:'arena_shoot_20260616_17',node_type:'real_event',chapter:'JUN 09A',layout_type:'shooting_spread',evidence_mode:'later_public',title:'Arena HOMME+ 双人物料拍摄',short_title:'Arena 拍摄',tagline:'推定 06.16–17 · 高可信',priority:'P0',range:[16,17],year:2026,status:'confirmed',date_precision:'inferred',confidence:'high',
      hero:{type:'image',src:'media/2026/06/0616-17_arena/02-cover.jpg',caption:'Arena HOMME+ · 后续公开封面'},
      gallery:[{src:'media/2026/06/0616-17_arena/01-coming-soon.png',caption:'coming soon 公开物料' },{src:'media/2026/06/0616-17_arena/03-editorial.jpg',caption:'editorial 公开物料'},{src:'media/2026/06/0616-17_arena/source-weibo.jpg',caption:'公开来源截图'}],
      left_intro:'这页专门测试“现实事件可以被推定为一个日期区间，而不是精确某一天”。当前综合公开采访、行程与后续物料，推定拍摄在 06.16–17。',
      time_anchors:[{label:'推定拍摄区间',value:'06.16–06.17',note:'date_precision=inferred；confidence=high。',tone:'yellow'},{label:'事实强度',value:'高可信推定',note:'页面明确不写成“精确确认”。',tone:'blue'}],
      fact_memos:[{type:'yellow',title:'时间精度：',text:'INFERRED / 06.16–17。'},{type:'blue',title:'表达原则：',text:'可以进入现实主轴，但必须一直保留“推定”标签。'}],
      real_timeline:[{date:'06.16–17',title:'Arena 双人物料拍摄（推定）',text:'根据多项公开线索综合推定。',soft:true,tag:'INFERRED'}],
      left_note:'inferred, not invented ✎',
      public_evidence:[{published_at:'later',platform:'ARENA / WEIBO',title:'后续公开物料',relation:'later public',text:'后续物料用于支持拍摄区间判断。',art:'postcard'}],
      reading_logic:'“推定现实事件”可以进入手账，但必须把日期精度与置信度显示出来。'
    },
    {
      key:'story_back_20260617',node_type:'public_post',chapter:'JUN 09B',layout_type:'story_spread',evidence_mode:'ephemeral_story',title:'凌晨限时日常 · 背影',short_title:'凌晨限时',tagline:'同日节点 · 限时日常',priority:'P0',range:[17],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0617_story_back/poster.jpg',caption:'06.17 · 凌晨限时日常'},
      left_intro:'06.17 同时可能落在 Arena 推定拍摄区间内，又有一条明确发生的限时日常节点；两者共享日期但保持独立。',
      time_anchors:[{label:'限时日常公开',value:'06.17 凌晨',note:'明确公开节点。',tone:'pink'},{label:'公开 IP 线索',value:'天津',note:'仅作为公开线索，不单独等同现实位置。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST / EPHEMERAL STORY。'},{type:'blue',title:'同日关系：',text:'可与 Arena 推定拍摄节点并列，但不互相自动证明。'}],
      real_timeline:[{date:'06.17',title:'凌晨发布限时日常',text:'画面记录到贺嘉述背影。'},{date:'06.17',title:'公开 IP 属地：天津',text:'只作为公开线索保留。',soft:true,tag:'CLUE'}],
      left_note:'story node stays separate ✦',
      public_evidence:[{published_at:'2026-06-17',platform:'STORY',title:'凌晨限时日常',relation:'ephemeral story',text:'短时公开内容。',art:'video'}],
      reading_logic:'同一日期可以存在“推定现实拍摄”与“确定的限时公开节点”，两者不强行合并。'
    },
    {
      key:'perfume_live_20260619',node_type:'real_event',chapter:'JUN 10',layout_type:'live_spread',evidence_mode:'same_day_public',title:'香水主题直播',short_title:'香水直播',tagline:'双人直播 · 当日公开',priority:'P0',range:[19],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0619_perfume_live/cover.JPG',caption:'06.19 · 香水主题直播'},
      left_intro:'六月中段的标准直播节点。',
      time_anchors:[{label:'现实发生时间',value:'06.19',note:'直播日期确认。',tone:'pink'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'当天进行香水主题直播。'}],
      real_timeline:[{date:'06.19',title:'香水直播',text:'双人直播。'}],
      left_note:'scent note ✦',
      public_evidence:[{published_at:'2026-06-19',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'当日同步公开。',art:'video'}],
      reading_logic:'标准直播节点继续验证模板稳定性。'
    },
    {
      key:'live_20260621',node_type:'real_event',chapter:'JUN 11',layout_type:'live_spread',evidence_mode:'same_day_public',title:'6月21日直播',short_title:'06.21 直播',tagline:'名称待核 · 现实直播',priority:'P0',range:[21],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0621_live/cover.JPG',caption:'06.21 · 双人直播'},
      left_intro:'现实直播日期确认，但具体活动名称尚待核，因此标题保持中性。',
      time_anchors:[{label:'现实发生时间',value:'06.21',note:'直播日期确认。',tone:'pink'},{label:'活动名称',value:'待核',note:'不把素材文件名直接写成正式事件名。',tone:'blue'}],
      fact_memos:[{type:'blue',title:'命名原则：',text:'在正式名称未核准前，使用中性标题“6月21日直播”。'}],
      real_timeline:[{date:'06.21',title:'双人直播',text:'现实发生可确认。'}],
      left_note:'neutral title first ✎',
      public_evidence:[{published_at:'2026-06-21',platform:'LIVE',title:'直播同步记录',relation:'same-day public',text:'当日同步公开。',art:'video'}],
      reading_logic:'“事实确认”和“名称确认”是两件事；标题不抢跑。'
    },
    {
      key:'answer_you_20260623',node_type:'public_interaction',chapter:'JUN 12',layout_type:'interaction_spread',evidence_mode:'same_day_public',title:'《答案是你》公开互动',short_title:'答案是你',tagline:'微博视频 + 评论互动',priority:'P0',range:[23],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0623_answer_is_you/cover.JPG',caption:'06.23 · 《答案是你》公开互动'},
      left_intro:'和 05.03 评论区互动一样，这一页的主时间锚点是“公开互动发生在 06.23”。',
      time_anchors:[{label:'公开互动时间',value:'06.23',note:'微博视频发布与评论互动同属公开时间层。',tone:'pink'},{label:'视频实际拍摄时间',value:'不额外推定',note:'除非后续有更明确证据。',tone:'blue'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC INTERACTION。'},{type:'blue',title:'时间边界：',text:'记录公开互动，不自动推定视频真实拍摄时间。'}],
      real_timeline:[{date:'06.23',title:'发布《答案》相关视频',text:'贺嘉述公开发布。'},{date:'06.23',title:'评论“是你”',text:'法宣阁随后在评论区回复。',soft:true,tag:'INTERACTION'}],
      left_note:'answer is you ♡',
      public_evidence:[{published_at:'2026-06-23',platform:'WEIBO',title:'视频 + 评论互动',relation:'public interaction',text:'互动本身在同一公开时间层发生。',art:'postcard'}],
      reading_logic:'六月再次验证“公开互动”节点可以独立于内容实际拍摄时间。'
    },
    {
      key:'qingdao_live_20260625',node_type:'real_event',chapter:'JUN 13A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'青岛直播 · 互写信 / 互抹眼泪',short_title:'青岛直播',tagline:'同日节点 ① · 青岛直播',priority:'P0',range:[25],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0625_qingdao_live/cover.JPG',caption:'06.25 · 青岛直播'},
      left_intro:'06.25 同一天既有直播，也处在青岛拍摄区间内；V0.8.1 继续用“同日多节点”而不是硬合并。',
      time_anchors:[{label:'直播发生时间',value:'06.25',note:'明确现实事件。',tone:'pink'},{label:'地点',value:'青岛',note:'城市级。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'直播内容：',text:'包含互写信与互相擦眼泪等片段。'},{type:'blue',title:'同日另有：',text:'青岛拍摄区间节点。'}],
      real_timeline:[{date:'06.25',title:'青岛直播',text:'包含互写信与互相擦眼泪等片段。'}],
      left_note:'Qingdao live ♡',
      public_evidence:[{published_at:'2026-06-25',platform:'LIVE',title:'青岛直播同步记录',relation:'same-day public',text:'直播同步可见。',art:'video'}],
      reading_logic:'直播是精确日节点；青岛拍摄则是跨日区间节点，两者并列存在。'
    },
    {
      key:'qingdao_shoot_20260625_27',node_type:'real_event',chapter:'JUN 13B',layout_type:'shooting_spread',evidence_mode:'same_day_public',title:'青岛拍摄',short_title:'青岛拍摄',tagline:'同日节点 ② · 06.25–27 区间',priority:'P0',range:[25,26,27],year:2026,status:'confirmed',date_precision:'range',confidence:'confirmed',
      hero:{type:'placeholder',stamp:'QINGDAO',caption:'06.25–27 · 青岛拍摄区间（框架先落位）'},
      left_intro:'这页测试“一个现实事件横跨三天”的呈现：在 25、26、27 日历格里都能看到同一节点，但只对应一个章节。',
      time_anchors:[{label:'现实发生区间',value:'06.25–06.27',note:'date_precision=range。',tone:'pink'},{label:'地点',value:'青岛',note:'城市级。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'节点性质：',text:'REAL EVENT / 跨日拍摄。'},{type:'blue',title:'日历表现：',text:'同一个章节可占据连续三天，不需要复制成三页。'}],
      real_timeline:[{date:'06.25–27',title:'青岛拍摄',text:'跨日现实事件。'}],
      left_note:'one event, three days ✦',
      public_evidence:[{published_at:'2026-06-25',platform:'LIVE MENTION',title:'直播中提及相关背景',relation:'context',text:'作为现实拍摄区间的公开背景材料之一。',art:'postcard'},{published_at:'2026-07-03',platform:'IG / 短内容',title:'双人短内容（原抖音下架）',relation:'later public',text:'素材来自 06.25–27 青岛拍摄期。',art:'video'},{published_at:'2026-07-08',platform:'WEIBO · 贺嘉述',title:'分享图片🍃',relation:'possible later public · medium',text:'推断为青岛拍摄素材，保留 medium 置信度。',art:'postcard'},{published_at:'2026-07-17',platform:'WEIBO / SHORT TEASER',title:'青岛小短片预告',relation:'later public',text:'从妆造与上下文可确认来自青岛拍摄期。',art:'video'}],
      reading_logic:'跨日事件在月历上覆盖多个日期，并允许 7 月多条后来公开内容反向挂回同一青岛拍摄区间。'
    },
    {
      key:'qingdao_walk_20260626',node_type:'real_event',chapter:'JUN 14',layout_type:'night_walk_spread',evidence_mode:'ephemeral_story',title:'限时日常 · 情人坝散步',short_title:'情人坝散步',tagline:'同日节点 · 限时日常',priority:'P0',range:[26],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',
      hero:{type:'image',src:'media/2026/06/0626_qingdao_walk/cover.jpg',caption:'06.26 · 青岛情人坝散步'},
      left_intro:'06.26 一方面仍处在青岛拍摄区间，另一方面有一个明确的限时日常散步节点。',
      time_anchors:[{label:'现实散步时间',value:'06.26',note:'青岛期间。',tone:'pink'},{label:'公开方式',value:'限时日常',note:'短时公开记录。',tone:'yellow'}],
      fact_memos:[{type:'pink',title:'现实主轴：',text:'青岛期间情人坝散步。'},{type:'blue',title:'同日关系：',text:'与 06.25–27 青岛拍摄区间并列。'}],
      real_timeline:[{date:'06.26',title:'情人坝散步',text:'青岛期间的现实日常节点。'}],
      left_note:'walk inside a bigger trip ✦',
      public_evidence:[{published_at:'2026-06-26',platform:'STORY',title:'情人坝散步限时日常',relation:'ephemeral story',text:'短时公开记录。',art:'video'}],
      reading_logic:'“大区间事件”内部仍然可以有更具体的小节点；层级不冲突。'
    }
  ],
  public_archive:[]
};

const julyData = {
  month:{year:2026,month:7,title:'July 2026'},
  meta:{
    key:'2026-07',name:'July',num:'07',year:2026,
    lead:'七月不再只是第三张月历：它开始把六月的拍摄素材真正接回来，同时继续测试同日多节点、跨午夜、event update 与 July→August later-public。',
    rule:'七月继续坚持：发布日不等于拍摄日；同日可有多个节点；政治要求类转发不进入手账主线；城市移动只保留 P1。',
    corner:'July chapter ✦',
    rightTitle:'第三个月正式接通：June 的素材在 July 被看见，July 的拍摄又会继续流向 August。',
    introTitle:'July 2026 · 三个月贯通',
    introText:'这一版先搭 July skeleton，不追求照片完整。重点是把 06→07 的 later-public 关系真正闭环，并验证 07.27–28 → 08.09 的下一层跨月关系。',
    chapterTitle:'七月先把经过核对的主干节点全部放对位置'
  },
  events:[
    {key:'home_live_20260702',node_type:'real_event',chapter:'JUL 01A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'双人居家直播',short_title:'居家直播',tagline:'同日节点 ① · 直播',priority:'P0',range:[2],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'LIVE',caption:'07.02 · 双人居家直播'},left_intro:'七月第一个已确认的直播现实节点。',time_anchors:[{label:'直播发生时间',value:'07.02',note:'日期确认。',tone:'pink'}],fact_memos:[{type:'pink',title:'节点性质：',text:'REAL EVENT / 直播。'}],real_timeline:[{date:'07.02',title:'双人居家直播',text:'现实节点确认。'}],left_note:'July starts here ✦',public_evidence:[{published_at:'2026-07-02',platform:'LIVE',title:'直播同步公开',relation:'same-day public',text:'直播同步可见。',art:'video'}],reading_logic:'标准直播节点。'},
    {key:'july_schedule_20260702',node_type:'public_post',chapter:'JUL 01B',layout_type:'public_post_spread',evidence_mode:'same_day_public',title:'首饰盒 · 七月启程 / 行程更新',short_title:'七月启程',tagline:'同日节点 ② · 公开发布',priority:'P0',range:[2],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'JULY',caption:'07.02 · 蝉鸣盛夏，七月启程'},left_intro:'月初公开行程 / 月份更新节点。',time_anchors:[{label:'公开时间',value:'07.02',note:'首饰盒 19:04。',tone:'pink'}],fact_memos:[{type:'pink',title:'节点性质：',text:'PUBLIC POST。'}],real_timeline:[{date:'07.02',title:'七月启程更新',text:'作为月初公开节奏记录。'}],left_note:'new month note ✎',public_evidence:[{published_at:'2026-07-02',platform:'小发夹的首饰盒',title:'蝉鸣盛夏，七月启程',relation:'same-day public',text:'月初公开更新。',art:'postcard'}],reading_logic:'公开发布节点与同日直播并列。'},
    {key:'qingdao_short_post_20260703',node_type:'public_post',chapter:'JUL 02',layout_type:'public_post_spread',evidence_mode:'later_public',title:'IG 共创 / 双人短内容（原抖音下架）',short_title:'青岛短内容',tagline:'later-public · 来自 06.25–27 青岛',priority:'P0',range:[3],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'QD',caption:'07.03 · 双人短内容公开（素材后补）'},left_intro:'公开发生在 07.03，但素材本身来自 06.25–27 青岛拍摄期；原抖音内容后来被下架。',time_anchors:[{label:'公开时间',value:'07.03',note:'公开节点。',tone:'pink'},{label:'实际拍摄区间',value:'06.25–06.27',note:'青岛拍摄期。',tone:'yellow'}],fact_memos:[{type:'pink',title:'跨月关系：',text:'June 青岛拍摄 → July 短内容公开。'}],real_timeline:[{date:'06.25–27',title:'青岛拍摄',text:'现实素材生成。'},{date:'07.03',title:'双人短内容公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'Qingdao → July ↩',context_box:{small:'CROSS-MONTH · 跨月来源',title:'这一页来自六月青岛拍摄。',text:'07.03 记录的是“内容公开”，真实拍摄仍留在 06.25–27 青岛章节。',items:[{label:'现实来源',value:'06.25–27 青岛拍摄'},{label:'公开节点',value:'07.03 IG / 双人短内容'},{label:'抖音状态',value:'原内容后续下架'}]},public_evidence:[{published_at:'2026-07-03',platform:'IG / SHORT CONTENT',title:'双人短内容',relation:'later public',text:'素材来自青岛拍摄期。',art:'video'}],reading_logic:'later-public 节点不创造新的 07.03 拍摄事件。'},
    {key:'gaga_part1_20260704',node_type:'public_post',chapter:'JUL 03',layout_type:'interview_spread',evidence_mode:'later_public',title:'GagaOOLala 快问快答 Part 1',short_title:'Gaga 快问快答',tagline:'采访公开 · 录制属于《双程》拍摄期',priority:'P0',range:[4],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'GAGA',caption:'07.04 · GagaOOLala 快问快答 Part 1'},left_intro:'Instagram 端确认 07.04 发布；采访录制属于《双程》拍摄期，具体录制日期暂不由发布日反推。',time_anchors:[{label:'公开时间',value:'07.04',note:'Instagram 端确认。',tone:'pink'},{label:'采访录制时间',value:'《双程》拍摄期 / 具体日 unknown',note:'不由 07.04 反推。',tone:'blue'}],fact_memos:[{type:'blue',title:'时间边界：',text:'发布日明确，录制日仍另算。'}],real_timeline:[{date:'07.04',title:'快问快答 Part 1 公开',text:'公开节点。'},{date:'更早',title:'采访录制',text:'属于《双程》拍摄期。',soft:true,tag:'UNKNOWN DATE'}],left_note:'release date ≠ interview date ✎',public_evidence:[{published_at:'2026-07-04',platform:'GagaOOLala / Instagram',title:'快问快答 Part 1',relation:'later public',text:'07.04 公开。',art:'video'}],reading_logic:'采访公开节点与实际录制时间分开。'},
    {key:'fxg_daily_20260705',node_type:'public_post',chapter:'JUL 04A',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'法宣阁 · 最近🍃',short_title:'法宣阁日常',tagline:'同日节点 ① · 拍摄日未确认',priority:'P0',range:[5],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'FXG',caption:'07.05 · 最近🍃'},left_intro:'07.05 能确认的是公开时间；图片实际拍摄日暂不额外推断。',time_anchors:[{label:'公开时间',value:'07.05',note:'confirmed。',tone:'pink'},{label:'拍摄时间',value:'unknown',note:'不由发帖日反推。',tone:'blue'}],real_timeline:[{date:'07.05',title:'公开日常',text:'发布节点。'}],left_note:'publish first ✎',public_evidence:[{published_at:'2026-07-05',platform:'WEIBO · 法宣阁',title:'最近🍃',relation:'same-day public',text:'公开时间明确。',art:'postcard'}],reading_logic:'PUBLIC POST 只锁公开日。'},
    {key:'hjs_daily_20260705',node_type:'public_post',chapter:'JUL 04B',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'贺嘉述 · 述说日常🍃～',short_title:'贺嘉述日常',tagline:'同日节点 ② · 拍摄日未确认',priority:'P0',range:[5],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'HJS',caption:'07.05 · 述说日常🍃～'},left_intro:'与法宣阁同日更新，但仍不自动把照片拍摄时间写成 07.05。',time_anchors:[{label:'公开时间',value:'07.05',note:'confirmed。',tone:'pink'},{label:'拍摄时间',value:'unknown',note:'继续保持未知。',tone:'blue'}],real_timeline:[{date:'07.05',title:'公开日常',text:'发布节点。'}],left_note:'same day, separate post ✦',public_evidence:[{published_at:'2026-07-05',platform:'WEIBO · 贺嘉述',title:'述说日常🍃～',relation:'same-day public',text:'公开时间明确。',art:'postcard'}],reading_logic:'同日多节点继续保持独立。'},
    {key:'camping_diary_20260705',node_type:'public_post',chapter:'JUL 04C',layout_type:'later_public_spread',evidence_mode:'later_public',title:'首饰盒 · 出逃山野露营日记',short_title:'露营日记',tagline:'同日节点 ③ · 实拍 06.11',priority:'P0',range:[5],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'CAMP',caption:'07.05 · 出逃山野露营日记'},left_intro:'07.05 是公开日；素材实际拍摄于 06.11，可由同日晚间直播服装交叉确认。',time_anchors:[{label:'公开时间',value:'07.05',note:'首饰盒发布。',tone:'pink'},{label:'实际拍摄时间',value:'06.11',note:'服装交叉确认。',tone:'yellow'}],fact_memos:[{type:'pink',title:'跨月关系：',text:'06.11 拍摄 → 07.05 公开。'}],real_timeline:[{date:'06.11',title:'露营素材拍摄',text:'现实素材生成。'},{date:'07.05',title:'露营日记公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'June outfit → July diary ✦',context_box:{small:'CROSS-MONTH · 跨月来源',title:'服装把这条公开内容送回 06.11。',text:'这条内容在 07.05 被看见，但现实素材生成日是 06.11。',items:[{label:'现实拍摄',value:'06.11'},{label:'公开发布',value:'07.05'},{label:'依据',value:'与 06.11 晚间直播服装一致'}]},public_evidence:[{published_at:'2026-07-05',platform:'小发夹的首饰盒',title:'出逃山野露营日记',relation:'later public',text:'素材拍摄于 06.11。',art:'video'}],reading_logic:'发布与拍摄分开，跨月回挂。'},
    {key:'concert_announce_20260706',node_type:'public_post',chapter:'JUL 05',layout_type:'announcement_spread',evidence_mode:'same_day_public',title:'「宿命回响·双程」曼谷演唱会官宣',short_title:'演唱会官宣',tagline:'日历漏项 · 补入主线',priority:'P0',range:[6],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BKK',caption:'07.06 · 曼谷演唱会官宣'},left_intro:'日历漏项补入：为 07.25 的现实演唱会建立提前公开节点。',time_anchors:[{label:'官宣时间',value:'07.06',note:'confirmed。',tone:'pink'},{label:'对应现实活动',value:'07.25',note:'曼谷演唱会。',tone:'yellow'}],real_timeline:[{date:'07.06',title:'活动官宣',text:'为 07.25 演唱会建立前置节点。'}],left_note:'announcement → event ✦',public_evidence:[{published_at:'2026-07-06',platform:'WEIBO',title:'演唱会官宣',relation:'announcement of 07.25',text:'日历漏项补入。',art:'postcard'}],reading_logic:'官宣是公开节点，活动本体仍在 07.25。'},
    {key:'funnyelves_announce_20260708',node_type:'public_post',chapter:'JUL 06A',layout_type:'brand_spread',evidence_mode:'same_day_public',title:'FunnyElves 方里 · 品牌挚友联合官宣',short_title:'方里官宣',tagline:'同日节点 ① · 品牌公开',priority:'P0',range:[8],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'FE',caption:'07.08 · FunnyElves 方里联合官宣'},left_intro:'方里商务节点以公开官宣时间落位。',time_anchors:[{label:'公开时间',value:'07.08',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.08',title:'品牌挚友联合官宣',text:'商务公开节点。'}],left_note:'brand day ✦',public_evidence:[{published_at:'2026-07-08',platform:'FunnyElves / WEIBO',title:'品牌挚友官宣',relation:'same-day public',text:'公开节点。',art:'postcard'}],reading_logic:'商务官宣按发布日记录。'},
    {key:'hjs_share_20260708',node_type:'public_post',chapter:'JUL 06B',layout_type:'daily_post_spread',evidence_mode:'later_public',title:'贺嘉述 · 分享图片🍃',short_title:'分享图片🍃',tagline:'同日节点 ② · 疑似青岛素材',priority:'P0',range:[8],year:2026,status:'confirmed',date_precision:'exact',confidence:'medium',hero:{type:'placeholder',stamp:'🍃',caption:'07.08 · 分享图片🍃'},left_intro:'公开日在 07.08；根据现有线索推断图片可能拍于 06.25–27 青岛，当前保留 medium 置信度。',time_anchors:[{label:'公开时间',value:'07.08',note:'confirmed。',tone:'pink'},{label:'推定拍摄区间',value:'06.25–06.27',note:'inferred / medium。',tone:'yellow'}],fact_memos:[{type:'yellow',title:'置信度：',text:'青岛来源是推断，不写成 confirmed。'}],real_timeline:[{date:'06.25–27?',title:'疑似青岛拍摄',text:'medium。',soft:true,tag:'INFERRED'},{date:'07.08',title:'公开图片',text:'公开日确认。'}],left_note:'possible Qingdao ↩',public_evidence:[{published_at:'2026-07-08',platform:'WEIBO · 贺嘉述',title:'分享图片🍃',relation:'possible later public',text:'疑似青岛素材，medium。',art:'postcard'}],reading_logic:'推断关系必须把置信度留在页面上。'},
    {key:'fe_bts_20260709',node_type:'public_post',chapter:'JUL 07A',layout_type:'bts_spread',evidence_mode:'same_day_public',title:'首饰盒 · 快门间隙~现场小碎片分享',short_title:'方里现场碎片',tagline:'同日节点 ① · 拍摄日 unknown',priority:'P0',range:[9],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BTS',caption:'07.09 · 快门间隙~现场小碎片分享'},left_intro:'判断为方里拍摄花絮；07.09 是公开日，具体拍摄日期暂不确认。',time_anchors:[{label:'公开时间',value:'07.09',note:'confirmed。',tone:'pink'},{label:'花絮拍摄时间',value:'unknown',note:'不由公开日反推。',tone:'blue'}],real_timeline:[{date:'07.09',title:'花絮公开',text:'公开节点。'},{date:'unknown',title:'实际拍摄',text:'待证据。',soft:true,tag:'UNKNOWN'}],left_note:'BTS date stays unknown ✎',public_evidence:[{published_at:'2026-07-09',platform:'小发夹的首饰盒',title:'快门间隙~现场小碎片分享',relation:'same-day public node',text:'方里拍摄花絮公开。',art:'postcard'}],reading_logic:'公开节点成立，拍摄时间保持 unknown。'},
    {key:'jicao_sign_20260709',node_type:'public_post',chapter:'JUL 07B',layout_type:'bts_spread',evidence_mode:'same_day_public',title:'集草文化 · 签名花絮',short_title:'集草签名花絮',tagline:'同日节点 ② · 22:47 公开',priority:'P0',range:[9],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'SIGN',caption:'07.09 · 集草文化签名花絮'},left_intro:'另一账号在 07.09 22:47 发布签名花絮；签名 / 拍摄实际日期仍 unknown。',time_anchors:[{label:'公开时间',value:'07.09 22:47',note:'原帖可锁。',tone:'pink'},{label:'实际签名 / 拍摄',value:'unknown',note:'不由公开时间反推。',tone:'blue'}],real_timeline:[{date:'07.09',title:'签名花絮公开',text:'公开节点。'}],left_note:'signing bts ✎',public_evidence:[{published_at:'2026-07-09',platform:'集草文化',title:'亲签到底会去谁家呢',relation:'same-day public node',text:'07.09 22:47 公开。',art:'postcard'}],reading_logic:'不同账号的同日花絮分开保留。'},
    {key:'snack_live_20260710',node_type:'real_event',chapter:'JUL 08A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'双人直播 · 零食局',short_title:'零食局直播',tagline:'同日节点 ① · 现实直播',priority:'P0',range:[10],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'LIVE',caption:'07.10 · 双人直播（零食局）'},left_intro:'标准的同日直播现实节点。',time_anchors:[{label:'直播时间',value:'07.10',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.10',title:'双人直播',text:'零食局。'}],left_note:'snack live ✦',public_evidence:[{published_at:'2026-07-10',platform:'LIVE',title:'零食局直播',relation:'same-day public',text:'直播同步可见。',art:'video'}],reading_logic:'直播本体与同日见面会官宣并列。'},
    {key:'meeting_announce_20260710',node_type:'public_post',chapter:'JUL 08B',layout_type:'announcement_spread',evidence_mode:'same_day_public',title:'「宣你述说」曼谷双人见面会官宣',short_title:'见面会官宣',tagline:'同日节点 ② · 日历漏项',priority:'P0',range:[10],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BKK',caption:'07.10 · 宣你述说见面会官宣'},left_intro:'日历漏项补入；后续 07.20 还有一次场地 / 时间变更公告。',time_anchors:[{label:'首次官宣',value:'07.10',note:'confirmed。',tone:'pink'},{label:'活动日期',value:'07.26',note:'曼谷见面会。',tone:'yellow'}],real_timeline:[{date:'07.10',title:'见面会官宣',text:'首次公开活动信息。'},{date:'07.20',title:'信息更新',text:'场地 / 时间变更。',soft:true,tag:'EVENT UPDATE'}],left_note:'announce, then update ✎',public_evidence:[{published_at:'2026-07-10',platform:'WEIBO',title:'宣你述说见面会官宣',relation:'announcement of 07.26',text:'日历漏项补入。',art:'postcard'}],reading_logic:'活动官宣与后续 event_update 都指向 07.26 同一个现实活动。'},
    {key:'gaga_part2_20260711',node_type:'public_post',chapter:'JUL 09',layout_type:'interview_spread',evidence_mode:'later_public',title:'GagaOOLala 快问快答 Part 2',short_title:'Gaga Part 2',tagline:'日历漏项 · 采访系列继续',priority:'P0',range:[11],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'GAGA',caption:'07.11 · GagaOOLala 快问快答 Part 2'},left_intro:'采访系列第二部分继续作为公开节点；录制时间仍属于《双程》拍摄期，不由 07.11 反推。',time_anchors:[{label:'公开时间',value:'07.11',note:'confirmed。',tone:'pink'},{label:'实际录制',value:'《双程》拍摄期 / unknown day',note:'保持分离。',tone:'blue'}],real_timeline:[{date:'07.11',title:'Part 2 公开',text:'媒体采访系列。'}],left_note:'part two ✦',public_evidence:[{published_at:'2026-07-11',platform:'GagaOOLala',title:'快问快答 Part 2',relation:'later public',text:'采访系列公开。',art:'video'}],reading_logic:'发布日与录制日分开。'},
    {key:'shu_post_20260712',node_type:'public_post',chapter:'JUL 10',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'shu_coming · 好久不见🍃',short_title:'shu_coming 日常',tagline:'当日实时发生 / 发布',priority:'P0',range:[12],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'SHU',caption:'07.12 · 好久不见🍃'},left_intro:'这条微博被人工确认是当日实时发生 / 发布，所以可以直接把 07.12 当作节点时间。',time_anchors:[{label:'现实 / 公开时间',value:'07.12',note:'当日实时。',tone:'pink'}],real_timeline:[{date:'07.12',title:'实时日常发布',text:'当天发生并公开。'}],left_note:'same-day diary 🍃',public_evidence:[{published_at:'2026-07-12',platform:'WEIBO · shu_coming',title:'好久不见🍃',relation:'same-day public',text:'当日实时节点。',art:'postcard'}],reading_logic:'当现实与公开能确认在同一天时，可直接放在同一章节。'},
    {key:'v_public_20260714',node_type:'public_post',chapter:'JUL 11A',layout_type:'magazine_release_spread',evidence_mode:'later_public',title:'V Generation《情愫四序》正式公开 / 开售 / 采访',short_title:'V 正式公开',tagline:'同日节点 ① · later-public of 06.08',priority:'P0',range:[14],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'V',caption:'07.14 · V Generation 正式公开'},left_intro:'不单列面向粉丝的数据准备 / 预热；跨月关系从 06.08 拍摄直接连接到 07.14 正式公开。',time_anchors:[{label:'现实拍摄',value:'06.08',note:'V中文拍摄节点。',tone:'yellow'},{label:'正式公开',value:'07.14',note:'封面 / 开售 / 采访集中公开。',tone:'pink'}],fact_memos:[{type:'pink',title:'正式闭环：',text:'06.08 REAL EVENT → 07.14 PUBLIC POST。'}],real_timeline:[{date:'06.08',title:'V中文拍摄',text:'现实素材生成。'},{date:'07.14',title:'正式公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'June shoot → July cover ✦',context_box:{small:'CROSS-MONTH · 跨月闭环',title:'V中文这一条现在正式接通。',text:'06.08 的拍摄不再写“July 待整理”；07.14 成为明确的 later-public 节点。',items:[{label:'来源章节',value:'June · 06.08 V中文拍摄'},{label:'公开章节',value:'July · 07.14 正式公开'}]},public_evidence:[{published_at:'2026-07-14',platform:'V中文 / WEIBO',title:'情愫四序正式公开',relation:'later public',text:'回挂 06.08 V中文拍摄。',art:'postcard'}],reading_logic:'只保留真正正式公开，不把宣发准备预热做成独立主节点。'},
    {key:'live_20260714',node_type:'real_event',chapter:'JUL 11B',layout_type:'live_spread',evidence_mode:'same_day_public',title:'07.14 双人直播',short_title:'07.14 直播',tagline:'同日节点 ② · 现实直播',priority:'P0',range:[14],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'LIVE',caption:'07.14 · 双人直播'},left_intro:'V 正式公开当天同时还有一场直播，因此 07.14 使用同日多节点而不是合并。',time_anchors:[{label:'直播发生时间',value:'07.14',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.14',title:'双人直播',text:'现实直播节点。'}],left_note:'same date, another node ✦',public_evidence:[{published_at:'2026-07-14',platform:'LIVE',title:'双人直播',relation:'same-day public',text:'直播同步公开。',art:'video'}],reading_logic:'07.14 的杂志公开与直播是两个独立节点。'},
    {key:'mag_bts_20260715',node_type:'public_post',chapter:'JUL 12',layout_type:'bts_spread',evidence_mode:'later_public',title:'首饰盒 · 杂志拍摄花絮',short_title:'杂志花絮',tagline:'实拍 06.10 · 07.15 后续公开',priority:'P0',range:[15],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'MAG',caption:'07.15 · 滴~花絮加载完毕'},left_intro:'花絮公开在 07.15，但素材实际拍摄于 06.10；具体刊物暂时不强绑，避免误并到 06.08 V中文。',time_anchors:[{label:'实际拍摄时间',value:'06.10',note:'人工核对确认。',tone:'yellow'},{label:'花絮公开时间',value:'07.15',note:'首饰盒发布。',tone:'pink'}],real_timeline:[{date:'06.10',title:'杂志拍摄',text:'现实节点。'},{date:'07.15',title:'花絮公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'June 10 → July 15 ✎',public_evidence:[{published_at:'2026-07-15',platform:'小发夹的首饰盒',title:'滴~花絮加载完毕',relation:'later public',text:'素材拍摄于 06.10。',art:'video'}],reading_logic:'建立 06.10 杂志拍摄与 07.15 花絮的跨月关系。'},
    {key:'qingdao_teaser_20260717',node_type:'public_post',chapter:'JUL 13A',layout_type:'shortfilm_spread',evidence_mode:'later_public',title:'青岛小短片预告 / 两人同主题微博',short_title:'青岛短片预告',tagline:'同日节点 ① · 实拍 06.25–27',priority:'P0',range:[17],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'TEASER',caption:'07.17 · 青岛小短片预告'},left_intro:'两人的短片预告属于青岛小短片，实际拍摄在 06.25–27 青岛拍摄期。',time_anchors:[{label:'拍摄区间',value:'06.25–06.27',note:'青岛。',tone:'yellow'},{label:'预告公开',value:'07.17',note:'两人同主题微博。',tone:'pink'}],real_timeline:[{date:'06.25–27',title:'青岛拍摄',text:'现实素材生成。'},{date:'07.17',title:'短片预告',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'Qingdao teaser ↩',public_evidence:[{published_at:'2026-07-17',platform:'WEIBO / SHORT TEASER',title:'两人短片预告',relation:'later public',text:'来自青岛拍摄期。',art:'video'}],reading_logic:'青岛拍摄形成一个跨月素材源，7 月可以有多条 later-public。'},
    {key:'workday_post_20260717',node_type:'public_post',chapter:'JUL 13B',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'首饰盒 · 是一个普通的工作日',short_title:'普通工作日',tagline:'同日节点 ② · 拍摄日 unknown',priority:'P0',range:[17],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'WORK',caption:'07.17 · 是一个普通的工作日'},left_intro:'公开日在 07.17，但实际拍摄日无法确认，所以不和青岛短片预告自动绑定。',time_anchors:[{label:'公开时间',value:'07.17',note:'confirmed。',tone:'pink'},{label:'实际拍摄',value:'unknown',note:'不强行归到青岛或 07.17。',tone:'blue'}],real_timeline:[{date:'07.17',title:'工作日内容公开',text:'公开节点。'}],left_note:'unknown shoot stays unknown ✎',public_evidence:[{published_at:'2026-07-17',platform:'小发夹的首饰盒',title:'是一个普通的工作日',relation:'same-day public node',text:'只锁公开日。',art:'postcard'}],reading_logic:'同日出现的两条内容也不意味着它们来自同一拍摄日。'},
    {key:'birthday_mall_20260718',node_type:'real_event',chapter:'JUL 14A',layout_type:'event_spread',evidence_mode:'same_day_public',title:'法宣阁生日粉丝应援 · 商场现场',short_title:'生日应援现场',tagline:'同日节点 ① · 现实活动',priority:'P0',range:[18],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BDAY',caption:'07.18 · 粉丝生日应援现场'},left_intro:'粉丝为法宣阁布置生日应援商场；两人先给粉丝购买约 50 杯奶茶，下午到现场。',time_anchors:[{label:'现实发生时间',value:'07.18',note:'confirmed。',tone:'pink'},{label:'同日晚间动线',value:'北京 → 杭州',note:'仅保存城市级 P1。',tone:'yellow'}],fact_memos:[{type:'pink',title:'现场前：',text:'两人给粉丝购买约 50 杯奶茶。'},{type:'blue',title:'隐私边界：',text:'航班与精确时刻不进入手账。'}],real_timeline:[{date:'07.18',title:'生日应援商场现场',text:'下午到达粉丝布置现场。'},{date:'07.18 later',title:'北京 → 杭州',text:'只保留城市级 P1。',soft:true,tag:'P1'}],left_note:'birthday day ♡',public_evidence:[{published_at:'2026-07-18',platform:'PUBLIC / FAN EVENT',title:'生日应援现场公开记录',relation:'same-day public',text:'现实活动节点。',art:'postcard'}],reading_logic:'把粉丝应援现场作为现实节点，交通只做 P1 背景。'},
    {key:'car_live_20260718',node_type:'real_event',chapter:'JUL 14B',layout_type:'live_spread',evidence_mode:'same_day_public',title:'车上短随播',short_title:'车上随播',tagline:'同日节点 ② · 十几分钟 / 网络卡',priority:'P0',range:[18],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'CAR',caption:'07.18 · 车上短随播'},left_intro:'从应援现场结束后，在前往机场的路程中短随播十几分钟，网络较卡。',time_anchors:[{label:'发生时间',value:'07.18',note:'应援现场结束后。',tone:'pink'},{label:'时长',value:'约十几分钟',note:'网络较卡。',tone:'yellow'}],real_timeline:[{date:'07.18',title:'车上短随播',text:'短时直播节点。'}],left_note:'short live on the road ✦',public_evidence:[{published_at:'2026-07-18',platform:'LIVE',title:'车上短随播',relation:'same-day public',text:'现实直播节点。',art:'video'}],reading_logic:'直播节点与交通动线分开；不记录具体机场 / 航班。'},
    {key:'fe_live_20260719',node_type:'real_event',chapter:'JUL 15A',layout_type:'brand_live_spread',evidence_mode:'same_day_public',title:'FunnyElves 方里直播',short_title:'方里直播',tagline:'同日节点 ① · 商务直播',priority:'P0',range:[19],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'FE LIVE',caption:'07.19 · FunnyElves 方里直播'},left_intro:'标准商务直播现实节点。',time_anchors:[{label:'直播时间',value:'07.19',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.19',title:'方里直播',text:'商务直播。'}],left_note:'brand live ✦',public_evidence:[{published_at:'2026-07-19',platform:'FUNNYELVES LIVE',title:'方里直播',relation:'same-day public',text:'直播同步公开。',art:'video'}],reading_logic:'与同日多条公开内容并列。'},
    {key:'dance_post_20260719',node_type:'public_post',chapter:'JUL 15B',layout_type:'dance_spread',evidence_mode:'later_public',title:'双人共创舞发布',short_title:'共创舞',tagline:'同日节点 ② · 约 07.18 拍摄',priority:'P0',range:[19],year:2026,status:'confirmed',date_precision:'exact',confidence:'high',hero:{type:'placeholder',stamp:'DANCE',caption:'07.19 · 双人共创舞'},left_intro:'从妆造判断这段共创舞大约拍于 07.18；07.19 是公开日。',time_anchors:[{label:'公开时间',value:'07.19',note:'confirmed。',tone:'pink'},{label:'推定拍摄时间',value:'约 07.18',note:'inferred / high。',tone:'yellow'}],real_timeline:[{date:'07.18?',title:'共创舞拍摄',text:'妆造推断。',soft:true,tag:'INFERRED HIGH'},{date:'07.19',title:'共创舞发布',text:'公开日。'}],left_note:'styled the day before? ✎',public_evidence:[{published_at:'2026-07-19',platform:'CO-CREATE',title:'双人共创舞',relation:'later public · inferred shot',text:'推定约 07.18 拍摄。',art:'video'}],reading_logic:'推定拍摄日与公开日分开显示。'},
    {key:'tie_posts_20260719',node_type:'public_post',chapter:'JUL 15C',layout_type:'paired_post_spread',evidence_mode:'same_day_public',title:'两人「贴贴」微博',short_title:'贴贴微博',tagline:'同日节点 ③ · 当日拍 / 当日发',priority:'P0',range:[19],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'贴贴',caption:'07.19 · “被”贴贴 / 贴贴“你”'},left_intro:'这组微博判断为当天拍摄、当天发布，因此可以把拍摄与公开都放在 07.19。',time_anchors:[{label:'拍摄时间',value:'07.19',note:'人工核对判断 confirmed。',tone:'yellow'},{label:'公开时间',value:'07.19',note:'same-day。',tone:'pink'}],real_timeline:[{date:'07.19',title:'拍摄并公开',text:'同日节点。'}],left_note:'same-day post ♡',public_evidence:[{published_at:'2026-07-19',platform:'WEIBO · 双人',title:'“被”贴贴 / 贴贴“你”',relation:'same-day public',text:'当日拍摄并发布。',art:'postcard'}],reading_logic:'能确认同日拍摄时，就不需要保留 unknown。'},
    {key:'rehearsal_post_20260719',node_type:'public_post',chapter:'JUL 15D',layout_type:'bts_spread',evidence_mode:'same_day_public',title:'首饰盒 · 排练视频',short_title:'排练视频',tagline:'同日节点 ④ · 排练拍摄日 unknown',priority:'P0',range:[19],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'REHEARSAL',caption:'07.19 · 排练视频公开'},left_intro:'视频在 07.19 公开，但实际排练 / 拍摄时间无法确认。',time_anchors:[{label:'公开时间',value:'07.19',note:'confirmed。',tone:'pink'},{label:'排练拍摄时间',value:'unknown',note:'不由公开日反推。',tone:'blue'}],real_timeline:[{date:'07.19',title:'排练视频公开',text:'公开节点。'}],left_note:'rehearsal date unknown ✎',public_evidence:[{published_at:'2026-07-19',platform:'小发夹的首饰盒',title:'认真练习每一句',relation:'same-day public node',text:'只锁公开日。',art:'video'}],reading_logic:'公开日期明确，实际排练时间继续 unknown。'},
    {key:'meeting_update_20260720',node_type:'public_post',chapter:'JUL 16',layout_type:'announcement_spread',evidence_mode:'same_day_public',title:'「宣你述说」见面会时间 / 场地变更公告',short_title:'见面会变更公告',tagline:'EVENT UPDATE · 指向 07.26',priority:'P0',range:[20],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'UPDATE',caption:'07.20 · 见面会信息变更'},left_intro:'这不是新的活动，而是 07.26 见面会的 event_update。',time_anchors:[{label:'公告时间',value:'07.20',note:'confirmed。',tone:'pink'},{label:'最终活动',value:'07.26 13:00 · Lido Connect Hall 3',note:'保存最终版本。',tone:'yellow'}],real_timeline:[{date:'07.20',title:'活动信息更新',text:'时间 / 场地变更。'},{date:'07.26',title:'见面会实际举行',text:'对应现实节点。',soft:true,tag:'TARGET EVENT'}],left_note:'update ≠ new event ✎',public_evidence:[{published_at:'2026-07-20',platform:'OFFICIAL NOTICE',title:'见面会变更公告',relation:'event_update',text:'指向 07.26 同一活动。',art:'postcard'}],reading_logic:'event_update 不重复创建现实活动。'},
    {key:'blackwhite_posts_20260721',node_type:'public_post',chapter:'JUL 17A',layout_type:'paired_post_spread',evidence_mode:'later_public',title:'「小黑和小白 / 小白和小黑」',short_title:'小黑小白',tagline:'同日节点 ① · 实拍 07.19',priority:'P0',range:[21],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'B&W',caption:'07.21 · 小黑和小白 / 小白和小黑'},left_intro:'两条微博在 07.21 公开，但实际拍摄可判断为 07.19。',time_anchors:[{label:'实际拍摄时间',value:'07.19',note:'人工核对确认。',tone:'yellow'},{label:'公开时间',value:'07.21',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.19',title:'素材拍摄',text:'现实生成。'},{date:'07.21',title:'双人微博公开',text:'later-public。',soft:true,tag:'LATER PUBLIC'}],left_note:'two days later ↩',public_evidence:[{published_at:'2026-07-21',platform:'WEIBO · 双人',title:'小黑和小白 / 小白和小黑',relation:'later public',text:'实际拍摄于 07.19。',art:'postcard'}],reading_logic:'same-month later-public 也按相同规则处理。'},
    {key:'gift_post_20260721',node_type:'public_post',chapter:'JUL 17B',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'首饰盒 · 专属于小发夹的礼物',short_title:'给小发夹的礼物',tagline:'同日节点 ② · 公开发布',priority:'P0',range:[21],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'GIFT',caption:'07.21 · 专属于小发夹的礼物'},left_intro:'公开日可锁，先作为独立 PUBLIC POST。',time_anchors:[{label:'公开时间',value:'07.21',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.21',title:'礼物内容公开',text:'公开节点。'}],left_note:'gift note ✦',public_evidence:[{published_at:'2026-07-21',platform:'小发夹的首饰盒',title:'专属于小发夹的礼物',relation:'same-day public',text:'公开节点。',art:'postcard'}],reading_logic:'没有必要强行给它补未知拍摄日。'},
    {key:'failed_live_20260722',node_type:'public_interaction',chapter:'JUL 18',layout_type:'interaction_spread',evidence_mode:'same_day_public',title:'随播失败版 · 网络太卡',short_title:'失败随播',tagline:'公开互动 · 直播未能继续',priority:'P0',range:[22],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BUFFER',caption:'07.22 · 因网络太卡无法继续'},left_intro:'首饰盒 01:56 明确说明本想聊天，但因网络太卡无法继续。',time_anchors:[{label:'发生 / 说明时间',value:'07.22 01:56',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.22',title:'短随播尝试失败',text:'网络原因无法继续。'}],left_note:'failed live is still a node ✦',public_evidence:[{published_at:'2026-07-22',platform:'小发夹的首饰盒',title:'本想跟大家聊聊天…',relation:'interaction proof',text:'网络太卡导致无法继续。',art:'postcard'}],reading_logic:'未成功完成的随播仍然是一段真实发生的公开互动。'},
    {key:'birthday_live_20260723_24',node_type:'real_event',chapter:'JUL 19',layout_type:'cross_midnight_spread',evidence_mode:'same_day_public',title:'法宣阁生日双人直播 / DR 礼物',short_title:'生日直播',tagline:'07.23 evening → 07.24 early AM',priority:'P0',range:[23,24],year:2026,status:'confirmed',date_precision:'range',confidence:'confirmed',hero:{type:'placeholder',stamp:'BDAY',caption:'07.23–24 · 生日双人直播'},left_intro:'生日直播跨过午夜，DR 礼物发生在 07.24 凌晨，因此不把所有事情压回 07.23。',time_anchors:[{label:'直播开始',value:'07.23 evening',note:'生日直播。',tone:'pink'},{label:'DR 礼物',value:'07.24 early AM',note:'跨午夜后的节点。',tone:'yellow'}],real_timeline:[{date:'07.23',title:'生日双人直播',text:'晚间开始。'},{date:'07.24 凌晨',title:'DR 礼物',text:'跨午夜发生。'}],left_note:'one night across two dates ♡',public_evidence:[{published_at:'2026-07-23',platform:'LIVE',title:'生日双人直播',relation:'cross midnight',text:'跨午夜现实节点。',art:'video'}],reading_logic:'跨午夜事件可以占据两个日期，但仍保持一个章节。'},
    {key:'stage_countdown_20260724',node_type:'public_post',chapter:'JUL 20',layout_type:'announcement_spread',evidence_mode:'same_day_public',title:'首饰盒 · 舞台倒计时',short_title:'舞台倒计时',tagline:'同日节点 · 演唱会前夜',priority:'P0',range:[24],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'T-1',caption:'07.24 · 舞台倒计时'},left_intro:'为 07.25 曼谷演唱会形成前夜公开节点。',time_anchors:[{label:'公开时间',value:'07.24',note:'confirmed。',tone:'pink'},{label:'对应活动',value:'07.25 演唱会',note:'次日现实节点。',tone:'yellow'}],real_timeline:[{date:'07.24',title:'舞台倒计时',text:'演唱会前夜公开。'}],left_note:'tomorrow on stage ✦',public_evidence:[{published_at:'2026-07-24',platform:'小发夹的首饰盒',title:'舞台倒计时',relation:'context of 07.25',text:'前夜公开节点。',art:'postcard'}],reading_logic:'前置宣传仍然和活动本体分开。'},
    {key:'concert_20260725',node_type:'real_event',chapter:'JUL 21A',layout_type:'stage_spread',evidence_mode:'same_day_public',title:'「宿命回响·双程」曼谷演唱会',short_title:'曼谷演唱会',tagline:'同日节点 ① · 现实舞台',priority:'P0',range:[25],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BKK LIVE',caption:'07.25 · 宿命回响·双程曼谷演唱会'},left_intro:'七月的大型现实舞台节点。',time_anchors:[{label:'活动日期',value:'07.25',note:'confirmed。',tone:'pink'},{label:'地点',value:'曼谷',note:'城市级。',tone:'yellow'}],real_timeline:[{date:'07.25',title:'曼谷演唱会',text:'现实活动。'}],left_note:'Bangkok stage ✦',public_evidence:[{published_at:'2026-07-25',platform:'LIVE EVENT',title:'宿命回响·双程曼谷演唱会',relation:'same-day public',text:'现实活动公开可见。',art:'video'}],reading_logic:'官宣在 07.06，现实活动本体在 07.25。'},
    {key:'concert_posts_20260725',node_type:'public_post',chapter:'JUL 21B',layout_type:'paired_post_spread',evidence_mode:'same_day_public',title:'两人出发图 / 首饰盒「红玫瑰和黑西装」',short_title:'演唱会当日公开',tagline:'同日节点 ② · 舞台相关发布',priority:'P0',range:[25],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'POST',caption:'07.25 · 演唱会当日公开内容'},left_intro:'活动当天还有两人出发图与首饰盒“红玫瑰和黑西装”等公开内容。',time_anchors:[{label:'公开时间',value:'07.25',note:'活动同日。',tone:'pink'}],real_timeline:[{date:'07.25',title:'舞台相关公开内容',text:'与现实演唱会同日并列。'}],left_note:'stage day posts ✦',public_evidence:[{published_at:'2026-07-25',platform:'WEIBO / 首饰盒',title:'出发图 / 红玫瑰和黑西装',relation:'same-day public',text:'活动同日公开。',art:'postcard'}],reading_logic:'现实活动与当日公开内容保持多节点。'},
    {key:'meeting_20260726',node_type:'real_event',chapter:'JUL 22',layout_type:'event_spread',evidence_mode:'same_day_public',title:'「宣你述说」曼谷双人见面会',short_title:'曼谷见面会',tagline:'最终 13:00 · Lido Connect Hall 3',priority:'P0',range:[26],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'MEET',caption:'07.26 · 宣你述说曼谷双人见面会'},left_intro:'现实活动在 07.26 举行；07.20 的时间 / 场地变更公告作为 event_update 指向这里。',time_anchors:[{label:'活动日期',value:'07.26',note:'confirmed。',tone:'pink'},{label:'最终信息',value:'13:00 · Lido Connect Hall 3',note:'保存变更后的版本。',tone:'yellow'}],real_timeline:[{date:'07.20',title:'event update',text:'场地 / 时间变更。',soft:true,tag:'UPDATE'},{date:'07.26',title:'曼谷双人见面会',text:'现实活动。'}],left_note:'updated, then met ✦',public_evidence:[{published_at:'2026-07-26',platform:'LIVE EVENT',title:'宣你述说双人见面会',relation:'event after update',text:'现实活动。',art:'video'}],reading_logic:'07.20 只更新信息，不创建第二个活动。'},
    {key:'material_shoot_20260727_28',node_type:'real_event',chapter:'JUL 23',layout_type:'shooting_spread',evidence_mode:'later_public',title:'外出物料拍摄',short_title:'外出物料拍摄',tagline:'07.27–28 · 后续视频 08.09',priority:'P0',range:[27,28],year:2026,status:'confirmed',date_precision:'range',confidence:'confirmed',hero:{type:'placeholder',stamp:'SHOOT',caption:'07.27–28 · 外出物料拍摄（素材后补）'},left_intro:'现实拍摄确认发生在 07.27–28；对应视频直到 08.09 才公开，因此这里新增 July → August 的 future relation。',time_anchors:[{label:'现实拍摄区间',value:'07.27–07.28',note:'confirmed range。',tone:'pink'},{label:'后续视频公开',value:'08.09',note:'August 尚未搭框架。',tone:'yellow'}],fact_memos:[{type:'pink',title:'下一层跨月：',text:'July 拍摄 → August 公开。'}],real_timeline:[{date:'07.27–28',title:'外出物料拍摄',text:'现实素材生成。'},{date:'08.09',title:'对应视频公开',text:'future later-public。',soft:true,tag:'AUGUST'}],left_note:'July shoot → August video ✦',future_relation:{month_key:'2026-08',month_label:'August 2026',title:'08.09 对应视频公开',status:'已确认公开日 / August 待搭',text:'这是下一阶段真正要接通的 July→August later-public；当前先显示 future relation，不虚构 August 页面。'},public_evidence:[{published_at:'2026-08-09',platform:'PUBLIC VIDEO',title:'对应外出物料视频公开',relation:'later public',text:'08.09 公开，回挂 07.27–28 拍摄。',art:'video'}],reading_logic:'第三个月开始向第四个月产生真实跨月关系，说明底层模型已经能够继续生长。'},
    {key:'jewelry_20260727',node_type:'public_post',chapter:'JUL 24',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'首饰盒 · 慢慢遇见所有美好',short_title:'慢慢遇见所有美好',tagline:'公开日 confirmed · 不强绑拍摄',priority:'P0',range:[27],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'BOX',caption:'07.27 · 慢慢遇见所有美好'},left_intro:'07.27 公开日可锁；虽然同日处在外出物料拍摄区间，但暂时不强行认定两者同源。',time_anchors:[{label:'公开时间',value:'07.27',note:'confirmed。',tone:'pink'},{label:'与外出拍摄关系',value:'not forced',note:'同日 ≠ 自动同源。',tone:'blue'}],real_timeline:[{date:'07.27',title:'公开内容',text:'独立 PUBLIC POST。'}],left_note:'same day ≠ same source ✎',public_evidence:[{published_at:'2026-07-27',platform:'小发夹的首饰盒',title:'慢慢遇见所有美好',relation:'same-day public node',text:'不强绑外出物料拍摄。',art:'postcard'}],reading_logic:'同日存在现实拍摄也不能自动认定所有发布都来自它。'},
    {key:'worknote_20260729',node_type:'public_post',chapter:'JUL 25A',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'首饰盒 · 滴～一则工作小记',short_title:'工作小记',tagline:'同日节点 ① · 公开发布',priority:'P0',range:[29],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'WORK',caption:'07.29 · 滴～一则工作小记'},left_intro:'公开日确认，先作为独立工作记录节点。',time_anchors:[{label:'公开时间',value:'07.29',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.29',title:'工作小记公开',text:'公开节点。'}],left_note:'work note ✦',public_evidence:[{published_at:'2026-07-29',platform:'小发夹的首饰盒',title:'滴～一则工作小记',relation:'same-day public',text:'公开节点。',art:'postcard'}],reading_logic:'先锁发布，不强行补拍摄时间。'},
    {key:'fresh_cover_20260729',node_type:'public_post',chapter:'JUL 25B',layout_type:'magazine_release_spread',evidence_mode:'same_day_public',title:'贺嘉述 Fresh 封面公开',short_title:'Fresh 封面',tagline:'同日节点 ② · 杂志公开',priority:'P0',range:[29],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'FRESH',caption:'07.29 · Fresh 封面公开'},left_intro:'杂志封面公开节点先按发布日落位；具体拍摄日后续若有证据再补。',time_anchors:[{label:'公开时间',value:'07.29',note:'confirmed。',tone:'pink'},{label:'拍摄时间',value:'unknown',note:'后续可再关联。',tone:'blue'}],real_timeline:[{date:'07.29',title:'Fresh 封面公开',text:'PUBLIC POST。'}],left_note:'cover release ✦',public_evidence:[{published_at:'2026-07-29',platform:'FRESH / WEIBO',title:'贺嘉述 Fresh 封面',relation:'same-day public node',text:'发布日明确。',art:'postcard'}],reading_logic:'杂志公开日不自动等于拍摄日。'},
    {key:'home_live_20260730',node_type:'real_event',chapter:'JUL 26A',layout_type:'live_spread',evidence_mode:'same_day_public',title:'双人居家直播 · 约 2h',short_title:'居家直播 2h',tagline:'同日节点 ① · 现实直播',priority:'P0',range:[30],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'2H LIVE',caption:'07.30 · 双人居家直播'},left_intro:'七月底的长时双人直播现实节点。',time_anchors:[{label:'直播日期',value:'07.30',note:'confirmed。',tone:'pink'},{label:'时长',value:'约 2 小时',note:'公开记录。',tone:'yellow'}],real_timeline:[{date:'07.30',title:'双人居家直播',text:'约 2 小时。'}],left_note:'long live ✦',public_evidence:[{published_at:'2026-07-30',platform:'LIVE',title:'双人居家直播',relation:'same-day public',text:'直播同步公开。',art:'video'}],reading_logic:'标准长时直播节点。'},
    {key:'cute_post_20260730',node_type:'public_post',chapter:'JUL 26B',layout_type:'daily_post_spread',evidence_mode:'same_day_public',title:'贺嘉述 · 我觉得此博主太可爱—法宣阁留',short_title:'太可爱—法宣阁留',tagline:'同日节点 ② · 公开发布',priority:'P0',range:[30],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'CUTE',caption:'07.30 · 我觉得此博主太可爱—法宣阁留'},left_intro:'同日直播之外的独立公开发布节点。',time_anchors:[{label:'公开时间',value:'07.30 22:10',note:'confirmed。',tone:'pink'}],real_timeline:[{date:'07.30',title:'微博公开',text:'同日多节点。'}],left_note:'same day post ♡',public_evidence:[{published_at:'2026-07-30',platform:'WEIBO · 贺嘉述',title:'我觉得此博主太可爱—法宣阁留',relation:'same-day public',text:'公开节点。',art:'postcard'}],reading_logic:'同日直播与微博分开。'},
    {key:'shortfilm_release_20260731',node_type:'public_post',chapter:'JUL 27',layout_type:'shortfilm_spread',evidence_mode:'same_day_public',title:'双人短片上线 / 两人同步微博',short_title:'双人短片上线',tagline:'公开日 confirmed · 拍摄日先 unknown',priority:'P0',range:[31],year:2026,status:'confirmed',date_precision:'exact',confidence:'confirmed',hero:{type:'placeholder',stamp:'FILM',caption:'07.31 · 双人短片上线'},left_intro:'两人 17:20 同步内容可以锁定为 07.31 的公开节点；短片实际拍摄日期暂时不据此推断。',time_anchors:[{label:'公开时间',value:'07.31 17:20',note:'两人同步。',tone:'pink'},{label:'实际拍摄时间',value:'unknown',note:'等待后续关系确认。',tone:'blue'}],real_timeline:[{date:'07.31',title:'双人短片上线 / 同步微博',text:'公开节点。'}],left_note:'release now, shoot unknown ✎',public_evidence:[{published_at:'2026-07-31',platform:'WEIBO / SHORT FILM',title:'双人短片上线',relation:'same-day public node',text:'公开日明确。',art:'video'}],reading_logic:'先锁公开日期；若以后确认拍摄来源，再建立 later-public 关系。'}
  ],
  public_archive:[]
};

const monthStore = {'2026-05':mayData,'2026-06':juneData,'2026-07':julyData};
const monthOrder = ['2026-05','2026-06','2026-07'];
let currentMonthKey='2026-05';
let currentEventKey=mayData.events[0].key;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = (s='') => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtMonthDay = v => (!v || v==='待补' || !String(v).includes('-')) ? v : `${String(v).split('-')[1]}.${String(v).split('-')[2]}`;
const rangeLabel = evt => evt.range.length>1 ? `${String(evt.range[0]).padStart(2,'0')}–${String(evt.range.at(-1)).padStart(2,'0')}` : String(evt.range[0]).padStart(2,'0');
const currentData = () => monthStore[currentMonthKey];
const allEvents = () => monthOrder.flatMap(k=>monthStore[k].events.map(e=>({...e,month_key:k})));
const findEvent = key => allEvents().find(e=>e.key===key);

function monthLabel(k){const d=monthStore[k];return `${d.meta.name.toUpperCase()} ${d.meta.year}`;}
function spread(mode){$$('.spread-view').forEach(v=>v.classList.toggle('hidden',v.dataset.spread!==mode));$$('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.view===mode));window.scrollTo({top:0,behavior:'smooth'});}
function countMediaAssets(data){let n=0;data.events.forEach(e=>{if(e.hero?.type==='image')n++;if(e.gallery)n+=e.gallery.length;});return n;}
function eventStatusHtml(e){
  const bits=[];
  if(e.date_precision && e.date_precision!=='exact') bits.push(`<span class="${e.date_precision==='inferred'?'inferred':'draft'}">${esc(e.date_precision.toUpperCase())}</span>`);
  if(e.status==='draft') bits.push('<span class="draft">DRAFT</span>');
  else if(e.status==='confirmed') bits.push('<span class="confirmed">CONFIRMED</span>');
  if(e.confidence && !['confirmed'].includes(e.confidence)) bits.push(`<span>${esc(String(e.confidence).toUpperCase())}</span>`);
  return bits.length?`<div class="status-line">${bits.join('')}</div>`:'';
}

function crossMonthEchoesForDay(day){
  const data=currentData();
  const target=`${currentMonthKey}-${String(day).padStart(2,'0')}`;
  return allEvents().filter(e=>e.month_key!==currentMonthKey).flatMap(e=>(e.public_evidence||[]).filter(p=>String(p.published_at||'').startsWith(target)).map(p=>({source:e,post:p})));
}

function renderMonthHeader(){
  const data=currentData(),m=data.meta;
  $('#monthNum').textContent=m.num;$('#monthName').textContent=m.name;$('#monthYear').textContent=m.year;$('#monthLead').textContent=m.lead;$('#monthRule').textContent=m.rule;$('#cornerNote').textContent=m.corner;
  $('#monthRightTitle').textContent=m.rightTitle;$('#monthIntroTitle').textContent=m.introTitle;$('#monthIntroText').textContent=m.introText;$('#chapterTitle').textContent=m.chapterTitle;
  $('#eventCount').textContent=data.events.length;$('#archiveCount').textContent=data.public_archive.length;$('#mediaCount').textContent=countMediaAssets(data);
  $('#monthTabs').innerHTML=monthOrder.map(k=>`<button class="month-tab ${k===currentMonthKey?'active':''}" data-month="${k}">${monthStore[k].meta.name} <small>${monthStore[k].meta.num}</small></button>`).join('');
  $$('#monthTabs [data-month]').forEach(b=>b.onclick=()=>switchMonth(b.dataset.month));
  const idx=monthOrder.indexOf(currentMonthKey);$('#prevMonth').disabled=idx===0;$('#nextMonth').disabled=idx===monthOrder.length-1;
  const turn=$('#chapterTurn');
  if(idx<monthOrder.length-1){const next=monthOrder[idx+1];turn.classList.remove('hidden');turn.textContent=`NEXT CHAPTER → ${monthStore[next].meta.name.toUpperCase()}`;turn.onclick=()=>switchMonth(next);}
  else {turn.classList.add('hidden');}
  renderMonthSpecial();
}

function renderMonthSpecial(){
  const box=$('#monthSpecial');
  if(currentMonthKey==='2026-05'){
    box.innerHTML=`<article class="special-card"><b>May = 第一套样板</b><span>五月继续作为已验证过的基准月份。</span></article><article class="special-card echo"><b>跨月 later-public 已接通</b><span>五月产生的 later-public 可以在六月 / 七月继续留下回声。</span></article>`;
  } else if(currentMonthKey==='2026-06'){
    box.innerHTML=`<article class="special-card inferred"><b>June = 跨月素材源</b><span>06.08 V中文、06.10 杂志拍摄、06.11 露营素材、06.25–27 青岛拍摄现在都已向 July 建立后续公开关系。</span></article><article class="special-card echo"><b>Cross-month source · 来源月份</b><span>六月不只是压力测试月份，它现在开始真正承担“素材在这里拍、下个月才公开”的现实时间主轴。</span></article>`;
  } else {
    box.innerHTML=`<article class="special-card inferred"><b>July = 第三个月贯通</b><span>七月把 June 的多个现实拍摄节点接回来，同时继续验证同日多节点、跨午夜和 event update。</span></article><article class="special-card echo"><b>July → August 已出现</b><span>07.27–28 外出物料拍摄对应 08.09 视频公开；August 尚未搭框架，因此先保留 future relation。</span></article>`;
  }
}

function switchMonth(key){
  if(!monthStore[key]||key===currentMonthKey)return;
  currentMonthKey=key;currentEventKey=currentData().events[0]?.key||'';
  renderMonthHeader();renderCalendar();renderChapterRail();renderArchive();
  spread('month');
}

function daysInMonth(y,m){return new Date(y,m,0).getDate();}
function mondayOffset(y,m){return (new Date(y,m-1,1).getDay()+6)%7;}

function renderCalendar(){
  const data=currentData(),cal=$('#calendar'),{year,month}=data.month;
  cal.innerHTML=['MON','TUE','WED','THU','FRI','SAT','SUN'].map(x=>`<div class="weekday">${x}</div>`).join('');
  for(let i=0;i<mondayOffset(year,month);i++)cal.insertAdjacentHTML('beforeend','<div class="day blank"></div>');
  const archiveByDay=Object.fromEntries(data.public_archive.map(a=>[parseInt(String(a.published_at).split('-')[2]),a]));
  for(let d=1;d<=daysInMonth(year,month);d++){
    const matches=data.events.filter(e=>e.range.includes(d));
    const echoes=crossMonthEchoesForDay(d);
    const echoHtml=echoes.length?`<span class="echo-badge">↩ ${monthStore[echoes[0].source.month_key].meta.name} · ${esc(echoes[0].source.short_title)}</span>`:'';
    if(matches.length===1){
      const e=matches[0],n=nodeTypeConfig[e.node_type]||nodeTypeConfig.public_post;
      const status=(e.status==='draft'||e.date_precision==='inferred')?`<span class="status-badge">${e.date_precision==='inferred'?'INFERRED':'DRAFT'}</span>`:'';
      cal.insertAdjacentHTML('beforeend',`<button class="day has-p0 has-template" data-event="${e.key}"><time>${String(d).padStart(2,'0')}</time><span class="mark p0">${n.letter}</span><label>${esc(e.short_title)}</label>${status}${echoHtml}</button>`);
    } else if(matches.length>1){
      cal.insertAdjacentHTML('beforeend',`<div class="day multi-day has-template"><time>${String(d).padStart(2,'0')}</time><span class="multi-count">${matches.length} nodes</span><div class="node-stack">${matches.map(e=>{const n=nodeTypeConfig[e.node_type]||nodeTypeConfig.public_post;return `<button data-event="${e.key}" class="mini-node node-${e.node_type}"><b>${n.letter}</b>${esc(e.short_title)}</button>`;}).join('')}</div>${echoHtml}</div>`);
    } else if(archiveByDay[d]){
      cal.insertAdjacentHTML('beforeend',`<button class="day archive-only" data-archive-day="${d}"><time>${String(d).padStart(2,'0')}</time><span class="mark archive">A</span><label>${esc(archiveByDay[d].title)}</label>${echoHtml}</button>`);
    } else if(echoes.length){
      cal.insertAdjacentHTML('beforeend',`<div class="day"><time>${String(d).padStart(2,'0')}</time>${echoHtml}</div>`);
    } else cal.insertAdjacentHTML('beforeend',`<button class="day"><time>${String(d).padStart(2,'0')}</time></button>`);
  }
  $$('#calendar [data-event]').forEach(btn=>btn.onclick=()=>{currentEventKey=btn.dataset.event;renderChapterRail();renderDaySpread();spread('day');});
  $$('#calendar [data-archive-day]').forEach(btn=>btn.onclick=()=>spread('public'));
}

function renderChapterRail(){
  const data=currentData();
  $('#chapterRail').innerHTML=data.events.map(e=>{const m=modeConfig[e.evidence_mode],n=nodeTypeConfig[e.node_type]||nodeTypeConfig.public_post;return `<button class="chapter-card ${e.key===currentEventKey?'active':''}" data-event="${e.key}"><div class="chapter-badge"><div><b>${rangeLabel(e)}</b><small>${data.meta.name.toUpperCase()} ${data.meta.year}</small></div></div><h4>${esc(e.title)}</h4><p>${esc(e.tagline)}</p><div class="chapter-meta"><span>${esc(e.chapter)}</span><span class="node-mini">${esc(n.short)}</span><span class="mode-pill">${esc(m.cardLabel)}</span></div>${eventStatusHtml(e)}<span class="view-arrow">翻到这一页 →</span></button>`;}).join('');
  $$('.chapter-card').forEach(card=>card.onclick=()=>{currentEventKey=card.dataset.event;renderChapterRail();renderDaySpread();spread('day');});
}

function renderHero(h){if(h?.type==='image')return `<figure class="polaroid"><span class="photo-tape"></span><img src="${h.src}" alt="${esc(h.caption)}"><figcaption>${esc(h.caption)}</figcaption></figure>`;return `<figure class="polaroid"><span class="photo-tape"></span><div class="fake-photo"><div><b>${esc(h?.stamp||'NOTE')}</b><span>${esc(h?.caption||'')}</span></div></div><figcaption>${esc(h?.caption||'placeholder')}</figcaption></figure>`;}
function renderGallery(g=[]){return !g.length?'':`<div class="gallery-strip">${g.map(i=>`<figure class="gallery-photo"><img src="${i.src}" alt="${esc(i.caption)}"><figcaption>${esc(i.caption)}</figcaption></figure>`).join('')}</div>`;}
function renderTimeAnchors(a=[]){return !a.length?'':`<div class="time-anchors">${a.map(i=>`<div class="time-anchor tone-${i.tone||'pink'}"><div class="ta-label">${esc(i.label)}</div><div class="ta-value">${esc(i.value)}${i.note?`<span class="ta-note">${esc(i.note)}</span>`:''}</div></div>`).join('')}</div>`;}
function renderMemos(a=[]){return a.map(m=>`<div class="memo memo-${m.type||'pink'}"><b>${esc(m.title)}</b><span>${esc(m.text)}</span></div>`).join('');}
function renderTimeline(a=[]){return a.map(i=>`<div class="${i.soft?'soft':''}"><time>${esc(i.date)}</time><p><b>${esc(i.title)}</b><br>${esc(i.text)}</p>${i.tag?`<span>${esc(i.tag)}</span>`:''}</div>`).join('');}
function evidenceArt(type){return type==='postcard'?`<div class="postcard-art"><div><span>PUBLIC</span><i>record note</i><em>♡</em></div></div>`:`<div class="faux-video"><div><span>▶</span><small>PUBLIC CLIP</small></div></div>`;}
function renderEvidence(a=[]){return !a.length?`<div class="no-evidence"><b>这页暂时没有更多公开记录。</b><span>框架先保留，后面补素材时再继续长出来。</span></div>`:a.map(i=>`<article class="evidence-card"><span class="pin">●</span><div class="e-date"><b>${esc(fmtMonthDay(i.published_at)||i.published_at)}</b><small>${esc(i.platform)}</small></div>${evidenceArt(i.art)}<h3>${esc(i.title)}</h3><p>${esc(i.text)}</p><footer><b>${esc(i.relation)}</b></footer></article>`).join('');}
function renderContextBox(b){return !b?'':`<div class="context-box"><div class="context-head"><small>${esc(b.small)}</small><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></div><div class="source-grid">${(b.items||[]).map(i=>`<div class="source-item"><b>${esc(i.label)}</b><span>${esc(i.value)}</span></div>`).join('')}</div>${b.note?`<div class="context-note">${esc(b.note)}</div>`:''}</div>`;}
function sameDayNeighbors(evt){return currentData().events.filter(e=>e.key!==evt.key&&e.range.some(d=>evt.range.includes(d)));}
function renderSameDayLinks(evt){const peers=sameDayNeighbors(evt);if(!peers.length)return '';return `<div class="same-day-box"><small>SAME DAY / OVERLAP · 同日还有</small><div>${peers.map(e=>`<button data-peer="${e.key}">${esc((nodeTypeConfig[e.node_type]||nodeTypeConfig.public_post).short)} · ${esc(e.short_title)}</button>`).join('')}</div></div>`;}
function crossMonthEvidenceForEvent(evt){
  const links=[];
  for(const e of allEvents()){for(const p of (e.public_evidence||[])){if(String(p.published_at||'').startsWith(currentMonthKey)&&e.month_key!==currentMonthKey&&evt.range.includes(parseInt(String(p.published_at).split('-')[2])))links.push({source:e,post:p});}}
  if(!links.length)return '';
  const l=links[0];return `<div class="cross-month-box day-echo"><b>↩ 同日另有跨月公开回声 · 来自 ${monthStore[l.source.month_key].meta.name}</b><span>${esc(l.source.title)} 的一条后续公开记录恰好发生在本月这一天。它和当前页面只是“同日共存”，不代表两件事彼此相关。</span><button data-cross-source="${l.source.key}" data-cross-month="${l.source.month_key}">查看这条跨月公开的来源章节 →</button></div>`;
}
function renderFutureRelation(evt){
  const f=evt.future_relation;if(!f)return '';
  return `<div class="future-relation-box"><b>→ 当前节点自己的后续公开：${esc(f.month_label)}</b><span>${esc(f.title)} · ${esc(f.status)}。${esc(f.text)}</span></div>`;
}

function stepEvent(delta){const arr=currentData().events,idx=arr.findIndex(e=>e.key===currentEventKey);currentEventKey=arr[(idx+delta+arr.length)%arr.length].key;renderChapterRail();renderDaySpread();}

function renderDaySpread(){
  const e=findEvent(currentEventKey);if(!e)return;
  const data=currentData(),m=modeConfig[e.evidence_mode],n=nodeTypeConfig[e.node_type]||nodeTypeConfig.public_post;
  $('#dayLeft').innerHTML=`<div class="day-layout"><div class="back-row"><button class="back-btn" id="backToMonth">← ${data.meta.name} 总览</button><span class="chapter-pill">${esc(e.chapter)} · ${esc(e.layout_type)}</span></div><div class="chapter-stamp"><span>${esc(e.chapter)}</span><b>${esc(e.short_title)}</b></div><div class="event-date"><b>${String(e.range[0]).padStart(2,'0')}</b><span>${e.range.length>1?`${String(e.range.at(-1)).padStart(2,'0')}<br>`:''}<i>${e.year}</i></span></div><div class="hand-title"><span class="node-pill">${esc(n.chip)}<small>${esc(n.zh)}</small></span>${eventStatusHtml(e)}<h2>${esc(e.title)}</h2><p>${esc(e.left_intro)}</p></div>${renderSameDayLinks(e)}${renderHero(e.hero)}${renderGallery(e.gallery)}${renderTimeAnchors(e.time_anchors)}${renderMemos(e.fact_memos)}<div class="mini-timeline">${renderTimeline(e.real_timeline)}</div><div class="scribble">${esc(e.left_note||'')}</div><div class="event-links"><button class="nav-btn" id="prevEvent">← 上一页</button><button class="nav-btn" id="nextEvent">下一页 →</button></div></div>`;
  $('#dayRight').innerHTML=`<div class="day-layout"><div class="later-title"><small>${esc(m.small)}</small><h2>${esc(m.heading)}</h2><p>${esc(e.reading_logic)}</p></div><div class="mode-summary"><b>${esc(m.cardLabel)}</b><span>${esc(m.summary)}</span><br><em>${esc(m.chip)}</em></div><div class="quick-jump"><button data-jump="month">回 ${data.meta.name} 总览</button><button data-jump="public">看本月公开档案</button></div>${renderFutureRelation(e)}${crossMonthEvidenceForEvent(e)}${renderContextBox(e.context_box)}<div class="thread"><i></i><i></i><i></i></div>${renderEvidence(e.public_evidence)}<div class="logic-note"><span>✎</span><p><b>这页的阅读逻辑：</b><br>${esc(e.reading_logic)}</p></div><div class="stamp-round">${data.meta.name.toUpperCase()}<br>LOG</div></div>`;
  $('#backToMonth').onclick=()=>spread('month');$('#prevEvent').onclick=()=>stepEvent(-1);$('#nextEvent').onclick=()=>stepEvent(1);
  $$('#dayLeft [data-peer]').forEach(btn=>btn.onclick=()=>{currentEventKey=btn.dataset.peer;renderChapterRail();renderDaySpread();});
  $$('#dayRight [data-jump]').forEach(btn=>btn.onclick=()=>spread(btn.dataset.jump));
  $$('#dayRight [data-cross-source]').forEach(btn=>btn.onclick=()=>{switchMonth(btn.dataset.crossMonth);currentEventKey=btn.dataset.crossSource;renderChapterRail();renderDaySpread();spread('day');});
}

function renderArchive(){
  const data=currentData();
  $('#archiveLeft').innerHTML=`<header class="archive-head"><small>PUBLIC ARCHIVE · ${data.meta.name.toUpperCase()}</small><h2>先收好，<br>不急着塞回现实日期。</h2></header><div class="archive-envelope"><span class="seal">⌁</span><p>${data.public_archive.length?`本月还有 ${data.public_archive.length} 条尚未稳妥归位的公开碎片。`:'本月目前没有额外 archive-only 条目；这不代表以后不会新增。'}</p><ul><li>知道“什么时候发”不等于知道“什么时候拍”</li><li>互动节点可独立存在</li><li>later-public 可跨月回挂</li></ul></div>`;
  $('#archiveRight').innerHTML=`<header class="ribbon"><small>PUBLIC ARCHIVE · ${data.meta.name.toUpperCase()}</small><h2>${data.public_archive.length?'只留下当前仍不能稳妥归位的碎片。':'当前没有必须留在档案袋里的条目。'}</h2></header><div class="archive-stack">${data.public_archive.length?data.public_archive.map(i=>`<article class="archive-card"><time>${esc(fmtMonthDay(i.published_at))}</time><span class="platform">${esc(i.platform)}</span><h4>${esc(i.title)}</h4><p>${esc(i.text)}</p></article>`).join(''):`<article class="archive-card"><time>—</time><span class="platform">EMPTY FOR NOW</span><h4>这一页先留白</h4><p>如果后续出现“发布时间明确、真实发生时间未知”的六月内容，就继续放进这里。</p></article>`}</div><div class="archive-rule"><b>V0.8.2 的关键：</b>公开档案现在也是按月份切换的；later-public 关系则允许跨月份链接，不需要把所有东西塞在同一个月。</div>`;
}

$('#openBook').onclick=()=>{
  const c=$('#closed'),o=$('#opened');
  c.classList.add('opening');
  setTimeout(()=>{
    c.classList.add('hidden');
    o.classList.remove('hidden');
    // 先把书页显示出来，再做动态渲染；即使后续某个节点数据报错，也不会只剩空白背景。
    o.classList.add('revealed');
    try{
      renderAllMonth();
      spread('month');
    }catch(err){
      console.error('V0.8.2 render error:',err);
      const rail=$('#chapterRail');
      if(rail) rail.innerHTML='<article class="no-evidence"><b>页面渲染遇到错误</b><span>书页已正常打开，请检查控制台中的数据错误。</span></article>';
    }
  },480);
};
$('#seeCurrentEvent').onclick=()=>{renderDaySpread();spread('day');};
$('#prevMonth').onclick=()=>{const i=monthOrder.indexOf(currentMonthKey);if(i>0)switchMonth(monthOrder[i-1]);};
$('#nextMonth').onclick=()=>{const i=monthOrder.indexOf(currentMonthKey);if(i<monthOrder.length-1)switchMonth(monthOrder[i+1]);};
$$('.tabs button').forEach(btn=>btn.onclick=()=>{if(btn.dataset.view==='day')renderDaySpread();if(btn.dataset.view==='public')renderArchive();spread(btn.dataset.view);});

function renderAllMonth(){renderMonthHeader();renderCalendar();renderChapterRail();renderArchive();}
renderAllMonth();
