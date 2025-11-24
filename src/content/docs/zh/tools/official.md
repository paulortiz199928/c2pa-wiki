---
title: 官方工具和库
description: 官方 C2PA 工具和 SDK
sidebar:
  order: 1
lastUpdated: 2025-11-24
---

由 C2PA 组织和内容真实性倡议维护的官方工具和 SDK。

## SDK 和库

### Rust

**[c2pa-rs](https://github.com/contentauth/c2pa-rs)** - 参考实现
- 用于创建和验证 C2PA 清单的官方 Rust SDK
- 最完整和最新的实现
- 用作其他语言绑定的基础

```bash
cargo add c2pa
```

### JavaScript/TypeScript

**[c2pa-node-v2](https://github.com/contentauth/c2pa-node-v2)** - Node.js 绑定
- C2PA Rust SDK 的官方 Node.js 绑定
- 在 Node.js 环境中工作
- 完全支持签名和验证

```bash
npm install c2pa-node
```

**[c2pa-js](https://github.com/contentauth/c2pa-js)** - 浏览器库
- 用于在浏览器中读取 C2PA 清单的 JavaScript 库
- 客户端验证
- 轻量且快速

```bash
npm install c2pa
```

### Python

**[c2pa-python](https://github.com/contentauth/c2pa-python)** - Python 绑定
- C2PA Rust SDK 的官方 Python 绑定
- 易于与 Python 项目集成

```bash
pip install c2pa-python
```

### Java

**[c2pa-java](https://github.com/contentauth/c2pa-java)** - Java 绑定
- C2PA SDK 的 Java 绑定
- 与 Java 应用程序集成

### 其他语言

- **[c2pa-c](https://github.com/contentauth/c2pa-c)** - C 和 C++ 绑定
- **[c2pa-ios](https://github.com/contentauth/c2pa-ios)** - iOS SDK

## 命令行工具

### C2PA CLI

**[c2pa-rs/cli](https://github.com/contentauth/c2pa-rs/tree/main/cli)** - 官方命令行工具

功能：
- 创建、读取和验证 C2PA 内容
- 跨平台：Windows、macOS、Linux
- 支持图片、视频、音频

安装：
```bash
# 通过 cargo
cargo install c2pa-cli

# 通过 npm
npm install -g c2pa-cli
```

使用示例：
```bash
# 读取清单
c2pa image.jpg

# 签名文件
c2pa sign input.jpg output.jpg --manifest manifest.json

# 验证
c2pa verify image.jpg
```

## Web 工具

### Content Credentials Verify

**[contentcredentials.org/verify](https://contentcredentials.org/verify)**
- 用于验证 C2PA 内容的官方 Web 工具
- 拖放界面
- 无需安装

## 开发者资源

- [官方文档](https://opensource.contentauthenticity.org/docs)
- [入门指南](https://opensource.contentauthenticity.org/docs/getting-started)
- [API 参考](https://opensource.contentauthenticity.org/docs/api)
- [GitHub 组织](https://github.com/contentauth/)

## 下一步

- 尝试 [快速入门指南](/c2pa-wiki/getting-started/quick-start/)
- 阅读 [技术规范](/c2pa-wiki/specifications/)
- 加入 [社区](/c2pa-wiki/community/contributing/)
