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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4aa8545725b6739d41b7.js"
  },
  {
    "url": "styles.8498c99c9017f11b44d2.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "framework-5a1b297d9adac74fe592.js"
  },
  {
    "url": "app-b5557ad3bcb583087436.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "df53b2a15f386949ade222fe1c967d22"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-47c8d8b7529f7a984452.js"
  },
  {
    "url": "polyfill-b1e8269bf7d82e5fa523.js"
  },
  {
    "url": "f852f27f345b6562f5df614888c0705dbfbf808f-c7677d6bf3de155713c1.js"
  },
  {
    "url": "5bb228118c76f47f6bd4a2f730e2e10eb731d711-0e1d8641ab295781cabb.js"
  },
  {
    "url": "component---src-pages-contact-js-6ce8efab508ae7923ae6.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "83bcd692ac5f15a12210b09a37d4ea9a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "587a9ebeac0e943e1a644c9ba7b0d813"
  },
  {
    "url": "component---src-templates-blog-post-js-16e287debd748a1ee222.js"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "b587a43928d21d6edbc3a15dd6d0392c"
  },
  {
    "url": "component---src-pages-blog-js-d18925e8057238d5b80b.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "3c31272175a9a8b8ac059747d7225972"
  },
  {
    "url": "page-data/sq/d/3367038478.json",
    "revision": "1f3cca5978d7238853ffa13f3e7e9fcb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a7018e052d1583477513ede05ee7bf75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b5557ad3bcb583087436.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
  self.registration.showNotification("Welcome to Lakers Creative")
}, 15000)
// register a custom navigation route
const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
  // ...
})
workbox.routing.registerRoute(customRoute)
