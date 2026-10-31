(function () {
  "use strict";

  const D = window.DATA;
  const app = document.getElementById("app");
  const backBtn = document.getElementById("back-btn");
  const backLabel = document.getElementById("back-label");
  const navTitle = document.getElementById("nav-title");
  const homeBtn = document.getElementById("home-btn");
  const sheet = document.getElementById("sheet");
  const sheetBackdrop = document.getElementById("sheet-backdrop");

  const COPYRIGHT =
    "Scripture quotations taken from the (NASB®) New American Standard Bible®, Copyright © 1960, 1971, 1977, 1995 by The Lockman Foundation. Used by permission. All rights reserved. lockman.org";

  // ── Icons (simple line drawings) ────────────────────
  const ICON = {
    paths: '<path d="M12 3v18M7 8.5h10" stroke-linecap="round"/>',
    objections: '<path d="M4 5.5h16v10H10l-5 4v-4H4z" stroke-linejoin="round"/><path d="M10 9.2a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.4M12 14h0" stroke-linecap="round"/>',
    verses: '<path d="M4 5.5c3-1 6-1 8 .8 2-1.8 5-1.8 8-.8v13c-3-1-6-1-8 .8-2-1.8-5-1.8-8-.8z" stroke-linejoin="round"/><path d="M12 6.3v13.3"/>',
    skills: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>',
    evidence: '<path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 6a2.5 2.5 0 0 0 5 0zM19 8l-2.5 6a2.5 2.5 0 0 0 5 0z" stroke-linejoin="round" stroke-linecap="round"/>',
    openers: '<path d="M5 12h12M13 7l5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/>',
    worldviews: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.5 2.3 3.5 5 3.5 8s-1 5.7-3.5 8c-2.5-2.3-3.5-5-3.5-8s1-5.7 3.5-8z"/>',
  };
  const svg = (paths, size = 24, sw = 1.8) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${sw}" aria-hidden="true">${paths}</svg>`;
  const chevron = `<svg class="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const starSvg = (on, size = 26) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

  // ── Sections ────────────────────────────────────────
  const SECTIONS = [
    { id: "paths", title: "Gospel Path", blurb: "Way of the Master, Romans Road, your testimony" },
    { id: "objections", title: "Objections", blurb: "Quick answers to common pushback" },
    { id: "verses", title: "Quick Verses", blurb: "NASB 1995, by topic" },
    { id: "skills", title: "Conversation Skills", blurb: "Tactics, questions, and tone" },
    { id: "evidence", title: "Evidence & Arguments", blurb: "Resurrection, the Bible, creation" },
    { id: "openers", title: "Openers & Wrap-Up", blurb: "Start, steer, and finish well" },
    { id: "worldviews", title: "Worldview Notes", blurb: "Atheists, Muslims, Mormons, and more" },
  ];
  const sectionById = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));

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
  const itemsOf = (sec) => (sec === "verses" ? [] : D[sec] || []);
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
  function verseChip(ref) {
    return `<button class="vchip${getVerse(ref) ? "" : " missing"}" data-ref="${esc(ref)}">${esc(ref)}</button>`;
  }
  function inline(s) {
    let out = esc(s);
    out = out.replace(/\[\[([^\]]+)\]\]/g, (m, ref) => verseChip(unesc(ref)));
    out = out.replace(/\{\{([^|}]+)\|([^}]+)\}\}/g, (m, label, href) => `<a class="ilink" href="#/${href.trim()}">${label}</a>`);
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
  function favButton(key) {
    const on = isFav(key);
    return `<button class="fav-btn${on ? " on" : ""}" data-fav="${esc(key)}" aria-label="${on ? "Remove from favorites" : "Add to favorites"}">${starSvg(on)}</button>`;
  }
  function row({ href, ref, kicker, title, sub, verse }) {
    const tag = ref ? "button" : "a";
    const attr = ref ? `data-ref="${esc(ref)}"` : `href="${href}"`;
    return `<${tag} class="row" ${attr}>
      <span class="row-main">
        ${kicker ? `<span class="row-kicker">${esc(kicker)}</span>` : ""}
        <span class="row-title">${title}</span>
        ${sub ? `<span class="row-sub${verse ? " verse-text" : ""}">${esc(sub)}</span>` : ""}
      </span>${ref ? "" : chevron}</${tag}>`;
  }
  function verseRow(v, kicker) {
    const star = isFav("verse:" + v.ref) ? `<span class="star-inline">${starSvg(true, 15)}</span>` : "";
    return row({ ref: v.ref, kicker, title: esc(v.ref) + star, sub: v.text, verse: true });
  }
  function itemRow(sec, item, kicker) {
    const draft = item.draft ? ` <span class="badge">Draft</span>` : "";
    return row({
      href: `#/${sec}/${item.id}`,
      kicker,
      title: esc(itemTitle(sec, item)) + draft,
      sub: item.draft ? "" : item.oneLiner || plain(item.summary),
    });
  }
  function sourcePills(list) {
    return list && list.length ? `<div class="pills">${list.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div>` : "";
  }
  function chips(refs) {
    return refs && refs.length ? `<div class="chips">${refs.map(verseChip).join("")}</div>` : "";
  }
  function boxes(kind, label, list, extra = "") {
    const items = asList(list);
    if (!items.length) return "";
    return `<div class="${kind}${extra}"><span class="label">${label}</span>${items.map((l) => `<p>${inline(l)}</p>`).join("")}</div>`;
  }
  function branchLinks(list, item, sec) {
    if (!list || !list.length) return "";
    return `<div class="branches">${list
      .map((b) => {
        let href, target;
        if (b.go.startsWith("step:")) {
          const n = b.go.slice(5);
          const step = item.parts[n - 1];
          href = `#/${sec}/${item.id}/${n}`;
          target = `Step ${n}${step && step.heading ? `: ${plain(step.heading)}` : ""}`;
        } else {
          const [s, id] = b.go.split("/");
          const t = getItem(s, id);
          href = `#/${b.go}`;
          target = t ? itemTitle(s, t) : b.go;
        }
        return `<a class="branch" href="${href}">
          <span class="branch-main"><span class="branch-if">If they say: ${inline(b.if)}</span><span class="branch-go">Go to ${esc(target)}</span></span>${chevron}</a>`;
      })
      .join("")}</div>`;
  }
  function renderPart(p, i, item, sec) {
    const num = item.numbered ? `<span class="step-num">${i + 1}</span>` : "";
    const heading = p.heading || num ? `<h3>${num}<span>${inline(p.heading || "")}</span></h3>` : "";
    return `<section class="part" id="step-${i + 1}">
      ${heading}
      ${boxes("say", "Say", p.say)}
      ${boxes("ask", "Ask", p.ask)}
      ${p.body ? `<div class="prose">${md(p.body)}</div>` : ""}
      ${chips(p.verses)}
      ${branchLinks(p.branches, item, sec)}
    </section>`;
  }

  // ── Pages ───────────────────────────────────────────
  let lastQuery = sessionStorage.getItem("q") || "";

  function pageHome() {
    app.innerHTML = `
      <div class="search-wrap">
        <div class="search-box">
          ${svg('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5" stroke-linecap="round"/>', 20, 2)}
          <input id="search" type="search" placeholder="Search everything" autocomplete="off" autocorrect="off" spellcheck="false" value="${esc(lastQuery)}">
        </div>
      </div>
      <div id="home-body"></div>`;
    const input = document.getElementById("search");
    input.addEventListener("input", () => {
      lastQuery = input.value;
      sessionStorage.setItem("q", lastQuery);
      renderHomeBody();
    });
    renderHomeBody();
    return { title: "Home" };
  }
  function countLabel(s) {
    if (s.id === "verses") return `${D.verses.length} verses`;
    const n = itemsOf(s.id).filter((x) => !x.draft).length;
    return `${n} ${n === 1 ? "page" : "pages"}`;
  }
  function renderHomeBody() {
    const body = document.getElementById("home-body");
    if (!body) return;
    if (lastQuery.trim()) {
      body.innerHTML = searchResults(lastQuery);
      return;
    }
    const saved = favs.map(savedRow).filter(Boolean);
    body.innerHTML = `
      ${saved.length ? `<h2 class="section-label">Favorites</h2><div class="list">${saved.join("")}</div>` : ""}
      <h2 class="section-label">Sections</h2>
      <div class="grid">
        ${SECTIONS.map(
          (s) => `<a class="tile" href="#/${s.id}">
            <span class="tile-icon">${svg(ICON[s.id], 26)}</span>
            <span class="tile-title">${esc(s.title)}</span>
            <span class="tile-blurb">${esc(s.blurb)}</span>
            <span class="tile-count">${countLabel(s)}</span>
          </a>`
        ).join("")}
      </div>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
  }
  function savedRow(key) {
    if (key.startsWith("verse:")) {
      const v = getVerse(key.slice(6));
      return v ? verseRow(v, "Verse") : "";
    }
    const [sec, id] = key.split("/");
    const item = getItem(sec, id);
    return item ? itemRow(sec, item, sectionById[sec].title) : "";
  }

  let searchIndex = null;
  function buildIndex() {
    const idx = [];
    const partsText = (parts) =>
      (parts || []).map((p) => [p.heading, ...asList(p.say), ...asList(p.ask), p.body, ...(p.verses || []), ...(p.branches || []).map((b) => b.if)].join(" ")).join(" ");
    for (const s of SECTIONS) {
      for (const item of itemsOf(s.id)) {
        const text = [item.title, item.category, item.summary, item.oneLiner, item.askBack, item.short, item.deep, ...(item.verses || []), ...(item.sources || []), partsText(item.parts)].join(" ");
        idx.push({ sec: s.id, item, hay: text.toLowerCase(), titleHay: item.title.toLowerCase() });
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
    return `<div class="list">${results
      .map(({ e }) => (e.verse ? verseRow(e.verse, "Verse") : itemRow(e.sec, e.item, sectionById[e.sec].title)))
      .join("")}</div>`;
  }

  function pageSection(sec) {
    const s = sectionById[sec];
    if (!s) return pageNotFound();
    if (sec === "verses") return pageVerses(s);
    const items = itemsOf(sec);
    let body;
    const cats = sec === "objections" ? D.objectionCategories || [] : [];
    if (cats.length) {
      const groups = cats.map((c) => ({ c, list: items.filter((x) => x.category === c) })).filter((g) => g.list.length);
      const other = items.filter((x) => !cats.includes(x.category));
      if (other.length) groups.push({ c: "Other", list: other });
      body = `
        <div class="filters">${groups.map((g, i) => `<button class="filter" data-jump="cat-${i}">${esc(g.c)}</button>`).join("")}</div>
        ${groups
          .map((g, i) => `<h2 class="section-label" id="cat-${i}">${esc(g.c)}</h2><div class="list">${g.list.map((x) => itemRow(sec, x)).join("")}</div>`)
          .join("")}`;
    } else {
      body = `<div class="list">${items.map((x) => itemRow(sec, x)).join("")}</div>`;
    }
    app.innerHTML = `<h1 class="page-title">${esc(s.title)}</h1>${body}`;
    return { title: s.title };
  }

  let verseTopic = sessionStorage.getItem("verseTopic") || "All";
  function pageVerses(s) {
    const topics = ["All", "Favorites", ...D.verseTopics];
    if (!topics.includes(verseTopic)) verseTopic = "All";
    const list =
      verseTopic === "All"
        ? D.verses
        : verseTopic === "Favorites"
        ? D.verses.filter((v) => isFav("verse:" + v.ref))
        : D.verses.filter((v) => (v.topics || []).includes(verseTopic));
    const unverified = D.verses.filter((v) => !v.verified).length;
    app.innerHTML = `
      <h1 class="page-title">${esc(s.title)}</h1>
      <div class="filters">${topics
        .map((t) => `<button class="filter${t === verseTopic ? " on" : ""}" data-topic="${esc(t)}">${esc(t)}</button>`)
        .join("")}</div>
      ${unverified ? `<p class="notice">${unverified} of ${D.verses.length} verses still need their wording checked against a NASB 1995 Bible.</p>` : ""}
      <div class="list">${list.length ? list.map((v) => verseRow(v)).join("") : `<p class="empty">No favorite verses yet. Tap the star on any verse to add it.</p>`}</div>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
    return { title: s.title };
  }

  function pageItem(sec, id, step) {
    const item = getItem(sec, id);
    if (!item || !sectionById[sec]) return pageNotFound();
    const title = itemTitle(sec, item);
    let body;
    if (sec === "objections") {
      body = `
        ${boxes("say", "Say", item.oneLiner, " big")}
        ${boxes("ask", "Ask back", item.askBack)}
        ${chips(item.verses)}
        <details class="fold" open><summary>30-second answer</summary><div class="prose">${md(item.short)}</div></details>
        <details class="fold"><summary>Deeper study</summary><div class="prose">${md(item.deep)}</div></details>
        ${item.related && item.related.length ? `<h2 class="section-label">Related</h2><div class="list">${item.related.map(relatedRow).join("")}</div>` : ""}`;
    } else {
      body = `
        ${item.summary ? `<div class="prose summary">${md(item.summary)}</div>` : ""}
        ${item.draft ? `<p class="notice">This page is a placeholder. We'll fill it in together.</p>` : ""}
        ${(item.parts || []).map((p, i) => renderPart(p, i, item, sec)).join("")}`;
    }
    app.innerHTML = `
      ${item.category ? `<p class="kicker">${esc(item.category)}</p>` : ""}
      <div class="item-head"><h1 class="page-title">${esc(title)}</h1>${favButton(`${sec}/${id}`)}</div>
      ${sourcePills(item.sources)}
      ${body}`;
    let scrollTo = null;
    if (step) {
      scrollTo = document.getElementById(`step-${step}`);
      if (scrollTo) scrollTo.classList.add("flash");
    }
    return { title: plain(item.title), section: sec, scrollTo };
  }
  function relatedRow(path) {
    const [sec, id] = path.split("/");
    const item = getItem(sec, id);
    return item ? itemRow(sec, item, sectionById[sec].title) : "";
  }

  function pageSettings() {
    const theme = store.get("theme", "auto");
    const size = store.get("textSize", 1);
    const opt = (name, val, label, cur) => `<button class="seg${cur === val ? " on" : ""}" data-set="${name}" data-val="${val}">${label}</button>`;
    app.innerHTML = `
      <h1 class="page-title">Display</h1>
      <h2 class="section-label">Theme</h2>
      <div class="segs">${opt("theme", "auto", "Auto", theme)}${opt("theme", "light", "Light", theme)}${opt("theme", "dark", "Dark", theme)}</div>
      <h2 class="section-label">Text size</h2>
      <div class="segs">${opt("textSize", 0.9, "Small", size)}${opt("textSize", 1, "Normal", size)}${opt("textSize", 1.15, "Large", size)}${opt("textSize", 1.3, "X-Large", size)}</div>
      <h2 class="section-label">Install on your phone</h2>
      <div class="card prose">
        <p><strong>iPhone:</strong> in Safari, tap Share, then “Add to Home Screen”.</p>
        <p><strong>Android:</strong> in Chrome, tap the menu, then “Install app”.</p>
        <p>After the first visit, it works with no signal.</p>
      </div>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
    return { title: "Display" };
  }

  function pageNotFound() {
    app.innerHTML = `<p class="empty">That page doesn't exist. <a href="#/">Go home</a></p>`;
    return { title: "Not found" };
  }

  // ── Verse sheet ─────────────────────────────────────
  function openVerse(ref) {
    const v = getVerse(ref);
    sheet.innerHTML = v
      ? `<div class="sheet-handle"></div>
        <div class="item-head"><h2 class="sheet-ref">${esc(v.ref)} <span class="ver">NASB 1995</span></h2>${favButton("verse:" + v.ref)}</div>
        <p class="sheet-text">${esc(v.text)}</p>
        ${v.note ? `<p class="sheet-note">${inline(v.note)}</p>` : ""}
        ${v.verified ? "" : `<p class="unverified">Wording not yet checked against a NASB 1995 Bible</p>`}
        <div class="sheet-actions"><button class="btn" data-copy="${esc(v.ref)}">Copy</button><button class="btn primary" data-close>Close</button></div>`
      : `<div class="sheet-handle"></div><h2 class="sheet-ref">${esc(ref)}</h2>
        <p class="sheet-note">This verse isn't in the verse list yet.</p>
        <div class="sheet-actions"><button class="btn primary" data-close>Close</button></div>`;
    sheet.hidden = sheetBackdrop.hidden = false;
    requestAnimationFrame(() => {
      sheet.classList.add("open");
      sheetBackdrop.classList.add("open");
    });
  }
  function closeSheet() {
    sheet.classList.remove("open");
    sheetBackdrop.classList.remove("open");
    setTimeout(() => (sheet.hidden = sheetBackdrop.hidden = true), 200);
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
    const jump = t.closest("[data-jump]");
    if (jump) {
      const el = document.getElementById(jump.dataset.jump);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
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
  // A trail of pages visited since Home, so the back button can say
  // exactly where it goes ("< Objections") and return to the same spot.
  let trail = JSON.parse(sessionStorage.getItem("trail") || "[]");
  const scrollPos = {};
  let currentHash = null;
  history.scrollRestoration = "manual";

  backBtn.addEventListener("click", () => {
    const prev = trail[trail.length - 2];
    location.hash = prev ? prev.hash : "#/";
  });

  function currentRoute() {
    const hash = location.hash && location.hash !== "#" ? location.hash : "#/";
    return { hash, parts: hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent) };
  }
  function render() {
    const { parts } = currentRoute();
    if (!parts.length) return pageHome();
    if (parts[0] === "settings") return pageSettings();
    if (parts.length === 1) return pageSection(parts[0]);
    return pageItem(parts[0], parts[1], parts[2]);
  }
  function rerender() {
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }

  function route() {
    const { hash } = currentRoute();
    if (currentHash) scrollPos[currentHash] = window.scrollY;
    if (!sheet.hidden) closeSheet();
    const info = render();
    const isHome = hash === "#/";

    // On a fresh open or direct link, rebuild a sensible trail
    if (!currentHash && (!trail.length || trail[trail.length - 1].hash !== hash)) {
      trail = [{ hash: "#/", title: "Home" }];
      if (info.section) trail.push({ hash: `#/${info.section}`, title: sectionById[info.section].title });
    }

    const at = trail.findIndex((p) => p.hash === hash);
    let goingBack = false;
    if (isHome) trail = [{ hash: "#/", title: "Home" }];
    else if (at >= 0) {
      goingBack = at < trail.length - 1;
      trail = trail.slice(0, at + 1);
    } else trail.push({ hash, title: info.title });
    sessionStorage.setItem("trail", JSON.stringify(trail));

    // Top bar
    const prev = trail[trail.length - 2];
    backBtn.hidden = isHome;
    backLabel.textContent = prev ? shorten(prev.title) : "Home";
    homeBtn.hidden = isHome || (prev && prev.hash === "#/");
    navTitle.textContent = isHome ? "Field Guide" : "";
    document.title = isHome ? "Gospel Field Guide" : `${info.title} · Field Guide`;

    // Scroll
    if (info.scrollTo) {
      requestAnimationFrame(() => window.scrollTo(0, info.scrollTo.getBoundingClientRect().top + window.scrollY - 70));
    } else if (goingBack || (isHome && scrollPos[hash])) {
      window.scrollTo(0, scrollPos[hash] || 0);
    } else {
      window.scrollTo(0, 0);
    }
    currentHash = hash;
  }
  function shorten(t) {
    t = t.replace(/[“”]/g, "");
    return t.length > 18 ? t.slice(0, 17).trim() + "…" : t;
  }

  window.addEventListener("hashchange", route);
  route();

  // ── Offline support ─────────────────────────────────
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
