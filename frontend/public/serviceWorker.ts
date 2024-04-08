// Define a cache name and assets to be cached
const CACHE_NAME = 'v1';
const urlsToCache: string[] = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  // Add more URLs and assets to cache as needed
];

// The install event - caching assets
self.addEventListener('install', (event: Event) => {
  const installEvent = event as ExtendableEvent;
  installEvent.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// The fetch event - serving files from cache or network
self.addEventListener('fetch', (event: Event) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(
    caches.match(fetchEvent.request)
      .then(response => {
        if (response) {
          return response; // Return cached response if available
        }
        return fetch(fetchEvent.request); // Fetch from network otherwise
      })
  );
});

// The activate event - clearing old caches
self.addEventListener('activate', (event: Event) => {
  const activateEvent = event as ExtendableEvent;
  activateEvent.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});
