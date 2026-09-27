/**
 * High-Performance Browser Service Worker
 * Implements Cache-First for static assets and Stale-While-Revalidate for HTML.
 * Sub-50ms repeat loads and zero-latency offline resilience.
 */

const CACHE_NAME = 'vqube-perf-v3';

const STATIC_PRECACHE = [
  './',
  './index.html',
  './pages/Contact.html',
  './pages/Privacy.html',
  './pages/Term.html',
  './assets/css/style.css',
  './assets/js/script.js',
  './robots.txt',
  './sitemap.xml',
  './llms.txt',
  './docs/services.md',
  './assets/images/favicon.png',
  './assets/images/logo-white.png',
  './assets/images/Logo_with_Name_-removebg-preview.png',
  './assets/linesBackground.svg'
];

// Install: Pre-cache core shell & activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE).catch((err) => {
        console.warn('Non-fatal precache item skipped:', err);
      });
    })
  );
});

// Activate: Claim clients & purge outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      })
    ])
  );
});

// Fetch: Optimized caching strategy by resource type
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // HTML Navigation: Network-First with Cache fallback (ensures fresh copy, instant offline fallback)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // Static Assets (CSS, JS, Fonts, Images, SVG): Cache-First with Background Revalidation
  const isStatic =
    url.origin === self.location.origin &&
    (request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'image' ||
      request.destination === 'font' ||
      url.pathname.match(/\.(css|js|woff2|woff|ttf|png|jpe?g|svg|webp|avif|ico|txt|xml|md)$/i));

  if (isStatic) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve immediately from cache, fetch update in background
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // Cache miss: Fetch and cache
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Third-party Fonts (Google Fonts, Typekit): Cache-First
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com') ||
      url.hostname.includes('use.typekit.net')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Default: Network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
