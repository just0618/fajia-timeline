(() => {
  const data = window.TIMELINE_DATA || { stats:{}, experience_timeline:[], release_timeline:[] };
  const mediaAssets = Array.isArray(window.MEDIA_ASSETS) ? window.MEDIA_ASSETS : [];
  const chapter = window.CHAPTER_2026_06 || null;
  const events = [...(data.experience_timeline || [])].sort((a,b) => new Date(a.occurred_at_start) - new Date(b.occurred_at_start));
  const chapterEventIds = new Set(chapter?.event_ids || []);

  const spreads = [{kind:'intro'}];
  if (chapter) spreads.push({kind:'chapter', chapter});
  events.forEach(event => spreads.push({kind:'event', event}));

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
    if (value === 'medium') return '中等可信度';
    if (value === 'low') return '低可信度';
    return value || '未标注';
  }

  function typeLabel(value) {
    const map = {
      magazine:'杂志拍摄', shooting:'拍摄', live:'直播', concert:'演出', travel:'出行',
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

  function introLeft() {
    return `<span class="hand-date">ARCHIVE 00</span>
      <h2 class="intro-title">一本关于<br>“发生”与“被看见”的手账</h2>
      <div class="event-rule"></div>
      <p class="intro-copy">这里不把社交平台发布时间等同于事情真正发生的时间。经历页记录他们什么时候经历了什么，公开页记录这些片段后来什么时候被看见。</p>
      <div class="legend">
        <div class="legend-item"><span class="legend-badge pink">精确</span><span>公开资料可以确认具体日期。</span></div>
        <div class="legend-item"><span class="legend-badge gold">范围</span><span>事件持续数日，保留开始与结束时间。</span></div>
        <div class="legend-item"><span class="legend-badge mix">约 / 推定</span><span>根据采访、造型、行程或其他公开证据推定，不写成确定事实。</span></div>
      </div><span class="page-number">01</span>`;
  }

  function introRight() {
    const s = data.stats || {};
    return `<span class="right-kicker">HOW TO READ · V0.4</span>
      <h2 class="right-title">从几个 demo，走进第一个完整月份。</h2>
      <p class="right-sub">V0.4 不再强迫每个事件都有“后来”：直播、原始公开、双时间线、线索与单页经历会使用不同阅读模式。</p>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-num">${esc(s.chapter_events ?? 14)}</div><div class="stat-label">六月章节节点</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.posts ?? (data.release_timeline||[]).length)}</div><div class="stat-label">完整公开发布库</div></div>
        <div class="stat-card"><div class="stat-num">${esc(mediaAssets.filter(a=>a.event_id && chapterEventIds.has(a.event_id)).length)}</div><div class="stat-label">六月本地素材</div></div>
        <div class="stat-card"><div class="stat-num">2</div><div class="stat-label">阅读时间：现实 / 公开</div></div>
      </div>
      <div class="quote-card">“一整个月连续翻下来，才知道哪些页面值得做成故事，哪些只应该留作证据。”</div>
      <span class="page-number">02</span>`;
  }

  function chapterLeft(ch, pageNo) {
    return `<div class="chapter-page">
      <span class="chapter-eyebrow">CHAPTER 01 · REAL TIME</span>
      <div class="chapter-month">06</div>
      <div class="chapter-year">2026</div>
      <h2>${esc(ch.subtitle || '六月')}</h2>
      <p>${esc(ch.description || '')}</p>
      <div class="chapter-stickers"><span>LIVE</span><span>PHOTO</span><span>MAGAZINE</span><span>DAILY</span></div>
      <div class="chapter-note">粉色记录靠近，金色标记线索。<br>从这一章开始，手账按现实时间连续展开。</div>
      <span class="page-number">${pad(pageNo)}</span>
    </div>`;
  }

  function chapterRight(ch, pageNo) {
    const chapterEvents = events.filter(e => chapterEventIds.has(e.event_id));
    return `<span class="right-kicker">CHAPTER INDEX · ${chapterEvents.length} NODES</span>
      <h2 class="right-title">六月，先从这些节点开始。</h2>
      <p class="right-sub">不是把每条帖子都变成一页，而是先建立现实事件，再把公开记录挂回它们身上。</p>
      <div class="chapter-list">${chapterEvents.map((e,i)=>`<button type="button" class="chapter-list-row" data-jump-event="${esc(e.event_id)}"><span>${esc(displayEventDate(e).replace(/^2026\./,''))}</span><b>${esc(e.title)}</b><em>${esc(typeLabel(e.event_type))}</em></button>`).join('')}</div>
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
    const kicker = mode === 'original_post' ? 'PUBLIC MOMENT · 公开节点' : 'REAL TIME · ' + typeLabel(event.event_type);
    const gallery = mode === 'live_record' ? '' : memoryGallery(event);
    return `<span class="hand-date">${esc(kicker)}</span>
      <div class="event-date">${esc(displayEventDate(event))}</div>
      <h2 class="event-title">${esc(event.title)}</h2>
      <div class="event-meta">
        <span class="tag ${precisionClass}">${esc(precisionText)}</span>
        <span class="tag ${event.confidence === 'confirmed' ? 'confirmed' : ''}">${esc(confidenceLabel(event.confidence))}</span>
        ${event.location_text ? `<span class="tag location">⌖ ${esc(event.location_text)}</span>` : ''}${tags}
      </div>
      <div class="event-rule"></div>
      <p class="event-desc">${esc(event.description || '这一天的细节还在继续补全。')}</p>${note}
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

    if (mode === 'live_record') {
      const visible = posts.slice(0,3);
      return `<span class="right-kicker">LIVE RECORD · 同步发生 / 同步被看见</span>
        <h2 class="right-title">当时，我们就在看这一刻。</h2>
        <p class="right-sub">直播不强行制造“后来才被看见”的时间差。右页保留现场影像；若同日或之后还有公开帖子，再作为补充记录附在下面。</p>
        ${recordGallery(event,'LIVE RECORD · 直播记录')}
        ${visible.length ? `<div class="followup-block"><div class="followup-label">同日 / 后续公开记录</div><div class="release-line compact-release">${visible.map(releaseItem).join('')}</div></div>` : ''}
        ${sources}
        ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
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
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    if (mode === 'experience_only') {
      return `<span class="right-kicker">ARCHIVE NOTE · 留白</span>
        <h2 class="right-title">这一页不强行补一个“后来”。</h2>
        <p class="right-sub">当前只确认现实事件本身。以后若找到可核验的后续公开记录，再自然补进来。</p>
        <div class="experience-quiet"><span>REAL TIME</span><b>${esc(displayEventDate(event))}</b><em>${esc(event.title)}</em></div>
        <span class="page-number">${pad(pageNo)}</span>`;
    }

    const visible = posts.slice(0, Math.min(posts.length, 5));
    return `<span class="right-kicker">RELEASE TIME · ${posts.length} RECORD${posts.length>1?'S':''}</span>
      <h2 class="right-title">后来，我们看见了这些。</h2>
      <p class="right-sub">只有“现实先发生、公开后到来”的事件才使用这一页。公开记录按发布时间排列。</p>
      ${visible.length ? `<div class="release-line">${visible.map(releaseItem).join('')}</div>` : ''}${sources}
      ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
      <span class="page-number">${pad(pageNo)}</span>`;
  }

  function tabLabels(item) {
    if (item.kind === 'intro') return ['说明页','统计页'];
    if (item.kind === 'chapter') return ['章节页','目录页'];
    if ((item.event.tags || []).includes('clue')) return ['线索页','证据页'];
    const mode = eventMode(item.event);
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
      prevBtn.setAttribute('aria-label','上一事件'); nextBtn.setAttribute('aria-label','下一事件');
    }
  }

  function render({preserveSide=false} = {}) {
    const item = spreads[current];
    if (!preserveSide) mobileSide = 'left';
    spread.classList.toggle('mobile-right', mobileSide === 'right');
    spread.classList.toggle('chapter-spread', item.kind === 'chapter');
    spread.classList.toggle('clue-spread', item.kind === 'event' && (item.event.tags || []).includes('clue'));
    syncMobileTabs();
    const base = current * 2 + 1;
    if (item.kind === 'intro') {
      leftPage.innerHTML = introLeft(); rightPage.innerHTML = introRight(); rangeLabel.textContent = 'ARCHIVE · START';
    } else if (item.kind === 'chapter') {
      leftPage.innerHTML = chapterLeft(item.chapter,base); rightPage.innerHTML = chapterRight(item.chapter,base+1); rangeLabel.textContent = '2026 · 06 · CHAPTER 01';
    } else {
      leftPage.innerHTML = eventLeft(item.event,base); rightPage.innerHTML = eventRight(item.event,base+1);
      const d = new Date(item.event.occurred_at_start);
      rangeLabel.textContent = Number.isNaN(d.getTime()) ? 'REAL TIME' : `${d.getFullYear()} · ${String(d.getMonth()+1).padStart(2,'0')}`;
    }
    updateNavState(); renderRail();
  }

  function renderRail() {
    railTrack.innerHTML = spreads.map((item,i) => {
      const title = item.kind==='intro' ? '开始' : item.kind==='chapter' ? `${item.chapter.title} · 章节页` : item.event.title;
      const special = item.kind==='chapter' ? ' chapter-dot' : '';
      return `<div class="rail-dot-wrap ${i===current?'active':''}${special}" data-jump="${i}" title="${esc(title)}"><span class="rail-dot"></span></div>`;
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
    const event = events.find(e => e.event_id === eventId); if (!event) return;
    const posts = linkedPosts(event); drawerTitle.textContent = `${event.title} · ${posts.length} 条公开记录`;
    drawerList.innerHTML = posts.map(p => {
      const text = cleanText(p.text || p.title || '无公开文案');
      return `<div class="drawer-post"><div><div>${platformChip(p.platform)}</div><div class="release-date" style="margin-top:7px">${esc(fmtYearDate(p.published_at))}</div></div><div><div class="owner">${esc(p.owner || '')}</div><div class="release-text" style="-webkit-line-clamp:4;margin-top:5px">${esc(text)}</div></div><div>${p.post_url ? `<a href="${esc(p.post_url)}" target="_blank" rel="noreferrer">原帖 ↗</a>` : ''}</div></div>`;
    }).join(''); drawer.showModal();
  }

  function findSpreadByEventId(eventId) { return spreads.findIndex(s => s.kind==='event' && s.event.event_id===eventId); }
  function buildIndex() {
    indexList.innerHTML = events.map(e => `<div class="index-row" data-event-id="${esc(e.event_id)}"><div class="index-date">${esc(displayEventDate(e))}</div><div><div class="index-title">${esc(e.title)}</div><div class="owner" style="margin-top:5px">${esc(e.location_text || '')}</div></div><span class="index-type">${esc(typeLabel(e.event_type))}</span></div>`).join('');
  }

  $('#openBook').addEventListener('click', () => { landing.classList.add('opening'); setTimeout(()=>{ landing.style.display='none'; reader.classList.add('visible'); reader.setAttribute('aria-hidden','false'); render(); },860); });
  $('#closeBook').addEventListener('click', () => { reader.classList.remove('visible'); reader.setAttribute('aria-hidden','true'); setTimeout(()=>{ reader.style.display=''; landing.style.display='grid'; landing.classList.remove('opening'); current=0; mobileSide='left'; },350); });
  prevBtn.addEventListener('click',()=>goPage(-1)); nextBtn.addEventListener('click',()=>goPage(1));

  railTrack.addEventListener('click', e => { const hit=e.target.closest('[data-jump]'); if(!hit||flipping)return; const target=Number(hit.dataset.jump); if(target===current){mobileSide='left';spread.classList.remove('mobile-right');syncMobileTabs();updateNavState();return;} flipToSpread(target,target>current?1:-1,'left'); });
  document.body.addEventListener('click', e => {
    const drawerBtn=e.target.closest('[data-open-drawer]'); if(drawerBtn) openDrawer(drawerBtn.dataset.openDrawer);
    const jumpEvent=e.target.closest('[data-jump-event]'); if(jumpEvent){ const target=findSpreadByEventId(jumpEvent.dataset.jumpEvent); if(target>=0) flipToSpread(target,target>current?1:-1,'left'); }
  });
  $('#drawerClose').addEventListener('click',()=>drawer.close());
  $('#indexBtn').addEventListener('click',()=>{buildIndex();indexDialog.showModal();}); $('#indexClose').addEventListener('click',()=>indexDialog.close());
  indexList.addEventListener('click',e=>{const row=e.target.closest('[data-event-id]');if(!row)return;const target=findSpreadByEventId(row.dataset.eventId);if(target<0)return;current=target;mobileSide='left';indexDialog.close();render({preserveSide:true});});
  document.addEventListener('keydown',e=>{if(!reader.classList.contains('visible'))return;if(e.key==='ArrowRight')goPage(1);if(e.key==='ArrowLeft')goPage(-1);if(e.key==='Escape'){if(drawer.open)drawer.close();if(indexDialog.open)indexDialog.close();}});
  mobileTabs.addEventListener('click',e=>{const btn=e.target.closest('button[data-side]');if(!btn||btn.hidden)return;if(btn.dataset.side==='right'&&!hasRightPage(spreads[current]))return;mobileSide=btn.dataset.side;spread.classList.toggle('mobile-right',mobileSide==='right');syncMobileTabs();updateNavState();});
  let touchX=null; spread.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true}); spread.addEventListener('touchend',e=>{if(touchX==null)return;const dx=e.changedTouches[0].clientX-touchX;touchX=null;if(Math.abs(dx)<48)return;goPage(dx<0?1:-1);},{passive:true});
  window.addEventListener('resize',()=>{if(!isMobile()){mobileSide='left';spread.classList.remove('mobile-right');syncMobileTabs();}updateNavState();});
  buildIndex();
})();
