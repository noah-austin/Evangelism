// Offline support.
// With signal: always load the latest files from the site (and save a copy).
// Without signal (or if the site takes too long): use the saved copy.
// Bump VERSION when adding or renaming files.
const VERSION = "v54";
const CACHE = "field-guide-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "css/style.css",
  "js/app.js",
  "data/verses.js",
  "data/paths.js",
  "data/talking.js",
  "data/objections.js",
  "data/skills.js",
  "data/claims.js",
  "data/evidence.js",
  "data/openers.js",
  "data/worldviews.js",
  "data/convictions.js",
  "data/quiz.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
];
const TIMEOUT_MS = 4000;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([
      fetch(req, { cache: "no-cache" }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)),
    ]);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    if (req.mode === "navigate") {
      const home = await cache.match("index.html");
      if (home) return home;
    }
    throw err;
  }
}
