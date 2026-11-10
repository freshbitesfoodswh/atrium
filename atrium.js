(function () {
  const ICONS = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M6 16l5-6 4 3 6-8"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V3h8v4M3 12c5 4 13 4 18 0M12 12v4"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V10M12 14C4 15 3 9 3 5c7 0 9 4 9 9Zm0-4c0-5 4-7 9-7 0 5-3 9-9 9M8 22l4-3 4 3"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8 12 3l9 5v11H3ZM3 8l9 5 9-5M12 13v9"/></svg>',
    fish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12S8 5 14 7c3 1 5 5 5 5l4-4v8l-4-4s-2 4-5 5C8 19 3 12 3 12Z"/><circle cx="9" cy="11" r=".7"/></svg>',
    quilt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M4 12h16"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="3"/><path d="M2 10h20M16 14h2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 10 4 4 4-4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>',
    bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="5"/><path d="M12 7V3M8 16h8"/><circle cx="8" cy="12" r=".5"/><circle cx="16" cy="12" r=".5"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 3-1 3-3 1 1 3-2 2 2 2-1 3 3 1 1 3h6l1-3 3-1-1-3 2-2-2-2 1-3-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>'
  };

  const SCHEMES = {
    midnight: { name: 'Midnight / Electric blue', swatch: '#3278FF' },
    botanical: { name: 'Botanical / Sage', swatch: '#79B4A1' },
    iris: { name: 'Iris / Lavender', swatch: '#B5A1E6' },
    linen: { name: 'Linen / Sand', swatch: '#DEC493' }
  };

  const NAV_ICONS = {
    'little-roots': 'leaf',
    journal: 'eye',
    'rocky-top-reef': 'fish',
    'quilt-designer': 'quilt',
    forge: 'bolt',
    'room-scanner': 'box',
    job: 'briefcase',
    trading: 'chart',
    finance: 'wallet',
    'little-roots-budget': 'leaf'
  };

  const state = {
    data: { projects: [], dashboards: [] },
    route: { view: 'projects', dashId: '', editionId: '' },
    projectsOpen: true,
    dashboardsOpen: true,
    rail: false,
    scheme: 'midnight'
  };

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function newestEdition(dash) {
    const eds = (dash && dash.editions) || [];
    return eds.find(function (e) { return e.newest; }) || eds[0] || null;
  }

  function dashUrl(dash, edition) {
    if (edition && edition.url) return edition.url;
    if (dash && dash.url) return dash.url;
    const n = newestEdition(dash);
    return (n && n.url) || '#';
  }

  function isExternal(url) {
    return /cursor\.com\/canvas|netlify\.app|pages\.grok\.bot/.test(url || '');
  }

  function parseHash() {
    const raw = (location.hash || '#/projects').replace(/^#/, '');
    const parts = raw.split('/').filter(Boolean);
    if (!parts.length || parts[0] === 'projects') return { view: 'projects', dashId: '', editionId: '' };
    if (parts[0] === 'dashboards') {
      return { view: 'dashboards', dashId: parts[1] || '', editionId: parts[2] || '' };
    }
    return { view: 'projects', dashId: '', editionId: '' };
  }

  function go(hash) {
    if (location.hash === hash) {
      state.route = parseHash();
      render();
    } else {
      location.hash = hash;
    }
  }

  function loadPrefs() {
    try {
      const nav = JSON.parse(localStorage.getItem('atrium:nav') || '{}');
      if (typeof nav.projectsOpen === 'boolean') state.projectsOpen = nav.projectsOpen;
      if (typeof nav.dashboardsOpen === 'boolean') state.dashboardsOpen = nav.dashboardsOpen;
      if (typeof nav.rail === 'boolean') state.rail = nav.rail;
    } catch (e) {}
    const scheme = localStorage.getItem('atrium:wardrobe');
    if (scheme && SCHEMES[scheme]) state.scheme = scheme;
    applyScheme();
  }

  function saveNav() {
    localStorage.setItem('atrium:nav', JSON.stringify({
      projectsOpen: state.projectsOpen,
      dashboardsOpen: state.dashboardsOpen,
      rail: state.rail
    }));
  }

  function applyScheme() {
    document.documentElement.setAttribute('data-scheme', state.scheme === 'midnight' ? '' : state.scheme);
    if (state.scheme === 'midnight') document.documentElement.removeAttribute('data-scheme');
    else document.documentElement.setAttribute('data-scheme', state.scheme);
  }

  function setScheme(id) {
    if (!SCHEMES[id]) return;
    state.scheme = id;
    localStorage.setItem('atrium:wardrobe', id);
    applyScheme();
    var w = document.getElementById('wardrobe');
    if (!w || !w.querySelector('.swatch')) { renderWardrobe(); return; }
    w.querySelectorAll('.swatch').forEach(function (btn) {
      btn.innerHTML = btn.getAttribute('data-scheme-id') === id ? ICONS.check : '';
    });
    var label = w.querySelector('.scheme');
    if (label) label.textContent = SCHEMES[id].name;
  }

  function openJedi(prefill) {
    const panel = document.getElementById('jedi-panel');
    const tab = document.getElementById('jedi-tab');
    if (tab && !(panel && panel.classList.contains('open'))) tab.click();
    if (prefill) {
      const msg = document.getElementById('jedi-msg');
      if (msg && !msg.value) msg.value = prefill;
      if (msg) msg.focus();
    }
  }

  function initials(name) {
    const parts = String(name || 'T').trim().split(/\s+/);
    return ((parts[0] || 'T')[0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
  }

  function closeMobileNav() {
    document.body.classList.remove('nav-open');
    const btn = document.getElementById('menuBtn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function renderSidebar() {
    const aside = document.getElementById('sidebar');
    const projects = state.data.projects || [];
    const dashboards = state.data.dashboards || [];
    const r = state.route;
    const projectItems = projects.map(function (p) {
      return '<button type="button" class="navitem" data-open="' + esc(p.url) + '">' +
        (ICONS[NAV_ICONS[p.id] || 'pin'] || ICONS.pin) + esc(p.nav || p.name) + '</button>';
    }).join('');
    const dashItems = dashboards.map(function (d) {
      const selected = r.view === 'dashboards' && r.dashId === d.id;
      const eds = d.editions || [];
      let extra = '';
      if (selected && eds.length) {
        extra = '<div class="archive"><small>Versions · newest first</small>' + eds.map(function (e) {
          const cls = (r.editionId ? r.editionId === e.id : e.newest) ? 'newest' : '';
          return '<a class="' + cls + '" href="#/dashboards/' + encodeURIComponent(d.id) + '/' + encodeURIComponent(e.id) + '">' +
            esc(e.label) + (e.newest ? ' · newest' : '') +
            (e.date ? '<small>' + esc(e.date) + '</small>' : '') + '</a>';
        }).join('') + '</div>';
      }
      return '<a class="navitem' + (selected ? ' sel' : '') + '" href="#/dashboards/' + encodeURIComponent(d.id) + '">' +
        (ICONS[NAV_ICONS[d.id] || 'chart'] || ICONS.chart) + esc(d.nav || d.name) +
        (d.attention ? '<span class="cue" title="Needs attention"></span>' : '') + '</a>' + extra;
    }).join('');
    const shortcut = dashboards.find(function (d) { return d.shortcut; });
    const user = (window.AtriumAuth && AtriumAuth.current && AtriumAuth.current()) || {};
    const who = user.name || user.email || "Teri's workspace";
    const pic = user.picture ? '<img src="' + esc(user.picture) + '" alt="">' : esc(initials(who));

    aside.classList.toggle('collapsed', state.rail);
    document.body.classList.toggle('rail', state.rail);

    aside.innerHTML =
      '<div class="brand">' +
        '<button type="button" class="gear" id="gearBtn" aria-label="Settings" aria-haspopup="true" aria-expanded="false">' + ICONS.gear + '</button>' +
        '<span class="brand-name">Atrium</span>' +
        '<button type="button" class="collapse" id="railBtn" aria-label="' + (state.rail ? 'Expand navigation' : 'Collapse navigation') + '">' + (state.rail ? '›' : '‹') + '</button>' +
        '<button type="button" class="iconbtn" id="closeNav" aria-label="Close navigation">✕</button>' +
      '</div>' +
      '<button type="button" class="navgroup' + (r.view === 'projects' ? ' active' : '') + (state.projectsOpen ? '' : ' closed') + '" id="projToggle" aria-expanded="' + state.projectsOpen + '">' +
        ICONS.grid + '<span>Projects</span>' + ICONS.chev +
      '</button>' +
      '<div class="navitems" id="projItems"' + (state.projectsOpen ? '' : ' hidden') + '>' + projectItems +
        '<button type="button" class="navitem" id="navAddProject">' + ICONS.plus + 'Add project</button>' +
      '</div>' +
      '<button type="button" class="navgroup' + (r.view === 'dashboards' ? ' active' : '') + (state.dashboardsOpen ? '' : ' closed') + '" id="dashToggle" aria-expanded="' + state.dashboardsOpen + '">' +
        ICONS.chart + '<span>Status Dashboards</span>' + ICONS.chev +
      '</button>' +
      '<div class="navitems" id="dashItems"' + (state.dashboardsOpen ? '' : ' hidden') + '>' + dashItems + '</div>' +
      (shortcut ? '<a class="shortcut" href="#/dashboards/' + encodeURIComponent(shortcut.id) + '">' + ICONS.briefcase + '<span>' + esc(shortcut.name) + '</span>' + ICONS.arrow + '</a>' : '') +
      '<div class="botlinks">' +
        '<button type="button" id="askJedi">' + ICONS.bot + 'Ask Jedi Bot</button>' +
        '<a class="more" href="changelog.html">Changelog ↗</a>' +
      '</div>' +
      '<div class="profile"><div class="avatar">' + pic + '</div><div><b>' + esc(who) + '</b><small>A place for everything.</small>' +
        '<button type="button" class="signout" id="signOutBtn">Sign out</button></div></div>';

    document.getElementById('gearBtn').onclick = toggleWardrobe;
    var closeNav = document.getElementById('closeNav');
    if (closeNav) closeNav.onclick = closeMobileNav;
    document.getElementById('railBtn').onclick = function () {
      state.rail = !state.rail;
      saveNav();
      renderSidebar();
    };
    document.getElementById('projToggle').onclick = function () {
      if (state.route.view !== 'projects') {
        state.projectsOpen = true;
        saveNav();
        go('#/projects');
        return;
      }
      state.projectsOpen = !state.projectsOpen;
      saveNav();
      renderSidebar();
    };
    document.getElementById('dashToggle').onclick = function () {
      if (state.route.view !== 'dashboards') {
        state.dashboardsOpen = true;
        saveNav();
        go('#/dashboards');
        return;
      }
      state.dashboardsOpen = !state.dashboardsOpen;
      saveNav();
      renderSidebar();
    };
    aside.querySelectorAll('[data-open]').forEach(function (el) {
      el.onclick = function () {
        closeMobileNav();
        window.open(el.getAttribute('data-open'), '_blank', 'noopener');
      };
    });
    const add = document.getElementById('navAddProject');
    if (add) add.onclick = function () { openJedi('Please add a new project to The Atrium.'); };
    const ask = document.getElementById('askJedi');
    if (ask) ask.onclick = function () { openJedi(); };
    const so = document.getElementById('signOutBtn');
    if (so) so.onclick = function () { AtriumAuth.signOut(); };
  }

  function toggleWardrobe() {
    const w = document.getElementById('wardrobe');
    if (!w) return;
    w.hidden = !w.hidden;
    const g = document.getElementById('gearBtn');
    if (g) g.setAttribute('aria-expanded', w.hidden ? 'false' : 'true');
  }

  function renderWardrobe() {
    const w = document.getElementById('wardrobe');
    if (!w) return;
    w.innerHTML = '<strong>Wardrobe</strong><p>A different mood. The same Atrium.</p><div class="swatches">' +
      Object.keys(SCHEMES).map(function (id) {
        const s = SCHEMES[id];
        return '<button type="button" class="swatch" data-scheme-id="' + id + '" style="--swatch:' + s.swatch + '" aria-label="' + esc(s.name) + '">' +
          (state.scheme === id ? ICONS.check : '') + '</button>';
      }).join('') +
      '</div><div class="scheme">' + esc(SCHEMES[state.scheme].name) + '</div>';
    w.querySelectorAll('.swatch').forEach(function (btn) {
      btn.onclick = function () { setScheme(btn.getAttribute('data-scheme-id')); };
    });
    const g = document.getElementById('gearBtn');
    if (g) g.setAttribute('aria-expanded', w.hidden ? 'false' : 'true');
  }

  function card(p) {
    const ext = isExternal(p.url);
    return '<a class="card' + (p.featured ? ' featured' : '') + '" href="' + esc(p.url) + '"' +
      (ext || p.url.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') + '>' +
      '<div class="art"><img src="' + esc(p.icon) + '" alt=""></div>' +
      '<div class="badges">' + (p.canvas ? '<span class="badge">Canvas mode</span>' : '') +
      (p.version ? '<span class="badge">v' + esc(p.version) + '</span>' : '') + '</div>' +
      '<div class="cardcopy"><h3>' + esc(p.name) + '</h3><p>' + esc(p.tagline || p.desc) + '</p></div>' +
      '<span class="corner">' + ICONS.arrow + '</span></a>';
  }

  function renderProjects() {
    const projects = state.data.projects || [];
    document.getElementById('crumb').innerHTML = 'Workspace <span>/</span><b>Projects</b>';
    document.getElementById('view').innerHTML =
      '<div class="heading"><div><div class="label">Atrium / Your creative workspace</div>' +
      '<h1>Projects</h1><p>A home for everything you’re bringing to life.</p></div>' +
      '<button type="button" class="pill" id="addProject">' + ICONS.plus + 'Add project</button></div>' +
      '<div class="sectionhead"><h2>Your project spaces</h2></div>' +
      '<div class="cards">' + projects.map(card).join('') +
      '<button type="button" class="card add" id="addCard"><div class="symbol">' + ICONS.plus + '</div>' +
      '<h3>What’s next?</h3><p>Ask Jedi Bot to add a project</p></button></div>' +
      '<div class="footnote">Tiles use each project’s artwork. Add another later by appending it to apps.json.</div>';
    document.getElementById('addProject').onclick = function () { openJedi('Please add a new project to The Atrium.'); };
    document.getElementById('addCard').onclick = function () { openJedi('Please add a new project to The Atrium.'); };
  }

  function renderDashboards() {
    const dashboards = state.data.dashboards || [];
    document.getElementById('crumb').innerHTML = 'Workspace <span>/</span><b>Status Dashboards</b>';
    const flagged = dashboards.filter(function (d) { return d.attention; });
    const lead = dashboards[0];
    const leadEd = lead ? newestEdition(lead) : null;
    document.getElementById('view').innerHTML =
      '<div class="heading"><div><div class="label">Atrium / Daily briefing</div>' +
      '<h1>Status Dashboards</h1><p>A clear view of what matters. Job Search stays separate from Finance.</p></div></div>' +
      (lead ? '<a class="summary" href="#/dashboards/' + encodeURIComponent(lead.id) + '">' +
        '<div class="symbol">' + ICONS.briefcase + '</div><div><div class="label">' + esc(lead.nav || lead.name) + ' / Newest</div>' +
        '<h2>' + esc(lead.name) + '</h2><p>' + esc((leadEd && (leadEd.summary || leadEd.label)) || lead.summary || lead.desc) +
        (leadEd && leadEd.date ? ' · ' + esc(leadEd.date) : '') + '</p></div>' +
        '<div class="right">' + (lead.attention ? '<span class="pending">' + ICONS.clock + 'Needs attention</span>' : '<span class="pending">' + ICONS.clock + 'Newest first</span>') +
        '<p style="margin-top:11px">Defaults to the most recent version</p></div></a>' : '') +
      '<div class="sectionhead"><h2>Your dashboards</h2></div>' +
      '<div class="tiles">' + dashboards.map(function (d) {
        const ed = newestEdition(d);
        return '<a class="tile" href="#/dashboards/' + encodeURIComponent(d.id) + '"><div class="tiletop">' +
          (ICONS[NAV_ICONS[d.id] || 'chart'] || ICONS.chart) + '<span>' + esc((d.nav || d.name).toUpperCase()) + '</span></div>' +
          '<h3>' + esc(d.name) + '</h3><div class="value">' + esc((ed && ed.label) || 'Open dashboard') + '</div>' +
          (d.attention ? '<small>Needs attention</small>' : (ed && ed.date ? '<small>' + esc(ed.date) + (ed.newest ? ' · newest' : '') + '</small>' : '')) +
          '</a>';
      }).join('') + '</div>' +
      '<div class="bottomgrid"><div class="panel"><h2>Needs your attention</h2>' +
      (flagged.length
        ? flagged.map(function (d) { return '<p>' + esc(d.name) + (d.attentionNote ? ' — ' + esc(d.attentionNote) : '') + '</p>'; }).join('')
        : '<div class="value" style="margin:16px 0 8px;font-size:18px">Nothing flagged right now</div><p>Attention cues appear here only when a dashboard is marked in apps.json. No invented alerts.</p>') +
      '</div><div class="panel"><h2>How this works</h2><p>Open a dashboard to see its newest version first. Earlier versions stay under that dashboard in the left navigation — never mixed into another category.</p></div></div>' +
      '<div class="footnote">Job Search is its own dashboard, separate from Finance and Trading.</div>';
  }

  function renderDetail(dash, edition) {
    const ed = edition || newestEdition(dash) || { label: dash.name, url: dash.url, summary: dash.summary };
    const url = dashUrl(dash, ed);
    const others = (dash.editions || []).filter(function (e) { return e.id !== ed.id; });
    document.getElementById('crumb').innerHTML = 'Workspace <span>/</span><b>Status Dashboards / ' + esc(dash.nav || dash.name) + '</b>';
    document.getElementById('view').innerHTML =
      '<div class="heading"><div><div class="label">Atrium / Daily briefing</div>' +
      '<h1>' + esc(dash.name) + '</h1><p>' + esc(dash.desc || '') + '</p></div>' +
      '<span class="pill">' + ICONS.clock + (ed.newest || !edition ? 'Newest version' : esc(ed.date || 'Earlier version')) + '</span></div>' +
      '<div class="summary"><div class="symbol">' + (ICONS[NAV_ICONS[dash.id] || 'chart'] || ICONS.chart) + '</div>' +
      '<div><div class="label">' + esc((dash.nav || dash.name).toUpperCase()) + ' / ' + esc(ed.label || 'Current') + '</div>' +
      '<h2>' + esc(ed.label || dash.name) + '</h2>' +
      '<p>' + esc(ed.summary || dash.summary || dash.desc || '') + (ed.date ? ' · ' + esc(ed.date) : '') + '</p></div>' +
      '<div class="right">' + (dash.attention ? '<span class="pending">' + ICONS.clock + 'Needs attention</span>' : '') +
      '<p>Defaults to the most recent version</p></div></div>' +
      '<div class="detailbody"><div class="editionpanel"><div class="label">Current version / summary</div>' +
      '<h2>' + esc(ed.label || dash.name) + '</h2><p>' + esc(ed.summary || dash.summary || dash.desc) + '</p>' +
      (dash.bot && dash.botId ? '<div class="datarow"><span>Talk to</span><strong><a href="grokbot://app/v1/agent?id=' + esc(dash.botId) + '">' + esc(dash.bot) + '</a></strong></div>' : '') +
      '<div class="editionnote"><p>The newest version opens by default. Choose an earlier version under this dashboard in the left navigation to revisit it.</p></div>' +
      '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">Open ' + esc(ed.label || dash.name) + ' ' + ICONS.arrow + '</a></div>' +
      '<div class="editionpanel"><div class="label">Other versions</div><h2>In this dashboard</h2>' +
      (others.length
        ? others.map(function (e) {
            return '<div class="datarow"><span>' + esc(e.label) + (e.date ? '<br><small>' + esc(e.date) + '</small>' : '') + '</span>' +
              '<a href="#/dashboards/' + encodeURIComponent(dash.id) + '/' + encodeURIComponent(e.id) + '">View</a></div>';
          }).join('')
        : '<p>This dashboard has one live version right now. When earlier daily versions exist, they will appear here and in the left navigation.</p>') +
      '</div></div>';
  }

  function render() {
    state.route = parseHash();
    const r = state.route;
    renderSidebar();
    renderWardrobe();
    if (r.view === 'dashboards' && r.dashId) {
      const dash = (state.data.dashboards || []).find(function (d) { return d.id === r.dashId; });
      if (!dash) {
        renderDashboards();
      } else {
        const edition = (dash.editions || []).find(function (e) { return e.id === r.editionId; });
        renderDetail(dash, edition);
      }
    } else if (r.view === 'dashboards') {
      renderDashboards();
    } else {
      renderProjects();
    }
    document.getElementById('gearBtn').setAttribute('aria-expanded', document.getElementById('wardrobe').hidden ? 'false' : 'true');
  }

  function bindChrome() {
    document.getElementById('menuBtn').onclick = function () {
      const open = document.body.classList.toggle('nav-open');
      document.getElementById('menuBtn').setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    document.getElementById('scrim').onclick = closeMobileNav;
    document.getElementById('mobileGear').onclick = function () {
      document.body.classList.add('nav-open');
      document.getElementById('wardrobe').hidden = false;
      const g = document.getElementById('gearBtn');
      if (g) g.setAttribute('aria-expanded', 'true');
    };
    window.addEventListener('hashchange', function () { closeMobileNav(); render(); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      closeMobileNav();
      var w = document.getElementById('wardrobe');
      if (w) w.hidden = true;
      var panel = document.getElementById('jedi-panel');
      var tab = document.getElementById('jedi-tab');
      if (panel && panel.classList.contains('open') && tab) tab.click();
    });
    document.addEventListener('click', function (e) {
      const w = document.getElementById('wardrobe');
      if (!w || w.hidden) return;
      const t = e.target;
      if (!t || (t.isConnected === false)) return;
      if ((t.closest && t.closest('#wardrobe')) || (t.closest && t.closest('#gearBtn')) || (t.closest && t.closest('#mobileGear'))) return;
      w.hidden = true;
      const g = document.getElementById('gearBtn');
      if (g) g.setAttribute('aria-expanded', 'false');
    });
  }

  function boot(user) {
    document.getElementById('app').hidden = false;
    loadPrefs();
    bindChrome();
    fetch('apps.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (data) {
      state.data = {
        projects: data.projects || [],
        dashboards: data.dashboards || []
      };
      render();
    });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
  }

  window.AtriumApp = { boot: boot, openJedi: openJedi };

  if (window.AtriumAuth) {
    AtriumAuth.mountGate({
      title: 'The Atrium',
      blurb: 'Sign in with Google. Invited: Teri & Tiffani Allen.',
      onReady: boot
    });
  } else {
    boot();
  }
})();
