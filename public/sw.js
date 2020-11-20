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
    "url": "webpack-runtime-edd5a947c6ddc3ad259d.js"
  },
  {
    "url": "framework-5a1b297d9adac74fe592.js"
  },
  {
    "url": "app-c9aa56fb2f90388b2ba8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "db875a35c534aa816953159ea8cfac12"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "polyfill-90341bc35b5255d1a92f.js"
  },
  {
    "url": "styles.6db156975f5679edc581.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "5bb228118c76f47f6bd4a2f730e2e10eb731d711-0efab7ef971ecd9267e2.js"
  },
  {
    "url": "component---src-pages-contact-js-d1e63522d4ae01e19cbf.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "83bcd692ac5f15a12210b09a37d4ea9a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "59d125acb122d6ed44308eae060861ed"
  },
  {
    "url": "component---src-templates-blog-post-js-ca64616158ec14750774.js"
  },
  {
    "url": "page-data/blog/another-post/page-data.json",
    "revision": "1d58a213cd9f62a7373c366a46a0b36b"
  },
  {
    "url": "page-data/blog/gatsby-fetch-me/page-data.json",
    "revision": "094307be5fdfa1f86a49f325b429ac33"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "5c8807c818266b02d7777f197f493698"
  },
  {
    "url": "component---src-pages-blog-js-d87ed7af37634cafe410.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "3c31272175a9a8b8ac059747d7225972"
  },
  {
    "url": "page-data/sq/d/3367038478.json",
    "revision": "aa74831c299ea00562b965cd8a92e084"
  },
  {
    "url": "page-data/blog/yay/page-data.json",
    "revision": "c11587cca36c8e173c1c1b42ef78aa49"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5e9e88178e80b1f8712a424c7666b0d0"
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
  if (!resources || !(await caches.match(`/app-c9aa56fb2f90388b2ba8.js`))) {
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
  self.registration.showNotification("Hello, world!")
}, 15000)

// register a custom navigation route
const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
  // ...
})
workbox.routing.registerRoute(customRoute)
