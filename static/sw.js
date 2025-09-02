let CACHE_NAME = ''
// 使用正则表达式数组匹配需要缓存的资源路径
const CACHE_PATTERNS = [
  /www.yukapril.com\/assets\/.+/,
  /www.yukapril.com\/img\/.+/,
  /cdn.jsdelivr.net\/npm\/.+/
]

// 允许缓存的文件扩展名
const ALLOWED_EXTENSIONS = [
  'js',
  'css',
  'woff',
  'woff2',
  'ttf',
  'png',
  'jpg',
  'jpeg',
  'webp',
  'svg',
  'ico'
]

// ======= 安装阶段 =======
self.addEventListener('install', () => {
  console.log('[Service Worker] 正在安装')
  // 在安装阶段不预缓存资源，而是在请求时进行缓存
  self.skipWaiting()
})

// ======= 清理旧缓存 =======
self.addEventListener('activate', event => { })

// ======= 拦截请求 =======
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // 获取文件完整路径
  const href = url.href
  // 获取文件扩展名
  const extension = url.pathname.split('.').pop().toLowerCase()

  // 检查是否是允许的文件扩展名
  const isAllowedExtension = ALLOWED_EXTENSIONS.includes(extension)
  if (!isAllowedExtension) return

  // 检查是否匹配缓存路径模式
  const shouldCache = CACHE_PATTERNS.some(pattern => pattern.test(href))
  if (!shouldCache) return

  // 缓存优先策略
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // 如果有缓存，直接返回缓存的响应
      if (cachedResponse) {
        console.log('[Service Worker] 使用缓存:', href)
        return cachedResponse
      }

      // 如果没有缓存，发起网络请求并缓存
      return fetch(event.request).then(response => {
        // 克隆响应，因为响应流只能被读取一次
        const responseToCache = response.clone()

        if (response && response.status === 200) {
          caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] 缓存新资源:', href)
            cache.put(event.request, responseToCache)
          })
        } else if (response && response.type === 'opaque') {
          caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] 缓存跨域新资源:', href)
            cache.put(event.request, responseToCache)
          })
        }
        else {
          console.log('[Service Worker] 不缓存资源:', href, response)
        }
        return response
      })
    })
  )
})

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SW_NAME') {
    CACHE_NAME = event.data.payload
    console.log('[Service Worker] 正在激活', 'SW_NAME', CACHE_NAME)
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== CACHE_NAME) {
              console.log('[Service Worker] 删除旧缓存:', cache)
              return caches.delete(cache)
            }
          })
        )
      })
    )
  }
})

/**
 * 销毁sw功能
 */
// self.addEventListener('install', () => {
//   console.log('[Service Worker] 开始注销...')
//   self.skipWaiting()
// })

// self.addEventListener('activate', event => {
//   console.log('[Service Worker] 解除激活，注销...')
//   event.waitUntil(
//     self.registration.unregister().then(() => {
//       console.log('[Service Worker] 已注销')
//     })
//   )
// })
