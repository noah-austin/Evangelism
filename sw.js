// Offline support: saves every file on first visit, then serves from the
// saved copy (fast + works with no signal) while checking for updates in
// the background. Bump VERSION when adding or renaming files.
const VERSION = "v11";
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
  "data/evidence.js",
  "data/openers.js",
  "data/worldviews.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
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
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
