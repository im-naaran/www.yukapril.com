---
sidebar_position: 3
---

# Cline

推出了很久的插件，用户多，很有名。可以算得上是全能型 AI 编程助手<sup>[[1]](#参考)</sup>。

要注意的是，Cline 仅有 VS Code 版本（无 JetBrains 旗下的编辑器版本）。

自定义模型支持费非常广，如：OpenRouter、OpenAI、Google Gemini、Anthropic、Deepseek、Moonshot 等。以及 openAI 兼容模式，这样几乎所有的常见模型都可以接入。

除此外，还支持本地的 Ollama，以及支持 Claude Code、Qwen Code。支持力度非常优秀。

## 价格

1. 使用官方 Cline 服务：注册后送 0.5 美金额度，随用随充模式。目前可以免费使用 `x-ai/grok-code-fast-1` 模型
2. 不登录，可以使用自定义模型 

## 说明

我最近刚刚使用。使用体验非常好，因为推广原因，免费模型 `x-ai/grok-code-fast-1` 速度非常快。我也绑定了 Moonshot K2 `kimi-k2-0711-preview` 模型，结果发现速度还没有免费模型快，K2 质量感觉和免费的差不多。`kimi-k2-turbo-preview` 要贵四倍感觉不太值。

同样的项目，同样的提示词，免费版上送接收 Token 大致为 14k/1.4k 左右，K2 模型大概是 114k/1.5k，K2 上送太多了。我感觉问题出在回复质量上。

后来才发现，可以点击每一步过程，查看它的提示词，返回内容等。感觉对开发人员特别友好。

Cline 应该没有使用项目索引，采用了动态上下文收集方案，这样可能会导致 Token 稍大。

## 参考

[1]&nbsp;[Cline](https://cline.bot)

