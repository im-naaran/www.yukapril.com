---
sidebar_position: 3
---

# Cline、Roo Code、Kilo Code

这三家比较相似，尤其是后两家。查询才得知，他们都源自 Cline<sup>[[1]](#参考)</sup>。

Roo Code 和 Kilo Code 功能体验几乎一样，没有什么差别<sup>[[2]](#参考)</sup><sup>[[3]](#参考)</sup>。

Cline 在配置功能精细度上，稍微薄弱一些。

而且三家都是开源的，功能、体验也非常相似<sup>[[4]](#参考)</sup><sup>[[5]](#参考)</sup><sup>[[6]](#参考)</sup>。

以下来自 ChatGPT 对三家渊源的说明：

> 插件背景与关系
> 
> Cline 是最早的开源 VS Code AI 插件之一，具备“像真正代理人一样理解项目、执行多步任务”的能力（例如：操作 CLI、编辑文件、运行命令、打开浏览器等）。
> 
> Roo Code 最初名为 Roo Cline，后来独立更名。它是在 Cline 的基础上拓展而来，比如加入“自定义多种模式”（如 Code、Architect、Ask、Debug 等），能够对不同任务或角色进行定制。
> 
> Kilo Code 则是在 Roo Code 的基础上再次演进而来。团队说明它“既整合了 Roo Code 和 Cline 的特性，又加入了自己新的功能”。
> 
> 因此，三者之间的关系是：Cline → Roo Code → Kilo Code，依次为一脉相承，逐渐融合并增强功能。

要注意的是，他们都仅有 VS Code 版本（无 JetBrains 旗下的编辑器版本）。

他们自定义模型支持费非常广，如：OpenRouter、OpenAI、Google Gemini、Anthropic、Deepseek、Moonshot 等。以及 openAI 兼容模式，这样几乎所有的常见模型都可以接入。

除此外，还支持本地的 Ollama，以及支持 Claude Code、Qwen Code。支持力度非常优秀。

## 价格

1. 使用官方 Cline 转发服务：注册后送 0.5 美金额度，随用随充模式。目前可以免费使用 `x-ai/grok-code-fast-1` 模型
2. 使用官方 Kilo Code 转发服务：绑定并验证信用卡送 5 美金，首次充值额外送 20 美金。随用随充模式
3. 使用官方转发服务，支持全球绝大部分模型，且都不抽成
4. 不登录，可以使用自定义模型 
5. Roo Code 不提供转发服务，即要求 “Bring Your Own Key”（BYOK，自带 API Key）

## 说明

这三者使用体验差别不大。区别是 Cline 配置比较少，尤其是我配置了多个 DeepSeek Moonshot 等自定义模型，他只能按模型区分，不可以自定义分组。Roo Code 和 Kilo Code都支持。我是为了测试模型比较多，如果正常集中在一两个模型的话，基本上可以忽略不计。

Cline 自动批准相对薄弱一些，只能默认批准一些操作，而 Roo Code、Kilo Code 可以精细化到那些命令行自动执行，还是比较方便。但是我实际使用 Kilo Code 配置 `ls` `grep` 自动批准后，后续依然让我手动处理，不知道是哪里有问题。

Cline 和 Kilo Code 可以配置全局、项目规则 Rules，Roo Code 不支持配置规则。不过 Roo Code 和 Kilo Code 可以通过配置角色模式进行模拟。当然三者都可以通过配置 `新任务-提示词` 来解决。

唯独一点功能区别，我认为是项目代码索引。Cline 完全不支持，Roo Code 和 Kilo Code 需要单独配置 `嵌入式模型`，如 OpenAI 兼容模型，此外还必须配置 Qdrant，可以理解为本地数据库（向量搜索引擎）。

总之三者主要是体验上存在差异，没有什么功能区别。

我也是最近刚刚使用，一开始使用 Cline，使用体验非常好，因为推广原因，免费模型 `x-ai/grok-code-fast-1` 速度那是相当快。我也绑定了 Moonshot K2 `kimi-k2-0711-preview` 模型，结果发现速度还没有免费模型快，好在 K2 质量感觉稍微好一点。`kimi-k2-turbo-preview` 要贵四倍感觉不太值。

在了解到 Roo Code 和 Kilo Code 后，现在逐步转型使用 Kilo Code，主要是他官方提供转发服务，可以体验很多好模型。此外绑卡免费领取 5 美金，后续充值还有赠送，也算是一点点诱惑。

不过要注意的是，同样的项目，同样的提示词，我在 Cline 使用时候发现，免费版上送接收 Token 大致为 14k/1.4k 左右，K2 模型大概是 114k/1.5k，K2 上送太多了。我感觉问题出在回复质量上，K2 总是要求上送全文。

三款插件都可以点击每一步过程，查看它的提示词，返回内容等。感觉对开发人员特别友好。

## 参考

[1]&nbsp;[Cline](https://cline.bot)

[2]&nbsp;[Roo Code](https://roocode.com)

[3]&nbsp;[Kilo Code](https://kilocode.ai)

[4]&nbsp;[GitHub Cline](https://github.com/cline/cline)

[5]&nbsp;[GitHub Roo-Code](https://github.com/RooCodeInc/Roo-Code)

[6]&nbsp;[GitHub kilocode](https://github.com/Kilo-Org/kilocode)
