(function () {
  "use strict";

  const D = window.DATA;
  const app = document.getElementById("app");
  const backBtn = document.getElementById("back-btn");
  const topTitle = document.getElementById("topbar-title");
  const sheet = document.getElementById("sheet");
  const sheetBackdrop = document.getElementById("sheet-backdrop");

  const COPYRIGHT =
    "Scripture quotations taken from the (NASB®) New American Standard Bible®, Copyright © 1960, 1971, 1977, 1995 by The Lockman Foundation. Used by permission. All rights reserved. lockman.org";

  const SECTIONS = [
    { id: "paths", title: "Gospel Path", blurb: "Way of the Master, Romans Road, testimony", icon: "✝" },
    { id: "objections", title: "Objections", blurb: "Quick answers to common pushback", icon: "?" },
    { id: "skills", title: "Conversation Skills", blurb: "Tactics and questions to ask", icon: "◎" },
    { id: "evidence", title: "Evidence & Arguments", blurb: "Resurrection, Lewis, moral law", icon: "⚖" },
    { id: "verses", title: "Quick Verses", blurb: "NASB 1995, by topic", icon: "❡" },
    { id: "openers", title: "Openers & Wrap-Up", blurb: "Start and finish conversations", icon: "↪" },
    { id: "worldviews", title: "Worldview Notes", blurb: "Atheists, Muslims, Mormons, and more", icon: "◐" },
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

  // ── Verses ──────────────────────────────────────────
  const normRef = (r) => String(r).toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  const verseMap = new Map(D.verses.map((v) => [normRef(v.ref), v]));
  const getVerse = (ref) => verseMap.get(normRef(ref));

  // ── Items ───────────────────────────────────────────
  function itemsOf(sectionId) {
    return sectionId === "verses" ? [] : D[sectionId] || [];
  }
  function getItem(sectionId, id) {
    return itemsOf(sectionId).find((x) => x.id === id);
  }
  function itemTitle(sectionId, item) {
    return sectionId === "objections" ? `“${item.title}”` : item.title;
  }

  // ── Text formatting ─────────────────────────────────
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  function verseChip(ref) {
    const v = getVerse(ref);
    return `<button class="vchip${v ? "" : " missing"}" data-ref="${esc(ref)}">${esc(ref)}</button>`;
  }
  function inline(s) {
    let out = esc(s);
    out = out.replace(/\[\[([^\]]+)\]\]/g, (m, ref) => verseChip(unesc(ref)));
    out = out.replace(/\{\{([^|}]+)\|([^}]+)\}\}/g, (m, label, href) => `<a class="ilink" href="#/${href.trim()}">${label}</a>`);
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>");
    return out;
  }
  function unesc(s) {
    return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  }
  function md(text) {
    if (!text) return "";
    // Each blank-line-separated block becomes paragraphs and lists;
    // consecutive "- " or "1. " lines inside a block become a list.
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
  // Strip markup for one-line previews
  function plain(s) {
    return String(s ?? "")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/\{\{([^|}]+)\|[^}]+\}\}/g, "$1")
      .replace(/\*\*?/g, "")
      .replace(/^- /gm, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  const asList = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);

  // ── UI pieces ───────────────────────────────────────
  const starSvg = (on) =>
    `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
  function favButton(key) {
    const on = isFav(key);
    return `<button class="fav-btn${on ? " on" : ""}" data-fav="${esc(key)}" aria-label="${on ? "Remove from" : "Add to"} favorites">${starSvg(on)}</button>`;
  }
  function sourcePills(sources) {
    if (!sources || !sources.length) return "";
    return `<div class="pills">${sources.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div>`;
  }
  function chips(refs) {
    if (!refs || !refs.length) return "";
    return `<div class="chips">${refs.map(verseChip).join("")}</div>`;
  }
  function sayBoxes(lines) {
    return asList(lines).map((l) => `<div class="say"><span class="label">Say</span>${inline(l)}</div>`).join("");
  }
  function askBoxes(lines) {
    return asList(lines).map((l) => `<div class="ask"><span class="label">Ask</span>${inline(l)}</div>`).join("");
  }
  function branchLinks(branches, item, sectionId) {
    if (!branches || !branches.length) return "";
    return `<div class="branches">${branches
      .map((b) => {
        let href, target;
        if (b.go.startsWith("step:")) {
          href = `#/${sectionId}/${item.id}/${b.go.slice(5)}`;
          target = `Step ${b.go.slice(5)}`;
        } else {
          href = `#/${b.go}`;
          const [sec, id] = b.go.split("/");
          const t = getItem(sec, id);
          target = t ? itemTitle(sec, t) : b.go;
        }
        return `<a class="branch" href="${href}"><span class="if">If: ${inline(b.if)}</span><span class="go">→ ${esc(target)}</span></a>`;
      })
      .join("")}</div>`;
  }
  function renderPart(p, i, item, sectionId) {
    const num = item.numbered ? `<span class="step-num">${i + 1}</span>` : "";
    const heading = p.heading ? `<h3>${num}${inline(p.heading)}</h3>` : num ? `<h3>${num}</h3>` : "";
    return `<section class="part${item.numbered ? " step" : ""}" id="step-${i + 1}">
      ${heading}
      ${sayBoxes(p.say)}
      ${askBoxes(p.ask)}
      ${p.body ? `<div class="prose">${md(p.body)}</div>` : ""}
      ${chips(p.verses)}
      ${branchLinks(p.branches, item, sectionId)}
    </section>`;
  }

  // ── Pages ───────────────────────────────────────────
  let lastQuery = sessionStorage.getItem("q") || "";

  function pageHome() {
    setTop("Field Guide", false);
    app.innerHTML = `
      <div class="search-wrap">
        <input id="search" type="search" placeholder="Search everything…" autocomplete="off" autocorrect="off" spellcheck="false" value="${esc(lastQuery)}">
      </div>
      <div id="home-body"></div>`;
    const input = document.getElementById("search");
    input.addEventListener("input", () => {
      lastQuery = input.value;
      sessionStorage.setItem("q", lastQuery);
      renderHomeBody();
    });
    renderHomeBody();
  }

  function renderHomeBody() {
    const body = document.getElementById("home-body");
    if (!body) return;
    if (lastQuery.trim()) {
      body.innerHTML = renderSearch(lastQuery);
      return;
    }
    const favHtml = favs.length
      ? `<h2 class="section-label">Favorites</h2><div class="list">${favs.map(favRow).filter(Boolean).join("")}</div>`
      : "";
    body.innerHTML = `
      ${favHtml}
      <h2 class="section-label">Sections</h2>
      <div class="grid">
        ${SECTIONS.map(
          (s) => `<a class="tile" href="#/${s.id}">
            <span class="tile-icon">${s.icon}</span>
            <span class="tile-title">${esc(s.title)}</span>
            <span class="tile-blurb">${esc(s.blurb)}</span>
          </a>`
        ).join("")}
      </div>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
  }

  function favRow(key) {
    if (key.startsWith("verse:")) {
      const v = getVerse(key.slice(6));
      if (!v) return "";
      return `<button class="row" data-ref="${esc(v.ref)}"><span class="row-kicker">Verse</span><span class="row-title">${esc(v.ref)}</span><span class="row-sub">${esc(v.text)}</span></button>`;
    }
    const [sec, id] = key.split("/");
    const item = getItem(sec, id);
    if (!item) return "";
    return `<a class="row" href="#/${sec}/${id}"><span class="row-kicker">${esc(sectionById[sec].title)}</span><span class="row-title">${esc(itemTitle(sec, item))}</span>${item.oneLiner ? `<span class="row-sub">${esc(item.oneLiner)}</span>` : ""}</a>`;
  }

  // Search index: one entry per item and per verse
  let searchIndex = null;
  function flattenParts(parts) {
    return (parts || [])
      .map((p) => [p.heading, ...asList(p.say), ...asList(p.ask), p.body, ...(p.verses || []), ...(p.branches || []).map((b) => b.if)].join(" "))
      .join(" ");
  }
  function buildIndex() {
    const idx = [];
    for (const s of SECTIONS) {
      for (const item of itemsOf(s.id)) {
        const text = [item.title, item.summary, item.oneLiner, item.askBack, item.short, item.deep, ...(item.verses || []), ...(item.sources || []), flattenParts(item.parts)].join(" ");
        idx.push({ type: "item", section: s.id, item, title: itemTitle(s.id, item), hay: text.toLowerCase(), titleHay: item.title.toLowerCase() });
      }
    }
    for (const v of D.verses) {
      idx.push({ type: "verse", verse: v, title: v.ref, hay: [v.ref, v.text, v.note, ...(v.topics || [])].join(" ").toLowerCase(), titleHay: v.ref.toLowerCase() });
    }
    return idx;
  }
  function renderSearch(q) {
    searchIndex = searchIndex || buildIndex();
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const results = searchIndex
      .filter((e) => terms.every((t) => e.hay.includes(t)))
      .map((e) => ({ e, score: terms.filter((t) => e.titleHay.includes(t)).length * 10 + (e.type === "item" ? 1 : 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 60);
    if (!results.length) return `<p class="empty">No results for “${esc(q)}”.</p>`;
    return `<div class="list">${results
      .map(({ e }) =>
        e.type === "verse"
          ? `<button class="row" data-ref="${esc(e.verse.ref)}"><span class="row-kicker">Verse</span><span class="row-title">${esc(e.verse.ref)}</span><span class="row-sub">${esc(e.verse.text)}</span></button>`
          : `<a class="row" href="#/${e.section}/${e.item.id}"><span class="row-kicker">${esc(sectionById[e.section].title)}</span><span class="row-title">${esc(e.title)}</span>${e.item.oneLiner || e.item.summary ? `<span class="row-sub">${esc(plain(e.item.oneLiner || e.item.summary))}</span>` : ""}</a>`
      )
      .join("")}</div>`;
  }

  function pageSection(sectionId) {
    const s = sectionById[sectionId];
    if (!s) return pageNotFound();
    setTop(s.title, true);
    if (sectionId === "verses") return pageVerses();
    const items = itemsOf(sectionId);
    app.innerHTML = `
      <h1 class="page-title">${esc(s.title)}</h1>
      <div class="list">
        ${items
          .map(
            (item) => `<a class="row${item.draft ? " draft" : ""}" href="#/${sectionId}/${item.id}">
              <span class="row-title">${esc(itemTitle(sectionId, item))}${item.draft ? ` <span class="badge">Draft</span>` : ""}</span>
              ${item.oneLiner ? `<span class="row-sub">${esc(item.oneLiner)}</span>` : item.summary ? `<span class="row-sub">${esc(plain(item.summary))}</span>` : ""}
            </a>`
          )
          .join("")}
      </div>`;
  }

  function pageVerses() {
    const unverified = D.verses.filter((v) => !v.verified).length;
    const topics = D.verseTopics;
    app.innerHTML = `
      <h1 class="page-title">Quick Verses</h1>
      ${unverified ? `<p class="notice">${unverified} of ${D.verses.length} verses still need their wording checked against a NASB 1995 Bible.</p>` : ""}
      <div class="topic-jump">${topics.map((t, i) => `<a href="#/verses" data-jump="topic-${i}">${esc(t)}</a>`).join("")}</div>
      ${topics
        .map((t, i) => {
          const vs = D.verses.filter((v) => (v.topics || []).includes(t));
          if (!vs.length) return "";
          return `<h2 class="section-label" id="topic-${i}">${esc(t)}</h2>
            <div class="list">${vs
              .map((v) => `<button class="row verse-row" data-ref="${esc(v.ref)}">
                <span class="row-title">${esc(v.ref)}${isFav("verse:" + v.ref) ? ` <span class="star-inline">★</span>` : ""}</span>
                <span class="row-sub verse-text">${esc(v.text)}</span>
              </button>`)
              .join("")}</div>`;
        })
        .join("")}
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
  }

  function pageItem(sectionId, id, step) {
    const item = getItem(sectionId, id);
    if (!item) return pageNotFound();
    setTop(sectionById[sectionId].title, true);
    const key = `${sectionId}/${id}`;
    let body = "";

    if (sectionId === "objections") {
      body = `
        <div class="say big"><span class="label">Say</span>${inline(item.oneLiner)}</div>
        ${item.askBack ? `<div class="ask"><span class="label">Ask back</span>${inline(item.askBack)}</div>` : ""}
        ${chips(item.verses)}
        <details class="fold" open><summary>30-second answer</summary><div class="prose">${md(item.short)}</div></details>
        <details class="fold"><summary>Deeper study</summary><div class="prose">${md(item.deep)}</div></details>
        ${item.related && item.related.length ? `<h2 class="section-label">Related</h2><div class="list">${item.related.map(relatedRow).join("")}</div>` : ""}`;
    } else {
      body = `
        ${item.summary ? `<div class="prose summary">${md(item.summary)}</div>` : ""}
        ${item.draft ? `<p class="notice">This page is a placeholder — we'll fill it in together.</p>` : ""}
        ${(item.parts || []).map((p, i) => renderPart(p, i, item, sectionId)).join("")}`;
    }

    app.innerHTML = `
      <div class="item-head">
        <h1 class="page-title">${esc(itemTitle(sectionId, item))}</h1>
        ${favButton(key)}
      </div>
      ${sourcePills(item.sources)}
      ${body}`;

    if (step) {
      const el = document.getElementById(`step-${step}`);
      if (el) {
        el.classList.add("flash");
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
        return "keep-scroll";
      }
    }
  }

  function relatedRow(path) {
    const [sec, id] = path.split("/");
    const item = getItem(sec, id);
    if (!item) return "";
    return `<a class="row" href="#/${path}"><span class="row-kicker">${esc(sectionById[sec].title)}</span><span class="row-title">${esc(itemTitle(sec, item))}</span></a>`;
  }

  function pageSettings() {
    setTop("Settings", true);
    const theme = store.get("theme", "auto");
    const size = store.get("textSize", 1);
    const opt = (name, val, label, cur) => `<button class="seg${cur === val ? " on" : ""}" data-set="${name}" data-val="${val}">${label}</button>`;
    app.innerHTML = `
      <h1 class="page-title">Settings</h1>
      <h2 class="section-label">Theme</h2>
      <div class="segs">${opt("theme", "auto", "Auto", theme)}${opt("theme", "light", "Light", theme)}${opt("theme", "dark", "Dark", theme)}</div>
      <h2 class="section-label">Text size</h2>
      <div class="segs">${opt("textSize", 0.9, "Small", size)}${opt("textSize", 1, "Normal", size)}${opt("textSize", 1.15, "Large", size)}${opt("textSize", 1.3, "X-Large", size)}</div>
      <h2 class="section-label">Install on your phone</h2>
      <div class="prose">
        <p><strong>iPhone (Safari):</strong> tap Share → “Add to Home Screen”.</p>
        <p><strong>Android (Chrome):</strong> tap ⋮ → “Add to Home screen” / “Install app”.</p>
        <p>After the first visit, everything works offline.</p>
      </div>
      <h2 class="section-label">About</h2>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
  }

  function pageNotFound() {
    setTop("Not found", true);
    app.innerHTML = `<p class="empty">That page doesn't exist. <a href="#/">Go home</a></p>`;
  }

  function setTop(title, showBack) {
    topTitle.textContent = title;
    backBtn.hidden = !showBack;
    document.title = title === "Field Guide" ? "Gospel Field Guide" : `${title} · Field Guide`;
  }

  // ── Verse sheet ─────────────────────────────────────
  function openVerse(ref) {
    const v = getVerse(ref);
    const key = "verse:" + (v ? v.ref : ref);
    sheet.innerHTML = v
      ? `<div class="sheet-handle"></div>
        <div class="item-head"><h2 class="sheet-ref">${esc(v.ref)} <span class="ver">NASB95</span></h2>${favButton(key)}</div>
        <p class="sheet-text">${esc(v.text)}</p>
        ${v.note ? `<p class="sheet-note">${inline(v.note)}</p>` : ""}
        ${v.verified ? "" : `<p class="unverified">⚠ Check wording against a NASB 1995 Bible</p>`}
        <div class="sheet-actions"><button class="btn" data-copy="${esc(v.ref)}">Copy</button><button class="btn primary" data-close>Close</button></div>`
      : `<div class="sheet-handle"></div><h2 class="sheet-ref">${esc(ref)}</h2>
        <p class="sheet-note">This verse isn't in the verse list yet.</p>
        <div class="sheet-actions"><button class="btn primary" data-close>Close</button></div>`;
    sheet.hidden = false;
    sheetBackdrop.hidden = false;
    requestAnimationFrame(() => {
      sheet.classList.add("open");
      sheetBackdrop.classList.add("open");
    });
  }
  function closeSheet() {
    sheet.classList.remove("open");
    sheetBackdrop.classList.remove("open");
    setTimeout(() => {
      sheet.hidden = true;
      sheetBackdrop.hidden = true;
    }, 200);
  }
  sheetBackdrop.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) closeSheet();
  });

  // ── Global clicks ───────────────────────────────────
  let freshNav = false;
  document.addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav]");
    if (fav) {
      e.preventDefault();
      toggleFav(fav.dataset.fav);
      const on = isFav(fav.dataset.fav);
      fav.classList.toggle("on", on);
      fav.innerHTML = starSvg(on);
      if (!sheet.hidden && sheet.contains(fav)) refreshBehindSheet();
      return;
    }
    const refEl = e.target.closest("[data-ref]");
    if (refEl) {
      e.preventDefault();
      openVerse(refEl.dataset.ref);
      return;
    }
    if (e.target.closest("[data-close]")) return closeSheet();
    const copy = e.target.closest("[data-copy]");
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
    const jump = e.target.closest("[data-jump]");
    if (jump) {
      e.preventDefault();
      const el = document.getElementById(jump.dataset.jump);
      if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
      return;
    }
    const set = e.target.closest("[data-set]");
    if (set) {
      const name = set.dataset.set;
      const val = name === "textSize" ? parseFloat(set.dataset.val) : set.dataset.val;
      store.set(name, val);
      applySettings();
      pageSettings();
      return;
    }
    if (e.target.closest('a[href^="#"]')) freshNav = true;
  });

  function refreshBehindSheet() {
    const y = window.scrollY;
    route(true);
    window.scrollTo(0, y);
  }

  backBtn.addEventListener("click", () => {
    if (history.length > 1) history.back();
    else location.hash = "#/";
  });

  function applySettings() {
    const theme = store.get("theme", "auto");
    if (theme === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty("--scale", store.get("textSize", 1));
  }

  // ── Router ──────────────────────────────────────────
  const scrollPos = {};
  let currentHash = location.hash;
  history.scrollRestoration = "manual";

  function route(silent) {
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    let result;
    if (!parts.length) result = pageHome();
    else if (parts[0] === "settings") result = pageSettings();
    else if (parts.length === 1) result = pageSection(parts[0]);
    else result = pageItem(parts[0], parts[1], parts[2]);
    if (silent) return;
    if (result === "keep-scroll") return;
    if (freshNav || scrollPos[hash] == null) window.scrollTo(0, 0);
    else window.scrollTo(0, scrollPos[hash]);
    freshNav = false;
  }

  window.addEventListener("hashchange", () => {
    scrollPos[currentHash || "#/"] = window.scrollY;
    currentHash = location.hash;
    if (!sheet.hidden) closeSheet();
    route();
  });

  route();

  // ── Offline support ─────────────────────────────────
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
