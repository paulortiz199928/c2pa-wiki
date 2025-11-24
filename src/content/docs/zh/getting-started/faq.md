---
title: 常见问题
description: C2PA 常见问题解答
sidebar:
  order: 2
lastUpdated: 2025-11-24
---

查找关于 C2PA 最常见问题的答案。

## 一般问题

### 什么是 C2PA？

C2PA（内容来源和真实性联盟）是一个开放技术标准，为发布者、创作者和消费者提供追溯不同类型媒体来源的能力。

### C2PA 如何工作？

C2PA 向媒体文件添加加密签名的元数据（"清单"）。这些清单包含以下信息：
- 谁创建了内容
- 何时创建
- 使用了什么工具
- 进行了哪些编辑
- 是否涉及 AI

对内容的任何篡改都会破坏加密签名，使修改可被检测。

### C2PA 是基于区块链的吗？

不是。C2PA 使用标准 PKI（公钥基础设施），类似于 HTTPS 证书。它不需要或使用区块链技术。

## 安全与隐私

### C2PA 可以被移除吗？

是的，这是设计使然。C2PA 元数据可以从文件中剥离。但是，C2PA 的目标是在**存在时**证明真实性，而不是防止移除。

可以把它想象成水印 - 当完好无损时证明真实性，但可以被移除。

### C2PA 会追踪用户吗？

不会。C2PA 是关于内容来源的，而不是用户跟踪。该标准包含隐私保护：
- 无自动地理定位
- 选择性信息披露
- 创作者控制包含的内容

## 技术问题

### 支持哪些文件格式？

C2PA 目前支持：
- **图片**：JPEG、PNG、WebP、AVIF
- **视频**：MP4、MOV、WebM
- **音频**：MP3、WAV、AAC
- **文档**：PDF（开发中）

### C2PA 能检测 AI 生成的图片吗？

不能自动检测。C2PA 记录创作者**声明**的内容。如果 AI 工具在清单中添加"AI 生成"，那么可以。但 C2PA 本身不检测 AI - 它依赖于诚实披露。

### 哪些相机和软件支持 C2PA？

**相机**：
- 徕卡（M11-P、SL3）
- 索尼（Alpha 1、A9 III、A7S III、A7 IV）
- 尼康（Z6 III - 2025 年推出）

**软件**：
- Adobe Photoshop 和 Lightroom
- Capture One
- 开源工具（c2pa-rs、c2pa-node）

## 采用与成本

### 使用 C2PA 是免费的吗？

**标准和工具是免费的**。但是：
- **证书**：签名所需（约 50-500 美元/年）
- **实施**：开发成本各不相同
- **开源工具**：免费

### 谁在使用 C2PA？

**主要采用者**：
- Adobe、Microsoft、Google
- BBC、纽约时报、路透社
- 徕卡、尼康、索尼、佳能
- OpenAI、Meta（AI 内容标签）

## 实施

### 如何开始？

1. 阅读我们的 [快速入门指南](/c2pa-wiki/getting-started/quick-start/)
2. 尝试 [在线验证器](https://contentcredentials.org/verify)
3. 安装 [c2pa-node](https://github.com/contentauth/c2pa-node-v2) SDK
4. 获取签名证书

### 我可以在哪里获得帮助？

- [C2PA 官方论坛](https://c2pa.org/)
- [GitHub 讨论](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/c2pa)（标签：c2pa）

## 还有更多问题？

找不到答案？

- 查看 [完整文档](/c2pa-wiki/specifications/)
- 在 [GitHub 讨论](https://github.com/paulortiz199928/awesome-c2pa/discussions) 中提问
- 阅读 [官方规范](https://c2pa.org/specifications/)
