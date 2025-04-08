if ('serviceWorker' in navigator && 'caches' in window) {
  // 只在生产环境中注册 Service Worker
  if (window.location.hostname !== 'localhost') {
    console.log('[Service Worker] 注册启动')
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('[Service Worker] 注册成功:', registration.scope)
    }).catch(function (err) {
      console.log('[Service Worker] 注册失败:', err)
    })
  } else {
    console.log('[Service Worker] 本地开发环境，跳过注册')
  }
}