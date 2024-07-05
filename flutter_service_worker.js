'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "741248df703cca9a5bf1ce40f04c8889",
"assets/AssetManifest.bin.json": "0a1e8ddda23a8a8dcc154239b57b6c20",
"assets/AssetManifest.json": "d4c541d25f98022e7a852492d756bf4e",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "049e87b289e822280a7deef99fd6d6d9",
"assets/lib/icons/back.png": "a45e14c8775862ace3cf61de0e82d73b",
"assets/lib/icons/delivery.png": "0381b07124ef173dfbef13410dc0df64",
"assets/lib/icons/grocery.png": "d9e01eb0fe936451f7d788aa74829c5f",
"assets/lib/icons/shop.png": "ab3bb6d7195ed9922bc0ba0f79a4c7b9",
"assets/lib/images/112468-online-shopping.json": "2f3dabe6008527dd2412434cdb4616d8",
"assets/lib/images/30826-online-shopping.json": "5f4f9e2eaf52143364966e8c7eab112c",
"assets/lib/images/37141-shopping-checlist-app.json": "4ffba1d0287b940c1df3e37a8f4a9e46",
"assets/lib/images/54350-online-shopping-delivery.json": "b805b15430aef859beab671b50ca6148",
"assets/lib/images/58915-online-shop.json": "eefe83c90ed6132ad634d42f08422b30",
"assets/lib/images/83548-online-shopping-black-friday.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/lib/images/90690-shopping.json": "402ec3380515631c80034167d991f6b9",
"assets/lib/images/aov.jpg": "faf603d967d3c141be9b97e336057210",
"assets/lib/images/atmcard.json": "94dbd0766c7749aa1fecf0c20e37fe14",
"assets/lib/images/bucket.jpg": "9433ca47542be6cc9a0f2946fefe4a3e",
"assets/lib/images/chicken.jpg": "f090d65d221ee8d5a349e1fc48b2bfc4",
"assets/lib/images/chickensalad.jpg": "50667033940ee98ce2b34ae3a390c5eb",
"assets/lib/images/chips.jpg": "5dc583c6cd9a7c5f14b2ddefe1b98a4a",
"assets/lib/images/clv.png": "560d71178c76f52ea4b0d1fc6f2c1abd",
"assets/lib/images/coleslawsalad.avif": "7784a2b0699b55b7c915748deda34735",
"assets/lib/images/cr.png": "361ef26e954215501bdb9680b67aa12e",
"assets/lib/images/customersegmentation.png": "7547db0a48f0de9e68184782f9a81914",
"assets/lib/images/customerspend.png": "0a60f396eddc09c614329a76b4d4d5ea",
"assets/lib/images/dblburger.jpg": "d22966c4da776b5c9a328f76d407a786",
"assets/lib/images/drinks.jpg": "68de98eff6432433717437444fef4727",
"assets/lib/images/greensalad.jpg": "1db15b5062fe4ab352a48a77084224e7",
"assets/lib/images/ia.jpg": "5163c4e001a555550cb942a5db4e0784",
"assets/lib/images/pleasewait.json": "3906472e2ad066d691dbbe405efdc38e",
"assets/lib/images/rp.jpg": "a37045dc987340f3a31782b6b86fff5a",
"assets/lib/images/sbc.jpg": "76b15ce9eb142031007af693fa2a38c1",
"assets/lib/images/tp.jpg": "8988bd9c6cee3c2720ad04c160563f34",
"assets/lib/images/visitors.png": "97805ea70321e4568ad2b659d59ed57a",
"assets/NOTICES": "b17c9ac21da6e1332174554e30177638",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e4534ac79674e6c5b7cea5e4340359e",
"/": "2e4534ac79674e6c5b7cea5e4340359e",
"main.dart.js": "29a63d9a0f7dc4d4325ac1a9a961aa00",
"manifest.json": "cd65f9de304f0eb616ed0d4915157109",
"version.json": "ee82ab81eddcf079a689457d25367fde"};
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
