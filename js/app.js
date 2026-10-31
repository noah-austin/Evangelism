(function () {
  "use strict";

  const D = window.DATA;
  const app = document.getElementById("app");
  const backBtn = document.getElementById("back-btn");
  const backLabel = document.getElementById("back-label");
  const navTitle = document.getElementById("nav-title");
  const tabbar = document.getElementById("tabbar");
  const sheet = document.getElementById("sheet");
  const sheetBackdrop = document.getElementById("sheet-backdrop");

  const COPYRIGHT =
    "Scripture quotations taken from the (NASB®) New American Standard Bible®, Copyright © 1960, 1971, 1977, 1995 by The Lockman Foundation. Used by permission. All rights reserved. lockman.org";

  // ── Structure ───────────────────────────────────────
  // Content sections (one data file each)
  const SECTIONS = {
    paths: "Gospel Path",
    openers: "Openers & Wrap-Up",
    objections: "Objections",
    worldviews: "Worldviews",
    skills: "Conversation Skills",
    evidence: "Evidence & Arguments",
  };

  // Bottom tabs, and which sections live in each
  const ICONS = {
    share: '<path d="M12 3v18M6 9h12" stroke-linecap="round"/>',
    answer: '<path d="M4 5h16v10H9l-5 4z" stroke-linejoin="round"/>',
    tactics: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
    verses: '<path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4z" stroke-linejoin="round"/><path d="M9 9h6M9 13h6" stroke-linecap="round"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5" stroke-linecap="round"/>',
  };
  const TABS = [
    { id: "share", label: "Share", title: "Share the Gospel", groups: ["paths", "openers"] },
    { id: "answer", label: "Answer", title: "Answer Questions", groups: ["objections", "worldviews"] },
    { id: "tactics", label: "Tactics", title: "Tactics & Evidence", groups: ["skills", "evidence"] },
    { id: "verses", label: "Verses", title: "Quick Verses" },
    { id: "search", label: "Search", title: "Search" },
  ];
  const tabById = Object.fromEntries(TABS.map((t) => [t.id, t]));
  const tabOfSection = {};
  TABS.forEach((t) => (t.groups || []).forEach((s) => (tabOfSection[s] = t.id)));

  // ── Storage ─────────────────────────────────────────
  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch (e) {}
    },
  };
  let favs = store.get("favs", []);
  const isFav = (key) => favs.includes(key);
  function toggleFav(key) {
    favs = isFav(key) ? favs.filter((k) => k !== key) : [key, ...favs];
    store.set("favs", favs);
  }

  // ── Data helpers ────────────────────────────────────
  const normRef = (r) => String(r).toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  const verseMap = new Map(D.verses.map((v) => [normRef(v.ref), v]));
  const getVerse = (ref) => verseMap.get(normRef(ref));
  const itemsOf = (sec) => D[sec] || [];
  const getItem = (sec, id) => itemsOf(sec).find((x) => x.id === id);
  const itemTitle = (sec, item) => (sec === "objections" ? `“${item.title}”` : item.title);
  const asList = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);

  // ── Text formatting ─────────────────────────────────
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  function unesc(s) {
    return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  }
  function verseLink(ref) {
    return `<button class="vref${getVerse(ref) ? "" : " missing"}" data-ref="${esc(ref)}">${esc(ref)}</button>`;
  }
  function inline(s) {
    let out = esc(s);
    out = out.replace(/\[\[([^\]]+)\]\]/g, (m, ref) => verseLink(unesc(ref)));
    out = out.replace(/\{\{([^|}]+)\|([^}]+)\}\}/g, (m, label, href) => `<a href="#/${href.trim()}">${label}</a>`);
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>");
    return out;
  }
  function md(text) {
    if (!text) return "";
    // Blank lines separate blocks; "- " and "1. " lines become lists.
    return String(text)
      .trim()
      .split(/\n\s*\n/)
      .map((block) => {
        const groups = [];
        for (const line of block.split("\n").map((l) => l.trim()).filter(Boolean)) {
          const type = /^- /.test(line) ? "ul" : /^\d+\. /.test(line) ? "ol" : "p";
          const last = groups[groups.length - 1];
          if (last && last.type === type) last.lines.push(line);
          else groups.push({ type, lines: [line] });
        }
        return groups
          .map((g) =>
            g.type === "p"
              ? `<p>${g.lines.map(inline).join("<br>")}</p>`
              : `<${g.type}>${g.lines.map((l) => `<li>${inline(l.replace(/^(- |\d+\. )/, ""))}</li>`).join("")}</${g.type}>`
          )
          .join("");
      })
      .join("");
  }
  function plain(s) {
    return String(s ?? "")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/\{\{([^|}]+)\|[^}]+\}\}/g, "$1")
      .replace(/\*\*?/g, "")
      .replace(/^- /gm, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // ── UI pieces ───────────────────────────────────────
  const chevron = `<svg class="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const starSvg = (on) =>
    `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`;
  function favButton(key) {
    const on = isFav(key);
    return `<button class="fav${on ? " on" : ""}" data-fav="${esc(key)}" aria-label="${on ? "Remove from saved" : "Save"}">${starSvg(on)}</button>`;
  }
  function row(href, title, sub, kicker, extra) {
    return `<a class="row" href="${href}">
      <span class="row-main">
        ${kicker ? `<span class="row-kicker">${esc(kicker)}</span>` : ""}
        <span class="row-title">${title}</span>
        ${sub ? `<span class="row-sub">${esc(sub)}</span>` : ""}
      </span>${extra || ""}${chevron}</a>`;
  }
  function verseRow(v, kicker) {
    return `<button class="row" data-ref="${esc(v.ref)}">
      <span class="row-main">
        ${kicker ? `<span class="row-kicker">${esc(kicker)}</span>` : ""}
        <span class="row-title">${esc(v.ref)}${isFav("verse:" + v.ref) ? ` <span class="saved-dot">★</span>` : ""}</span>
        <span class="row-sub verse-sub">${esc(v.text)}</span>
      </span></button>`;
  }
  function itemRow(sec, item, kicker) {
    const sub = item.oneLiner || plain(item.summary);
    const draft = item.draft ? ` <span class="tag">Draft</span>` : "";
    return row(`#/${sec}/${item.id}`, esc(itemTitle(sec, item)) + draft, item.draft ? "" : sub, kicker);
  }
  function sources(list) {
    return list && list.length ? `<p class="sources">${list.map(esc).join(" · ")}</p>` : "";
  }
  function verseRefs(refs) {
    return refs && refs.length ? `<div class="vrefs">${refs.map(verseLink).join("")}</div>` : "";
  }
  function lines(kind, label, list) {
    return asList(list).map((l) => `<div class="${kind}"><span class="label">${label}</span><p>${inline(l)}</p></div>`).join("");
  }
  function branches(list, item, sec) {
    if (!list || !list.length) return "";
    return `<div class="branches"><span class="label">If they say…</span>${list
      .map((b) => {
        let href, target;
        if (b.go.startsWith("step:")) {
          const n = b.go.slice(5);
          href = `#/${sec}/${item.id}/${n}`;
          const step = item.parts[n - 1];
          target = `Step ${n}${step && step.heading ? ": " + step.heading : ""}`;
        } else {
          href = `#/${b.go}`;
          const [s, id] = b.go.split("/");
          const t = getItem(s, id);
          target = t ? itemTitle(s, t) : b.go;
        }
        return `<a class="branch" href="${href}"><span><span class="branch-if">${inline(b.if)}</span><span class="branch-go">${esc(target)}</span></span>${chevron}</a>`;
      })
      .join("")}</div>`;
  }
  function renderPart(p, i, item, sec) {
    const num = item.numbered ? `<span class="num">${i + 1}</span>` : "";
    return `<section class="part" id="step-${i + 1}">
      ${p.heading || num ? `<h2 class="part-title">${num}<span>${inline(p.heading || "")}</span></h2>` : ""}
      ${lines("say", "Say", p.say)}
      ${lines("ask", "Ask", p.ask)}
      ${p.body ? `<div class="prose">${md(p.body)}</div>` : ""}
      ${verseRefs(p.verses)}
      ${branches(p.branches, item, sec)}
    </section>`;
  }

  // ── Pages ───────────────────────────────────────────
  function pageTab(tab) {
    if (tab.id === "verses") return pageVerses(tab);
    if (tab.id === "search") return pageSearch(tab);
    app.innerHTML = `
      <h1 class="large-title">${esc(tab.title)}</h1>
      ${tab.groups
        .map(
          (sec) => `<h2 class="group-label">${esc(SECTIONS[sec])}</h2>
          <div class="group">${itemsOf(sec).map((item) => itemRow(sec, item)).join("")}</div>`
        )
        .join("")}`;
    return { title: tab.title, tab: tab.id };
  }

  let verseTopic = sessionStorage.getItem("verseTopic") || "All";
  function pageVerses(tab) {
    const topics = ["All", "Saved", ...D.verseTopics];
    const list =
      verseTopic === "All"
        ? D.verses
        : verseTopic === "Saved"
        ? D.verses.filter((v) => isFav("verse:" + v.ref))
        : D.verses.filter((v) => (v.topics || []).includes(verseTopic));
    const unverified = D.verses.filter((v) => !v.verified).length;
    app.innerHTML = `
      <h1 class="large-title">${esc(tab.title)}</h1>
      <div class="filters">${topics
        .map((t) => `<button class="filter${t === verseTopic ? " on" : ""}" data-topic="${esc(t)}">${esc(t)}</button>`)
        .join("")}</div>
      <div class="group">${list.length ? list.map((v) => verseRow(v)).join("") : `<p class="empty">No saved verses yet. Tap ☆ on any verse to save it.</p>`}</div>
      ${unverified ? `<p class="footnote">${unverified} of ${D.verses.length} verses still need their wording checked against a NASB 1995 Bible.</p>` : ""}
      <p class="footnote">${esc(COPYRIGHT)}</p>`;
    return { title: tab.title, tab: tab.id };
  }

  let lastQuery = sessionStorage.getItem("q") || "";
  function pageSearch(tab) {
    app.innerHTML = `
      <h1 class="large-title">${esc(tab.title)}</h1>
      <div class="search-box">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">${ICONS.search}</svg>
        <input id="search" type="search" placeholder="Verses, objections, topics…" autocomplete="off" autocorrect="off" spellcheck="false" value="${esc(lastQuery)}">
      </div>
      <div id="search-body"></div>`;
    const input = document.getElementById("search");
    input.addEventListener("input", () => {
      lastQuery = input.value;
      sessionStorage.setItem("q", lastQuery);
      renderSearchBody();
    });
    renderSearchBody();
    return { title: tab.title, tab: tab.id };
  }
  function renderSearchBody() {
    const body = document.getElementById("search-body");
    if (!body) return;
    if (lastQuery.trim()) {
      body.innerHTML = searchResults(lastQuery);
      return;
    }
    const saved = favs.map(savedRow).filter(Boolean);
    body.innerHTML = `<h2 class="group-label">Saved</h2>
      ${saved.length ? `<div class="group">${saved.join("")}</div>` : `<p class="empty">Nothing saved yet. Tap ☆ on any page or verse to keep it here.</p>`}`;
  }
  function savedRow(key) {
    if (key.startsWith("verse:")) {
      const v = getVerse(key.slice(6));
      return v ? verseRow(v, "Verse") : "";
    }
    const [sec, id] = key.split("/");
    const item = getItem(sec, id);
    return item ? itemRow(sec, item, SECTIONS[sec]) : "";
  }

  let searchIndex = null;
  function buildIndex() {
    const idx = [];
    const partsText = (parts) =>
      (parts || []).map((p) => [p.heading, ...asList(p.say), ...asList(p.ask), p.body, ...(p.verses || []), ...(p.branches || []).map((b) => b.if)].join(" ")).join(" ");
    for (const sec of Object.keys(SECTIONS)) {
      for (const item of itemsOf(sec)) {
        const text = [item.title, item.summary, item.oneLiner, item.askBack, item.short, item.deep, ...(item.verses || []), ...(item.sources || []), partsText(item.parts)].join(" ");
        idx.push({ sec, item, hay: text.toLowerCase(), titleHay: item.title.toLowerCase() });
      }
    }
    for (const v of D.verses) {
      idx.push({ verse: v, hay: [v.ref, v.text, v.note, ...(v.topics || [])].join(" ").toLowerCase(), titleHay: v.ref.toLowerCase() });
    }
    return idx;
  }
  function searchResults(q) {
    searchIndex = searchIndex || buildIndex();
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const results = searchIndex
      .filter((e) => terms.every((t) => e.hay.includes(t)))
      .map((e) => ({ e, score: terms.filter((t) => e.titleHay.includes(t)).length * 10 + (e.item ? 1 : 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 60);
    if (!results.length) return `<p class="empty">No results for “${esc(q)}”.</p>`;
    return `<div class="group">${results.map(({ e }) => (e.verse ? verseRow(e.verse, "Verse") : itemRow(e.sec, e.item, SECTIONS[e.sec]))).join("")}</div>`;
  }

  function pageItem(sec, id, step) {
    const item = getItem(sec, id);
    if (!item) return pageNotFound();
    const title = itemTitle(sec, item);
    let body;
    if (sec === "objections") {
      body = `
        ${lines("say", "Say", item.oneLiner)}
        ${lines("ask", "Ask back", item.askBack)}
        ${verseRefs(item.verses)}
        <details class="fold" open><summary>30-second answer</summary><div class="prose">${md(item.short)}</div></details>
        <details class="fold"><summary>Deeper study</summary><div class="prose">${md(item.deep)}</div></details>
        ${item.related && item.related.length ? `<h2 class="group-label">Related</h2><div class="group">${item.related.map(relatedRow).join("")}</div>` : ""}`;
    } else {
      body = `
        ${item.summary ? `<div class="lead prose">${md(item.summary)}</div>` : ""}
        ${item.draft ? `<p class="empty">This page is a placeholder. We'll fill it in together.</p>` : ""}
        ${(item.parts || []).map((p, i) => renderPart(p, i, item, sec)).join("")}`;
    }
    app.innerHTML = `
      <div class="item-head"><h1 class="item-title">${esc(title)}</h1>${favButton(`${sec}/${id}`)}</div>
      ${sources(item.sources)}
      ${body}`;

    let scrollTo = null;
    if (step) {
      const el = document.getElementById(`step-${step}`);
      if (el) {
        el.classList.add("flash");
        scrollTo = el;
      }
    }
    return { title, tab: tabOfSection[sec], scrollTo };
  }
  function relatedRow(path) {
    const [sec, id] = path.split("/");
    const item = getItem(sec, id);
    return item ? row(`#/${path}`, esc(itemTitle(sec, item)), "", SECTIONS[sec]) : "";
  }

  function pageSettings() {
    const theme = store.get("theme", "auto");
    const size = store.get("textSize", 1);
    const opt = (name, val, label, cur) => `<button class="seg${cur === val ? " on" : ""}" data-set="${name}" data-val="${val}">${label}</button>`;
    app.innerHTML = `
      <h1 class="large-title">Display</h1>
      <h2 class="group-label">Appearance</h2>
      <div class="segs">${opt("theme", "auto", "Auto", theme)}${opt("theme", "light", "Light", theme)}${opt("theme", "dark", "Dark", theme)}</div>
      <h2 class="group-label">Text size</h2>
      <div class="segs">${opt("textSize", 0.9, "Small", size)}${opt("textSize", 1, "Normal", size)}${opt("textSize", 1.15, "Large", size)}${opt("textSize", 1.3, "X-Large", size)}</div>
      <h2 class="group-label">Install on your phone</h2>
      <div class="prose card">
        <p><strong>iPhone:</strong> in Safari, tap Share, then “Add to Home Screen”.</p>
        <p><strong>Android:</strong> in Chrome, tap ⋮, then “Install app”.</p>
        <p>After the first visit, it works with no signal.</p>
      </div>
      <p class="footnote">${esc(COPYRIGHT)}</p>`;
    return { title: "Display", tab: null };
  }

  function pageNotFound() {
    app.innerHTML = `<p class="empty">That page doesn't exist. <a href="#/share">Go home</a></p>`;
    return { title: "Not found", tab: null };
  }

  // ── Verse sheet ─────────────────────────────────────
  function openVerse(ref) {
    const v = getVerse(ref);
    sheet.innerHTML = v
      ? `<div class="handle"></div>
        <div class="item-head"><h2 class="sheet-ref">${esc(v.ref)} <span class="ver">NASB 1995</span></h2>${favButton("verse:" + v.ref)}</div>
        <p class="sheet-text">${esc(v.text)}</p>
        ${v.note ? `<p class="sheet-note">${inline(v.note)}</p>` : ""}
        ${v.verified ? "" : `<p class="sheet-warn">Wording not yet checked against a NASB 1995 Bible.</p>`}
        <div class="sheet-actions"><button class="btn" data-copy="${esc(v.ref)}">Copy</button><button class="btn primary" data-close>Done</button></div>`
      : `<div class="handle"></div><h2 class="sheet-ref">${esc(ref)}</h2>
        <p class="sheet-note">This verse isn't in the verse list yet.</p>
        <div class="sheet-actions"><button class="btn primary" data-close>Done</button></div>`;
    sheet.hidden = sheetBackdrop.hidden = false;
    requestAnimationFrame(() => {
      sheet.classList.add("open");
      sheetBackdrop.classList.add("open");
    });
  }
  function closeSheet() {
    sheet.classList.remove("open");
    sheetBackdrop.classList.remove("open");
    setTimeout(() => (sheet.hidden = sheetBackdrop.hidden = true), 220);
  }
  sheetBackdrop.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) closeSheet();
  });

  // ── Clicks ──────────────────────────────────────────
  document.addEventListener("click", (e) => {
    const t = e.target;
    const fav = t.closest("[data-fav]");
    if (fav) {
      toggleFav(fav.dataset.fav);
      const on = isFav(fav.dataset.fav);
      fav.classList.toggle("on", on);
      fav.innerHTML = starSvg(on);
      if (sheet.contains(fav)) rerender();
      return;
    }
    const ref = t.closest("[data-ref]");
    if (ref) return openVerse(ref.dataset.ref);
    if (t.closest("[data-close]")) return closeSheet();
    const copy = t.closest("[data-copy]");
    if (copy) {
      const v = getVerse(copy.dataset.copy);
      if (v && navigator.clipboard) {
        navigator.clipboard.writeText(`${v.text} (${v.ref} NASB95)`).then(() => {
          copy.textContent = "Copied";
          setTimeout(() => (copy.textContent = "Copy"), 1200);
        });
      }
      return;
    }
    const topic = t.closest("[data-topic]");
    if (topic) {
      verseTopic = topic.dataset.topic;
      sessionStorage.setItem("verseTopic", verseTopic);
      const x = document.querySelector(".filters").scrollLeft;
      rerender();
      document.querySelector(".filters").scrollLeft = x;
      return;
    }
    const set = t.closest("[data-set]");
    if (set) {
      const name = set.dataset.set;
      store.set(name, name === "textSize" ? parseFloat(set.dataset.val) : set.dataset.val);
      applySettings();
      rerender();
    }
  });

  function applySettings() {
    const theme = store.get("theme", "auto");
    if (theme === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty("--scale", store.get("textSize", 1));
  }

  // ── Navigation ──────────────────────────────────────
  // We keep our own trail of pages so the back button can say exactly
  // where it goes ("‹ Answer"). Tapping a tab starts a fresh trail.
  let trail = JSON.parse(sessionStorage.getItem("trail") || "[]");
  const scrollPos = {};
  let currentHash = null;
  history.scrollRestoration = "manual";

  tabbar.innerHTML = TABS.map(
    (t) => `<a class="tab" href="#/${t.id}" data-tab="${t.id}">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[t.id]}</svg>
      <span>${t.label}</span></a>`
  ).join("");
  tabbar.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-tab]");
    if (!tab) return;
    trail = [];
    // Tapping the tab you're already on scrolls to the top
    if (location.hash === `#/${tab.dataset.tab}`) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  backBtn.addEventListener("click", () => {
    const prev = trail[trail.length - 2];
    location.hash = prev ? prev.hash : "#/share";
  });

  function parseHash() {
    const hash = location.hash && location.hash !== "#/" ? location.hash : "#/share";
    return { hash, parts: hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent) };
  }

  function render() {
    const { parts } = parseHash();
    if (parts[0] === "settings") return pageSettings();
    if (tabById[parts[0]] && parts.length === 1) return pageTab(tabById[parts[0]]);
    if (SECTIONS[parts[0]] && parts[1]) return pageItem(parts[0], parts[1], parts[2]);
    if (SECTIONS[parts[0]]) return pageTab(tabById[tabOfSection[parts[0]]]);
    return pageNotFound();
  }

  function rerender() {
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }

  function route() {
    const { hash } = parseHash();
    if (currentHash) scrollPos[currentHash] = window.scrollY;
    if (!sheet.hidden) closeSheet();

    const info = render();
    const isTabRoot = !!tabById[hash.slice(2)];

    // On first load (fresh open or a direct link), start the trail at this page's tab
    if (!currentHash && (!trail.length || trail[trail.length - 1].hash !== hash)) {
      trail = !isTabRoot && info.tab ? [{ hash: `#/${info.tab}`, title: tabById[info.tab].title, tab: info.tab }] : [];
    }

    // Update the trail
    const backIdx = trail.findIndex((p) => p.hash === hash);
    let goingBack = false;
    if (isTabRoot) trail = [{ hash, title: info.title, tab: info.tab }];
    else if (backIdx >= 0) {
      goingBack = backIdx < trail.length - 1;
      trail = trail.slice(0, backIdx + 1);
    } else trail.push({ hash, title: info.title, tab: info.tab });
    sessionStorage.setItem("trail", JSON.stringify(trail));

    // Top bar
    const prev = trail[trail.length - 2];
    const showBack = !isTabRoot;
    backBtn.hidden = !showBack;
    backLabel.textContent = prev ? shortTitle(prev) : "Share";
    navTitle.textContent = isTabRoot ? "" : info.title;
    document.body.classList.toggle("is-root", isTabRoot);
    document.title = `${info.title} · Field Guide`;

    // Active tab
    const activeTab = info.tab || (trail[0] && trail[0].tab);
    tabbar.querySelectorAll(".tab").forEach((el) => el.classList.toggle("on", el.dataset.tab === activeTab));

    // Scroll
    if (info.scrollTo) {
      requestAnimationFrame(() => {
        const top = info.scrollTo.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo(0, top);
      });
    } else if (goingBack) {
      window.scrollTo(0, scrollPos[hash] || 0);
    } else {
      window.scrollTo(0, 0);
    }
    currentHash = hash;
  }
  function shortTitle(p) {
    if (tabById[p.hash.slice(2)]) return tabById[p.hash.slice(2)].label;
    const t = p.title.replace(/[“”]/g, "");
    return t.length > 16 ? t.slice(0, 15) + "…" : t;
  }

  window.addEventListener("hashchange", route);
  route();

  // ── Offline support ─────────────────────────────────
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
