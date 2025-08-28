---
sidebar_position: 3
---

# Qwen Code

Qwen Code 是阿里巴巴千问推出的 AI 编程助手，基于 Gemini CLI，项目开源<sup>[[1]](#参考)</sup>。

Qwen Code 免费额度为‌：每天1000次请求‌，每分钟60次。

## 系统要求

- Node.js 20 或更新版本
- qwen.ai 账号（不是国内阿里云账号）

## 安装

```bash
npm install -g @qwen-code/qwen-code
# 如果安装失败，可尝试更换国内源进行安装
npm install -g @qwen-code/qwen-code --registry https://registry.npmmirror.com
```

## 使用方法

1. 使用默认浏览器，打开 [qwen.ai](https://qwen.ai) ，可以点击右上角“使用 Qwen Chat” 触发注册登录。先登录好，防止后续打开浏览器出现各意外情况。

2. 运行启动命令：

```bash
qwen
```

3. 启动 qwen code 后，会出现它的 LOGO，随后你可以按上下键选择登录鉴权方式。这里我建议选择 Qwen QAuth，这样不需要代理。随后会打开默认浏览器，此时会提示授权，直接授权即可。
4. 返回命令行工具，就可以使用了。

## 故障排除

如果出现什么意外，可以考虑移除用户目录下的 `.qwen` 目录后，再次尝试。

## 参考

[1]&nbsp;[GitHub - qwen-code](https://github.com/QwenLM/qwen-code)
