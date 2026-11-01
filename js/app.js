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
    practice: '<rect x="3.5" y="6" width="13" height="14" rx="2"/><path d="M7.5 6V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />',
    live: '<path d="M8 5.5v13l11-6.5z" stroke-linejoin="round"/>',
    talking: '<path d="M6 4v6a4 4 0 0 0 4 4h8M14 10l4 4-4 4M6 20v-2" stroke-linecap="round" stroke-linejoin="round"/>',
    cheat: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke-linecap="round"/>',
    worldviews: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.5 2.3 3.5 5 3.5 8s-1 5.7-3.5 8c-2.5-2.3-3.5-5-3.5-8s1-5.7 3.5-8z"/>',
  };
  const svg = (paths, size = 24, sw = 1.8) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${sw}" aria-hidden="true">${paths}</svg>`;
  const chevron = `<svg class="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const starSvg = (on, size = 26) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

  // ── Sections ────────────────────────────────────────
  const SECTIONS = [
    { id: "paths", group: "use", title: "Gospel Path", blurb: "Way of the Master and Romans Road",
      intro: "Step-by-step ways to share the gospel. Way of the Master is the main path; tap “Start conversation mode” to follow it live." },
    { id: "talking", group: "use", title: "Talking Paths", blurb: "Step by step for “I'm an atheist,” “I'm Muslim,” and more",
      intro: "Start from where they are. Each path handles their starting point, then hands off to Way of the Master. Tap “Start conversation mode” to follow one live." },
    { id: "objections", group: "use", title: "Objections", blurb: "What to say when they push back",
      intro: "Each answer starts with one line to say and a question to ask back. Open the 30-second answer or deeper study when you have time." },
    { id: "verses", group: "use", title: "Quick Verses", blurb: "Key verses by topic, NASB 1995",
      intro: "Tap any verse for the full text and a note on how to use it. Star the ones you use most." },
    { id: "openers", group: "use", title: "Openers & Wrap-Up", blurb: "How to start, steer, and finish",
      intro: "Ways to start a conversation, turn it toward spiritual things, and end it well." },
    { id: "skills", group: "prep", title: "Conversation Skills", blurb: "Tactics, good questions, and tone",
      intro: "How to keep a conversation friendly and on track: asking good questions, handling pushback, and using the Law well." },
    { id: "evidence", group: "prep", title: "Reasons to Believe", blurb: "Resurrection, the Bible, creation",
      intro: "The positive case for Christianity, to study ahead of time. Objections answer what they say in the moment; this is the deeper evidence behind those answers." },
    { id: "worldviews", group: "prep", title: "Worldview Notes", blurb: "Atheists, Muslims, Mormons, and more",
      intro: "What different groups believe, where they differ from the gospel, and good questions to ask." },
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
    const tag = v.tag ? `<span class="vtag">${esc(v.tag)}</span>` : "";
    return row({ ref: v.ref, kicker, title: `<span class="vname">${esc(v.ref)}${star}</span>${tag}`, sub: v.text, verse: true });
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
  // A branch target like "objections/hell-unfair" or "paths/way-of-the-master/3"
  function goTarget(go) {
    const [s, id, step] = go.split("/");
    const t = getItem(s, id);
    if (!t) return { title: go };
    const prefix = { objections: "Answer: ", worldviews: "Notes: ", evidence: "Evidence: ", skills: "Skill: ", openers: "" }[s] || "";
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
    if (s.id === "verses") return String(D.verses.length);
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
    body.innerHTML = `
      <a class="hero" href="#/live/way-of-the-master/1">
        <span class="hero-icon">${svg(ICON.live, 26, 2)}</span>
        <span class="row-main"><span class="hero-title">Start a conversation</span>
        <span class="hero-sub">Way of the Master, one step at a time</span></span>${chevron}
      </a>
      ${saved.length ? `<h2 class="section-label">Favorites</h2><div class="list">${saved.join("")}</div>` : ""}
      <h2 class="section-label">In a conversation</h2>
      <div class="nav-list">
        ${navRow("#/cheat", ICON.cheat, "Cheat Sheet", "The whole conversation on one screen", "")}
        ${group("use")}
      </div>
      <h2 class="section-label">Prepare</h2>
      <div class="nav-list">
        ${navRow("#/practice", ICON.practice, "Practice", "Verse flashcards and objection drills", "")}
        ${group("prep")}
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
      idx.push({ verse: v, hay: [v.ref, v.tag, v.text, v.note, ...(v.topics || [])].join(" ").toLowerCase(), titleHay: (v.ref + " " + (v.tag || "")).toLowerCase() });
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
    app.innerHTML = `<h1 class="page-title">${esc(s.title)}</h1><p class="intro">${esc(s.intro)}</p>${body}`;
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
      <p class="intro">${esc(s.intro)}</p>
      <div class="filters">${topics
        .map((t) => `<button class="filter${t === verseTopic ? " on" : ""}" data-topic="${esc(t)}">${esc(t)}</button>`)
        .join("")}</div>

      <div class="list">${list.length ? list.map((v) => verseRow(v)).join("") : `<p class="empty">No favorite verses yet. Tap the star on any verse to add it.</p>`}</div>
      ${unverified ? `<p class="copyright">${unverified} of ${D.verses.length} verses still need their wording checked against a NASB 1995 Bible.</p>` : ""}
      <p class="copyright">${esc(COPYRIGHT)}</p>`;
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
  };
  function talkCard(sec, id) {
    const tid = TALK_FOR[`${sec}/${id}`] || (sec === "worldviews" ? id : null);
    const t = tid && getItem("talking", tid);
    if (!t) return "";
    return `<a class="wide-card live-start" href="#/talking/${tid}">
      <span class="tile-icon">${svg(ICON.talking, 24)}</span>
      <span class="wide-main"><span class="tile-title">Talk it through step by step</span>
      <span class="tile-blurb">Talking path: ${esc(plain(t.title))}</span></span>${chevron}</a>`;
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
        ${talkCard(sec, id)}
        <details class="fold" open><summary>30-second answer</summary><div class="prose">${md(item.short)}</div></details>
        ${item.verses && item.verses.length ? `<span class="label verse-label">Key verses</span>${chips(item.verses)}` : ""}
        <details class="fold"><summary>Deeper study</summary><div class="prose">${md(item.deep)}</div></details>
        ${item.related && item.related.length ? `<h2 class="section-label">Related</h2><div class="list">${item.related.map(relatedRow).join("")}</div>` : ""}`;
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
        ${item.draft ? `<p class="notice">This page is a placeholder. We'll fill it in together.</p>` : ""}
        ${(item.parts || []).map((p, i) => (p.detour ? "" : renderPart(p, i, item, sec))).join("")}
        ${(item.parts || []).some((p) => p.detour)
          ? `<h2 class="section-label">Side steps (only if needed)</h2>
             ${item.parts.map((p, i) => (p.detour ? renderPart(p, i, item, sec) : "")).join("")}`
          : ""}`;
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
    const here = p.detour ? +(sessionStorage.getItem(lastKey) || main[0]) : i;
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
    return { title: "Conversation mode", section: sec, liveKey: `#/live/${id}/` };
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
  function deckCards(kind, deck) {
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
  function practiceSummary() {
    const v = deckCards("verses", "All");
    const o = deckCards("objections", "All");
    const kv = knownCount(v), ko = knownCount(o);
    return kv || ko ? `${kv} verses and ${ko} answers learned.` : "";
  }

  let practiceState = {};
  function pagePractice(kind, deck) {
    if (!kind) return pagePracticeMenu();
    if (kind !== "verses" && kind !== "objections") return pageNotFound();
    deck = deck || "All";
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
          Object.assign(practiceState, { current: card, last: saved.last, revealed: saved.revealed, reviewed: saved.reviewed, right: saved.right });
          resumed = true;
        }
      }
    } catch (e) {}
    const title = kind === "verses" ? "Verse Flashcards" : "Objection Drill";
    app.innerHTML = `
      <p class="kicker">${esc(deck === "All" ? "All" : deck)}</p>
      <h1 class="page-title">${title}</h1>
      ${kind === "verses" ? `<div class="segs small" id="direction"></div>` : ""}
      <div id="card"></div>`;
    if (cards.length && !resumed) pickCard();
    renderCard();
    return { title };
  }
  function pagePracticeMenu() {
    const deckList = (kind, decks) =>
      decks
        .map((d) => {
          const cards = deckCards(kind, d);
          if (!cards.length && d !== "Favorites") return "";
          return `<a class="row" href="#/practice/${kind}/${encodeURIComponent(d)}">
            <span class="row-main"><span class="row-title">${esc(d)}</span>
            <span class="row-sub">${cards.length ? `${knownCount(cards)} of ${cards.length} learned` : "Star some first"}</span></span>
            ${progressRing(cards.length ? knownCount(cards) / cards.length : 0)}${chevron}</a>`;
        })
        .join("");
    app.innerHTML = `
      <h1 class="page-title">Practice</h1>
      <p class="summary">Say your answer out loud, then check it. Cards you miss come back more often.</p>
      <h2 class="section-label">Verse flashcards</h2>
      <div class="list">${deckList("verses", ["All", "Favorites", ...D.verseTopics])}</div>
      <h2 class="section-label">Objection drill</h2>
      <div class="list">${deckList("objections", ["All", "Favorites", ...(D.objectionCategories || [])])}</div>
      <button class="text-btn" data-reset-practice>Reset practice progress</button>`;
    return { title: "Practice" };
  }
  function progressRing(frac) {
    const c = 2 * Math.PI * 9;
    return `<svg class="ring" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="var(--line)" stroke-width="3"/>
      ${frac > 0 ? `<circle cx="12" cy="12" r="9" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"
        stroke-dasharray="${(frac * c).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 12 12)"/>` : ""}</svg>`;
  }
  function pickCard() {
    const { cards, last } = practiceState;
    let pool = cards.length > 1 ? cards.filter((c) => c.key !== last) : cards;
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
  }
  function savePractice() {
    const { kind, deck, current, last, revealed, reviewed, right } = practiceState;
    sessionStorage.setItem("practiceState", JSON.stringify({ kind, deck, currentKey: current && current.key, last, revealed, reviewed, right }));
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
    let front, back;
    if (kind === "verses") {
      const v = current.verse;
      const refHtml = `<p class="card-ref">${esc(v.ref)}</p>`;
      const textHtml = `<p class="card-text">${esc(v.text)}</p>`;
      front = dir === "ref" ? refHtml + `<p class="card-hint">Say the verse</p>` : textHtml + `<p class="card-hint">Name the reference</p>`;
      const extra = `${v.tag ? `<p class="card-tag">${esc(v.tag)}</p>` : ""}${v.note ? `<p class="card-note">${inline(v.note)}</p>` : ""}`;
      back = (dir === "ref" ? textHtml : refHtml) + extra;
    } else {
      const o = current.obj;
      front = `<p class="card-hint">${esc(o.category || "")}</p><p class="card-ref">“${esc(o.title)}”</p><p class="card-hint">What would you say?</p>`;
      back = `${boxes("say", "Say", o.oneLiner)}${boxes("ask", "Ask back", o.askBack)}
        ${o.short ? `<div class="card-answer"><span class="label">30-second answer</span><div class="prose">${md(o.short)}</div></div>` : ""}
        ${o.verses && o.verses.length ? `<span class="label verse-label">Key verses</span>${chips(o.verses)}` : ""}
        <a class="ilink" href="#/objections/${o.id}">Open deeper study</a>`;
    }
    el.innerHTML = `
      <div class="practice-progress"><span>${known} of ${cards.length} learned</span><span class="status">${cardStatus(current.key)}</span></div>
      <div class="bar"><span style="width:${((known / cards.length) * 100).toFixed(1)}%"></span></div>
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
    if (parts[0] === "practice") return pagePractice(parts[1], parts[2]);
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
    else if (info.liveKey && trail.length && trail[trail.length - 1].hash.startsWith(info.liveKey)) {
      trail[trail.length - 1] = { hash, title: info.title };
    } else if (at >= 0) {
      goingBack = at < trail.length - 1;
      trail = trail.slice(0, at + 1);
    } else trail.push({ hash, title: info.title });
    sessionStorage.setItem("trail", JSON.stringify(trail));

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
