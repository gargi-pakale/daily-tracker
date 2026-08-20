const CACHE = "days-v1.9.1";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first so updates land, cache fallback so it works with no signal.
//
// The fetch below has to bypass the browser's own HTTP cache to mean anything.
// GitHub Pages serves this app with Cache-Control: max-age=600, so a plain
// fetch() can be answered out of that cache without a request ever leaving the
// phone — "network first" then hands back stale HTML and a deploy looks like it
// never landed. cache:"no-cache" still uses the cache, it just revalidates with
// the server first: a 304 when nothing changed, the new file when it has.
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const req = url.origin === self.location.origin
    ? new Request(url.href, {cache:"no-cache", credentials:"same-origin"})
    : e.request;
  e.respondWith(
    fetch(req)
      .then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return r;
      })
      .catch(() => caches.match(e.request).then(m => m || caches.match("./index.html")))
  );
});
