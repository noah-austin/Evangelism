// Builds the print posters and banners in print/ as PDFs at real size,
// plus small PNG previews in print/previews/.
// Usage: node tools/make_posters.js   (needs Playwright, already installed here)

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "print");
const PREV = path.join(OUT, "previews");
fs.mkdirSync(PREV, { recursive: true });

const C = { navy: "#14202e", gold: "#d4a03a", cream: "#f7f1e5", ink: "#14202e", white: "#ffffff", muted: "#5f6b7a" };

const base = (w, h, bg, fg, body) => `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { size: ${w}in ${h}in; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${w}in; height: ${h}in; }
  body { background: ${bg}; color: ${fg}; font-family: "Inter Display", "Inter", sans-serif;
         -webkit-print-color-adjust: exact; print-color-adjust: exact; overflow: hidden; }
  .page { position: relative; width: ${w}in; height: ${h}in; display: flex; flex-direction: column; }
  .serif { font-family: "Bitstream Charter", "DejaVu Serif", serif; }
  .rule { height: 0.18in; width: 4in; background: ${C.gold}; border-radius: 0.09in; }
  .cross { position: relative; }
  .cross::before, .cross::after { content: ""; position: absolute; background: ${C.gold}; border-radius: 0.06in; }
  .fit { white-space: nowrap; }
  .ref { font-family: "Inter", sans-serif; font-weight: 700; letter-spacing: 0.04em; }
</style></head><body><div class="page">${body}</div></body></html>`;

// A simple line cross drawn with CSS (size in inches)
const cross = (size, color = C.gold) =>
  `<svg width="${size}in" height="${size * 1.35}in" viewBox="0 0 20 27"><rect x="8" y="0" width="4" height="27" rx="1" fill="${color}"/><rect x="0" y="7" width="20" height="4" rx="1" fill="${color}"/></svg>`;

