---
title: 面试的一些碎碎念
date: 2021-07-25 11:54:00 GMT+0800
tags: [ 面试 ]
---

原本计划上周末写一写，结果周末两天加班。遂请个假，周二周三休息两天，把这些文章都写出来。

本文于 2021 年 7 月 20 日书写。

<!-- truncate -->

6 月 18 号被同事一句话激怒。遂周末写简历。第二周末开始投简历。

投递公司不多，有联系的好像是 7-8 家，主要是离家近以及大厂。

遇到了很多面试官，随便聊聊面试感受吧。

有的非常和蔼，愿意和我聊一会。也有的感觉压力特别大，像是迫使她为我面试一样，闷闷不乐。

## 一面

有的是直接问答，有的愿意让你手写简单代码。大厂的话，普遍喜欢让你写一点。或者干脆就是线上写代码的面试。

内容上，可能我工作年头太多了（10 年），基本上都是问各种基础，还有前端各个专业领域的内容。比如基础架构方向、性能优化方向、基础工具建设等。

我感觉，问基础倒是无妨，我有的地方不太会，也就明说了。但是明显说了不会的，个别面试官还要周边继续问，感觉我也是要醉了。

还有一家特别有意思（远程面试）。本来上来想问我 TS 的作者是谁。结果她掉线了。其他面试官问了一些我不会的基础网络知识，最后，她又冒昧的问了 TS 的作者是谁。

我根本不知道啊，就猜 C# 的作者。（好像也是 Dephi 作者）。俨然我在参加答题节目，只不过我没有选项而已。她和我说了下大概人名，我也记不住。反正也是无关紧要的东西。

如果我是面试官，可能开场会问着玩，暖个场。她最后还要问着玩，中途也不愿意和我闲聊，感觉好尴尬啊。

我记得上一次问人名，还是 2019 年校招，一个 360 实习的同事来我司面试，我问她在 360 实习时候前端负责人是谁？（月影）。真名是？（吴亮）。

看来以后得多问人名啊，坑面试者。

> 去哪儿网来的，就问之前去世大牛叫什么？真名啥？出过啥书？
>
> 还用过哪些框架和UI库？作者谁？那公司的？
>
> Vue 的作者谁？当年那个框架的推广员和他吵过架？叫什么？
>
> ...
>
> 再写就成八卦了

言归正传。

我面试一大特色就是不准备。平时啥样面试也是啥样。

唯一看了一眼的就是，ES6 ES7 ES8 ... 都新增了些啥。看到了一个新的类型 `BigInt`，结果还没具体记住是哪个版本新增的。看这个主要是我司特别爱问。现在看来，特别 low。

一般会问问的三次握手、四次挥手、还有一些缓存之类的底层知识。剩下的也有问 CSS HTML 的，但是并不多。我的答案大部分是，我能想到的就这么多，如果真正项目要用，我会去查。

比如用左中右 PC 端布局，我会去查圣杯、双飞翼，而且我知道他们的特色，只不过我现在想不起来而已。

大公司一般都考 JS，当场写一点那种。好在真的不是太复杂。只不过我不擅长让人等着我写代码，所以当场基本上都是草草写一点而已。稍微超过 10 秒没想出来的立刻就不想写放弃了，或者还是说说想法，自己没办法短时间写出来。

我能记得住的题目，后续会列出来。主要有：

* 基础问答，我找网上的题和答案，列出来就好（本文下面）
* CSS HTML，太碎了，想不起来了，也就不列出来了
* JS 简单笔试，会分几篇文章写出来，主要是一些心得，有的题目看似简单，但是深挖还有很多细节点

## 二面

进入二面的几乎没有几家。因为大厂全挂。

二面没什么规律。有的和一面一样，继续问常规问题，只不过问题不同而已。也有的问问项目，工作经验之类的。

二面还好，没太多槽点。

## 基础问答的高频问题

