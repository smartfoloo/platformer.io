const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    fetch('your-api-endpoint-that-lists-all-files').then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch files for caching.');
      }

      return response.json();
    }).then((data) => {
      const urlsToCache = data.urls; // Assuming your API returns an array of URLs

      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      });
    }).catch((error) => {
      console.error('Cache installation failed:', error);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
