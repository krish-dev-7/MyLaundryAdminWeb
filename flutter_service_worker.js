'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5283f514f51511ca3e73f76ab7e8ef96",
".git/config": "ccd4a91f0ae52034911ce39844492f8c",
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
".git/index": "b0d8098e737f2f8b7b2db8c60716f197",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a4556b40593958dfa43c3f900f91441",
".git/logs/refs/heads/main": "285f121b57e65290a9322d01052e1521",
".git/logs/refs/remotes/origin/main": "2baf940862ff7b4fb09f70c3245d50a5",
".git/objects/02/01fcc4024acd28a9b2a1588d834ffda5dd80fb": "9b8a3c8799e7b0b1194d162cc6b252a1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/8a804ebdc02e6726e32327268b48b904d3da0b": "7975230705999969c5ec10b00f593c30",
".git/objects/07/7469c5f4941227a3a7078fb69085e7d86ef049": "111774ff334afdf4eb7c9adef1c2c2b8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/09/7db38d4a3109971762a8c3e65d28a01bf7b6cb": "9b59691b51740aa5a950aec9ecd553e3",
".git/objects/10/80e15cb90eddc1ba3b10a9f3610f9ec00eb9df": "bacf03c086d02fda5210bd8e9fb7e208",
".git/objects/16/6b932445a1bfaba82bb5d193214dab2f99513f": "beecd3cced5caef8792cb58fb8925eab",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/693e5a87fdfb781aaafe7f2481cbafac34f94f": "1d43fd60b60071e9ee151dd972b99fa3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/20653faa248bef9e72cb76300e049f251366ba": "135c45fd4d8a04cf3c0550c2ad101162",
".git/objects/2b/d9541ae56676beb9a47ec6a5cf68c541c6e6f9": "12af40f27f4fe2fef0f8da2459b34c49",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/4a45c28fdb2a55d8cfe4290766cfece0b0374a": "28ecc844e7573eb7e7aff6cba1f16ed7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/4251b88d19c02ded5807a2f96af114fa0c363a": "b1a67dbbcfde7f734ca39feb99ee1655",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/7093d89b50bae8a37512fd70565698675c8eff": "f38d03f191b3c0e4642790dc5f6c16ac",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/86890d7096a4b7fdfd744209e2853c589cf47a": "7ce9c795e3a8cef45018468b96c5ea80",
".git/objects/5d/fde104964556541d075469dcf73c500816ed43": "c971eafb1505273decd9cbeff9bd40f0",
".git/objects/62/06ef26b74f7f22b54d2b56f12ab7e4927e1d8e": "dd7a9ed0fcdcd9c34dc14a42c9f165ec",
".git/objects/63/34915e2218c087087dfa4b505a29f078556cd0": "5ba5bd0614bd436abd87f1cd46859a46",
".git/objects/63/4d73235e57749a921c5a63d25797d26c5649d6": "4340c69ee2086c4b003ff99feae0a404",
".git/objects/64/bba5588a100374a9bebd761a65d53795602792": "01cff94ad97905f5502cb3f316442e8c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9cefa3700c3d59c84592c02edfbbfff88f82fc": "1071ae474cebaecf58e60977140f6145",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/525a3e68882c8075171cc8c33025885659a8c7": "d47b218d4bfd5c4532291f269eaf305d",
".git/objects/78/29687f1bb5548b0b7797b2a82ec0a11256cea0": "c98a472c530403214add31ac27f650d4",
".git/objects/7d/5e7b02ea315c840e319d337707800522997428": "e276213ed7684bf681fe9ece9170b3eb",
".git/objects/7d/702a55a401819f3fc3f552d1cd64338e386b26": "0edefa746f99cfbd030f98045c0cf002",
".git/objects/7f/90e4300b0bf2041296994bcbc373c512511e83": "0b433b649e7d5a2eb3a5b1c1b3cb3b40",
".git/objects/80/fa6722cccab48ac5074b9e2318343093435ebd": "e2ba572ac982fdd9ad92e7ff6844e822",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f8ea2c9eca919dc0b9acf677350007173a6ebf": "4e0d41d89e96c89abbd1e7f7fd4171ce",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/ae64c4a8381c3709a39f635ebe794d1864bee3": "cc7960fd5b87f847e04bdb662c48ab5c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c8520a0e09dbcb1b8ae9a4fe8bfc8e6e750a07": "d628d6a968fe24f9c63cf3dafa50949e",
".git/objects/9f/c1afb8ef328c6dca4555e0da41d65b364c5a6c": "ac78d808e2ca1a3489dceda655b3de4e",
".git/objects/a9/b7e2955839ee5221a2e56a23240db64761ebb3": "924898891db670b16c929b29fa467451",
".git/objects/ad/620bb6b7804acfd03d03bb0b55e10b5bc0ea3d": "2d16336e5b17462365d04c3bdc70f9f4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/3535e641d2128ba75f2184b5223417e22c0ed3": "24726b56041286f0be568061fba5b16a",
".git/objects/c3/86d50eec098a6037bdf25d225aa178631e3099": "bbc1c6c920c4fd0f09484184fe463982",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/3e79658508d932d1ea0a0bef1643cb2b787a84": "e7d163d81077a0f1c6db0c42eafc1e70",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/442808f79e7c7c9e6de3cb4a3125bf947045e3": "e662f15c2bad3e172c0c0fde9cfdc3b4",
".git/objects/e6/78dc1a08deb2b9bd30f16a55ce8f0c1589a1a0": "e23c6453295a91bb0512929ba0b8a49d",
".git/objects/e8/6b7fbd49744bef0de20801fd14959522956404": "7274b705e188627073cf0b05d05e1bda",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e499381099d8377260e3ca6d1e4e85c41b802b": "5b03c4a2564c4acaf4dc2646ed9c4441",
".git/refs/heads/main": "b6dbca35a01aae028241af298fcb70b6",
".git/refs/remotes/origin/main": "b6dbca35a01aae028241af298fcb70b6",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "193ebe7056e6910bb75fb271373e0bd1",
"assets/NOTICES": "f6ee6cbe54328fe26017df8fdb5b737f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"conf/app.conf": "27b9f8f06e2c2ba98a11a9a2b7d808b2",
"conf/nginx.conf": "6fd1f0c6d710b273aab3c81e895158ff",
"Dockerfile": "155c44087e9124b2b719d66f53494780",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7a265038bc6dc436e79bdd99635f12b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3022ce2cf5f8d238facbfc100e7fef8d",
"/": "3022ce2cf5f8d238facbfc100e7fef8d",
"main.dart.js": "7ce91ef43b3a84bfd266a4da1ca428ba",
"manifest.json": "dbb5c0f63418e3dcf3eb74c91de24971",
"version.json": "ddcb702dfaa4c8512f5455da4a47ce30"};
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