* [浅析Vue.nextTick()原理 - SegmentFault 思否](https://segmentfault.com/a/1190000020499713)
* [Vue.nextTick 的原理和用途 - SegmentFault 思否](https://segmentfault.com/a/1190000012861862)
* [浏览器的渲染过程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/74792085)
* [彻底理解浏览器的缓存机制（http缓存机制） - saucxs - 博客园 (cnblogs.com)](https://www.cnblogs.com/chengxs/p/10396066.html)
* [学习Javascript闭包（Closure） - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
* [闭包的秘密 - 無標題文檔 (gracecode.com)](https://www.gracecode.com/posts/2385.html)
* [Promise 对象 - ECMAScript 6入门 (ruanyifeng.com)](https://es6.ruanyifeng.com/#docs/promise#Promise-race)
* [图解 Promise 实现原理（一）—— 基础实现 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/58428287)
* [一文读懂 HTTP/2 特性 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/26559480)
* [Vue中使用watch同时监听多个值的实现方法 - guo&qi - 博客园 (cnblogs.com)](https://www.cnblogs.com/gg-qq/p/13827462.html)
* [10 分钟理解 BFC 原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/25321647)
* [JS单线程与setTimeout执行原理 - SegmentFault 思否](https://segmentfault.com/a/1190000018666579)
* [JavaScript如何实现继承 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/261762048)

## 手写代码题

后续文章已全部放出。

* [面试题（compose 函数组合）](/blog/2021/07/25/interview-js1)
* [面试题（判断对象类型、数组拍平、字符重复）](/blog/2021/07/25/interview-js2)
* [面试题（宏任务、微任务）](/blog/2021/07/25/interview-js3)

还有一些题，我大概有印象，但是题目忘记记录了。

比如考 `this` 指针的，看看是打印啥结果那种题。

## 最后

好久没有面试了，感受下氛围。绝大部分面试官都很 nice。通过面试能接触到大厂的一些技术方向和思路方法，感觉收获颇多。

比如一开始提到的面试官压力大，感觉迫使她给我面试。再考我宏任务微任务时候，我作答不是特别准，也稍微给我讲了一下。某大厂面试官就不会指点我一下，直接忽悠过去了。

还有那个问我 TS 作者的面试官，虽然感觉问的有点过分、略带嘲讽，但是态度还是挺和蔼的。

有的面试官，直接给我一面过了，让我二面。

有的面试官，给我发短信，让我多准备，二面问的更深。二面，面试官是个框架贡献者，还给予我很多建议。

有的面试官，周五晚上不能早走一会，面试完毕还给予评价和建议。最后还主动愿意交换微信。

能遇到这么多好面试官，是福分。

## 最后的最后

**特意查了下，typescript 作者，老子我竟然蒙对了。**

**我后悔面试时候没录音。否则我肯定要放出来，简直是高光时刻。这种都没难倒我！**

当时的内容大概是：

Q：一开始信号不好没问哈，现在还想追问下， TS 的作者是谁啊？

A：额。TS 刚刚我也提到了，实际项目用得非常少，也没深入接触过。但是我猜一下哈。我感觉是 C sharp 的作者，好像也是 Delphi 作者（小声），我没有了解过这个，我就这么猜吧。就是 C sharp 作者吧。

Q：没关系啊。巴拉巴拉，是个 C++ 作者，巴拉巴拉...

> TypeScript的作者是安德斯·海尔斯伯格，C#的首席架构师。
>
> 来源：[typescript 百度百科](https://baike.baidu.com/item/typescript/4314718)

> C#是微软公司在2000年6月发布的一种新的编程语言，主要由安德斯·海尔斯伯格（Anders Hejlsberg）主持开发，它是第一个面向组件的编程语言，其源码会编译成msil再运行。
>
> 来源：[C# 百度百科](https://baike.baidu.com/item/c%23)

说是蒙，其实也是听过这位大神的。因为我当年就是写 C# 的啊。当年听说他做了 Delphi 后，跳槽到微软，做的 C#。为此我曾经还体验过 Delphi。后来 TypeScript 出来好像听说也是他搞出来的，反正这个作者开发了好几个语言。很早的阶段我也用过
TS，只不过那时候自己技术太菜，非常不习惯而已。
