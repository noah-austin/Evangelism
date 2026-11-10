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
    answers: '<path d="M4 5.5h16v10H10l-5 4v-4H4z" stroke-linejoin="round"/>',
    objections: '<path d="M4 5.5h16v10H10l-5 4v-4H4z" stroke-linejoin="round"/><path d="M10 9.2a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.4M12 14h0" stroke-linecap="round"/>',
    verses: '<path d="M4 5.5c3-1 6-1 8 .8 2-1.8 5-1.8 8-.8v13c-3-1-6-1-8 .8-2-1.8-5-1.8-8-.8z" stroke-linejoin="round"/><path d="M12 6.3v13.3"/>',
    skills: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>',
    evidence: '<path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 6a2.5 2.5 0 0 0 5 0zM19 8l-2.5 6a2.5 2.5 0 0 0 5 0z" stroke-linejoin="round" stroke-linecap="round"/>',
    openers: '<path d="M5 12h12M13 7l5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/>',
    practice: '<rect x="3.5" y="6" width="13" height="14" rx="2"/><path d="M7.5 6V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />',
    live: '<path d="M8 5.5v13l11-6.5z" stroke-linejoin="round"/>',
    talking: '<path d="M6 4v6a4 4 0 0 0 4 4h8M14 10l4 4-4 4M6 20v-2" stroke-linecap="round" stroke-linejoin="round"/>',
    cheat: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke-linecap="round"/>',
    convictions: '<path d="M6 21V4M6 4.5c4-2 6 2 12 0v8c-6 2-8-2-12 0" stroke-linecap="round" stroke-linejoin="round"/>',
    quiz: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12.5l2.6 2.6L16 9.5" stroke-linecap="round" stroke-linejoin="round"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" stroke-linejoin="round"/>',
    people: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" stroke-linecap="round"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6-.3 4.6 1.3 5 4.3" stroke-linecap="round"/>',
    worldviews: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.5 2.3 3.5 5 3.5 8s-1 5.7-3.5 8c-2.5-2.3-3.5-5-3.5-8s1-5.7 3.5-8z"/>',
  };
  const svg = (paths, size = 24, sw = 1.8) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${sw}" aria-hidden="true">${paths}</svg>`;
  const chevron = `<svg class="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const starSvg = (on, size = 26) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

  // ── Sections ────────────────────────────────────────
  const SECTIONS = [
    { id: "openers", group: "hidden", title: "Starting & Ending", blurb: "How to start, steer, and finish",
      intro: "Ways to start a conversation, turn it toward spiritual things, and end it well." },
    { id: "paths", group: "learn", title: "The Gospel", blurb: "Way of the Master, step by step, and Romans Road",
      intro: "Step-by-step ways to share the gospel. Way of the Master is the main path; tap “Start conversation mode” to follow it live." },
    { id: "talking", group: "hidden", title: "Talking Paths", blurb: "Step by step for “I'm an atheist,” “I'm Muslim,” and more",
      intro: "Start from where they are. Each path handles their starting point, then hands off to Way of the Master. Tap “Start conversation mode” to follow one live." },
    { id: "people", group: "learn", title: "People", blurb: "Atheists, Muslims, Catholics, and more",
      intro: "Each page has two tabs: Background (what they believe) and Conversation (how a talk usually goes)." },
    { id: "answers", group: "learn", title: "Answers", blurb: "Objections and claims, with what to say and ask",
      intro: "Everything people say back, in one place. Each answer starts with a line to say and a question to ask." },
    { id: "objections", group: "hidden", title: "Answers", blurb: "What to say when they push back",
      intro: "Each answer starts with one line to say and a question to ask back. Open the 30-second answer or deeper study when you have time." },
    { id: "verses", group: "lookup", title: "Quick Verses", blurb: "Key verses by topic, NASB 1995",
      intro: "Tap any verse for the full text and a note on how to use it. Star the ones you use most." },
    { id: "skills", group: "learn", title: "Conversation Skills", blurb: "Tactics, good questions, and tone",
      intro: "How to keep a conversation friendly and on track: asking good questions, handling pushback, and using the Law well." },
    { id: "evidence", group: "learn", title: "Reasons to Believe", blurb: "Resurrection, the Bible, creation",
      intro: "The positive case for Christianity, to study ahead of time. Answers cover what people say in the moment; this is the deeper evidence behind them." },
    { id: "worldviews", group: "hidden", title: "People", blurb: "Atheists, Muslims, Mormons, and more",
      intro: "What different groups believe, where they differ from the gospel, and good questions to ask." },
    { id: "convictions", group: "learn", title: "My Convictions", blurb: "Where I stand, and notes from what I read",
      intro: "My positions on topics like creation, baptism, and sexuality, worked out from Scripture, plus Book Notes: a log of what I read and the ideas I want to keep." },
  ];
  // Pages from hidden sections show under these sections (Back button, trail)
  const HOME_OF = { talking: "people", worldviews: "people", openers: "skills" };
  const sectionById = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));

  // Remembered only while the app is open (closed again on a fresh open)
  const session = {
    get(k, d) { try { const v = sessionStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };

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
  try { localStorage.removeItem("favsOpen"); localStorage.removeItem("favTypesOpen"); localStorage.removeItem("favFilter"); } catch (e) {}
  const isFav = (key) => favs.includes(key);
  function toggleFav(key) {
    favs = isFav(key) ? favs.filter((k) => k !== key) : [key, ...favs];
    store.set("favs", favs);
  }

  // ── Data helpers ────────────────────────────────────
  const normRef = (r) => String(r).toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  const verseMap = new Map(D.verses.map((v) => [normRef(v.ref), v]));
  const getVerse = (ref) => verseMap.get(normRef(ref));
  // People: one page per group, joining Worldview Notes (Background) and Talking Paths (Conversation)
  const PERSON_TALK = { nominal: "already-christian" };
  D.people = (D.worldviews || []).map((w) => ({ ...w, talk: PERSON_TALK[w.id] || w.id }));
  D.answers = D.objections;
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
    // Keep "(" and ")" attached to the verse next to them so they don't wrap alone
    out = out.replace(/\(\[\[/g, "\u0001[[").replace(/\]\]\)/g, "]]\u0002");
    out = out.replace(/(\u0001)?\[\[([^\]]+)\]\](\u0002)?/g, (m, open, ref, close) =>
      open || close ? `<span class="nw">${open ? "(" : ""}${verseChip(unesc(ref))}${close ? ")" : ""}</span>` : verseChip(unesc(ref)));
    out = out.replace(/\u0001/g, "(").replace(/\u0002/g, ")");
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
              : `<${g.type}${g.type === "ol" && parseInt(g.lines[0], 10) > 1 ? ` start="${parseInt(g.lines[0], 10)}"` : ""}>${g.lines.map((l) => `<li>${inline(l.replace(/^(- |\d+\. )/, ""))}</li>`).join("")}</${g.type}>`
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
    const tag = v.tag ? `<span class="vtag">${esc(v.tag)}</span>` : "";
    return row({ ref: v.ref, kicker, title: `<span class="vname">${esc(v.ref)}${star}</span>${tag}`, sub: v.text, verse: true });
  }
  function itemRow(sec, item, kicker) {
    const draft = item.draft ? ` <span class="badge">Draft</span>` : "";
    return row({
      href: `#/${sec}/${item.id}`,
      kicker,
      title: esc(itemTitle(sec, item)) + draft,
      sub: item.oneLiner || plain(item.summary),
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
  // A branch target like "objections/hell-unfair" or "paths/way-of-the-master/3"
  function goTarget(go) {
    const [s, id, step] = go.split("/");
    const t = getItem(s, id);
    if (!t) return { title: go };
    const prefix = { objections: "Answer: ", worldviews: "People: ", talking: "Conversation: ", evidence: "Evidence: ", skills: "Skill: ", openers: "" }[s] || "";
    let title = prefix + plain(itemTitle(s, t));
    if (step) title += `, ${stepLabel(t, +step)}`;
    return { title, live: isPathSection(s) && t.numbered, id, step: step || 1 };
  }
  const PATH_SECTIONS = ["paths", "talking"];
  const isPathSection = (s) => PATH_SECTIONS.includes(s);
  function findPath(id) {
    for (const s of PATH_SECTIONS) {
      const it = getItem(s, id);
      if (it) return { sec: s, item: it };
    }
    return null;
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
          target = stepLabel(item, +n);
        } else {
          href = `#/${b.go}`;
          target = goTarget(b.go).title;
        }
        return `<a class="branch" href="${href}">
          <span class="branch-main"><span class="branch-if">If they say: ${inline(b.if)}</span>${b.then ? `<span class="branch-then">Ask: ${inline(b.then)}</span>` : ""}<span class="branch-go">Go to ${esc(target)}</span></span>${chevron}</a>`;
      })
      .join("")}</div>`;
  }
  // Steps are numbered by their position among main steps; side steps
  // (detour: true) aren't numbered. "step:N" links count every part.
  const stepNumber = (item, i) => item.parts.slice(0, i + 1).filter((p) => !p.detour).length;
  function stepLabel(item, n) {
    const p = item.parts[n - 1];
    if (!p) return `Step ${n}`;
    const h = p.heading ? `: ${plain(p.heading)}` : "";
    return p.detour ? `Side step${h}` : `Step ${stepNumber(item, n - 1)}${h}`;
  }
  function renderPart(p, i, item, sec) {
    const num = p.detour
      ? `<span class="side-tag">Side step</span>`
      : item.numbered
      ? `<span class="step-num">${stepNumber(item, i)}</span>`
      : "";
    const heading = p.heading || num ? `<h3>${num}<span>${inline(p.heading || "")}</span></h3>` : "";
    return `<section class="part${p.detour ? " detour" : ""}" id="step-${i + 1}">
      ${heading}
      ${boxes("say", "Say", p.say)}
      ${boxes("ask", "Ask", p.ask)}
      ${p.body ? `<div class="prose">${md(p.body)}</div>` : ""}
      ${chips((p.verses || []).filter((r) => !(p.body || "").includes(`[[${r}]]`)))}
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
    if (s.id === "verses") return String(D.verses.length);
    if (s.id === "answers") return String(D.objections.length + (D.claims || []).length);
    return String(itemsOf(s.id).filter((x) => !x.draft).length);
  }
  function renderHomeBody() {
    const body = document.getElementById("home-body");
    if (!body) return;
    if (lastQuery.trim()) {
      body.innerHTML = searchResults(lastQuery);
      return;
    }
    const saved = favs.map(savedRow).filter(Boolean);
    const navRow = (href, icon, title, blurb, meta) => `<a class="nav-row" href="${href}">
        <span class="tile-icon">${svg(icon, 24)}</span>
        <span class="row-main"><span class="row-title">${esc(title)}</span><span class="row-sub">${esc(blurb)}</span></span>
        ${meta ? `<span class="nav-meta">${esc(meta)}</span>` : ""}${chevron}</a>`;
    const group = (g) => SECTIONS.filter((x) => x.group === g).map((x) => navRow(`#/${x.id}`, ICON[x.id], x.title, x.blurb, countLabel(x))).join("");
    const last = store.get("lastItem", null);
    const mix = deckCards("mix", "Today");
    const today = store.get("todayDone", {})[new Date().toDateString()] || 0;
    body.innerHTML = `
      <a class="hero" href="#/practice/mix/Today">
        <span class="hero-icon">${svg(ICON.practice, 26, 2)}</span>
        <span class="row-main"><span class="hero-title">Today's practice</span>
        <span class="hero-sub">${today >= TODAY_SIZE ? "Done for today. Go again?" : `10 mixed cards: verses, answers, questions, steps${today ? ` (${today} done)` : ""}`}</span></span>${chevron}
      </a>
      ${last ? `<a class="nav-row resume" href="${last.hash}">
        <span class="tile-icon">${svg('<path d="M12 7v5l3 2" stroke-linecap="round"/><circle cx="12" cy="12" r="8"/>', 24)}</span>
        <span class="row-main"><span class="row-sub">Pick up where you left off</span><span class="row-title">${esc(last.title)}</span></span>${chevron}</a>` : ""}
      ${saved.length
        ? `<details class="fav-fold"${session.get("favsOpen", false) ? " open" : ""}>
            <summary><span class="fav-fold-icon">${svg(ICON.star, 20)}</span><span class="fav-fold-title">Favorites</span><span class="nav-meta">${saved.length}</span></summary>
            <div id="fav-body">${favBody()}</div>
          </details>`
        : ""}
      <h2 class="section-label">Learn</h2>
      <div class="nav-list">${group("learn")}</div>
      <h2 class="section-label">Practice</h2>
      <div class="nav-list">
        ${navRow("#/practice", ICON.practice, "Practice", "Today's mix, drills, and rehearsing conversations", "")}
        ${navRow("#/quiz", ICON.quiz, "Quizzes", "Test yourself: people, verses, tactics, and facts", "")}
      </div>
      <h2 class="section-label">Look up</h2>
      <div class="nav-list">
        ${navRow("#/cheat", ICON.cheat, "Cheat Sheet", "A 30-second review before you go out", "")}
        ${group("lookup")}
        ${navRow("#/live/way-of-the-master/1", ICON.live, "Conversation Mode", "Way of the Master, one step at a time", "")}
      </div>
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
  }
  // Favorites grouped by type, with filter chips: All, Verses, Objections, ...
  function favGroups() {
    const groups = [];
    const add = (label, rows) => rows.length && groups.push({ label, rows });
    // Rows without the type label, since each group already has a header
    const verseRows = favs.filter((k) => k.startsWith("verse:")).map((k) => getVerse(k.slice(6))).filter(Boolean).map((v) => verseRow(v));
    add("Verses", verseRows);
    for (const s of SECTIONS) {
      if (s.id === "verses") continue;
      add(s.title, favs.filter((k) => k.startsWith(s.id + "/")).map((k) => getItem(s.id, k.split("/")[1])).filter(Boolean).map((it) => itemRow(s.id, it)));
    }
    return groups;
  }
  // Each type is its own collapsible row; tap a type to see those favorites
  function favBody() {
    const open = session.get("favTypesOpen", []);
    return `<div class="fav-types">${favGroups()
      .map((g) => `<details class="fav-type" data-fav-type="${esc(g.label)}"${open.includes(g.label) ? " open" : ""}>
          <summary><span class="fav-type-title">${esc(g.label)}</span><span class="nav-meta">${g.rows.length}</span></summary>
          <div class="list">${g.rows.join("")}</div>
        </details>`)
      .join("")}</div>`;
  }

  function pageFavorites() {
    const saved = favs.map(savedRow).filter(Boolean);
    app.innerHTML = `
      <h1 class="page-title">Favorites</h1>
      <p class="intro">Tap the star on any page or verse to keep it here.</p>
      ${saved.length ? `<div class="list">${saved.join("")}</div>` : `<p class="empty">Nothing starred yet.</p>`}`;
    return { title: "Favorites" };
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
      if (s.id === "worldviews" || s.id === "answers") continue; // same items as People and Objections
      for (const item of itemsOf(s.id)) {
        // A person's talking path is searched as part of their People page
        if (s.id === "talking" && D.people.some((x) => x.talk === item.id)) continue;
        const talk = s.id === "people" ? getItem("talking", item.talk) : null;
        const text = [item.title, item.category, item.summary, item.oneLiner, item.askBack, item.short, item.deep, ...(item.verses || []), ...(item.sources || []), partsText(item.parts),
          talk ? [talk.title, talk.summary, partsText(talk.parts)].join(" ") : ""].join(" ");
        idx.push({ sec: s.id, item, hay: text.toLowerCase(), titleHay: item.title.toLowerCase() });
      }
    }
    for (const v of D.verses) {
      idx.push({ verse: v, hay: [v.ref, v.tag, v.text, v.note, ...(v.topics || [])].join(" ").toLowerCase(), titleHay: (v.ref + " " + (v.tag || "")).toLowerCase() });
    }
    return idx;
  }
  function searchResults(q) {
    searchIndex = searchIndex || buildIndex();
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    // Match the start of a word, so "lie" finds "lied" but not "believe"
    const res = terms.map((t) => new RegExp("(^|[^a-z0-9])" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    const results = searchIndex
      .filter((e) => res.every((r) => r.test(e.hay)))
      .map((e) => ({ e, score: res.filter((r) => r.test(e.titleHay)).length * 10 + (e.item ? 1 : 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 60);
    if (!results.length) return `<p class="empty">No results for “${esc(q)}”.</p>`;
    return `<div class="list">${results
      .map(({ e }) => (e.verse ? verseRow(e.verse, "Verse") : itemRow(e.sec, e.item, sectionById[e.sec].title)))
      .join("")}</div>`;
  }

  // Sections whose pages are grouped by their `category` field, in this order
  const CATEGORY_ORDER = {
    objections: D.objectionCategories || [],
    talking: ["Doubting God", "Other Faiths", "Christians", "Issues"],
    skills: ["Mindset", "Asking Questions", "Sharing the Gospel", "Hard Moments"],
    convictions: ["Scripture & Creation", "Salvation", "Church & Christian Living", "Ethics & Society", "Last Things", "Book Notes"],
  };

  function pageSection(sec) {
    const s = sectionById[sec];
    if (!s) return pageNotFound();
    if (sec === "verses") return pageVerses(s);
    if (sec === "answers" || sec === "objections") return pageAnswers(sectionById.answers);
    const items = itemsOf(sec);
    let body;
    const cats = CATEGORY_ORDER[sec] || [];
    if (cats.length) {
      const groups = cats.map((c) => ({ c, list: items.filter((x) => x.category === c) })).filter((g) => g.list.length);
      const other = items.filter((x) => !cats.includes(x.category));
      if (other.length) groups.push({ c: "Other", list: other });
      if (sec === "skills") groups.unshift({ c: "Starting & Ending", list: D.openers, sec: "openers" });
      body = `
        <div class="filters">${groups.map((g, i) => `<button class="filter" data-jump="cat-${i}">${esc(g.c)}</button>`).join("")}</div>
        ${groups
          .map((g, i) => `<h2 class="section-label" id="cat-${i}">${esc(g.c)}</h2><div class="list">${g.list.map((x) => itemRow(g.sec || sec, x)).join("")}</div>`)
          .join("")}`;
    } else {
      body = `<div class="list">${items.map((x) => itemRow(sec, x)).join("")}</div>`;
    }
    if (sec === "people") {
      const topics = D.talking.filter((t) => !D.people.some((x) => x.talk === t.id));
      body += `<h2 class="section-label">Topics</h2><p class="intro">Step-by-step conversations on an issue instead of a group.</p>
        <div class="list">${topics.map((t) => itemRow("talking", t)).join("")}</div>`;
    }
    app.innerHTML = `<h1 class="page-title">${esc(s.title)}</h1><p class="intro">${esc(s.intro)}</p>${body}`;
    return { title: s.title };
  }

  function pageAnswers(s) {
    const cats = D.objectionCategories;
    const claimCard = (c) => `<div class="card claim-card"><p class="row-title">“${esc(c.claim)}”</p>${boxes("ask", "Ask", c.ask)}
      <p class="row-sub">${inline(c.why)}${c.next ? ` <a class="ilink" href="#/${c.next}">Full answer</a>` : ""}</p></div>`;
    const groups = [
      ...cats.map((c) => ({ c, html: `<div class="list">${D.objections.filter((o) => o.category === c).map((o) => itemRow("objections", o)).join("")}</div>` })),
      { c: "Self-defeating claims", html: D.claims.filter((c) => c.selfDefeating).map(claimCard).join("") },
      { c: "Clarify first", html: D.claims.filter((c) => !c.selfDefeating).map(claimCard).join("") },
    ];
    app.innerHTML = `<h1 class="page-title">${esc(s.title)}</h1><p class="intro">${esc(s.intro)}</p>
      <div class="filters">${groups.map((g, i) => `<button class="filter" data-jump="cat-${i}">${esc(g.c)}</button>`).join("")}</div>
      ${groups.map((g, i) => `<h2 class="section-label" id="cat-${i}">${esc(g.c)}</h2>${g.html}`).join("")}`;
    return { title: s.title };
  }

  // One page per group of people, with Background and Conversation tabs
  function pagePerson(id, tab) {
    const w = getItem("people", id);
    if (!w) return pageNotFound();
    const t = getItem("talking", w.talk);
    tab = tab === "talk" && t ? "talk" : "about";
    pageItem("worldviews", id);
    const about = app.innerHTML.replace(/<a class="wide-card live-start" href="#\/talking[^]*?<\/a>/, "");
    let talk = "";
    if (t) {
      pageItem("talking", t.id);
      talk = app.innerHTML;
    }
    const strip = (h) => h.replace(/<p class="kicker">[^]*?<\/p>/, "").replace(/<div class="item-head">[^]*?<\/div>/, "");
    app.innerHTML = `
      <p class="kicker">People</p>
      <div class="item-head"><h1 class="page-title">${esc(w.title)}</h1>${favButton(`worldviews/${id}`)}</div>
      ${t ? `<div class="segs"><a class="seg${tab === "about" ? " on" : ""}" href="#/people/${id}">Background</a><a class="seg${tab === "talk" ? " on" : ""}" href="#/people/${id}/talk">Conversation</a></div>` : ""}
      ${tab === "about" ? strip(about) : strip(talk)}
      ${t ? `<a class="wide-card live-start" href="#/practice/rehearse/${t.id}">
        <span class="tile-icon">${svg(ICON.practice, 24)}</span>
        <span class="wide-main"><span class="tile-title">Practice this</span>
        <span class="tile-blurb">Rehearse this conversation with flashcards</span></span>${chevron}</a>` : ""}`;
    return { title: plain(w.title), section: "people", replaceKey: `#/people/${id}` };
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
      <p class="intro">${esc(s.intro)}</p>
      <div class="filters">${topics
        .map((t) => `<button class="filter${t === verseTopic ? " on" : ""}" data-topic="${esc(t)}">${esc(t)}</button>`)
        .join("")}</div>
      <div class="search-box small"><input id="verse-search" type="search" placeholder="Find a verse or reference" autocomplete="off" spellcheck="false"></div>

      <div class="list">${list.length ? list.map((v) => verseRow(v)).join("") : `<p class="empty">No favorite verses yet. Tap the star on any verse to add it.</p>`}</div>
      ${unverified ? `<p class="copyright">${unverified} of ${D.verses.length} verses still need their wording checked against a NASB 1995 Bible.</p>` : ""}
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
    const vs = document.getElementById("verse-search");
    vs.addEventListener("input", () => {
      const q = vs.value.trim().toLowerCase();
      app.querySelectorAll(".list > .row").forEach((r) => (r.hidden = q && !r.textContent.toLowerCase().includes(q)));
    });
    return { title: s.title };
  }

  // Worldview and objection pages that have a matching talking path
  const TALK_FOR = {
    "worldviews/nominal": "already-christian",
    "objections/abortion": "pro-choice",
    "objections/my-body": "pro-choice",
    "objections/no-god": "atheist",
    "objections/all-religions": "spiritual",
    "objections/spiritual-not-religious": "spiritual",
    "objections/morality-relative": "morality",
    "evidence/moral-law": "morality",
    "convictions/abortion": "pro-choice",
  };
  function talkCard(sec, id) {
    const tid = TALK_FOR[`${sec}/${id}`] || (sec === "worldviews" ? id : null);
    const t = tid && getItem("talking", tid);
    if (!t) return "";
    const person = D.people.find((x) => x.talk === tid);
    const href = person ? `#/people/${person.id}/talk` : `#/talking/${tid}`;
    return `<a class="wide-card live-start" href="${href}">
      <span class="tile-icon">${svg(ICON.talking, 24)}</span>
      <span class="wide-main"><span class="tile-title">Walk through this conversation</span>
      <span class="tile-blurb">Step by step: ${esc(plain(t.title))}</span></span>${chevron}</a>`;
  }

  function splitNotes(text) {
    const secs = [];
    for (const b of String(text || "").trim().split(/\n\s*\n/)) {
      // A bold phrase is a heading only when it ends with ":" or "." (inside or right after the bold)
      const m = b.match(/^\*\*(.{2,90}?)\*\*\s*(\([^)]{1,40}\))?([:.])?\s*/);
      const isHead = m && (/[:.][”"']?$/.test(m[1]) || m[3]);
      if (isHead) secs.push({ h: m[1].replace(/[:.,]\s*$/, "") + (m[2] ? " " + m[2] : ""), body: b.slice(m[0].length) });
      else if (secs.length) secs[secs.length - 1].body += "\n\n" + b;
      else secs.push({ h: "Overview", body: b });
    }
    return secs;
  }
  function pageItem(sec, id, step) {
    const item = getItem(sec, id);
    if (!item || !sectionById[sec]) return pageNotFound();
    const title = itemTitle(sec, item);
    let body;
    if (sec === "objections") {
      // Two views of one answer: Talk (what to say, fast) and Study (the full article)
      const tab = store.get("answerTab", "study") === "talk" ? "talk" : "study";
      const views = (item.otherViews || []).length
        ? `<div class="views">${item.otherViews.map((v) => `<div class="view"><strong>${esc(v.name)}</strong>${inline(v.text)}</div>`).join("")}</div>`
        : "";
      // Answers with a `talk` field keep Study as pure knowledge; the spoken 30-second answer lives in Talk
      const sections = [
        ...(item.talk ? [] : [{ h: "The 30-second answer", body: item.short }]),
        ...splitNotes(item.deep),
      ].filter((x) => x.body && x.body.trim());
      const talkNotes = splitNotes(item.talk).filter((x) => x.body && x.body.trim());
      // Other views go before a closing "Study" reading list
      if (views) {
        const last = sections[sections.length - 1];
        sections.splice(last && /^(study|further reading)/i.test(last.h) ? sections.length - 1 : sections.length, 0, { h: "Other views", html: views });
      }
      const verseList = (item.verses || []).map(getVerse).filter(Boolean);
      const verseRows = verseList.length ? `<div class="list">${verseList.map((v) => verseRow(v)).join("")}</div>` : "";
      const related = item.related && item.related.length ? `<div class="list">${item.related.map(relatedRow).join("")}</div>` : "";
      const ibRow = (label, html) => (html ? `<div class="ib-row"><dt>${label}</dt><dd>${html}</dd></div>` : "");
      const seeAlso = (item.related || [])
        .map((r) => {
          const [rs, rid] = r.split("/");
          const it = getItem(rs, rid);
          return it ? `<a class="ilink" href="#/${r}">${esc(plain(itemTitle(rs, it)))}</a>` : "";
        })
        .filter(Boolean)
        .join(", ");
      const talk = `
        ${boxes("say", "Say", item.oneLiner, " big")}
        ${boxes("ask", "Ask back", item.askBack)}
        ${item.tip ? `<p class="notice"><b>Before you answer:</b> ${inline(item.tip)}</p>` : ""}
        ${talkCard(sec, id)}
        <section class="part summary-part"><span class="label">The 30-second answer</span><div class="prose">${md(item.short)}</div></section>
        ${talkNotes.map((x) => `<section class="part talk-note"><h3><span>${inline(x.h)}</span></h3><div class="prose">${md(x.body)}</div></section>`).join("")}
        ${verseRows ? `<h2 class="section-label">Verses to use</h2>${verseRows}` : ""}
        ${related ? `<h2 class="section-label">Where to go next</h2>${related}` : ""}
        <button class="swap" data-answer-tab="study">Read the full study notes</button>`;
      const study = `
        ${item.lead ? `<p class="lead">${inline(item.lead)}</p>` : ""}
        <div class="infobox"><dl>
          ${ibRow("Also asked", (item.alsoAsked || []).map((q) => `“${esc(q)}”`).join(" "))}
          ${ibRow("In brief", item.inBrief ? inline(item.inBrief) : "")}
          ${ibRow("Key verses", verseList.map((v, k) => `<span class="nw"><button class="vchip-inline" data-ref="${esc(v.ref)}">${esc(v.ref)}</button>${k < verseList.length - 1 ? "," : ""}</span>`).join(" "))}
          ${ibRow("Sources", esc((item.sources || []).join(", ")))}
          ${ibRow("See also", seeAlso)}
        </dl></div>
        <div class="overview"><span class="label">Contents</span><ol>${sections
          .map((x, i) => `<li><button data-jump="note-${i + 1}">${inline(x.h)}</button></li>`)
          .join("")}</ol></div>
        ${sections
          .map(
            (x, i) => `<section class="part${i === 0 && !item.talk ? " summary-part" : ""}" id="note-${i + 1}">
              <h3><span class="step-num">${i + 1}</span><span>${inline(x.h)}</span></h3>
              ${x.html || `<div class="prose">${md(x.body)}</div>`}</section>`
          )
          .join("")}
        ${verseRows ? `<h2 class="section-label">Verses to know</h2>${verseRows}` : ""}
        ${related ? `<h2 class="section-label">Related</h2>${related}` : ""}`;
      body = `
        ${item.topic ? `<p class="theysay"><span class="label">They say</span><b>“${esc(item.title)}”</b></p>` : ""}
        <div class="segs mode">
          <button class="seg${tab === "talk" ? " on" : ""}" data-answer-tab="talk">${svg('<path d="M4 5h16v11H10l-4.5 3.5V16H4z" stroke-linejoin="round"/>', 18, 2)}Talk</button>
          <button class="seg${tab === "study" ? " on" : ""}" data-answer-tab="study">${svg('<path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5zM12 6.5V19.5" stroke-linejoin="round"/>', 18, 2)}Study</button>
        </div>
        <div data-pane="talk"${tab === "talk" ? "" : " hidden"}>${talk}</div>
        <div data-pane="study"${tab === "study" ? "" : " hidden"}>${study}</div>`;
    } else {
      body = `
        ${item.summary ? `<div class="prose summary">${md(item.summary)}</div>` : ""}
        ${talkCard(sec, id)}
        ${isPathSection(sec) && item.numbered && item.parts.length
          ? `<a class="wide-card live-start" href="#/live/${id}/1">
              <span class="tile-icon">${svg(ICON.live, 24)}</span>
              <span class="wide-main"><span class="tile-title">Start conversation mode</span>
              <span class="tile-blurb">One step at a time in big text. Your screen stays on.</span></span>${chevron}
            </a>`
          : ""}
        ${isPathSection(sec) && item.numbered && item.parts.length > 3
          ? `<div class="overview"><span class="label">Steps</span><ol>${item.parts
              .map((p, i) => (p.detour ? "" : `<li><button data-jump="step-${i + 1}">${esc(plain(p.heading || `Step ${i + 1}`))}</button></li>`))
              .join("")}</ol></div>`
          : ""}
        ${item.draft ? `<p class="notice">This is a draft. Confirm or edit it, and it becomes final.</p>` : ""}
        ${(item.parts || []).map((p, i) => (p.detour ? "" : renderPart(p, i, item, sec))).join("")}
        ${(item.parts || []).some((p) => p.detour)
          ? `<h2 class="section-label">Side steps (only if needed)</h2>
             ${item.parts.map((p, i) => (p.detour ? renderPart(p, i, item, sec) : "")).join("")}`
          : ""}`;
    }
    app.innerHTML = `
      ${item.category ? `<p class="kicker">${esc(item.category)}</p>` : ""}
      <div class="item-head"><h1 class="page-title">${esc(sec === "objections" && item.topic ? item.topic : title)}</h1>${favButton(`${sec}/${id}`)}</div>
      ${sourcePills(item.sources)}
      ${body}`;
    let scrollTo = null;
    if (step) {
      scrollTo = document.getElementById(`step-${step}`);
      if (scrollTo) scrollTo.classList.add("flash");
    }
    return { title: plain(item.title), section: HOME_OF[sec] || sec, scrollTo };
  }
  function relatedRow(path) {
    const [sec, id] = path.split("/");
    const item = getItem(sec, id);
    return item ? itemRow(sec, item, sectionById[sec].title) : "";
  }

  // ── Conversation mode ───────────────────────────────
  let wakeLock = null;
  async function keepAwake(on) {
    try {
      if (on && "wakeLock" in navigator && !wakeLock) {
        wakeLock = await navigator.wakeLock.request("screen");
        wakeLock.addEventListener("release", () => (wakeLock = null));
      } else if (!on && wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
    } catch (e) {}
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && document.body.classList.contains("live-mode")) keepAwake(true);
  });

  function pageLive(id, stepStr) {
    const found = findPath(id);
    if (!found || !found.item.parts || !found.item.parts.length) return pageNotFound();
    const { sec, item } = found;
    const total = item.parts.length;
    const i = Math.min(Math.max(parseInt(stepStr, 10) || 1, 1), total);
    const p = item.parts[i - 1];
    const stepHref = (k) => `#/live/${id}/${k}`;
    // Main steps (by their position in the list), skipping side steps
    const main = item.parts.map((x, k) => (x.detour ? null : k + 1)).filter(Boolean);
    const lastKey = "liveLast:" + id;
    if (!p.detour) sessionStorage.setItem(lastKey, i);
    const before = p.next ? main.filter((k) => k < p.next).pop() : null;
    const here = p.detour ? +(sessionStorage.getItem(lastKey) || before || main[0]) : i;
    const dots = main
      .map((k) => `<a class="dot${k === here ? (p.detour ? " done" : " on") : k < here ? " done" : ""}" href="${stepHref(k)}" data-replace aria-label="${esc(stepLabel(item, k))}"></a>`)
      .join("");
    const responses = (p.branches || [])
      .map((b) => {
        let href, target, replace = "";
        if (b.go.startsWith("step:")) {
          const k = +b.go.slice(5);
          href = stepHref(k);
          replace = " data-replace";
          target = stepLabel(item, k);
        } else {
          const g = goTarget(b.go);
          // Jumping to another path stays in conversation mode
          href = g.live ? `#/live/${g.id}/${g.step}` : `#/${b.go}`;
          target = g.title;
        }
        return `<a class="response" href="${href}"${replace}>
          <span class="branch-main"><span class="response-if">${inline(b.if)}</span>${b.then ? `<span class="response-then">Ask: ${inline(b.then)}</span>` : ""}<span class="branch-go">${b.then ? "Then " : ""}${esc(target)}</span></span>${chevron}</a>`;
      })
      .join("");

    let backBtnHtml, nextBtnHtml;
    if (p.detour) {
      // Continue to the side step's "next", unless they came from further along
      const ret = p.next && p.next > here ? p.next : here;
      const retName = esc(plain(item.parts[ret - 1].heading || ""));
      if (ret === here) {
        backBtnHtml = "";
        nextBtnHtml = `<a class="live-btn primary" href="${stepHref(ret)}" data-replace>Back to step ${stepNumber(item, ret - 1)}: ${retName}</a>`;
      } else {
        backBtnHtml = `<a class="live-btn" href="${stepHref(here)}" data-replace>Back to step ${stepNumber(item, here - 1)}</a>`;
        nextBtnHtml = `<a class="live-btn primary" href="${stepHref(ret)}" data-replace>Continue: ${retName}</a>`;
      }
    } else {
      const pos = main.indexOf(i);
      const prev = main[pos - 1], next = main[pos + 1];
      backBtnHtml = prev ? `<a class="live-btn" href="${stepHref(prev)}" data-replace>Back</a>` : `<span class="live-btn disabled">Back</span>`;
      nextBtnHtml = next
        ? `<a class="live-btn primary" href="${stepHref(next)}" data-replace>Next: ${esc(plain(item.parts[next - 1].heading || ""))}</a>`
        : `<a class="live-btn primary" href="#/${sec}/${id}">Finish</a>`;
    }
    const counter = p.detour ? "Side step" : `Step ${stepNumber(item, i - 1)} of ${main.length}`;

    app.innerHTML = `
      <div class="live${p.detour ? " is-detour" : ""}">
        <div class="live-top">
          <span class="live-count">${esc(plain(item.title))} · ${counter}</span>
          <div class="dots">${dots}</div>
        </div>
        <h1 class="live-title">${inline(p.heading || "")}</h1>
        ${boxes("say", "Say", p.say, " big")}
        ${boxes("ask", "Ask", p.ask, " big")}
        ${chips(p.verses)}
        ${responses ? `<h2 class="section-label">If they say</h2><div class="responses">${responses}</div>` : ""}
        ${p.body ? `<details class="fold"><summary>Notes</summary><div class="prose">${md(p.body)}</div></details>` : ""}
      </div>
      <nav class="live-nav">${backBtnHtml}${nextBtnHtml}</nav>`;
    return { title: "Conversation mode", section: HOME_OF[sec] || sec, liveKey: `#/live/${id}/` };
  }

  // ── Practice ────────────────────────────────────────
  // Each card has a "box" from 0 to 5. "Got it" moves it up, "Again" sends
  // it back to 0. Cards in lower boxes come up more often.
  // Box 1+ = learned (got it right at least once). Box 3+ = strong.
  const LEARNED = 1;
  const STRONG = 3;
  const getBoxes = () => store.get("practice", {});
  const boxOf = (key) => getBoxes()[key] || 0;
  function setBox(key, box) {
    const b = getBoxes();
    b[key] = box;
    store.set("practice", b);
  }
  const CLAIM_DECKS = { "Self-defeating": (c) => c.selfDefeating, "Clarify first": (c) => !c.selfDefeating };
  const TODAY_SIZE = 10;
  // Rehearse: every step (what do you say?) and every reply (they say X, then?) in a path
  function rehearseCards(pathId) {
    const f = findPath(pathId);
    if (!f) return [];
    const cards = [];
    f.item.parts.forEach((p, i) => {
      if (p.say || p.ask) cards.push({ key: `r:${pathId}:${i}`, step: { path: f.item, part: p, n: i + 1 } });
      (p.branches || []).forEach((b, j) => {
        const to = sayAt(b.go, f);
        if (b.then || to) cards.push({ key: `r:${pathId}:${i}:${j}`, reply: { path: f.item, part: p, n: i + 1, b, to } });
      });
    });
    return cards;
  }
  // The first thing to say or ask where a reply leads (another step, a path, or an answer)
  function sayAt(go, f) {
    const first = (x) => (Array.isArray(x) ? x[0] : x);
    let part = null;
    if (go.startsWith("step:")) part = f.item.parts[+go.slice(5) - 1];
    else {
      const [sec, id, step] = go.split("/");
      const t = getItem(sec, id);
      if (!t) return null;
      if (sec === "objections") return { say: t.oneLiner, ask: t.askBack };
      if (t.parts) part = t.parts[(+step || 1) - 1];
    }
    if (!part || !(part.say || part.ask)) return null;
    return { say: first(part.say), ask: first(part.ask) };
  }
  const REHEARSE_PATHS = () => ["way-of-the-master", ...D.talking.map((t) => t.id)];
  function deckCards(kind, deck) {
    if (kind === "mix") {
      return [...deckCards("verses", "All"), ...deckCards("objections", "All"), ...deckCards("claims", "All"), ...rehearseCards("way-of-the-master")];
    }
    if (kind === "rehearse") return deck === "All" ? REHEARSE_PATHS().flatMap(rehearseCards) : rehearseCards(deck);
    if (kind === "claims") {
      const list = deck === "All" ? D.claims || [] : (D.claims || []).filter(CLAIM_DECKS[deck] || (() => false));
      return list.map((c) => ({ key: "c:" + c.id, claim: c }));
    }
    if (kind === "verses") {
      const list =
        deck === "All" ? D.verses : deck === "Favorites" ? D.verses.filter((v) => isFav("verse:" + v.ref)) : D.verses.filter((v) => v.topics.includes(deck));
      return list.map((v) => ({ key: "v:" + v.ref, verse: v }));
    }
    const list =
      deck === "All"
        ? D.objections
        : deck === "Favorites"
        ? D.objections.filter((o) => isFav("objections/" + o.id))
        : D.objections.filter((o) => o.category === deck);
    return list.map((o) => ({ key: "o:" + o.id, obj: o }));
  }
  const knownCount = (cards) => cards.filter((c) => boxOf(c.key) >= LEARNED).length;
  function cardStatus(key) {
    const b = getBoxes()[key];
    if (b === undefined) return "New";
    if (b === 0) return "Needs work";
    return b >= STRONG ? "Strong" : "Learned";
  }

  let practiceState = {};
  function pagePractice(kind, deck) {
    if (!kind) return pagePracticeMenu();
    if (!DRILLS[kind]) return pageNotFound();
    if (!deck) return pageDeckMenu(kind);
    const cards = deckCards(kind, deck);
    practiceState = { kind, deck, cards, current: null, last: null, revealed: false, reviewed: 0, right: 0 };
    // Coming back to the same deck (e.g. after "Open the full answer")
    // picks up on the same card instead of starting over.
    let resumed = false;
    try {
      const saved = JSON.parse(sessionStorage.getItem("practiceState") || "null");
      if (saved && saved.kind === kind && saved.deck === deck) {
        const card = cards.find((c) => c.key === saved.currentKey);
        if (card) {
          Object.assign(practiceState, { current: card, last: saved.last, revealed: saved.revealed, reviewed: saved.reviewed, right: saved.right, seen: saved.seen || [], plan: saved.plan });
          resumed = true;
        }
      }
    } catch (e) {}
    const title = DRILLS[kind].title;
    app.innerHTML = `
      <p class="kicker">${esc(DRILLS[kind].label ? DRILLS[kind].label(deck) : deck)}</p>
      <h1 class="page-title">${title}</h1>
      ${kind === "verses" ? `<div class="segs small" id="direction"></div>` : ""}
      <div id="card"></div>`;
    if (cards.length && !resumed) pickCard();
    renderCard();
    return { title };
  }
  const DRILLS = {
    mix: { title: "Today's Practice", blurb: "10 mixed cards: verses, answers, questions, and steps", decks: () => ["Today"], hidden: true },
    rehearse: { title: "Rehearse a Conversation", blurb: "What you say, and how to answer their replies",
      decks: () => ["All", ...REHEARSE_PATHS()], label: (d) => (d === "All" ? "All" : plain(findPath(d).item.title)) },
    verses: { title: "Verse Flashcards", blurb: "See a reference, say the verse (or the reverse)", decks: () => ["All", "Favorites", ...D.verseTopics] },
    objections: { title: "Objection Drill", blurb: "Hear an objection, give your answer", decks: () => ["All", "Favorites", ...(D.objectionCategories || [])] },
    claims: { title: "Columbo Drill", blurb: "Hear a claim, ask the right question back", decks: () => ["All", ...Object.keys(CLAIM_DECKS)] },
  };
  function deckRow(kind, d) {
    const cards = deckCards(kind, d);
    if (!cards.length && d !== "Favorites") return "";
    return `<a class="row" href="#/practice/${kind}/${encodeURIComponent(d)}">
      <span class="row-main"><span class="row-title">${esc(DRILLS[kind].label ? DRILLS[kind].label(d) : d)}</span>
      <span class="row-sub">${cards.length ? `${knownCount(cards)} of ${cards.length} learned` : "Star some first"}</span></span>
      ${progressRing(cards.length ? knownCount(cards) / cards.length : 0)}${chevron}</a>`;
  }
  function pagePracticeMenu() {
    const rows = Object.entries(DRILLS)
      .filter(([, d]) => !d.hidden)
      .map(([kind, d]) => {
        const cards = deckCards(kind, "All");
        return `<a class="row" href="#/practice/${kind}">
          <span class="row-main"><span class="row-title">${esc(d.title)}</span>
          <span class="row-sub">${esc(d.blurb)}. ${knownCount(cards)} of ${cards.length} learned.</span></span>
          ${progressRing(cards.length ? knownCount(cards) / cards.length : 0)}${chevron}</a>`;
      })
      .join("");
    app.innerHTML = `
      <h1 class="page-title">Practice</h1>
      <p class="summary">Say your answer out loud, then check it. Cards you miss come back more often.</p>
      <a class="hero" href="#/practice/mix/Today">
        <span class="hero-icon">${svg(ICON.practice, 26, 2)}</span>
        <span class="row-main"><span class="hero-title">Today's practice</span>
        <span class="hero-sub">10 mixed cards: verses, answers, questions, and steps</span></span>${chevron}
      </a>
      <div class="list">${rows}
        <a class="row" href="#/quiz"><span class="row-main"><span class="row-title">Quizzes</span>
        <span class="row-sub">Multiple-choice tests with a score at the end.</span></span>${chevron}</a></div>
      <button class="text-btn" data-reset-practice>Reset practice progress</button>`;
    return { title: "Practice" };
  }
  function pageDeckMenu(kind) {
    const d = DRILLS[kind];
    app.innerHTML = `
      <p class="kicker">Practice</p>
      <h1 class="page-title">${esc(d.title)}</h1>
      <p class="summary">${esc(d.blurb)}. Pick a deck.</p>
      <div class="list">${d.decks().map((x) => deckRow(kind, x)).join("")}</div>`;
    return { title: d.title };
  }
  function progressRing(frac) {
    const c = 2 * Math.PI * 9;
    return `<svg class="ring" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="var(--line)" stroke-width="3"/>
      ${frac > 0 ? `<circle cx="12" cy="12" r="9" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"
        stroke-dasharray="${(frac * c).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 12 12)"/>` : ""}</svg>`;
  }
  // Today's practice: 3 verses, 3 answers, 2 claims, 2 conversation steps, shuffled
  const TODAY_PLAN = ["v:", "v:", "v:", "o:", "o:", "o:", "c:", "c:", "r:", "r:"];
  function pickCard() {
    const { cards, last } = practiceState;
    const seen = (practiceState.seen = practiceState.seen || []);
    // Today's practice never repeats a card; other decks bring missed cards back
    let pool = cards.length > 1 ? cards.filter((c) => c.key !== last && !(practiceState.kind === "mix" && seen.includes(c.key))) : cards;
    if (practiceState.kind === "mix") {
      if (!practiceState.plan || practiceState.reviewed === 0) practiceState.plan = [...TODAY_PLAN].sort(() => Math.random() - 0.5);
      const want = practiceState.plan[practiceState.reviewed % TODAY_PLAN.length];
      const typed = pool.filter((c) => c.key.startsWith(want));
      if (typed.length) pool = typed;
    }
    if (!pool.length) pool = cards;
    // Weight toward low boxes: box 0 is 6x as likely as box 5
    const weights = pool.map((c) => 6 - boxOf(c.key));
    let r = Math.random() * weights.reduce((a, b) => a + b, 0);
    let pick = pool[0];
    for (let k = 0; k < pool.length; k++) {
      r -= weights[k];
      if (r <= 0) {
        pick = pool[k];
        break;
      }
    }
    practiceState.current = pick;
    practiceState.revealed = false;
    seen.push(pick.key);
  }
  function savePractice() {
    const { kind, deck, current, last, revealed, reviewed, right, seen, plan } = practiceState;
    sessionStorage.setItem("practiceState", JSON.stringify({ kind, deck, currentKey: current && current.key, last, revealed, reviewed, right, seen, plan }));
  }
  function renderCard() {
    const el = document.getElementById("card");
    if (!el) return;
    savePractice();
    const { kind, cards, current, revealed } = practiceState;
    const dirEl = document.getElementById("direction");
    const dir = store.get("verseDirection", "ref");
    if (dirEl) {
      dirEl.innerHTML = `<button class="seg${dir === "ref" ? " on" : ""}" data-direction="ref">Reference first</button><button class="seg${dir === "text" ? " on" : ""}" data-direction="text">Text first</button>`;
    }
    if (!cards.length) {
      el.innerHTML = `<p class="empty">No cards in this deck yet. Tap the star on verses or objections to add favorites.</p>`;
      return;
    }
    const known = knownCount(cards);
    if (kind === "mix" && practiceState.reviewed >= TODAY_SIZE) {
      if (!practiceState.counted) {
        const done = store.get("todayDone", {});
        done[new Date().toDateString()] = (done[new Date().toDateString()] || 0) + practiceState.reviewed;
        store.set("todayDone", done);
        practiceState.counted = true;
      }
      el.innerHTML = `<div class="flashcard"><div class="card-front"><p class="card-ref">Done for today</p>
        <p class="card-hint">${practiceState.right} of ${practiceState.reviewed} right</p></div></div>
        <div class="card-actions"><a class="btn" href="#/">Home</a><button class="btn primary" data-again-session>Do 10 more</button></div>`;
      return;
    }
    let front, back, kind_;
    const c0 = current;
    if (c0.verse) kind_ = "verses"; else if (c0.obj) kind_ = "objections"; else if (c0.claim) kind_ = "claims"; else kind_ = "rehearse";
    if (kind_ === "rehearse") {
      const st = c0.step || c0.reply;
      const ctx = `<p class="card-hint">${esc(plain(st.path.title))} · Step ${st.n}: ${esc(plain(st.part.heading || ""))}</p>`;
      if (c0.step) {
        front = ctx + `<p class="card-ref">What do you say here?</p>`;
        back = `${boxes("say", "Say", st.part.say)}${boxes("ask", "Ask", st.part.ask)}`;
      } else {
        const b = st.b;
        const tgt = goTarget(b.go.startsWith("step:") ? `${findPath(st.path.id).sec}/${st.path.id}/${b.go.slice(5)}` : b.go);
        front = ctx + `<p class="card-ref">They say: ${esc(plain(b.if))}</p><p class="card-hint">What do you say?</p>`;
        const to = st.to || {};
        back = b.then
          ? `${boxes("ask", "Ask", b.then)}<p class="card-note">Then: ${esc(tgt.title)}</p>`
          : `${boxes("say", "Say", to.say)}${boxes("ask", "Ask", to.ask)}<p class="card-note">From: ${esc(tgt.title)}</p>`;
      }
    } else if (kind_ === "verses") {
      const v = current.verse;
      const refHtml = `<p class="card-ref">${esc(v.ref)}</p>`;
      const textHtml = `<p class="card-text">${esc(/[,;:]$/.test(v.text) ? v.text.slice(0, -1) + " ..." : v.text)}</p>`;
      front = dir === "ref" ? refHtml + `<p class="card-hint">Say the verse</p>` : textHtml + `<p class="card-hint">Name the reference</p>`;
      const extra = `${v.tag ? `<p class="card-tag">${esc(v.tag)}</p>` : ""}${v.note ? `<p class="card-note">${inline(v.note)}</p>` : ""}`;
      back = (dir === "ref" ? textHtml : refHtml) + extra;
    } else if (kind_ === "claims") {
      const c = current.claim;
      front = `<p class="card-hint">${c.selfDefeating ? "Self-defeating" : "Clarify first"}</p><p class="card-ref">“${esc(c.claim)}”</p><p class="card-hint">What would you ask?</p>`;
      back = `${boxes("ask", "Ask", c.ask)}<p class="card-note">${inline(c.why)}</p>
        ${c.next ? `<a class="ilink" href="#/${c.next}">Open the full answer</a>` : ""}`;
    } else {
      const o = current.obj;
      front = `<p class="card-hint">${esc(o.category || "")}</p><p class="card-ref">“${esc(o.title)}”</p><p class="card-hint">What would you say?</p>`;
      back = `${boxes("say", "Say", o.oneLiner)}${boxes("ask", "Ask back", o.askBack)}
        ${o.short ? `<div class="card-answer"><span class="label">30-second answer</span><div class="prose">${md(o.short)}</div></div>` : ""}
        ${o.verses && o.verses.length ? `<span class="label verse-label">Key verses</span>${chips(o.verses)}` : ""}
        <a class="ilink" href="#/objections/${o.id}">Open deeper study</a>`;
    }
    el.innerHTML = `
      ${kind === "mix"
        ? `<div class="practice-progress"><span>Card ${practiceState.reviewed + 1} of ${TODAY_SIZE}</span><span class="status">${cardStatus(current.key)}</span></div>
           <div class="bar"><span style="width:${((practiceState.reviewed / TODAY_SIZE) * 100).toFixed(1)}%"></span></div>`
        : `<div class="practice-progress"><span>${known} of ${cards.length} learned</span><span class="status">${cardStatus(current.key)}</span></div>
           <div class="bar"><span style="width:${((known / cards.length) * 100).toFixed(1)}%"></span></div>`}
      ${practiceState.reviewed ? `<p class="session">This session: ${practiceState.reviewed} ${practiceState.reviewed === 1 ? "card" : "cards"}, ${practiceState.right} right</p>` : ""}
      <div class="flashcard${revealed ? " revealed" : ""}">
        <div class="card-front">${front}</div>
        ${revealed ? `<div class="card-back">${back}</div>` : ""}
      </div>
      <div class="card-actions">
        ${revealed
          ? `<button class="btn" data-grade="again">Again</button><button class="btn primary" data-grade="got">Got it</button>`
          : `<button class="btn primary wide" data-reveal>Show answer</button>`}
      </div>`;
  }
  function practiceReveal() {
    practiceState.revealed = true;
    renderCard();
  }
  function practiceGrade(got) {
    const key = practiceState.current.key;
    setBox(key, got ? Math.min(boxOf(key) + 1, 5) : 0);
    practiceState.reviewed++;
    if (got) practiceState.right++;
    practiceState.last = key;
    pickCard();
    renderCard();
    window.scrollTo(0, 0);
  }

  // ── Quizzes ─────────────────────────────────────────
  // 10 multiple-choice questions per round. Hand-written banks live in
  // data/quiz.js; the rest are built from verses, answers, claims, and paths.
  const QUIZ_LEN = 10;
  const shuffle = (a) => {
    const b = [...a];
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };
  // Pick wrong answers from a pool, skipping the right one and look-alikes
  const wrongs = (right, pool, n = 3) => shuffle([...new Set(pool)].filter((x) => x && x !== right)).slice(0, n);
  const firstWords = (t) => t.toLowerCase().split(/\s+/).slice(0, 2).join(" ");
  const QUIZZES = [
    ...(D.quizBanks || []).map((b) => ({
      id: b.id, title: b.title, blurb: b.blurb,
      build: () =>
        b.questions.map((x) => ({
          q: x.q, a: x.a, explain: x.explain, link: x.link,
          choices: x.choices ? shuffle(x.choices) : b.choices.length <= 2 ? b.choices : shuffle([x.a, ...wrongs(x.a, b.choices)]),
        })),
    })),
    {
      id: "verses", title: "Name That Verse", blurb: "Read the verse, pick the reference",
      build: () =>
        D.verses.map((v) => {
          const same = D.verses.filter((w) => w.topics.some((t) => v.topics.includes(t))).map((w) => w.ref);
          return { q: v.text, sub: v.tag, a: v.ref, verse: true, choices: shuffle([v.ref, ...wrongs(v.ref, same.length > 4 ? same : D.verses.map((w) => w.ref))]), explain: v.note };
        }),
    },
    {
      id: "answers", title: "Best Response", blurb: "Pick the line to say for each objection",
      build: () =>
        D.objections.map((o) => ({
          q: `They say: “${o.title}”`, a: o.oneLiner, link: `objections/${o.id}`, explain: `Then ask: “${o.askBack}”`,
          choices: shuffle([o.oneLiner, ...wrongs(o.oneLiner, D.objections.map((x) => x.oneLiner))]),
        })),
    },
    {
      id: "columbo", title: "Columbo Questions", blurb: "Pick the best question to ask back",
      build: () =>
        (D.claims || []).map((c) => ({
          q: `They say: “${c.claim}”`, a: c.ask, link: c.next, explain: c.why,
          choices: shuffle([c.ask, ...wrongs(c.ask, D.claims.map((x) => x.ask).filter((x) => firstWords(x) !== firstWords(c.ask)))]),
        })),
    },
    {
      id: "wotm", title: "Way of the Master", blurb: "Know the steps in order",
      build: () => {
        const item = getItem("paths", "way-of-the-master");
        const main = item.parts.filter((p) => !p.detour);
        const names = main.map((p) => plain(p.heading));
        const qs = [];
        main.forEach((p, i) => {
          if (i < main.length - 1)
            qs.push({ q: `What comes after “${names[i]}”?`, a: names[i + 1], choices: shuffle([names[i + 1], ...wrongs(names[i + 1], names)]), link: `paths/way-of-the-master/${i + 2}`,
              explain: plain([].concat(main[i + 1].say || main[i + 1].ask || [])[0] || "") });
          const line = [].concat(p.say || p.ask || [])[0];
          if (line) qs.push({ q: `Which step is this? “${plain(line)}”`, a: names[i], choices: shuffle([names[i], ...wrongs(names[i], names)]), link: `paths/way-of-the-master/${i + 1}` });
        });
        return qs;
      },
    },
  ];
  const quizById = Object.fromEntries(QUIZZES.map((z) => [z.id, z]));
  const quizBest = () => store.get("quizBest", {});
  const quizBestN = () => store.get("quizBestN", {});
  const bestText = (id) => {
    const b = quizBest()[id];
    return b === undefined ? "" : `. Best: ${b} of ${quizBestN()[id] || QUIZ_LEN}`;
  };
  // Mixed test settings: which quizzes to draw from and how many questions
  const MIX_LENGTHS = [10, 20, 30];
  const getMix = () => {
    const m = store.get("quizMix", null) || {};
    const ids = (m.topics || QUIZZES.filter((z) => z.id !== "verses").map((z) => z.id)).filter((id) => quizById[id]);
    return { topics: ids.length ? ids : QUIZZES.map((z) => z.id), len: MIX_LENGTHS.includes(m.len) ? m.len : QUIZ_LEN };
  };

  function pageQuizMenu() {
    app.innerHTML = `
      <p class="kicker">Practice</p>
      <h1 class="page-title">Quizzes</h1>
      <p class="summary">${QUIZ_LEN} questions each. Tap an answer to see if you're right, then review what you missed at the end.</p>
      <a class="hero" href="#/quiz/mix">
        <span class="hero-icon">${svg(ICON.quiz, 26, 2)}</span>
        <span class="row-main"><span class="hero-title">Mixed test</span>
        <span class="hero-sub">Pick your topics and length${bestText("mixed")}</span></span>${chevron}
      </a>
      <div class="list">${QUIZZES.map((z) => `<a class="row" href="#/quiz/${z.id}">
        <span class="row-main"><span class="row-title">${esc(z.title)}</span>
        <span class="row-sub">${esc(z.blurb)}${bestText(z.id)}</span></span>${chevron}</a>`).join("")}</div>`;
    return { title: "Quizzes" };
  }

  function pageQuizMix() {
    const mix = getMix();
    app.innerHTML = `
      <p class="kicker">Quizzes</p>
      <h1 class="page-title">Mixed Test</h1>
      <p class="summary">Pick the topics to mix, then how many questions.</p>
      <div class="mix-actions"><button class="text-btn" data-mix-all>Select all</button><button class="text-btn" data-mix-none>Clear</button></div>
      <div class="list mix-list">${QUIZZES.map((z) => `
        <label class="row mix-row">
          <input type="checkbox" id="mix-${z.id}" value="${z.id}"${mix.topics.includes(z.id) ? " checked" : ""}>
          <span class="row-main"><span class="row-title">${esc(z.title)}</span><span class="row-sub">${esc(z.blurb)}</span></span>
        </label>`).join("")}</div>
      <h2 class="section-label">Questions</h2>
      <div class="segs">${MIX_LENGTHS.map((n) => `<button class="seg${n === mix.len ? " on" : ""}" data-mix-len="${n}">${n}</button>`).join("")}</div>
      <p class="mix-note" id="mix-note" hidden>Pick at least one topic.</p>
      <div class="card-actions"><button class="btn primary wide" data-mix-start>Start mixed test</button></div>`;
    return { title: "Mixed Test" };
  }
  function saveMixFromPage() {
    const topics = [...app.querySelectorAll(".mix-list input:checked")].map((x) => x.value);
    const on = app.querySelector("[data-mix-len].on");
    store.set("quizMix", { topics, len: on ? +on.dataset.mixLen : QUIZ_LEN });
    return topics;
  }

  let quiz = null;
  function pageQuiz(id) {
    if (id === "mix") return pageQuizMix();
    const z = id === "mixed" ? { id: "mixed", title: "Mixed Test" } : quizById[id];
    if (!z) return pageNotFound();
    // Keep the round going when coming back from a "Learn more" page
    const saved = session.get("quiz", null);
    if (saved && saved.id === id && !saved.done) quiz = saved;
    else {
      let qs, len = QUIZ_LEN;
      if (id === "mixed") {
        const mix = getMix();
        len = mix.len;
        const pools = shuffle(mix.topics.map((t) => shuffle(quizById[t].build())));
        qs = [];
        for (let k = 0; qs.length < len && pools.some((p) => p.length > k); k++)
          pools.forEach((p) => { if (p[k] && qs.length < len) qs.push(p[k]); });
        qs = shuffle(qs);
      } else qs = shuffle(z.build());
      quiz = { id, title: z.title, qs: qs.slice(0, len), i: 0, picked: [], done: false };
    }
    renderQuiz();
    return { title: z.title };
  }
  function renderQuiz() {
    session.set("quiz", quiz);
    const n = quiz.qs.length;
    if (quiz.done) {
      const score = quiz.qs.filter((q, k) => quiz.picked[k] === q.a).length;
      const best = quizBest();
      const prevBest = best[quiz.id];
      if (!quiz.saved) {
        const bestN = quizBestN();
        const better = prevBest === undefined || score / n > prevBest / (bestN[quiz.id] || QUIZ_LEN);
        if (better) {
          best[quiz.id] = score;
          bestN[quiz.id] = n;
        }
        store.set("quizBest", best);
        store.set("quizBestN", bestN);
        quiz.saved = true;
        quiz.newBest = better;
        session.set("quiz", quiz);
      }
      const missed = quiz.qs.map((q, k) => ({ q, pick: quiz.picked[k] })).filter((x) => x.pick !== x.q.a);
      app.innerHTML = `
        <p class="kicker">${esc(quiz.title)}</p>
        <h1 class="page-title">${score} of ${n}</h1>
        <p class="summary">${score === n ? "Perfect score." : score >= n * 0.7 ? "Well done." : "Keep at it. Review the ones you missed below."}${quiz.newBest && prevBest !== undefined ? " New best." : ""}</p>
        <div class="card-actions"><a class="btn" href="#/quiz">All quizzes</a><button class="btn primary" data-quiz-again>Try again</button></div>
        ${missed.length ? `<h2 class="section-label">Review</h2>${missed.map(({ q, pick }) => `
          <div class="card quiz-review">
            <p class="quiz-q${q.verse ? " verse" : ""}">${esc(q.q)}</p>
            <p class="quiz-line wrong">You picked: ${esc(pick)}</p>
            <p class="quiz-line right">Answer: ${esc(q.a)}</p>
            ${q.explain ? `<p class="row-sub">${inline(q.explain)}</p>` : ""}
            ${q.link ? `<a class="ilink" href="#/${q.link}">Learn more</a>` : ""}
          </div>`).join("")}` : ""}`;
      return;
    }
    const q = quiz.qs[quiz.i];
    const pick = quiz.picked[quiz.i];
    const answered = pick !== undefined;
    app.innerHTML = `
      <p class="kicker">${esc(quiz.title)}</p>
      <div class="practice-progress"><span>Question ${quiz.i + 1} of ${n}</span><span class="status">${quiz.picked.filter((p, k) => p === quiz.qs[k].a).length} right</span></div>
      <div class="bar"><span style="width:${((quiz.i / n) * 100).toFixed(1)}%"></span></div>
      <div class="flashcard quiz-card">
        ${q.sub ? `<p class="card-hint">${esc(q.sub)}</p>` : ""}
        <p class="quiz-q${q.verse ? " verse" : ""}">${esc(q.q)}</p>
      </div>
      <div class="quiz-choices">${q.choices
        .map((c) => {
          const cls = !answered ? "" : c === q.a ? " right" : c === pick ? " wrong" : " dim";
          return `<button class="quiz-choice${cls}" data-quiz-pick="${esc(c)}"${answered ? " disabled" : ""}>${esc(c)}</button>`;
        })
        .join("")}</div>
      ${answered ? `
        <div class="quiz-result ${pick === q.a ? "right" : "wrong"}">
          <p class="quiz-verdict">${pick === q.a ? "Right" : "Not quite"}</p>
          ${q.explain ? `<p>${inline(q.explain)}</p>` : ""}
          ${q.link ? `<a class="ilink" href="#/${q.link}">Learn more</a>` : ""}
        </div>
        <div class="card-actions"><button class="btn primary wide" data-quiz-next>${quiz.i + 1 < n ? "Next question" : "See my score"}</button></div>` : ""}`;
  }

  // ── Cheat sheet ─────────────────────────────────────
  // The whole conversation on one screen. Each line opens the full page.
  const CHEAT = {
    steps: [
      [1, "What happens after you die?"],
      [2, "Are you a good person?"],
      [3, "Lied? Stolen? God's name? Lust?"],
      [4, "Innocent or guilty? Heaven or hell?"],
      [5, "Does that concern you?"],
      [6, "You broke the Law; Jesus paid your fine."],
      [7, "Repent and trust Him, like a parachute."],
      [8, "Read John, find a church."],
    ],
    replies: [
      ["“God will forgive me”", "A good judge can't let the guilty go.", "objections/god-will-forgive"],
      ["“I'm a good person”", "By whose standard? Let's check.", "objections/good-person"],
      ["“There's no God”", "A building proves a builder.", "live/way-of-the-master/9"],
      ["“I don't believe the Bible”", "Leave it out. Your conscience knows.", "live/way-of-the-master/10"],
      ["“Hell isn't fair”", "Should a judge punish a murderer?", "objections/hell-unfair"],
      ["“I'll think about it later”", "You have no promise of tomorrow.", "objections/think-later"],
    ],
    verses: ["Romans 3:23", "Romans 6:23", "Romans 5:8", "Hebrews 9:27", "John 14:6"],
    remember: ["Ask, don't argue.", "Law before grace.", "Be gentle. Include yourself.", "Don't pressure a prayer."],
  };
  function pageCheat() {
    const favObjections = favs
      .filter((k) => k.startsWith("objections/"))
      .map((k) => getItem("objections", k.split("/")[1]))
      .filter(Boolean);
    const line = (href, main, sub) => `<a class="cheat-line" href="#/${href}">
        <span class="row-main"><span class="cheat-main">${main}</span>${sub ? `<span class="cheat-sub">${esc(sub)}</span>` : ""}</span>${chevron}</a>`;
    app.innerHTML = `
      <h1 class="page-title">Cheat Sheet</h1>
      <p class="intro">A last look before you walk up to someone. Tap any line for the full page.</p>
      <div class="cheat-card">
        <span class="label">Way of the Master</span>
        ${CHEAT.steps.map(([n, t]) => line(`live/way-of-the-master/${n}`, `<span class="cheat-num">${n}</span>${esc(t)}`)).join("")}
      </div>
      <div class="cheat-card">
        <span class="label">If they say</span>
        ${CHEAT.replies.map(([q, a, href]) => line(href, esc(q), a)).join("")}
      </div>
      ${favObjections.length
        ? `<div class="cheat-card"><span class="label">Your favorites</span>
            ${favObjections.map((o) => line(`objections/${o.id}`, esc(`“${o.title}”`), o.oneLiner)).join("")}</div>`
        : ""}
      <div class="cheat-card">
        <span class="label">Key verses</span>
        <div class="chips">${CHEAT.verses.map((r) => {
          const v = getVerse(r);
          return `<button class="vchip" data-ref="${esc(r)}">${esc(r)}${v && v.tag ? ` <span class="chip-tag">${esc(v.tag)}</span>` : ""}</button>`;
        }).join("")}</div>
      </div>
      <div class="cheat-card">
        <span class="label">Remember</span>
        <ul class="cheat-remember">${CHEAT.remember.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      </div>
      <p class="copyright">Star objections to add them here under “Your favorites.”</p>`;
    return { title: "Cheat Sheet" };
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
        <div class="item-head"><h2 class="sheet-ref">${esc(v.ref)} <span class="ver">NASB 1995</span>${v.tag ? `<span class="sheet-tag">${esc(v.tag)}</span>` : ""}</h2>${favButton("verse:" + v.ref)}</div>
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

  // Remember whether the home favorites list is open
  document.addEventListener("toggle", (e) => {
    if (e.target.classList && e.target.classList.contains("fav-fold")) session.set("favsOpen", e.target.open);
    if (e.target.classList && e.target.classList.contains("fav-type")) {
      const label = e.target.dataset.favType;
      const open = session.get("favTypesOpen", []).filter((l) => l !== label);
      session.set("favTypesOpen", e.target.open ? [...open, label] : open);
    }
  }, true);

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
    const repl = t.closest("a[data-replace]");
    if (repl) {
      e.preventDefault();
      location.replace(repl.getAttribute("href"));
      return;
    }
    const ml = t.closest("[data-mix-len]");
    if (ml) {
      app.querySelectorAll("[data-mix-len]").forEach((b) => b.classList.toggle("on", b === ml));
      return saveMixFromPage();
    }
    if (t.closest("[data-mix-all]") || t.closest("[data-mix-none]")) {
      const all = !!t.closest("[data-mix-all]");
      app.querySelectorAll(".mix-list input").forEach((x) => (x.checked = all));
      return saveMixFromPage();
    }
    if (t.closest("[data-mix-start]")) {
      const topics = saveMixFromPage();
      if (!topics.length) return (document.getElementById("mix-note").hidden = false);
      session.set("quiz", null);
      location.hash = "#/quiz/mixed";
      return;
    }
    const at = t.closest("[data-answer-tab]");
    if (at) {
      const tab = at.dataset.answerTab;
      store.set("answerTab", tab);
      app.querySelectorAll("[data-pane]").forEach((p) => (p.hidden = p.dataset.pane !== tab));
      app.querySelectorAll(".mode [data-answer-tab]").forEach((b) => b.classList.toggle("on", b.dataset.answerTab === tab));
      if (at.classList.contains("swap")) window.scrollTo(0, 0);
      return;
    }
    const qp = t.closest("[data-quiz-pick]");
    if (qp && quiz && quiz.picked[quiz.i] === undefined) {
      quiz.picked[quiz.i] = qp.dataset.quizPick;
      return renderQuiz();
    }
    if (t.closest("[data-quiz-next]") && quiz) {
      if (quiz.i + 1 < quiz.qs.length) quiz.i++;
      else quiz.done = true;
      renderQuiz();
      return window.scrollTo(0, 0);
    }
    if (t.closest("[data-quiz-again]") && quiz) {
      session.set("quiz", null);
      pageQuiz(quiz.id);
      return window.scrollTo(0, 0);
    }
    if (t.closest("[data-again-session]")) {
      Object.assign(practiceState, { reviewed: 0, right: 0, counted: false, seen: [], plan: null });
      pickCard();
      return renderCard();
    }
    const reveal = t.closest("[data-reveal]");
    if (reveal) return practiceReveal();
    const grade = t.closest("[data-grade]");
    if (grade) return practiceGrade(grade.dataset.grade === "got");
    const flip = t.closest("[data-direction]");
    if (flip) {
      store.set("verseDirection", flip.dataset.direction);
      practiceState.revealed = false;
      return renderCard();
    }
    if (t.closest("[data-reset-practice]")) {
      if (confirm("Reset all practice progress?")) {
        store.set("practice", {});
        rerender();
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
    if (parts[0] === "live") return pageLive(parts[1], parts[2]);
    if (parts[0] === "cheat") return pageCheat();
    if (parts[0] === "favorites") return pageFavorites();
    if (parts[0] === "practice") return pagePractice(parts[1], parts[2]);
    if (parts[0] === "quiz") return parts[1] ? pageQuiz(parts[1]) : pageQuizMenu();
    if (parts[0] === "people" && parts[1]) return pagePerson(parts[1], parts[2]);
    // Old links: Worldview Notes and Talking Paths now live on People pages
    if (parts.length === 1 && (parts[0] === "talking" || parts[0] === "worldviews")) return pageSection("people");
    if (parts.length === 1 && parts[0] === "openers") return pageSection("skills");
    if (parts[0] === "worldviews" && parts[1]) return pagePerson(parts[1]);
    if (parts[0] === "talking" && parts[1] && !parts[2]) {
      const person = D.people.find((x) => x.talk === parts[1]);
      if (person) return pagePerson(person.id, "talk");
    }
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
    else if (info.replaceKey && trail.length && trail[trail.length - 1].hash.startsWith(info.replaceKey)) {
      trail[trail.length - 1] = { hash, title: info.title };
    } else if (info.liveKey && trail.length && trail[trail.length - 1].hash.startsWith(info.liveKey)) {
      trail[trail.length - 1] = { hash, title: info.title };
    } else if (at >= 0) {
      goingBack = at < trail.length - 1;
      trail = trail.slice(0, at + 1);
    } else trail.push({ hash, title: info.title });
    sessionStorage.setItem("trail", JSON.stringify(trail));
    if (info.section && hash.split("/").length > 2) store.set("lastItem", { hash, title: info.title });

    document.body.classList.toggle("live-mode", !!info.liveKey);
    keepAwake(!!info.liveKey);

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
    // When a new version takes over, reload once so it shows right away
    // (skip on the very first install, when nothing was in control yet).
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController || reloaded) return;
      reloaded = true;
      location.reload();
    });
  }
})();
