---
title: 快速入门指南
description: 5分钟快速上手 C2PA
sidebar:
  order: 1
lastUpdated: 2025-11-24
---

仅需 5 分钟即可开始使用 C2PA。本指南将引导您了解 C2PA 的基础知识和实现方法。

## 您将学到

- C2PA 是什么以及如何工作
- 如何使用 C2PA 验证内容
- 基本实现步骤

## 前提条件

- 对数字媒体有基本了解
- 熟悉命令行工具（可选）

## 步骤 1：理解 C2PA

C2PA（内容来源和真实性联盟）是一个开放技术标准，提供验证数字内容真实性和来源的方法。

### 核心概念

- **清单（Manifest）**：包含来源信息的 JSON 结构
- **断言（Assertions）**：关于内容的声明（创作者、编辑、AI 生成）
- **签名（Signature）**：真实性的加密证明

## 步骤 2：验证内容

开始使用 C2PA 最简单的方法是验证现有内容。

### 使用官方网页工具

1. 访问 [Content Credentials Verify](https://contentcredentials.org/verify)
2. 上传图片或拖放文件
3. 查看内容的来源信息

### 使用命令行

```bash
# 安装 C2PA 工具
npm install -g c2pa-node

# 验证文件
c2pa verify image.jpg
```

## 步骤 3：创建 C2PA 内容

为您自己的内容添加 C2PA 数据：

```javascript
const c2pa = require('c2pa-node');

// 创建清单
const manifest = {
  claim_generator: 'my-app/1.0',
  assertions: [
    {
      label: 'c2pa.actions',
      data: {
        actions: [{
          action: 'c2pa.created'
        }]
      }
    }
  ]
};

// 签名并嵌入
await c2pa.sign('input.jpg', 'output.jpg', manifest);
```

## 下一步

- 阅读 [常见问题](/getting-started/faq/) 了解常见问题
- 探索 [技术规范](/specifications/)
- 查看 [工具和库](/tools/official/)

## 资源

- [C2PA 官方网站](https://c2pa.org/)
- [GitHub 仓库](https://github.com/c2pa-org)
- [社区讨论](https://github.com/paulortiz199928/awesome-c2pa/discussions)
