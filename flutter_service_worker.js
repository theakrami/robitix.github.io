'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "3a9581db9e38439bccd5b5533bf0ed63",
"assets/AssetManifest.smcbin": "7008a0abdd58af9140381e697d6a8cb6",
"assets/assets/backgrounds/banner.jpg": "1196cca5ab1a7d3948d5e0bdb2f74824",
"assets/assets/backgrounds/bbb.png": "c046e2c448aae9024894bfa2ec64f8df",
"assets/assets/backgrounds/bbg.png": "3353f86339e8874de6ac7d5fd0f2da16",
"assets/assets/backgrounds/bby.png": "cc80274df66479636c1364a197096e45",
"assets/assets/backgrounds/Main.png": "ace351f72abb593d2b64db8076add2b6",
"assets/assets/backgrounds/neon-login.png": "1bc533dbac56a9d7b70bdd7e7dfbf96a",
"assets/assets/backgrounds/splash.png": "ef4b781a2fe78fc16e515ac80a184608",
"assets/assets/font/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/icons/Authentication-icon.png": "38ada35111e674d3269c640312709839",
"assets/assets/icons/avatar.png": "74a427de3f273276b3e8bfcd948263de",
"assets/assets/icons/bronz-level-icon.png": "387c9b7659a6831f74a8543e3db98daf",
"assets/assets/icons/btn.png": "ec750d5f02e8a74a21d72063bd675994",
"assets/assets/icons/cancel.png": "87ad749f1907db146db53a2096843281",
"assets/assets/icons/createaccount-icon.png": "8bba647c9ef60c644f2f6342615c4cb5",
"assets/assets/icons/download-icon.png": "88c331e8ec3a80923d682de82965c05e",
"assets/assets/icons/error.png": "d3ee3f8ee14f852f29f2a494d1fb19c0",
"assets/assets/icons/gem-level-icon.png": "eac05a51b1a9ea617e851145a70d201b",
"assets/assets/icons/gold-level-icon.png": "d392353e72256ca0a114f69d0ad0839c",
"assets/assets/icons/Group.png": "5c7285bd81965285940e81301df254a6",
"assets/assets/icons/history-icon-selected.png": "429829e1b1a64f784d2dd382ef425c80",
"assets/assets/icons/history-icon.png": "22f507ac7847e353b4d8059f37aeef17",
"assets/assets/icons/home-icon-selected.png": "d7a43ecd91540c18a7f4cec8138d4392",
"assets/assets/icons/home-icon.png": "bad56f4eb8117a7ee76201859975b67b",
"assets/assets/icons/iran.png": "7e05cb8d0a896b0a735c29414e0d0383",
"assets/assets/icons/kossher.jpg": "29772d234f65fe14586753447f07d048",
"assets/assets/icons/kossher2.png": "04381ff6c2ad393920918082be77135a",
"assets/assets/icons/logo.png": "1df799e9b6e5f4d98bf02b7c5c663e2f",
"assets/assets/icons/medal.png": "3368d67d71484faca214a7736be5f2f5",
"assets/assets/icons/new-logo.png": "a89c8cb42bb45c46fbb0d9a64d327280",
"assets/assets/icons/new-new-logo.png": "a1bd72cc93f948852a3f33097201d945",
"assets/assets/icons/news-icon.png": "18918cdb3b8e746eaf43da3afd7ab699",
"assets/assets/icons/notif-icon.png": "a6e214d8d336542d40bd0f4ccf283bf0",
"assets/assets/icons/pay-icon.png": "3e1652885e6327b9e40dcb7595bb6af0",
"assets/assets/icons/plus-icon.png": "44a07c24fb8e83ad29270f3562cdf034",
"assets/assets/icons/rial.png": "1e8b361f2b45a609dde295129aa35ade",
"assets/assets/icons/setting-icon.png": "70362ad12cb151bb74f2601ea6a0ea69",
"assets/assets/icons/silver-level-icon.png": "b1799bf69bb0e78b7918a53223119b1a",
"assets/assets/icons/success.png": "4ad99815e0602b0f790f8106ee45ccf0",
"assets/assets/icons/support.png": "af1afe21395e55f1007937ba172f1042",
"assets/assets/icons/tether-png.png": "46ada0b2fbcc77db8d874c8a11c5aa4d",
"assets/assets/icons/tether.png": "85bd92de8c7d882b818156f4a8c5d6ca",
"assets/assets/icons/time-out-icon.png": "88630c132fb847bd6d154fba146d50ac",
"assets/assets/icons/wallet-dialog-icon.png": "ae1efe92f813a6166156730f2b68bee2",
"assets/assets/icons/wallet-icon-selected.png": "2190a96ab43cca6f7023306072091012",
"assets/assets/icons/wallet-icon.png": "578fdd51d8d4221ce93a8d8c2b096120",
"assets/assets/icons/zarinpal-icon.png": "3702d5f9591b4223ac78cd282ab78069",
"assets/FontManifest.json": "c7b7344246c73aea0c5323d5d46a738d",
"assets/fonts/MaterialIcons-Regular.otf": "6b6111639d1f48b9bcdfa33a7ec15e5d",
"assets/NOTICES": "f3e5b7e082d266ea19df1b09f5d44a46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e513a471302aa101e744086073dd9a9d",
"/": "e513a471302aa101e744086073dd9a9d",
"main.dart.js": "d79799477853725316961d0367cdd35a",
"manifest.json": "50583605b980fdb61ee057a8163612aa",
"splash/img/light-background.png": "ef4b781a2fe78fc16e515ac80a184608",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "7cc34bfdec39784cfa4e4903870ada01",
"version.json": "868434821dcb782cab5af1e02e773d81"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
