const fs = require('fs')
const path = require('path')

// 获取sw.js文件路径
const swPath = path.join(__dirname, '../static/sw.js')

// 读取sw.js文件内容
let swContent = fs.readFileSync(swPath, 'utf8')

// 生成新的缓存名称 (使用时间戳)
const timestamp = new Date().getTime()
const newCacheName = `SW_${timestamp}`

// 替换旧的缓存名称
swContent = swContent.replace(/__SW_NAME__/, newCacheName)

// 写回文件
fs.writeFileSync(swPath, swContent)

console.log(`Service Worker 缓存版本已更新为: ${newCacheName}`) 