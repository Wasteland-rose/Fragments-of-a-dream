// script.js

const CACHE_NAME = 'fragments-cache-v1'; // キャッシュ名
const urlsToCache = [
  '/',
  '/index.html',
  '/js/script.js',
  '/js/main-text-content.js',
  '/js/default.js',
  '/js/nav.js',
  '/css/default.css',
  '/css/list-main.css',
  '/css/list-main-menu.css',
  '/manifest/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

// インストール時にキャッシュ保存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト時にキャッシュ対応
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// 古いキャッシュの削除
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
