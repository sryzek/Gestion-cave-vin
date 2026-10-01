const CACHE_NAME = 'cave-a-vin-v3'; // On passe en v3 ici
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
