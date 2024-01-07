/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "012447e22e7d9c729a760240a1da705a"
  },
  {
    "url": "assets/css/0.styles.9f24b5cb.css",
    "revision": "480052c2c0eaf61874b71eeb45c0d6dc"
  },
  {
    "url": "assets/img/photo_2024-01-07_19-35-28.72b9ab98.jpg",
    "revision": "72b9ab982609be68c5a296e944c1a62d"
  },
  {
    "url": "assets/img/photo_2024-01-07_19-35-43.09685ae3.jpg",
    "revision": "09685ae35853776acd193327f555226b"
  },
  {
    "url": "assets/img/photo_2024-01-07_19-35-55.5d37379d.jpg",
    "revision": "5d37379deb73c198268c7ee2a279ea94"
  },
  {
    "url": "assets/img/photo_2024-01-07_19-36-04.d3cfbfd2.jpg",
    "revision": "d3cfbfd27de00e8cac543f891085ffb8"
  },
  {
    "url": "assets/img/photo_2024-01-07_19-36-15.2495c874.jpg",
    "revision": "2495c87495868ca8d49be59a18440674"
  },
  {
    "url": "assets/img/photo_2024-01-07_20-36-29.f77e4a7a.jpg",
    "revision": "f77e4a7ab2493a4216e369b9e189c74d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.958c3a5c.js",
    "revision": "54c113d8b99b7eac140772ca9742eea1"
  },
  {
    "url": "assets/js/10.532272d3.js",
    "revision": "edaba4e9f2820d432cd580b346b9ad7c"
  },
  {
    "url": "assets/js/13.0d5471a2.js",
    "revision": "49677819a9a21f537ed6d2ea553519f2"
  },
  {
    "url": "assets/js/14.85a7a730.js",
    "revision": "dff57f7ff3fd7363b798e87b7cc0b5e6"
  },
  {
    "url": "assets/js/15.6b10cac6.js",
    "revision": "c6dbc7d6c4fdd2666a992a549fba1e20"
  },
  {
    "url": "assets/js/16.daedf72e.js",
    "revision": "c5bccf955929d1f424de016eec56586e"
  },
  {
    "url": "assets/js/17.3598a4d0.js",
    "revision": "2c91e186b4a218fb3eff5f30f9989617"
  },
  {
    "url": "assets/js/18.8167cf4f.js",
    "revision": "c207a855c0fe6923d2ea79865117363f"
  },
  {
    "url": "assets/js/19.d140fc34.js",
    "revision": "4da23c5b875328d167cb65643a1119d4"
  },
  {
    "url": "assets/js/2.b391c04f.js",
    "revision": "29eff16a2fd39a54fef7653d02c6f748"
  },
  {
    "url": "assets/js/20.a9e43abe.js",
    "revision": "77bada67f858948c8ee29f5cec7a8f5d"
  },
  {
    "url": "assets/js/21.9840ee13.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.04214989.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.c163c369.js",
    "revision": "8ea14027eb67f379a7c7e6075c93a1a0"
  },
  {
    "url": "assets/js/25.acae8e0e.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.2ced7144.js",
    "revision": "9c0a5157d4cc30993acc627bcff79c74"
  },
  {
    "url": "assets/js/27.112aa879.js",
    "revision": "0145cd46fd91105456db42bb3116094c"
  },
  {
    "url": "assets/js/28.4ba7a02f.js",
    "revision": "cd4b576c56087df02464919aff213b66"
  },
  {
    "url": "assets/js/29.0b7ce706.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.b08aed10.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.bfc95514.js",
    "revision": "5e119c6994d54ec8bbeab45c02e4a9d9"
  },
  {
    "url": "assets/js/31.e58afc0f.js",
    "revision": "76e30e8e72916130658d2004bd36c90b"
  },
  {
    "url": "assets/js/32.acf70dc5.js",
    "revision": "080584398ac2e36252e8cfd5042c569a"
  },
  {
    "url": "assets/js/33.9702e094.js",
    "revision": "d283b1e028058e72acea88eaeac96bd7"
  },
  {
    "url": "assets/js/34.f09cb075.js",
    "revision": "0b21a937459388999f94474e242bb670"
  },
  {
    "url": "assets/js/35.76fd9de1.js",
    "revision": "b6d21218fb1b60cf4c792e0478d97c30"
  },
  {
    "url": "assets/js/36.58646804.js",
    "revision": "385bb39218a95d86b77abbf61626df52"
  },
  {
    "url": "assets/js/37.20ae6cb7.js",
    "revision": "92e15482228e40e590b2e160663e3325"
  },
  {
    "url": "assets/js/38.a829f2ed.js",
    "revision": "9921e7b09b90c0a5490d59c9ce7294ab"
  },
  {
    "url": "assets/js/39.5703355e.js",
    "revision": "04e6d33dcf4b359034680ddf2757d22d"
  },
  {
    "url": "assets/js/4.383684d8.js",
    "revision": "2e3c1a5b9f4b696f35e9ea9068355545"
  },
  {
    "url": "assets/js/41.7613dad4.js",
    "revision": "698b1866ebd2804bf697f2bcd676f5db"
  },
  {
    "url": "assets/js/5.c2606110.js",
    "revision": "1236aa5440693a097c846e64d1f52220"
  },
  {
    "url": "assets/js/6.8c6e1150.js",
    "revision": "3bccff957f6bfdfa108dd972245aba23"
  },
  {
    "url": "assets/js/7.a274d617.js",
    "revision": "a6f1f6b66940ff9dbe65a53d6f9c4fa6"
  },
  {
    "url": "assets/js/8.54a36a37.js",
    "revision": "c252a40a2536cf01016abb359689b6a5"
  },
  {
    "url": "assets/js/9.842a284f.js",
    "revision": "ac226a94abf853bf2cb7c7a5c6285cd3"
  },
  {
    "url": "assets/js/app.0e0c807b.js",
    "revision": "cb4c2f17692e3bbc47fc8f3a9d666055"
  },
  {
    "url": "assets/js/vendors~docsearch.69518f58.js",
    "revision": "92d41eb0d6ad320ec9969b36a4452a7b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "af494b127b6b7b62aa898c36edc7c046"
  },
  {
    "url": "design/index.html",
    "revision": "47292c87c42bb5271b9a9704c8994deb"
  },
  {
    "url": "index.html",
    "revision": "9d210aeacf98fcc5a09e5468bd703bf5"
  },
  {
    "url": "intro/index.html",
    "revision": "b52a7d1fe3c65f914481e9f58c3d0860"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "234f43b38d618299af85f7ab35e4095f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e8be23085e837c4ecbaea69e6090dcbc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ccd8a89319547ea59df7a28490d37c8e"
  },
  {
    "url": "software/index.html",
    "revision": "dcb5892bb708be40f489149ec755a4a4"
  },
  {
    "url": "test/index.html",
    "revision": "8b510062bf8e3c24ae945aae82e3821d"
  },
  {
    "url": "use cases/index.html",
    "revision": "275c90e1e23d26a349c5d7819e1ccbaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