const posters = [
  {
    file: "01-good-person-24x36",
    w: 24, h: 36, bg: C.navy, fg: C.cream,
    body: `
      <div style="padding: 2.6in 2in 0; flex:1; display:flex; flex-direction:column;">
        <div style="font-weight:800; font-size:1.25in; letter-spacing:0.06em; color:${C.gold}; text-transform:uppercase;">Quick question</div>
        <div style="font-weight:900; font-size:4.6in; line-height:0.98; letter-spacing:-0.02em; margin-top:0.8in;">Are you<br>a good<br>person?</div>
        <div class="rule" style="margin:1.6in 0 1.2in;"></div>
        <div style="font-weight:700; font-size:1.7in; line-height:1.15;">Take the test.<br><span style="color:${C.gold}">It takes 2 minutes.</span></div>
      </div>
      <div style="padding:0 2in 2.2in; font-weight:600; font-size:0.9in; color:${C.cream}; opacity:0.85;">Ask me.</div>`,
  },
  {
    file: "02-after-you-die-24x36",
    w: 24, h: 36, bg: C.cream, fg: C.ink,
    body: `
      <div style="padding: 3in 2in 0; flex:1; display:flex; flex-direction:column;">
        ${cross(1.6, C.gold)}
        <div style="font-weight:900; font-size:4.1in; line-height:1; letter-spacing:-0.02em; margin-top:1.4in;">What<br>happens<br>after<br>you die?</div>
        <div class="rule" style="margin:1.5in 0 1.1in;"></div>
        <div style="font-weight:800; font-size:2in; color:${C.gold};">Let's talk.</div>
      </div>
      <div style="padding:0 2in 2.2in; font-weight:600; font-size:0.85in; color:${C.muted};">No pressure. Just a conversation.</div>`,
  },
  {
    file: "03-law-test-24x36",
    w: 24, h: 36, bg: C.white, fg: C.ink,
    body: `
      <div style="background:${C.navy}; color:${C.cream}; padding:2in 2in 1.6in;">
        <div style="font-weight:800; font-size:1.1in; letter-spacing:0.06em; color:${C.gold}; text-transform:uppercase;">The Good Person Test</div>
        <div style="font-weight:900; font-size:2.9in; line-height:1.02; letter-spacing:-0.02em; margin-top:0.6in;">Would you pass?</div>
      </div>
      <div style="padding:1.8in 2in 0; flex:1;">
        ${["Have you ever told a lie?", "Have you ever stolen anything?", "Have you ever used God's name as a curse word?", "Have you ever looked with lust?"]
          .map((q, i) => `<div style="display:flex; gap:0.7in; align-items:flex-start; margin-bottom:1.5in;">
              <div style="flex:none; width:1.5in; height:1.5in; border-radius:50%; background:${C.gold}; color:${C.white}; font-weight:900; font-size:0.95in; display:flex; align-items:center; justify-content:center;">${i + 1}</div>
              <div style="font-weight:800; font-size:1.15in; line-height:1.12; padding-top:0.15in;">${q}</div></div>`)
          .join("")}
      </div>
      <div style="padding:0 2in 2.2in;">
        <div class="rule" style="margin-bottom:0.8in;"></div>
        <div style="font-weight:900; font-size:1.5in; line-height:1.1;">On Judgment Day, would you be <span style="color:${C.gold}">innocent or guilty?</span></div>
      </div>`,
  },
  {
    file: "04-romans-6-23-24x36",
    w: 24, h: 36, bg: C.navy, fg: C.cream,
    body: `
      <div style="padding:3in 2.2in 0; flex:1; display:flex; flex-direction:column; justify-content:center;">
        ${cross(1.4, C.gold)}
        <div class="serif" style="font-size:2.35in; line-height:1.22; margin-top:1.4in;">For the wages of sin is death, but <span style="color:${C.gold}">the free gift of God is eternal life</span> in Christ Jesus our Lord.</div>
        <div class="ref" style="font-size:1in; margin-top:1.4in; color:${C.gold};">ROMANS 6:23 (NASB)</div>
      </div>
      <div style="height:3in;"></div>`,
  },
  {
    file: "05-eternity-banner-6x3ft",
    w: 72, h: 36, bg: C.navy, fg: C.cream,
    body: `
      <div style="flex:1; display:flex; align-items:center; padding:0 4.5in; gap:4in;">
        <div style="flex:none;">${cross(6.5, C.gold)}</div>
        <div style="flex:1; min-width:0;">
          <div class="fit" style="font-weight:900; font-size:6in; line-height:1.02; letter-spacing:-0.02em;">Where will you</div>
          <div class="fit" style="font-weight:900; font-size:6in; line-height:1.02; letter-spacing:-0.02em;">spend <span style="color:${C.gold}">eternity?</span></div>
          <div class="serif" style="font-size:2.1in; line-height:1.25; margin-top:2.2in; opacity:0.95;">“I am the way, and the truth, and the life; no one comes to the Father but through Me.”</div>
          <div class="ref" style="font-size:1.3in; margin-top:1in; color:${C.gold};">JESUS, JOHN 14:6 (NASB)</div>
        </div>
      </div>`,
  },
  {
    file: "06-gospel-banner-6x3ft",
    w: 72, h: 36, bg: C.cream, fg: C.ink,
    body: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:0 5in;">
        <div class="fit" style="font-weight:900; font-size:6.4in; line-height:1.04; letter-spacing:-0.02em;">Christ died for sinners</div>
        <div class="fit" style="font-weight:900; font-size:6.4in; line-height:1.04; letter-spacing:-0.02em;">and <span style="color:${C.gold}">rose again.</span></div>
        <div class="rule" style="margin:2.6in 0 2.2in; width:12in; height:0.5in; border-radius:0.25in;"></div>
        <div class="serif" style="font-size:3in; white-space:nowrap;">“Repent and believe in the gospel.”</div>
        <div class="ref" style="font-size:1.4in; margin-top:1in; color:${C.gold};">MARK 1:15 (NASB)</div>
      </div>`,
  },
  {
    file: "07-ask-me-18x24",
    w: 18, h: 24, bg: C.gold, fg: C.navy,
    body: `
      <div style="padding:2.4in 1.6in 0; flex:1; display:flex; flex-direction:column;">
        <div style="font-weight:900; font-size:2.85in; line-height:1.02; letter-spacing:-0.02em;">Questions<br>about God?</div>
        <div style="font-weight:900; font-size:3.4in; line-height:1; letter-spacing:-0.02em; color:${C.white}; margin-top:0.7in;">Ask me.</div>
        <div style="height:0.14in; width:3.5in; background:${C.navy}; border-radius:0.07in; margin:1.3in 0 1in;"></div>
        <div style="font-weight:800; font-size:1.25in; line-height:1.2;">Free Bibles.<br>Honest answers.</div>
      </div>
      <div style="height:1.8in;"></div>`,
  },
];

// Shrink one-line headlines (.fit) until they fit the width available to them.
const FIT = () => {
  for (const el of document.querySelectorAll(".fit")) {
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth && size > 10) { size *= 0.98; el.style.fontSize = size + "px"; }
  }
};
// List any text that runs past the page edges or the bottom margin (1in).
const OVERFLOW = () => {
  const W = innerWidth, H = innerHeight, m = 96, bad = [];
  for (const el of document.querySelectorAll(".page *")) {
    if (!el.childNodes.length || ![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
    const rg = document.createRange(); rg.selectNodeContents(el);
    const r = rg.getBoundingClientRect();
    if (r.right > W - m || r.bottom > H - m || r.left < m) bad.push(el.textContent.trim().slice(0, 30));
  }
  return bad;
};

(async () => {
  const browser = await chromium.launch();
  for (const p of posters) {
    const html = base(p.w, p.h, p.bg, p.fg, p.body);
    const page = await browser.newPage({ viewport: { width: Math.round(p.w * 96), height: Math.round(p.h * 96) } });
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluate(FIT);
    const over = await page.evaluate(OVERFLOW);
    if (over.length) console.warn("  OVERFLOW in", p.file, over);
    await page.pdf({ path: path.join(OUT, p.file + ".pdf"), width: p.w + "in", height: p.h + "in", printBackground: true });
    // preview: ~1000px on the long side
    const scale = 1000 / Math.max(p.w * 96, p.h * 96);
    const prev = await browser.newPage({ viewport: { width: Math.round(p.w * 96), height: Math.round(p.h * 96) }, deviceScaleFactor: scale });
    await prev.setContent(html, { waitUntil: "load" });
    await prev.evaluate(FIT);
    await prev.screenshot({ path: path.join(PREV, p.file + ".png") });
    await page.close(); await prev.close();
    console.log("made", p.file);
  }
  await browser.close();
})();
