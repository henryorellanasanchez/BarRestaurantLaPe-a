'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "856ae304222c9dcd0fc7d4302944487d",
".git/config": "4639c5c317876c6e1c86ba58762b9319",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b16608b70315ef140fb236d90b90d13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66a0186e249f3f5a21d4306433ce4337",
".git/logs/refs/heads/main": "9cec4c260321dfe454fdefa239948630",
".git/logs/refs/remotes/origin/main": "5426cbe944d651aba0ecbb227f460430",
".git/objects/07/0cac4793c528809bbdee55ff784c569eb490a8": "75d42cbecb7997945c9b34925259f372",
".git/objects/0c/9aade617a3081ced13ea2e7b5f1b01218af662": "579d03f6026ca998148e8aa2a5550b71",
".git/objects/0f/8c0dae74a150f377b5163ec81c28e865ba34ef": "3c7e84e7ebd41d6e32d0e5649be1b1bd",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/014d2d05a799406b1830f412ec485a0dfc6deb": "9004a7d795b400e0631281efe365b61c",
".git/objects/1f/bb1f1adfbbced9b9422b6ea69a53641c2558ed": "693ad3048acf59061d68681b218c6456",
".git/objects/20/5dee2b107c669f5b96c8f1a52a37facba31b55": "173aeae2ba1340d0f042316fd644667e",
".git/objects/26/c480ff420588992cc8d93cfe64f866382edf18": "279f52df39862236823aee9e02e33fb5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7e0915ffc8c1ec4a5fb634c892634080f01e44": "218be2de53cd0b48499f8b8bce48d228",
".git/objects/4a/2d3a1671588d8c0b639238a82e587cd2854fbe": "56caf7efe98706a962a4bfa2100e32aa",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/23e068688dda7e605078f0a2d411af09a8590b": "4c639d47e72ea7583765f481df793222",
".git/objects/5c/f797de50451b5071d1dd8e4cd8333251eff199": "127fc3c1018ea68da305945667010817",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/85/8b0fcdb9a53b8ba21df1ebe9bdd929103f1fea": "da0e8ba94141e51bb4596dea7dcb4dec",
".git/objects/89/2b83cc5e50d10fad7adadfaecfc798b8b0f6ad": "f83ee1ad4cce7687192669e76cf4cec8",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/96/fd17d452f947baf93a0462ed4fb5928b8fb018": "2fcab617f0945ac81a31076369b7d0dd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/f8b62f2091b9e0a03065c2d5ab9aae6819e074": "5442340ad5951900fa50f10190034e84",
".git/objects/a5/64218fb1416f55935d48cfd870baced3447706": "8a09a85a00cdbd06cff0dc4340b1f5cf",
".git/objects/b2/00d8c5157e74c816c1cb25c96f7b8e1684d7c1": "95b42760521a7596929bedbb3d64822a",
".git/objects/b8/f7403db7a31af5aa5b6a972a1f531cc47274a6": "87516c384e93bf003ca622a2c0d7050e",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/71fe4b2c81a6306153abdff0da1745c73e328f": "ef6671b85ff87f39704bf64d8a30d523",
".git/objects/c6/b9e5cd5a9c407899cb92005799c2e0c6453ac2": "050484edaa6cd4c763c1ab02a8a44984",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d93aec2f4bed4fbef025a2839223a649daf67a": "6e8fe76e6879ee995fc8077c8b3e39a5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/13f187372445c12168bbee25e09885d860685b": "eb1753c32b7ccb6ada8f11390491736b",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ee/95d9efa9e3dc7fbceb7ca3a5f2feeb795b70cb": "58c4cda908dc84cfaf69ceedba5ad0b3",
".git/objects/f0/6653b9e0c5f07a4529be08795cbee575563fcb": "a70f82c768514439f254a109103e519e",
".git/objects/f0/acd76ad54048f8d917a7612785a17fa85f97d0": "8792d6b991392e1f7039929fb17018b0",
".git/objects/f1/77c88c0c390d08247565f21cf68b617ca6bd5b": "a94fc0adcf8f115dbe7cc3a667428252",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/c888cd983363e895cb8457db7a2d29767c8941": "85cd86273fe180a6eb7fbb4299e90968",
".git/refs/heads/main": "20e1295ffe9b2b81d25e2605e3f7373a",
".git/refs/remotes/origin/main": "20e1295ffe9b2b81d25e2605e3f7373a",
"assets/AssetManifest.bin": "55db29e68d007d26aca9e04cf52dbec1",
"assets/AssetManifest.bin.json": "f59049831e40e7d74e12cc6b65326783",
"assets/AssetManifest.json": "3101866fdd9fae5cc013bf4ab4c9390c",
"assets/assets/database/data.db": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/logo_la_pena.jpg": "605e5816f11d26636d30a204b4439795",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6abf87334d4367fad2fd621443cef19f",
"assets/NOTICES": "6a027fad3647da9467bf4e2dfb962416",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "605e5816f11d26636d30a204b4439795",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f69c4fd0398e808bca6662bcf791b40c",
"git.txt": "8d3b3d826305d3e70b391aa5b1785360",
"google2e5ea6bddf9d9f3e.html": "f0829ee2ca19d80f528d97c05c29d7b2",
"icons/Icon-192.png": "edbf0408d73a24fc1a12910108d070b3",
"icons/Icon-512.png": "0346c9957fdb34f87942c2578167d6f1",
"icons/Icon-maskable-192.png": "edbf0408d73a24fc1a12910108d070b3",
"icons/Icon-maskable-512.png": "0346c9957fdb34f87942c2578167d6f1",
"index.html": "1ba9671c7837b879b1f1850ecd23c4a5",
"/": "1ba9671c7837b879b1f1850ecd23c4a5",
"main.dart.js": "b866b74131072e9472a478cf7dff1646",
"manifest.json": "d17c1fb3cc674eb2a957d0fd551a0f2c",
"robot.txt": "50dbe236a006bef9cc62786642feae4e",
"sitemap.xml": "a24e165e017645e0d1a2077abecd650f",
"sqflite_sw.js": "114a13c6f85d9bd43f24e2189fb0e79a",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "6fccb1cf80b3c0eab84ed3cac4250974"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
