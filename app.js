(() => {
  const data = window.TIMELINE_DATA || { stats:{}, experience_timeline:[], release_timeline:[] };
  const mediaAssets = Array.isArray(window.MEDIA_ASSETS) ? window.MEDIA_ASSETS : [];
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

  const isMobile = () => window.innerWidth <= 820;
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
    const map = { magazine:'杂志拍摄', shooting:'拍摄', live:'直播', concert:'演出', travel:'出行', daily:'日常', interview:'采访', event:'事件' };
    return map[value] || value || '事件';
  }

  function linkedPosts(event) {
    if (Array.isArray(event.linked_posts)) return [...event.linked_posts].sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
    const id = event.event_id;
    return (data.release_timeline || []).filter(p => (p.linked_event_ids || []).includes(id)).sort((a,b) => new Date(a.published_at) - new Date(b.published_at));
  }

  function localAssets(event) {
    return mediaAssets
      .filter(a => a.event_id === event.event_id && a.local_path)
      .sort((a,b) => (Number(a.sort_order)||0) - (Number(b.sort_order)||0));
  }

  function eventImages(event) {
    const local = localAssets(event).map(a => ({ src:a.local_path, caption:a.caption || '', local:true }));
    if (local.length) return local;
    const urls = [];
    for (const p of linkedPosts(event)) {
      for (const u of (p.image_urls || [])) {
        if (u && !urls.some(item => item.src === u)) urls.push({src:u, caption:'关联公开物料', local:false});
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

  function introLeft() {
    return `<span class="hand-date">ARCHIVE 00</span>
      <h2 class="intro-title">一本关于<br>“发生”与“被看见”的手账</h2>
      <div class="event-rule"></div>
      <p class="intro-copy">这里不把社交平台发布时间等同于事情真正发生的时间。经历页记录他们什么时候经历了什么，公开页记录这些片段后来什么时候被看见。</p>
      <div class="legend">
        <div class="legend-item"><span class="legend-badge pink">精确</span><span>公开资料可以确认具体日期。</span></div>
        <div class="legend-item"><span class="legend-badge gold">范围</span><span>事件持续数日，保留开始与结束时间。</span></div>
        <div class="legend-item"><span class="legend-badge mix">约 / 推定</span><span>根据采访、造型、行程或其他公开证据推定，不写成确定事实。</span></div>
      </div>
      <span class="page-number">01</span>`;
  }

  function introRight() {
    const s = data.stats || {};
    return `<span class="right-kicker">HOW TO READ · V0.2</span>
      <h2 class="right-title">先把真实照片放进来，再继续长大。</h2>
      <p class="right-sub">这一版开始使用粉 #FF8AA1 与金 #FFE25B，并把本地素材与事件建立连接。</p>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-num">${esc(s.events ?? events.length)}</div><div class="stat-label">现实事件</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.posts ?? (data.release_timeline||[]).length)}</div><div class="stat-label">公开发布记录</div></div>
        <div class="stat-card"><div class="stat-num">${esc(s.post_event_links ?? 0)}</div><div class="stat-label">事件—帖子关联</div></div>
        <div class="stat-card"><div class="stat-num">${esc(mediaAssets.filter(a=>a.event_id).length)}</div><div class="stat-label">已挂入本地图片</div></div>
      </div>
      <div class="quote-card">“同一张照片，有它被拍下的那一天，也有我们终于看见它的那一天。”</div>
      <span class="page-number">02</span>`;
  }

  function imageGallery(event) {
    const images = eventImages(event);
    if (!images.length) return '';
    const show = images.slice(0,3);
    return `<div class="memory-gallery ${show.length === 1 ? 'single' : ''}" aria-label="事件照片">
      ${show.map((img,i) => `<figure class="memory-photo photo-${i+1}">
        <span class="tape tape-${i+1}"></span>
        <img src="${esc(img.src)}" alt="${esc(img.caption || event.title)}" ${img.local ? '' : 'referrerpolicy="no-referrer"'} loading="lazy">
        ${img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : ''}
      </figure>`).join('')}
    </div>`;
  }

  function eventLeft(event, pageNo) {
    const [precisionText, precisionClass] = precisionLabel(event);
    const tags = (event.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const note = event.date_precision === 'inferred' || event.evidence_note ? `<div class="info-note"><div class="note-title">时间依据</div>${esc(event.evidence_note || '该时间来自公开资料推定，后续可继续补充证据。')}</div>` : '';
    return `<span class="hand-date">REAL TIME · ${esc(typeLabel(event.event_type))}</span>
      <div class="event-date">${esc(displayEventDate(event))}</div>
      <h2 class="event-title">${esc(event.title)}</h2>
      <div class="event-meta">
        <span class="tag ${precisionClass}">${esc(precisionText)}</span>
        <span class="tag ${event.confidence === 'confirmed' ? 'confirmed' : ''}">${esc(confidenceLabel(event.confidence))}</span>
        ${event.location_text ? `<span class="tag location">⌖ ${esc(event.location_text)}</span>` : ''}
        ${tags}
      </div>
      <div class="event-rule"></div>
      <p class="event-desc">${esc(event.description || '这一天的细节还在继续补全。')}</p>
      ${note}
      <div class="participants">参与：${esc((event.participants || []).join('、') || '待补充')}</div>
      ${imageGallery(event)}
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

  function updateNavState() {
    if (isMobile()) {
      const firstPage = current === 0 && mobileSide === 'left';
      const lastPage = current === spreads.length - 1 && mobileSide === 'right';
      prevBtn.disabled = firstPage;
      nextBtn.disabled = lastPage;
      const pageIndex = current * 2 + (mobileSide === 'right' ? 2 : 1);
      pageCounter.textContent = `${pad(pageIndex)} / ${pad(spreads.length * 2)}`;
      prevBtn.setAttribute('aria-label', mobileSide === 'right' ? '返回经历页' : '上一页');
      nextBtn.setAttribute('aria-label', mobileSide === 'left' ? '查看公开页' : '下一页');
    } else {
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current === spreads.length - 1;
      pageCounter.textContent = `${pad(current+1)} / ${pad(spreads.length)}`;
      prevBtn.setAttribute('aria-label','上一事件');
      nextBtn.setAttribute('aria-label','下一事件');
    }
  }

  function render({preserveSide=false} = {}) {
    const item = spreads[current];
    if (!preserveSide) mobileSide = 'left';
    spread.classList.toggle('mobile-right', mobileSide === 'right');
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
    updateNavState();
    renderRail();
  }

  function renderRail() {
    railTrack.innerHTML = spreads.map((item,i) => `<div class="rail-dot-wrap ${i===current?'active':''}" data-jump="${i}" title="${item.kind==='intro'?'开始':esc(item.event.title)}"><span class="rail-dot"></span></div>`).join('');
  }

  function flipToSpread(target, dir, side='left') {
    if (flipping || target < 0 || target >= spreads.length) return;
    flipping = true;
    spread.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    setTimeout(() => {
      current = target;
      mobileSide = side;
      render({preserveSide:true});
    }, 315);
    setTimeout(() => { spread.classList.remove('flip-next','flip-prev'); flipping = false; }, 700);
  }

  function goSpread(dir) {
    flipToSpread(current + dir, dir, 'left');
  }

  function goPage(dir) {
    if (!isMobile()) return goSpread(dir);
    if (flipping) return;
    if (dir > 0) {
      if (mobileSide === 'left') {
        mobileSide = 'right';
        spread.classList.add('mobile-right');
        syncMobileTabs();
        updateNavState();
        return;
      }
      if (current < spreads.length - 1) flipToSpread(current + 1, 1, 'left');
      return;
    }
    if (mobileSide === 'right') {
      mobileSide = 'left';
      spread.classList.remove('mobile-right');
      syncMobileTabs();
      updateNavState();
      return;
    }
    if (current > 0) flipToSpread(current - 1, -1, 'right');
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
      mobileSide = 'left';
    }, 350);
  });

  prevBtn.addEventListener('click', () => goPage(-1));
  nextBtn.addEventListener('click', () => goPage(1));

  railTrack.addEventListener('click', e => {
    const hit = e.target.closest('[data-jump]');
    if (!hit || flipping) return;
    const target = Number(hit.dataset.jump);
    if (target === current) {
      mobileSide = 'left';
      spread.classList.remove('mobile-right');
      syncMobileTabs();
      updateNavState();
      return;
    }
    flipToSpread(target, target > current ? 1 : -1, 'left');
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
    mobileSide = 'left';
    indexDialog.close();
    render({preserveSide:true});
  });

  document.addEventListener('keydown', e => {
    if (!reader.classList.contains('visible')) return;
    if (e.key === 'ArrowRight') goPage(1);
    if (e.key === 'ArrowLeft') goPage(-1);
    if (e.key === 'Escape') { if (drawer.open) drawer.close(); if (indexDialog.open) indexDialog.close(); }
  });

  $('#mobileTabs').addEventListener('click', e => {
    const btn = e.target.closest('button[data-side]');
    if (!btn) return;
    mobileSide = btn.dataset.side;
    spread.classList.toggle('mobile-right', mobileSide === 'right');
    syncMobileTabs();
    updateNavState();
  });

  let touchX = null;
  spread.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, {passive:true});
  spread.addEventListener('touchend', e => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 48) return;
    goPage(dx < 0 ? 1 : -1);
  }, {passive:true});

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      mobileSide = 'left';
      spread.classList.remove('mobile-right');
      syncMobileTabs();
    }
    updateNavState();
  });

  buildIndex();
})();
