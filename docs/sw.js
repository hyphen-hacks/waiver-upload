importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
 // console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Workbox didn't load 😬`);
}
workbox.routing.registerRoute(
  /.*/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);
