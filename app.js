(() => {
  const data = window.TIMELINE_DATA || { stats:{}, experience_timeline:[], release_timeline:[] };
  const mediaAssets = Array.isArray(window.MEDIA_ASSETS) ? window.MEDIA_ASSETS : [];
  const allEvents = [...(data.experience_timeline || [])].sort((a,b) => new Date(a.occurred_at_start) - new Date(b.occurred_at_start));
  const publicInteractions = [...(data.public_interactions || [])].sort((a,b) => new Date(a.occurred_at) - new Date(b.occurred_at));
  const interactionById = new Map(publicInteractions.map(item => [item.interaction_id, item]));

  const chapters = Array.isArray(window.ARCHIVE_CHAPTERS) && window.ARCHIVE_CHAPTERS.length
    ? window.ARCHIVE_CHAPTERS.map(ch => ({
        ...ch,
        eventFilter: ch.month_prefix
          ? (e => String(e.occurred_at_start || '').startsWith(ch.month_prefix))
          : (() => false)
      }))
    : [
        {id:'part-01',part:'PART 01',range:'10.10 — 杀青',short:'10.10—杀青',title:'第一章',theme:'主题待定',phase:'planned',color:'pink',description:'章节结构先保留，事件与证据后续统一核验。',eventFilter:()=>false},
        {id:'part-02',part:'PART 02',range:'杀青后 — 剧播前',short:'杀青后—剧播前',title:'第二章',theme:'主题待定',phase:'planned',color:'gold',description:'章节结构先保留，事件与证据后续统一核验。',eventFilter:()=>false},
        {id:'part-03',part:'PART 03',range:'2026 · 05',short:'五月',title:'五月',theme:'主题待定',phase:'working',color:'pink',description:'五月试做章。',eventFilter:e=>String(e.occurred_at_start||'').startsWith('2026-05')},
        {id:'part-04',part:'PART 04',range:'2026 · 06',short:'六月',title:'六月',theme:'当前示范章',phase:'ready',color:'gold',description:'六月是目前最完整的试验章。',eventFilter:e=>String(e.occurred_at_start||'').startsWith('2026-06')},
        {id:'part-05',part:'PART 05',range:'2026 · 07',short:'七月',title:'七月',theme:'主题待定',phase:'working',color:'pink',description:'七月先建立章节框架。',eventFilter:e=>String(e.occurred_at_start||'').startsWith('2026-07')}
      ];

  let view = 'hub';
  let activeChapter = null;
  let activeEvents = [];
  let spreads = [{kind:'hub'}];
  let current = 0;
  let mobileSide = 'left';
  let flipping = false;

  const $ = s => document.querySelector(s);
  const landing = $('#landing');
  const reader = $('#reader');
  const spread = $('#spread');
  const leftPage = $('#leftPage');
  const rightPage = $('#rightPage');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  const railTrack = $('#railTrack');
  const pageCounter = $('#pageCounter');
  const rangeLabel = $('#rangeLabel');
  const drawer = $('#postDrawer');
  const drawerList = $('#drawerList');
  const drawerTitle = $('#drawerTitle');
  const indexDialog = $('#indexDialog');
  const indexList = $('#indexList');
  const mobileTabs = $('#mobileTabs');
  const indexBtn = $('#indexBtn');
  const chaptersBtn = $('#chaptersBtn');

  function isInteractionEvent(event) {
    return event?.event_type === 'online_interaction';
  }

  function interactionDate(item) {
    return String(item?.occurred_at || '').slice(0,10);
  }

  function interactionsForChapter(ch) {
    if (!ch) return [];
    const prefix = ch.month_prefix || (ch.id === 'part-03' ? '2026-05' : ch.id === 'part-04' ? '2026-06' : ch.id === 'part-05' ? '2026-07' : '');
    if (!prefix) return [];
    return publicInteractions.filter(item => String(item.occurred_at || '').startsWith(prefix));
  }

  function eventsForChapter(ch) {
    return allEvents
      .filter(ch.eventFilter)
      .filter(event => !isInteractionEvent(event))
      .sort((a,b) => new Date(a.occurred_at_start) - new Date(b.occurred_at_start));
  }

  function isAttachedInteraction(item) {
    const links = Array.isArray(item?.event_links) ? item.event_links : [];
    if (links.some(link => {
      const event = allEvents.find(e => e.event_id === link.event_id);
      return event && !isInteractionEvent(event);
    })) return true;
    if (links.length) return false;
    return Boolean(hostEventForDate(interactionDate(item)));
  }

  function standaloneInteractionsForChapter(ch) {
    return interactionsForChapter(ch).filter(item => !isAttachedInteraction(item));
  }

  function chapterTimelineItems(ch) {
    const eventItems = eventsForChapter(ch).map(event => ({kind:'event', date:String(event.occurred_at_start || ''), event}));
    const interactionItems = standaloneInteractionsForChapter(ch).map(interaction => ({kind:'interaction', date:String(interaction.occurred_at || ''), interaction}));
    return [...eventItems, ...interactionItems].sort((a,b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      if (da !== db) return da - db;
      if (a.kind !== b.kind) return a.kind === 'event' ? -1 : 1;
      return 0;
    });
  }

  function setChapterTheme(ch) {
    document.body.dataset.chapter = ch ? ch.id : 'hub';
  }

  function chapterStatus(ch) {
    const count = eventsForChapter(ch).length;
    const interactionCount = interactionsForChapter(ch).length;
    if (ch.phase === 'planned') return '框架已建 · 内容待整理';
    if (ch.id === 'part-03' && ch.phase === 'ready') return `${count} 个主轴节点 · ${interactionCount} 条公开互动`;
    if (ch.phase === 'ready') return `${count} 个现有现实节点 · 已完成一轮整理`;
    return `${count} 个现有现实节点 · 待完整反推`;
  }

  function openChapter(chapterId) {
    const ch = chapters.find(item => item.id === chapterId);
    if (!ch) return;
    activeChapter = ch;
    activeEvents = eventsForChapter(ch);
    spreads = [{kind:'chapter', chapter:ch}, ...activeEvents.map(event => ({kind:'event', event}))];
    view = 'chapter';
    current = 0;
    mobileSide = 'left';
    setChapterTheme(ch);
    render({preserveSide:true});
  }

  function openHub() {
    activeChapter = null;
    activeEvents = [];
    spreads = [{kind:'hub'}];
    view = 'hub';
    current = 0;
    mobileSide = 'left';
    setChapterTheme(null);
    render({preserveSide:true});
  }

  const isMobile = () => window.innerWidth <= 820;
  const pad = n => String(n).padStart(2,'0');
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const cleanText = text => (text || '').replace(/\s+/g,' ').trim();
  const fmtShort = value => {
    if (!value) return '';
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? value : `${pad(d.getMonth()+1)}.${pad(d.getDate())}`;
  };
  const fmtYearDate = value => {
    if (!value) return '';
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? value : `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())}`;
  };

  function displayEventDate(event) {
    const start = event.occurred_at_start;
    const end = event.occurred_at_end;
    const prefix = event.date_precision === 'inferred' ? '约 ' : '';
    if (end && end !== start) return `${prefix}${fmtYearDate(start)} — ${fmtShort(end)}`;
    return `${prefix}${fmtYearDate(start)}`;
  }

  function precisionLabel(event) {
    if (event.date_precision === 'inferred') return ['推定时间','inferred'];
    if (event.date_precision === 'range') return ['日期范围','range'];
    return ['精确日期','exact'];
  }

  function confidenceLabel(value) {
    if (value === 'confirmed') return '已确认';
    if (value === 'high') return '较高可信度';
    if (value === 'medium_high') return '较高可信度 · 待补官方源';
    if (value === 'medium') return '中等可信度';
    if (value === 'low') return '低可信度';
    return value || '未标注';
  }

  function typeLabel(value) {
    const map = {
      magazine:'杂志拍摄', shooting:'拍摄', live:'直播', live_trip:'出行 · 直播', concert:'演出', travel:'出行',
      private_itinerary:'私人行程', public_milestone:'公开里程碑', personal_milestone:'个人节点', music_release:'音乐上线',
      online_interaction:'线上互动', offline_event:'线下活动', public_moment:'公开日常',
      daily:'日常', interview:'采访', social:'公开记录', other:'档案节点', event:'事件'
    };
    return map[value] || value || '事件';
  }

  function eventMode(event) {
    if (event?.display_mode) return event.display_mode;
    const tags = event?.tags || [];
    const explicit = tags.find(t => typeof t === 'string' && t.startsWith('display:'));
    if (explicit) return explicit.split(':',2)[1];
    if (tags.includes('clue')) return 'evidence';
    if (event?.event_type === 'live') return 'live_record';
    if (tags.includes('original_post')) return 'original_post';
    if (linkedPosts(event).length) return 'dual_time';
    return 'experience_only';
  }

  function linkedPosts(event) {
    if (Array.isArray(event.linked_posts)) return [...event.linked_posts].sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
    const id = event.event_id;
    return (data.release_timeline || []).filter(p => (p.linked_event_ids || []).includes(id)).sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
  }

  function assetsFor(event, roles=null) {
    return mediaAssets
      .filter(a => a.event_id === event.event_id && a.local_path && (!roles || roles.includes(a.display_role || 'gallery')))
      .sort((a,b) => (Number(a.sort_order)||0) - (Number(b.sort_order)||0));
  }

  function fallbackImages(event) {
    const urls = [];
    for (const p of linkedPosts(event)) {
      for (const u of (p.image_urls || [])) {
        if (u && !urls.some(item => item.local_path === u)) urls.push({local_path:u, caption:'关联公开物料', asset_type:'image', remote:true});
        if (urls.length >= 3) return urls;
      }
    }
    return urls;
  }

  function platformChip(platform) {
    return `<span class="platform ${esc(platform)}">${esc(platform)}</span>`;
  }

  function releaseItem(post) {
    const text = cleanText(post.text || post.title || '无公开文案');
    const href = post.post_url ? `href="${esc(post.post_url)}" target="_blank" rel="noreferrer"` : '';
    return `<div class="release-item">
      <div class="release-date">${esc(fmtShort(post.published_at))}<br>${esc((post.published_at||'').slice(0,4))}</div>
      <div class="release-card">
        <a ${href}>
          <div class="platform-row">${platformChip(post.platform)}<span class="owner">${esc(post.owner || '')}</span></div>
          <div class="release-text">${esc(text)}</div>
        </a>
      </div>
    </div>`;
  }

  function interactionSourceLink(item, label='查看整理来源 ↗') {
    const href = item?.source_url || item?.source_post_url;
    return href ? `<a class="interaction-source" href="${esc(href)}" target="_blank" rel="noreferrer">${esc(label)}</a>` : '';
  }

  function interactionMeta(item) {
    const participants = Array.isArray(item?.participants) ? item.participants.join('、') : '';
    const platform = cleanText(item?.platform || 'PUBLIC');
    return [platform, participants].filter(Boolean).join(' · ');
  }

  function interactionCard(item, {sticker=false} = {}) {
    if (!item) return '';
    const cls = sticker ? 'interaction-card interaction-sticker' : 'interaction-card';
    const summary = cleanText(item.summary || '公开互动记录。');
    return `<button class="${cls}" type="button" data-open-interaction="${esc(item.interaction_id)}">
      <span class="interaction-kicker">PUBLIC INTERACTION · ${esc(fmtShort(item.occurred_at))}</span>
      <strong>${esc(item.title || '公开互动')}</strong>
      <small>${esc(interactionMeta(item))}</small>
      <p>${esc(summary)}</p>
      <i>展开记录 ↗</i>
    </button>`;
  }

  function hostEventForDate(date) {
    return allEvents
      .filter(event => !isInteractionEvent(event) && String(event.occurred_at_start || '').slice(0,10) === date)
      .sort((a,b) => new Date(a.occurred_at_start) - new Date(b.occurred_at_start))[0] || null;
  }

  function interactionsForEvent(event) {
    const eventId = event?.event_id;
    const date = String(event?.occurred_at_start || '').slice(0,10);
    if (!eventId || !date) return [];
    return publicInteractions.filter(item => {
      const links = Array.isArray(item.event_links) ? item.event_links : [];
      if (links.some(link => link.event_id === eventId)) return true;
      if (links.length) return false;
      if (interactionDate(item) !== date) return false;
      const host = hostEventForDate(date);
      return host?.event_id === eventId;
    });
  }

  function interactionNotes(event) {
    const items = interactionsForEvent(event);
    if (!items.length) return '';
    return `<section class="event-interactions">
      <div class="event-interactions-label">PUBLIC INTERACTION · 公开互动旁注</div>
      <div class="event-interactions-grid">${items.map((item,i)=>interactionCard(item,{sticker:i===0})).join('')}</div>
    </section>`;
  }

  function mediaFigure(asset, i=0, compact=false) {
    const cls = compact ? 'source-media-card' : `memory-photo photo-${i+1}`;
    const tape = compact ? '' : `<span class="tape tape-${i+1}"></span>`;
    const caption = asset.caption ? `<figcaption>${esc(asset.caption)}</figcaption>` : '';
    if ((asset.asset_type || '').toLowerCase() === 'video') {
      return `<figure class="${cls} video-card">${tape}
        <video controls playsinline preload="metadata" ${asset.poster_path ? `poster="${esc(asset.poster_path)}"` : ''}>
          <source src="${esc(asset.local_path)}" type="video/mp4">
        </video>${caption}</figure>`;
    }
    return `<figure class="${cls}">${tape}
      <img src="${esc(asset.local_path)}" alt="${esc(asset.caption || '事件素材')}" ${asset.remote ? 'referrerpolicy="no-referrer"' : ''} loading="lazy">${caption}</figure>`;
  }

  function memoryGallery(event) {
    let assets = assetsFor(event, ['cover','gallery']);
    if (!assets.length && (event.tags || []).includes('clue')) assets = assetsFor(event, ['evidence']);
    if (!assets.length) assets = fallbackImages(event);
    if (!assets.length) return '';
    const show = assets.slice(0,3);
    return `<div class="memory-gallery ${show.length===1?'single':''}" aria-label="事件素材">${show.map((a,i)=>mediaFigure(a,i)).join('')}</div>`;
  }

  function sourceMedia(event) {
    const assets = assetsFor(event, ['source']);
    if (!assets.length) return '';
    return `<div class="source-media"><div class="source-media-label">LOCAL SOURCE · 本地来源截图</div>${assets.slice(0,2).map(a=>mediaFigure(a,0,true)).join('')}</div>`;
  }

  function recordGallery(event, label='LIVE RECORD · 现场记录') {
    let assets = assetsFor(event, ['cover','gallery']);
    if (!assets.length) assets = fallbackImages(event);
    if (!assets.length) return `<div class="record-empty">这一页保留现场记录；当前还没有本地影像素材。</div>`;
    return `<div class="record-gallery"><div class="record-gallery-label">${esc(label)}</div>${assets.slice(0,3).map((a,i)=>mediaFigure(a,i,true)).join('')}</div>`;
  }


  function hubLeft(pageNo=1) {
    return `<div class="archive-map-intro">
      <span class="hand-date">ARCHIVE MAP · 目录</span>
      <h2 class="hub-title">先看整本书，<br>再选择一段时间。</h2>
      <p class="hub-copy">时间档案不再把几十个事件平铺成一条长列表。整本书先分成五个章节，每章再沿现实发生时间展开。</p>
      <div class="method-flow" aria-label="时间线整理方法">
        <span>全部官方发布</span><i>→</i><span>提取线索</span><i>→</i><span>建立现实事件</span><i>→</i><span>按现实时间排序</span>
      </div>
      <div class="hub-rule"></div>
      <p class="hub-note">公开发布时间保留在证据层；只有能够确认或合理推定的现实事件，才进入主时间轴。</p>
      <div class="hub-key"><span class="key-pink"></span> 粉 · 章节/互动 <span class="key-gold"></span> 金 · 时间/线索</div>
      <span class="page-number">${pad(pageNo)}</span>
    </div>`;
  }

  function hubRight(pageNo=2) {
    return `<span class="right-kicker">FIVE PARTS · 总时间轴</span>
      <h2 class="right-title">选择你想看的那一段。</h2>
      <p class="right-sub">现阶段先试做 5、6、7 月；前两章保留位置，等事件与证据整理完成后再填内容和主题。</p>
      <div class="chapter-axis">
        ${chapters.map((ch,i) => `
          <button class="chapter-axis-node ${ch.phase}" type="button" data-open-chapter="${esc(ch.id)}">
            <span class="axis-dot"></span>
            <span class="axis-part">${esc(ch.part)}</span>
            <strong>${esc(ch.range)}</strong>
            <small>${esc(chapterStatus(ch))}</small>
          </button>`).join('')}
      </div>
      <div class="theme-promise">每个 Part 的主题名与章节视觉先留空；等内容稳定后，再按这一段真正发生的事情来命名。</div>
      <span class="page-number">${pad(pageNo)}</span>`;
  }

  function chapterLeft(ch, pageNo) {
    const count = eventsForChapter(ch).length;
    const month = ch.id === 'part-03' ? '05' : ch.id === 'part-04' ? '06' : ch.id === 'part-05' ? '07' : '—';
    return `<div class="chapter-page v05-chapter">
      <span class="chapter-eyebrow">${esc(ch.part)} · REAL TIME</span>
      <div class="chapter-month">${esc(month)}</div>
      <div class="chapter-year">${esc(ch.range)}</div>
      <h2>${esc(ch.title)}</h2>
      <p>${esc(ch.description)}</p>
      <div class="chapter-stickers">
        <span>${ch.phase === 'ready' ? 'DEMO' : 'FRAME'}</span>
        <span>${esc(ch.theme)}</span>
        ${count ? `<span>${count} MAIN${interactionsForChapter(ch).length ? ` · ${interactionsForChapter(ch).length} NOTES` : ''}</span>` : '<span>TO FILL</span>'}
      </div>
      <div class="chapter-note">${ch.id === 'part-03' ? '五月事件集已经完成第一轮收口。<br>这一章开始用正式数据检验整本手账的阅读方式。' : '这一版先确认“怎么读一本书”。<br>主题名、封面图与章节专属装饰以后再填。'}</div>
      <button class="back-to-map" type="button" data-back-hub>← 返回五章总时间轴</button>
      <span class="page-number">${pad(pageNo)}</span>
    </div>`;
  }

  function chapterRight(ch, pageNo) {
    const chapterEvents = eventsForChapter(ch);
    const chapterInteractions = interactionsForChapter(ch);
    const timelineItems = chapterTimelineItems(ch);
    if (!chapterEvents.length && !chapterInteractions.length) {
      return `<span class="right-kicker">CHAPTER INDEX · FRAME ONLY</span>
        <h2 class="right-title">${esc(ch.range)}</h2>
        <p class="right-sub">章节位置已经建立，这一轮不为了填满页面而制造事件。</p>
        <div class="chapter-empty">
          <span>待整理</span>
          <p>后续从全部官方发布记录出发，反推现实发生日期，再把正式事件放进这里。</p>
        </div>
        <span class="page-number">${pad(pageNo)}</span>`;
    }
    const rows = timelineItems.map(item => {
      if (item.kind === 'interaction') {
        const interaction = item.interaction;
        return `<button type="button" class="chapter-list-row is-interaction" data-open-interaction="${esc(interaction.interaction_id)}"><span>${esc(fmtShort(interaction.occurred_at))}</span><b>${esc(interaction.title)}</b><em>公开互动 · 旁注</em></button>`;
      }
      const e = item.event;
      const interactionCount = interactionsForEvent(e).length;
      const baseLabel = eventMode(e)==='text_only_sensitive' ? '私人行程 · 仅文本' : e.confidence==='medium_high' ? '待补官方源' : typeLabel(e.event_type);
      return `<button type="button" class="chapter-list-row ${e.status === 'draft' ? 'is-draft' : ''} ${eventMode(e)==='text_only_sensitive'?'is-private':''} ${interactionCount?'has-interaction-note':''}" data-jump-event="${esc(e.event_id)}"><span>${esc(displayEventDate(e).replace(/^2026\./,''))}</span><b>${esc(e.title)}</b><em>${esc(baseLabel + (interactionCount ? ' · +互动旁注' : ''))}</em></button>`;
    }).join('');
    return `<span class="right-kicker">CHAPTER INDEX · ${chapterEvents.length} MAIN · ${chapterInteractions.length} NOTES</span>
      <h2 class="right-title">${esc(ch.range)} · 主轴与公开互动</h2>
      <p class="right-sub">${ch.id === 'part-03' ? '主轴仍按实际发生时间排序；评论、回复与空降降一级显示为公开互动旁注，不再与直播、出行抢同一视觉权重。' : ch.id === 'part-04' ? '六月先作为成熟示范章。' : '现有节点先进入框架，下一轮仍需按完整公开库核验与补齐。'}</p>
      <div class="chapter-list">${rows}</div>
      <span class="page-number">${pad(pageNo)}</span>`;
  }
  function clueLeft(event, pageNo) {
    const evidence = assetsFor(event, ['evidence']);
    return `<span class="hand-date">LOCATION CLUE · 公开线索</span>
      <div class="clue-sheet">
        <div class="clue-pin">06.12</div>
        <h2>${esc(event.title)}</h2>
        <div class="clue-route"><span>北京</span><i>→</i><span>山东</span><i>→</i><span>安徽</span></div>
        <p>${esc(event.description || '')}</p>
        <div class="clue-warning">IP 属地是平台公开字段，只记录其变化，不直接等同于真实行程。</div>
      </div>
      ${evidence.length ? `<div class="clue-evidence">${mediaFigure(evidence[0],0,true)}</div>` : ''}
      <span class="page-number">${pad(pageNo)}</span>`;
  }

  function eventLeft(event, pageNo) {
    if ((event.tags || []).includes('clue')) return clueLeft(event,pageNo);
    const mode = eventMode(event);
    const [precisionText, precisionClass] = precisionLabel(event);
    const tags = (event.tags || []).filter(t=>t!=='clue' && !String(t).startsWith('display:') && t!=='original_post' && t!=='public_only').map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const note = event.date_precision === 'inferred' || event.evidence_note ? `<div class="info-note"><div class="note-title">${event.date_precision==='inferred'?'时间依据':'档案备注'}</div>${esc(event.evidence_note || '该时间来自公开资料推定，后续可继续补充证据。')}</div>` : '';
    const kicker = mode === 'original_post' ? 'PUBLIC MOMENT · 公开节点' : mode === 'text_only_sensitive' ? 'REAL TIME · 私人行程' : 'REAL TIME · ' + typeLabel(event.event_type);
    const privacyNote = mode === 'text_only_sensitive' ? `<div class="privacy-note"><b>档案边界</b><span>该节点仅保留日期与城市级信息；不展示非公开跟拍影像，不记录精确站点、车次与具体时刻。</span></div>` : '';
    const gallery = (mode === 'live_record' || mode === 'text_only_sensitive') ? '' : memoryGallery(event);
    return `<span class="hand-date">${esc(kicker)}</span>
      <div class="event-date">${esc(displayEventDate(event))}</div>
      <h2 class="event-title">${esc(event.title)}</h2>
      <div class="event-meta">
        <span class="tag ${precisionClass}">${esc(precisionText)}</span>
        <span class="tag ${event.confidence === 'confirmed' ? 'confirmed' : ''}">${esc(confidenceLabel(event.confidence))}</span>
        ${event.location_text ? `<span class="tag location">⌖ ${esc(event.location_text)}</span>` : ''}${tags}
      </div>
      <div class="event-rule"></div>
      <p class="event-desc">${esc(event.description || '这一天的细节还在继续补全。')}</p>${privacyNote}${note}
      <div class="participants">参与：${esc((event.participants || []).join('、') || '待补充')}</div>
      ${gallery}<span class="page-number">${pad(pageNo)}</span>`;
  }

  function eventRight(event, pageNo) {
    const posts = linkedPosts(event);
    const sources = sourceMedia(event);
    const clue = (event.tags || []).includes('clue');
    const mode = eventMode(event);

    if (clue || mode === 'evidence') {
      return `<span class="right-kicker">EVIDENCE NOTE</span>
        <h2 class="right-title">这是一条线索，不是一段被确认的行程。</h2>
        <p class="right-sub">保留平台公开字段与原截图，等待它与更多事件、帖子或公开资料交叉核验。</p>
        ${sources || `<div class="evidence-quiet">证据已保留在档案层；当前没有额外的来源截图需要展示。</div>`}
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    if (mode === 'text_only_sensitive') {
      return `<span class="right-kicker">ARCHIVE BOUNDARY · 隐私边界</span>
        <h2 class="right-title">这段行程，只留下必要的坐标。</h2>
        <p class="right-sub">事件本身保留在历史时间轴里，但不把非公开私人行程的跟拍影像继续做成可传播素材。</p>
        <div class="privacy-boundary-card">
          <span>保留</span><b>日期 · 城市级节点 · 参与者</b>
          <span>不展示</span><b>站拍照片 · 精确站点 · 车次 · 具体时刻 · 跟拍来源</b>
        </div>
        ${interactionNotes(event)}
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    if (mode === 'live_record') {
      const visible = posts.slice(0,3);
      return `<span class="right-kicker">LIVE RECORD · 直播记录</span>
        <h2 class="right-title">直播记录</h2>
        ${recordGallery(event,'LIVE RECORD · 直播记录')}
        ${visible.length ? `<div class="followup-block"><div class="followup-label">同日 / 后续公开记录</div><div class="release-line compact-release">${visible.map(releaseItem).join('')}</div></div>` : (!sources ? `<div class="pending-strip">公开记录待补充</div>` : '')}
        ${sources}
        ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
        ${interactionNotes(event)}
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    if (mode === 'original_post') {
      const visible = posts.slice(0,5);
      return `<span class="right-kicker">ORIGINAL POST · 原始公开记录</span>
        <h2 class="right-title">这件事，就是从这里被我们看见。</h2>
        <p class="right-sub">这一类节点本身发生在公开平台上，因此这里记录原始发布时间与原帖，不再称作“后来”。</p>
        ${visible.length ? `<div class="release-line">${visible.map(releaseItem).join('')}</div>` : `<div class="evidence-quiet">原始公开记录尚未与帖子库建立链接；本页不会把空缺写成“待续”。</div>`}
        ${sources}
        ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
        ${interactionNotes(event)}
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    if (mode === 'experience_only') {
      return `<span class="right-kicker">ARCHIVE NOTE · 待补充</span>
        <div class="pending-page"><span>待补充</span><small>后续材料待补充</small></div>
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    const visible = posts.slice(0, Math.min(posts.length, 5));
    const releaseKicker = posts.length ? `RELEASE TIME · ${posts.length} RECORD${posts.length>1?'S':''}` : (sources ? 'RELEASE MATERIAL · 待关联' : 'RELEASE TIME · 待补充');
    const releaseSub = posts.length ? '公开记录按发布时间排列。' : (sources ? '公开物料已经保留，原帖关联待补充。' : '后续公开材料待补充。');
    return `<span class="right-kicker">${releaseKicker}</span>
      <h2 class="right-title">后来，我们看见了这些。</h2>
      <p class="right-sub">${releaseSub}</p>
      ${visible.length ? `<div class="release-line">${visible.map(releaseItem).join('')}</div>` : ''}${sources}
      ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
      ${interactionNotes(event)}
      <span class="page-number">${pad(pageNo)}</span>`;
  }


  function tabLabels(item) {
    if (item.kind === 'hub') return ['章节说明','五章总览'];
    if (item.kind === 'chapter') return ['章节页','时间轴'];
    if ((item.event.tags || []).includes('clue')) return ['线索页','证据页'];
    const mode = eventMode(item.event);
    if (mode === 'text_only_sensitive') return ['经历页','隐私边界'];
    if (mode === 'live_record') return ['经历页','直播记录'];
    if (mode === 'original_post') return ['节点页','原始公开'];
    if (mode === 'experience_only') return ['经历页',''];
    return ['经历页','公开页'];
  }

  function hasRightPage(item) {
    if (!item || item.kind !== 'event') return true;
    return eventMode(item.event) !== 'experience_only';
  }

  function mobilePageCount() {
    return spreads.reduce((n,item)=>n + (hasRightPage(item) ? 2 : 1), 0);
  }

  function mobilePageIndex() {
    let n = 0;
    for (let i=0;i<current;i++) n += hasRightPage(spreads[i]) ? 2 : 1;
    return n + (mobileSide === 'right' && hasRightPage(spreads[current]) ? 2 : 1);
  }

  function syncMobileTabs() {
    const item = spreads[current];
    const labels = tabLabels(item);
    const buttons = mobileTabs.querySelectorAll('button');
    buttons[0].textContent = labels[0];
    buttons[1].textContent = labels[1] || '第二页';
    buttons[1].hidden = !hasRightPage(item);
    if (!hasRightPage(item) && mobileSide === 'right') mobileSide = 'left';
    buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.side === mobileSide));
  }

  function updateNavState() {
    indexBtn.hidden = view !== 'chapter' || !activeEvents.length;
    chaptersBtn.hidden = view === 'hub';
    if (isMobile()) {
      const firstPage = current === 0 && mobileSide === 'left';
      const lastItem = current === spreads.length - 1;
      const lastPage = lastItem && (!hasRightPage(spreads[current]) || mobileSide === 'right');
      prevBtn.disabled = firstPage; nextBtn.disabled = lastPage;
      pageCounter.textContent = `${pad(mobilePageIndex())} / ${pad(mobilePageCount())}`;
      prevBtn.setAttribute('aria-label', mobileSide === 'right' ? '返回左页' : '上一页');
      nextBtn.setAttribute('aria-label', mobileSide === 'left' && hasRightPage(spreads[current]) ? '查看右页' : '下一页');
    } else {
      prevBtn.disabled = current === 0; nextBtn.disabled = current === spreads.length - 1;
      pageCounter.textContent = `${pad(current+1)} / ${pad(spreads.length)}`;
      prevBtn.setAttribute('aria-label','上一页'); nextBtn.setAttribute('aria-label','下一页');
    }
  }

  function render({preserveSide=false} = {}) {
    const item = spreads[current];
    if (!preserveSide) mobileSide = 'left';
    spread.classList.toggle('mobile-right', mobileSide === 'right');
    spread.classList.toggle('chapter-spread', item.kind === 'chapter' || item.kind === 'hub');
    spread.classList.toggle('hub-spread', item.kind === 'hub');
    spread.classList.toggle('clue-spread', item.kind === 'event' && (item.event.tags || []).includes('clue'));
    syncMobileTabs();
    const base = current * 2 + 1;

    if (item.kind === 'hub') {
      leftPage.innerHTML = hubLeft(base);
      rightPage.innerHTML = hubRight(base+1);
      rangeLabel.textContent = 'ARCHIVE MAP · 05 PARTS';
    } else if (item.kind === 'chapter') {
      leftPage.innerHTML = chapterLeft(item.chapter,base);
      rightPage.innerHTML = chapterRight(item.chapter,base+1);
      rangeLabel.textContent = `${item.chapter.part} · ${item.chapter.range}`;
    } else {
      leftPage.innerHTML = eventLeft(item.event,base);
      rightPage.innerHTML = eventRight(item.event,base+1);
      const d = new Date(item.event.occurred_at_start);
      rangeLabel.textContent = Number.isNaN(d.getTime()) ? (activeChapter?.range || 'REAL TIME') : `${activeChapter?.part || ''} · ${d.getFullYear()} · ${String(d.getMonth()+1).padStart(2,'0')}`;
    }
    updateNavState();
    renderRail();
  }

  function renderRail() {
    if (view === 'hub') {
      railTrack.innerHTML = chapters.map(ch => `<button type="button" class="rail-chapter" data-open-chapter="${esc(ch.id)}" title="${esc(ch.range)}"><span>${esc(ch.part.replace('PART ',''))}</span><b>${esc(ch.short)}</b></button>`).join('');
      return;
    }
    const railItems = [
      {kind:'chapter', date:'0000-00-00', spreadIndex:0, chapter:activeChapter},
      ...spreads.slice(1).map((item,i)=>({kind:'event', date:String(item.event.occurred_at_start || ''), spreadIndex:i+1, event:item.event})),
      ...standaloneInteractionsForChapter(activeChapter).map(interaction=>({kind:'interaction', date:String(interaction.occurred_at || ''), interaction}))
    ].sort((a,b)=>{
      if (a.kind === 'chapter') return -1;
      if (b.kind === 'chapter') return 1;
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      if (da !== db) return da-db;
      if (a.kind !== b.kind) return a.kind === 'event' ? -1 : 1;
      return 0;
    });
    railTrack.innerHTML = railItems.map(item => {
      if (item.kind === 'interaction') {
        return `<button type="button" class="rail-dot-wrap interaction-dot" data-open-interaction="${esc(item.interaction.interaction_id)}" title="${esc(fmtShort(item.interaction.occurred_at) + ' · ' + item.interaction.title)}"><span class="rail-dot"></span></button>`;
      }
      const title = item.kind==='chapter' ? `${item.chapter.range} · 章节页` : item.event.title;
      const hasInteraction = item.kind==='event' && interactionsForEvent(item.event).length;
      const special = item.kind==='chapter' ? ' chapter-dot' : item.kind==='event' && eventMode(item.event)==='text_only_sensitive' ? ' private-dot' : item.kind==='event' && eventMode(item.event)==='original_post' ? ' public-dot' : '';
      const noteClass = hasInteraction ? ' has-interaction-dot' : '';
      return `<button type="button" class="rail-dot-wrap ${item.spreadIndex===current?'active':''}${special}${noteClass}" data-jump="${item.spreadIndex}" title="${esc(title)}"><span class="rail-dot"></span></button>`;
    }).join('');
  }

  function flipToSpread(target, dir, side='left') {
    if (flipping || target < 0 || target >= spreads.length) return;
    flipping = true; spread.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    setTimeout(() => { current = target; mobileSide = side; render({preserveSide:true}); }, 315);
    setTimeout(() => { spread.classList.remove('flip-next','flip-prev'); flipping = false; }, 700);
  }

  function goSpread(dir) { flipToSpread(current + dir, dir, 'left'); }
  function goPage(dir) {
    if (!isMobile()) return goSpread(dir);
    if (flipping) return;
    const item = spreads[current];
    if (dir > 0) {
      if (mobileSide === 'left' && hasRightPage(item)) { mobileSide='right'; spread.classList.add('mobile-right'); syncMobileTabs(); updateNavState(); return; }
      if (current < spreads.length - 1) flipToSpread(current + 1, 1, 'left');
      return;
    }
    if (mobileSide === 'right') { mobileSide='left'; spread.classList.remove('mobile-right'); syncMobileTabs(); updateNavState(); return; }
    if (current > 0) {
      const prev = spreads[current - 1];
      flipToSpread(current - 1, -1, hasRightPage(prev) ? 'right' : 'left');
    }
  }

  function openDrawer(eventId) {
    const event = allEvents.find(e => e.event_id === eventId); if (!event) return;
    const posts = linkedPosts(event); drawerTitle.textContent = `${event.title} · ${posts.length} 条公开记录`;
    drawerList.innerHTML = posts.map(p => {
      const text = cleanText(p.text || p.title || '无公开文案');
      return `<div class="drawer-post"><div><div>${platformChip(p.platform)}</div><div class="release-date" style="margin-top:7px">${esc(fmtYearDate(p.published_at))}</div></div><div><div class="owner">${esc(p.owner || '')}</div><div class="release-text" style="-webkit-line-clamp:4;margin-top:5px">${esc(text)}</div></div><div>${p.post_url ? `<a href="${esc(p.post_url)}" target="_blank" rel="noreferrer">原帖 ↗</a>` : ''}</div></div>`;
    }).join(''); drawer.showModal();
  }


  function openInteractionDrawer(interactionId) {
    const item = interactionById.get(interactionId); if (!item) return;
    const meta = interactionMeta(item);
    const links = Array.isArray(item.event_links) ? item.event_links : [];
    const relationRows = links.map(link => {
      const event = allEvents.find(e => e.event_id === link.event_id);
      return `<div class="interaction-relation"><span>${esc(link.relation_type || 'related')}</span><b>${esc(event?.title || link.event_id)}</b><small>${esc(link.note || '')}</small></div>`;
    }).join('');
    const specialTitle = interactionDate(item) === '2026-05-29' ? '那天，他们回答了什么？' : item.title;
    drawerTitle.textContent = specialTitle;
    drawerList.innerHTML = `<article class="interaction-detail">
      <div class="interaction-detail-top"><span class="interaction-kicker">PUBLIC INTERACTION · ${esc(fmtYearDate(item.occurred_at))}</span><span class="interaction-platform">${esc(meta)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(cleanText(item.summary || '公开互动记录。'))}</p>
      ${item.metadata?.boundary ? `<div class="interaction-boundary">${esc(item.metadata.boundary)}</div>` : ''}
      ${relationRows ? `<div class="interaction-relations"><div class="interaction-section-label">与主轴的关系</div>${relationRows}</div>` : ''}
      ${interactionSourceLink(item)}
    </article>`;
    drawer.showModal();
  }

  function findSpreadByEventId(eventId) { return spreads.findIndex(s => s.kind==='event' && s.event.event_id===eventId); }
  function buildIndex() {
    indexList.innerHTML = chapterTimelineItems(activeChapter).map(item => {
      if (item.kind === 'interaction') {
        const x = item.interaction;
        return `<div class="index-row is-interaction" data-interaction-id="${esc(x.interaction_id)}"><div class="index-date">${esc(fmtYearDate(x.occurred_at))}</div><div><div class="index-title">${esc(x.title)}</div><div class="owner" style="margin-top:5px">PUBLIC INTERACTION</div></div><span class="index-type">旁注</span></div>`;
      }
      const e = item.event;
      return `<div class="index-row" data-event-id="${esc(e.event_id)}"><div class="index-date">${esc(displayEventDate(e))}</div><div><div class="index-title">${esc(e.title)}</div><div class="owner" style="margin-top:5px">${esc(e.location_text || '')}</div></div><span class="index-type">${esc(e.status === 'draft' ? '待核验' : typeLabel(e.event_type))}</span></div>`;
    }).join('');
  }

  $('#openBook').addEventListener('click', () => {
    landing.classList.add('opening');
    setTimeout(()=>{
      landing.style.display='none';
      reader.classList.add('visible');
      reader.setAttribute('aria-hidden','false');
      openHub();
    },860);
  });

  $('#closeBook').addEventListener('click', () => {
    reader.classList.remove('visible');
    reader.setAttribute('aria-hidden','true');
    setTimeout(()=>{
      reader.style.display='';
      landing.style.display='grid';
      landing.classList.remove('opening');
      view='hub'; activeChapter=null; activeEvents=[]; spreads=[{kind:'hub'}];
      current=0; mobileSide='left'; setChapterTheme(null);
    },350);
  });

  chaptersBtn.addEventListener('click', openHub);
  prevBtn.addEventListener('click',()=>goPage(-1));
  nextBtn.addEventListener('click',()=>goPage(1));

  railTrack.addEventListener('click', e => {
    const chapterHit = e.target.closest('[data-open-chapter]');
    if (chapterHit) { openChapter(chapterHit.dataset.openChapter); return; }
    const interactionHit = e.target.closest('[data-open-interaction]');
    if (interactionHit) { openInteractionDrawer(interactionHit.dataset.openInteraction); return; }
    const hit=e.target.closest('[data-jump]');
    if(!hit||flipping)return;
    const target=Number(hit.dataset.jump);
    if(target===current){mobileSide='left';spread.classList.remove('mobile-right');syncMobileTabs();updateNavState();return;}
    flipToSpread(target,target>current?1:-1,'left');
  });

  document.body.addEventListener('click', e => {
    const chapterBtn=e.target.closest('[data-open-chapter]');
    if(chapterBtn){ openChapter(chapterBtn.dataset.openChapter); return; }
    const hubBtn=e.target.closest('[data-back-hub]');
    if(hubBtn){ openHub(); return; }
    const drawerBtn=e.target.closest('[data-open-drawer]');
    if(drawerBtn) openDrawer(drawerBtn.dataset.openDrawer);
    const interactionBtn=e.target.closest('[data-open-interaction]');
    if(interactionBtn){ openInteractionDrawer(interactionBtn.dataset.openInteraction); return; }
    const jumpEvent=e.target.closest('[data-jump-event]');
    if(jumpEvent){
      const target=findSpreadByEventId(jumpEvent.dataset.jumpEvent);
      if(target>=0) flipToSpread(target,target>current?1:-1,'left');
    }
  });

  $('#drawerClose').addEventListener('click',()=>drawer.close());
  indexBtn.addEventListener('click',()=>{buildIndex();indexDialog.showModal();});
  $('#indexClose').addEventListener('click',()=>indexDialog.close());
  indexList.addEventListener('click',e=>{
    const interactionRow=e.target.closest('[data-interaction-id]');
    if(interactionRow){ indexDialog.close(); openInteractionDrawer(interactionRow.dataset.interactionId); return; }
    const row=e.target.closest('[data-event-id]'); if(!row)return;
    const target=findSpreadByEventId(row.dataset.eventId); if(target<0)return;
    current=target; mobileSide='left'; indexDialog.close(); render({preserveSide:true});
  });

  document.addEventListener('keydown',e=>{
    if(!reader.classList.contains('visible'))return;
    if(e.key==='ArrowRight')goPage(1);
    if(e.key==='ArrowLeft')goPage(-1);
    if(e.key==='Escape'){if(drawer.open)drawer.close();if(indexDialog.open)indexDialog.close();}
  });

  mobileTabs.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-side]'); if(!btn||btn.hidden)return;
    if(btn.dataset.side==='right'&&!hasRightPage(spreads[current]))return;
    mobileSide=btn.dataset.side;
    spread.classList.toggle('mobile-right',mobileSide==='right');
    syncMobileTabs(); updateNavState();
  });

  let touchX=null;
  spread.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});
  spread.addEventListener('touchend',e=>{
    if(touchX==null)return;
    const dx=e.changedTouches[0].clientX-touchX; touchX=null;
    if(Math.abs(dx)<48)return;
    goPage(dx<0?1:-1);
  },{passive:true});

  window.addEventListener('resize',()=>{
    if(!isMobile()){mobileSide='left';spread.classList.remove('mobile-right');syncMobileTabs();}
    updateNavState();
  });

  setChapterTheme(null);
})();
