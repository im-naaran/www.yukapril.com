---
sidebar_position: 2
---

# Gemini CLI

Gemini CLI 是 Google 推出的 AI 编程助手，项目开源<sup>[[1]](#参考)</sup>。

Gemini CLI 免费额度为‌：每天1000次请求‌，每分钟60次。

## 系统要求

- Node.js 20 或更新版本
- 代理工具
- Google 账号或 Gemini API Key（推荐 Google 账号，配置比较简单）

## 安装

```bash
npm install -g @google/gemini-cli
# 如果安装失败，可尝试更换国内源进行安装
npm install -g @google/gemini-cli --registry https://registry.npmmirror.com
```

## 使用方法

1. 使用默认浏览器，打开 Google，并完成登录。先登录好，防止后续打开浏览器出现各种意外情况。

2. 使用命令行工具，访问到项目目录，之后配置代理（根据你的代理工具IP和端口进行调整）：

```bash
# PowerShell
$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"

# cmd
set http_proxy="http://127.0.0.1:7890"
set https_proxy="http://127.0.0.1:7890"

# MacOS Linux
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
```

3. 运行启动命令：

```bash
gemini
```

4. 启动 gemini-cli 后，会出现它的 LOGO，随后你可以按上下键选择登录鉴权方式。这里我建议选择① Google 账号方式，随后会打开默认浏览器，此时会提示授权，直接授权即可。
5. 返回命令行工具，就可以使用了。

## 故障排除

如果出现什么意外，可以考虑移除用户目录下的 `.gemini` 目录后，再次尝试。

## 参考

[1]&nbsp;[GitHub - gemini-cli](https://github.com/google-gemini/gemini-cli)
