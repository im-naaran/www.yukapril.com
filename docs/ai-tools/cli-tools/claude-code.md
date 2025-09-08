---
sidebar_position: 1
---

# Claude Code

Claude Code 是 Anthropic 推出的 AI 编程助手，通过命令行界面为开发者提供智能编程支持<sup>[[1]](#参考)</sup>。

没有免费额度，官方费用非常高，20 美金每月，只能使用 Claude Sonnet 4。100 美金版本比较主流，可以使用Claude Sonnet 4 / Claude Opus 4.1。据说通过代理访问官方也容易被封号。

有第三方代理中转平台，大概 299 人民币起步，计费方式大致为：每天有固定上限点数，每小时自动回复点数。

还有兼容 Claude Code （CC）的正规平台，如 Moonshot<sup>[[2]](#参考)</sup>、智普<sup>[[3]](#参考)</sup>。

以及使用 Claude Code Router<sup>[[4]](#参考)</sup> （CCR）进行中转，这样可以兼容大部分模型。

## 系统要求

- Node.js 18 或更新版本
- 模型平台，以下任选一即可
  - Anthropic 官方付费账号 + 代理工具
  - 第三方中转平台
  - 兼容 CC 的平台账号（ Moonshot 需要充值50元以上，确保有足够的线程数）
  - 使用 Claude Code Router，任选常见一个平台的 API 账号

## 安装

> 如果是第三方中转平台，以平台为准，可能会安装定制版 npm 包。请参考第三方中转平台教程。

如果是官方、正规代理第三方中转平台、还有兼容 CC 的平台、以及 CCR 方案，可参考本方案进行安装。

哪种方案，都是安装标准的 CC 工具：

```bash
npm install -g @anthropic-ai/claude-code
# 如果安装失败，可尝试更换国内源进行安装
npm install -g @anthropic-ai/claude-code --registry https://registry.npmmirror.com
```

## 环境变量配置方法

不同系统配置方法不同，大致如下：

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

后续所有配置变量，以 MacOS Linux 为准，需自行调整为合适的配置方法。

## 官方使用方法

1. 如果使用官方方案，需要使用命令行工具，访问到项目目录，之后配置代理（根据你的代理工具IP和端口进行调整）：

```bash
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
```

2. 运行启动命令：

```bash
claude
```

3. 启动 claude 后，会出现它的 LOGO，随后你可以按上下键选择登录鉴权方式。选择网页账号鉴权，随后会打开默认浏览器，直接授权即可。
4. 返回命令行工具，就可以使用了。

## 对接正规代理第三方中转平台、还有兼容 CC 的平台

1. 如果是兼容 CC 的方案，可直接使用下面的配置。注意替换自己的 ANTHROPIC_AUTH_TOKEN。如果是第三方中转平台方案，参考平台文档，配置基本和下面差不多。

```bash
# Moonshot 配置
export ANTHROPIC_BASE_URL="https://api.moonshot.cn/anthropic"
export ANTHROPIC_AUTH_TOKEN="sk-********"
export ANTHROPIC_MODEL="kimi-k2-0905-preview"
export ANTHROPIC_SMALL_FAST_MODEL="kimi-k2-0905-preview"

# 智普配置
export ANTHROPIC_BASE_URL="https://open.bigmodel.cn/api/anthropic"
export ANTHROPIC_AUTH_TOKEN="sk-********"
export ANTHROPIC_MODEL="glm-4.5"
export ANTHROPIC_SMALL_FAST_MODEL="glm-4.5"
```

2. 运行启动命令：

```bash
claude
```

3. 应该会自动完成鉴权，不需要做任何配置等处理，即可使用。

## 对接 Claude Code Router 使用方法

1. 安装 Claude Code Router

```bash
npm install -g @musistudio/claude-code-router
# 如果安装失败，可尝试更换国内源进行安装
npm install -g @musistudio/claude-code-router --registry https://registry.npmmirror.com
```

2. 运行配置 CCR 命令，可使用 UI 模式进行配置：

```bash
ccr ui
```

在浏览器中，添加你的模型供应商，如果模型不在模版中，任选一个，然后修改相应的参数，注意保存模型。

随后在右侧配置中，配置新增的供应商，确保最基础的 `默认` `后台` `思考` 等路由都配置完成。

当然，也可以在后续的 `ccr code` 进程中，打开配置页面进行配置（要提前复制本地配置地址）。

3. 检查是否存在 `~/.claude/config.json` 配置文件，如果你使用过 claude（不论是官方方案还是兼容 CC 方案），会出现此配置。请删除此文件。否则 CCR 配置不生效。

4. 运行启动命令：

```bash
ccr code
## 注意这里不是 ccr claude
```

5. 应该会自动完成鉴权，不需要做任何配置等处理，即可使用。

## 故障排除

如果出现什么意外，可以考虑移除用户目录下的 `.claude` 目录后，再次尝试。

## 参考

[1]&nbsp;[Claude Code](https://www.anthropic.com/claude-code)

[2]&nbsp;[Moonshot - 在-claude-code-中使用-kimi-k2-模型](https://platform.moonshot.cn/docs/guide/agent-support#在-claude-code-中使用-kimi-k2-模型)

[3]&nbsp;[智普 - 接入 Claude Code](https://docs.bigmodel.cn/cn/guide/develop/claude)

[4]&nbsp;[GitHub - claude-code-router](https://github.com/musistudio/claude-code-router)
