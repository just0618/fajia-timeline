(() => {
  const data = window.TIMELINE_DATA || { stats:{}, experience_timeline:[], release_timeline:[] };
  const events = [...(data.experience_timeline || [])].sort((a,b) => new Date(a.occurred_at_start) - new Date(b.occurred_at_start));
  const spreads = [{kind:'intro'}, ...events.map(event => ({kind:'event', event}))];
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

  const pad = n => String(n).padStart(2,'0');
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
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
  const cleanText = text => (text || '').replace(/\s+/g,' ').trim();

  function displayEventDate(event) {
    const start = event.occurred_at_start;
    const end = event.occurred_at_end;
    const prefix = event.date_precision === 'inferred' ? '约 ' : '';
    if (end && end !== start) return `${prefix}${fmtYearDate(start)} — ${fmtShort(end)}`;
    return `${prefix}${fmtYearDate(start)}`;
  }

  function precisionLabel(event) {
    if (event.date_precision === 'inferred') return ['推定时间','inferred'];
    if (event.date_precision === 'range') return ['日期范围',''];
    return ['精确日期',''];
  }

  function confidenceLabel(value) {
    if (value === 'confirmed') return '已确认';
    if (value === 'high') return '较高可信度';
    if (value === 'medium') return '中等可信度';
    if (value === 'low') return '低可信度';
    return value || '未标注';
  }

  function typeLabel(value) {
    const map = { magazine:'杂志拍摄', shooting:'拍摄', live:'直播', concert:'演出', travel:'出行', daily:'日常', interview:'采访', event:'事件' };
    return map[value] || value || '事件';
  }

  function linkedPosts(event) {
    if (Array.isArray(event.linked_posts)) return [...event.linked_posts].sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
    const id = event.event_id;
    return (data.release_timeline || []).filter(p => (p.linked_event_ids || []).includes(id)).sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
  }

  function eventImages(event) {
    const urls = [];
    for (const p of linkedPosts(event)) {
      for (const u of (p.image_urls || [])) {
        if (u && !urls.includes(u)) urls.push(u);
        if (urls.length >= 2) return urls;
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

  function introLeft() {
    return `<span class="hand-date">ARCHIVE 00</span>
      <h2 class="intro-title">一本关于<br>“发生”与“被看见”的手账</h2>
      <div class="event-rule"></div>
      <p class="intro-copy">这里不把社交平台发布时间等同于事情真正发生的时间。左页记录他们经历了什么，右页记录这些片段后来什么时候被公开。</p>
      <div class="legend">
        <div class="legend-item"><span class="legend-badge">精确</span><span>公开资料可以确认具体日期。</span></div>
        <div class="legend-item"><span class="legend-badge">范围</span><span>事件持续数日，保留开始与结束时间。</span></div>
        <div class="legend-item"><span class="legend-badge">约 / 推定</span><span>根据采访、造型、行程或其他公开证据推定，不写成确定事实。</span></div>
      </div>
      <span class="page-number">01</span>`;
  }

  function introRight() {
    const s = data.stats || {};
    return `<span class="right-kicker">HOW TO READ</span>
      <h2 class="right-title">现在，我们已经有了一张可以继续生长的底图。</h2>
      <p class="right-sub">V0.1 只验证书本、双页、翻页和“事件 → 后续公开物料”的关系。</p>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-num">${esc(s.events ?? events.length)}</div><div class="stat-label">现实事件</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.posts ?? (data.release_timeline||[]).length)}</div><div class="stat-label">公开发布记录</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.post_event_links ?? 0)}</div><div class="stat-label">事件—帖子关联</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.evidence ?? 0)}</div><div class="stat-label">正式证据记录</div></div>
      </div>
      <div class="quote-card">“同一张照片，有它被拍下的那一天，也有我们终于看见它的那一天。”</div>
      <span class="page-number">02</span>`;
  }

  function eventLeft(event, pageNo) {
    const [precisionText, precisionClass] = precisionLabel(event);
    const images = eventImages(event);
    const tags = (event.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const polaroids = images.length ? `<div class="polaroid-stack">
      ${images[0] ? `<div class="polaroid one"><span class="tape"></span><img src="${esc(images[0])}" alt="关联公开物料" referrerpolicy="no-referrer"></div>` : ''}
      ${images[1] ? `<div class="polaroid two"><span class="tape"></span><img src="${esc(images[1])}" alt="关联公开物料" referrerpolicy="no-referrer"></div>` : ''}
    </div>` : '';
    const note = event.date_precision === 'inferred' || event.evidence_note ? `<div class="info-note"><div class="note-title">时间依据</div>${esc(event.evidence_note || '该时间来自公开资料推定，后续可继续补充证据。')}</div>` : '';
    return `<span class="hand-date">REAL TIME · ${esc(typeLabel(event.event_type))}</span>
      <div class="event-date">${esc(displayEventDate(event))}</div>
      <h2 class="event-title">${esc(event.title)}</h2>
      <div class="event-meta">
        <span class="tag ${precisionClass}">${esc(precisionText)}</span>
        <span class="tag ${event.confidence === 'confirmed' ? 'confirmed' : ''}">${esc(confidenceLabel(event.confidence))}</span>
        ${event.location_text ? `<span class="tag">⌖ ${esc(event.location_text)}</span>` : ''}
        ${tags}
      </div>
      <div class="event-rule"></div>
      <p class="event-desc">${esc(event.description || '这一天的细节还在继续补全。')}</p>
      ${note}
      <div class="participants">参与：${esc((event.participants || []).join('、') || '待补充')}</div>
      ${polaroids}
      <span class="page-number">${pad(pageNo)}</span>`;
  }

  function eventRight(event, pageNo) {
    const posts = linkedPosts(event);
    if (!posts.length) {
      return `<span class="right-kicker">RELEASE TIME</span>
        <h2 class="right-title">后来，我们什么时候看见它？</h2>
        <p class="right-sub">这个现实事件已经建立，但暂时还没有关联公开发布记录。</p>
        <div class="empty-state"><div><div class="seal">待续</div><div>等待后续物料与事件建立连接。</div></div></div>
        <span class="page-number">${pad(pageNo)}</span>`;
    }
    const visible = posts.slice(0, Math.min(posts.length, 5));
    return `<span class="right-kicker">RELEASE TIME · ${posts.length} RECORD${posts.length>1?'S':''}</span>
      <h2 class="right-title">后来，我们看见了这些。</h2>
      <p class="right-sub">从现实发生，到社交平台公开，中间可能隔着几小时、几天，甚至更久。</p>
      <div class="release-line">${visible.map(releaseItem).join('')}</div>
      ${posts.length > visible.length ? `<button class="archive-button" type="button" data-open-drawer="${esc(event.event_id)}">打开物料抽屉 · ${posts.length} 条</button>` : ''}
      <span class="page-number">${pad(pageNo)}</span>`;
  }

  function render() {
    const item = spreads[current];
    mobileSide = 'left';
    spread.classList.remove('mobile-right');
    syncMobileTabs();
    if (item.kind === 'intro') {
      leftPage.innerHTML = introLeft();
      rightPage.innerHTML = introRight();
      rangeLabel.textContent = 'ARCHIVE · START';
    } else {
      const base = current * 2 + 1;
      leftPage.innerHTML = eventLeft(item.event, base);
      rightPage.innerHTML = eventRight(item.event, base + 1);
      const d = new Date(item.event.occurred_at_start);
      rangeLabel.textContent = Number.isNaN(d.getTime()) ? 'REAL TIME' : `${d.getFullYear()} · ${String(d.getMonth()+1).padStart(2,'0')}`;
    }
    pageCounter.textContent = `${pad(current+1)} / ${pad(spreads.length)}`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === spreads.length - 1;
    renderRail();
  }

  function renderRail() {
    railTrack.innerHTML = spreads.map((item,i) => `<div class="rail-dot-wrap ${i===current?'active':''}" data-jump="${i}" title="${item.kind==='intro'?'开始':esc(item.event.title)}"><span class="rail-dot"></span></div>`).join('');
  }

  function go(dir) {
    if (flipping) return;
    const target = current + dir;
    if (target < 0 || target >= spreads.length) return;
    flipping = true;
    spread.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    setTimeout(() => { current = target; render(); }, 315);
    setTimeout(() => { spread.classList.remove('flip-next','flip-prev'); flipping = false; }, 700);
  }

  function openDrawer(eventId) {
    const event = events.find(e => e.event_id === eventId);
    if (!event) return;
    const posts = linkedPosts(event);
    drawerTitle.textContent = `${event.title} · ${posts.length} 条公开记录`;
    drawerList.innerHTML = posts.map(p => {
      const text = cleanText(p.text || p.title || '无公开文案');
      return `<div class="drawer-post">
        <div><div>${platformChip(p.platform)}</div><div class="release-date" style="margin-top:7px">${esc(fmtYearDate(p.published_at))}</div></div>
        <div><div class="owner">${esc(p.owner || '')}</div><div class="release-text" style="-webkit-line-clamp:4;margin-top:5px">${esc(text)}</div></div>
        <div>${p.post_url ? `<a href="${esc(p.post_url)}" target="_blank" rel="noreferrer">原帖 ↗</a>` : ''}</div>
      </div>`;
    }).join('');
    drawer.showModal();
  }

  function buildIndex() {
    indexList.innerHTML = events.map((e,i) => `<div class="index-row" data-event-index="${i+1}">
      <div class="index-date">${esc(displayEventDate(e))}</div>
      <div><div class="index-title">${esc(e.title)}</div><div class="owner" style="margin-top:5px">${esc(e.location_text || '')}</div></div>
      <span class="index-type">${esc(typeLabel(e.event_type))}</span>
    </div>`).join('');
  }

  function syncMobileTabs() {
    document.querySelectorAll('#mobileTabs button').forEach(btn => btn.classList.toggle('active', btn.dataset.side === mobileSide));
  }

  $('#openBook').addEventListener('click', () => {
    landing.classList.add('opening');
    setTimeout(() => {
      landing.style.display = 'none';
      reader.classList.add('visible');
      reader.setAttribute('aria-hidden','false');
      render();
    }, 860);
  });

  $('#closeBook').addEventListener('click', () => {
    reader.classList.remove('visible');
    reader.setAttribute('aria-hidden','true');
    setTimeout(() => {
      reader.style.display = '';
      landing.style.display = 'grid';
      landing.classList.remove('opening');
      current = 0;
    }, 350);
  });

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  railTrack.addEventListener('click', e => {
    const hit = e.target.closest('[data-jump]');
    if (!hit || flipping) return;
    const target = Number(hit.dataset.jump);
    if (target === current) return;
    const dir = target > current ? 1 : -1;
    flipping = true;
    spread.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    setTimeout(() => { current = target; render(); }, 315);
    setTimeout(() => { spread.classList.remove('flip-next','flip-prev'); flipping = false; }, 700);
  });

  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-open-drawer]');
    if (btn) openDrawer(btn.dataset.openDrawer);
  });

  $('#drawerClose').addEventListener('click', () => drawer.close());
  $('#indexBtn').addEventListener('click', () => { buildIndex(); indexDialog.showModal(); });
  $('#indexClose').addEventListener('click', () => indexDialog.close());
  indexList.addEventListener('click', e => {
    const row = e.target.closest('[data-event-index]');
    if (!row) return;
    current = Number(row.dataset.eventIndex);
    indexDialog.close();
    render();
  });

  document.addEventListener('keydown', e => {
    if (!reader.classList.contains('visible')) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'Escape') { if (drawer.open) drawer.close(); if (indexDialog.open) indexDialog.close(); }
  });

  $('#mobileTabs').addEventListener('click', e => {
    const btn = e.target.closest('button[data-side]');
    if (!btn) return;
    mobileSide = btn.dataset.side;
    spread.classList.toggle('mobile-right', mobileSide === 'right');
    syncMobileTabs();
  });

  let touchX = null;
  spread.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, {passive:true});
  spread.addEventListener('touchend', e => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 48) return;
    if (window.innerWidth <= 820) {
      if (dx < 0 && mobileSide === 'left') { mobileSide='right'; spread.classList.add('mobile-right'); syncMobileTabs(); return; }
      if (dx > 0 && mobileSide === 'right') { mobileSide='left'; spread.classList.remove('mobile-right'); syncMobileTabs(); return; }
    }
    go(dx < 0 ? 1 : -1);
  }, {passive:true});

  buildIndex();
})();
