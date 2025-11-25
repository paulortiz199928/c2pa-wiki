# 同步方案总结

## 📌 方案概述

已为 awesome-c2pa → c2pa-wiki 设计并实现了完整的内容同步解决方案。

## 🎯 核心方案：GitHub Actions 自动同步（推荐）

### 工作原理

```
┌─────────────────┐
│ awesome-c2pa    │  内容源仓库
│                 │  • 文档 (docs/)
│ 推送更新         │  • PDF (specifications/)
└────────┬────────┘  • README
         │
         ↓ 触发
┌─────────────────┐
│ GitHub Actions  │  自动化工作流
│                 │  • 检测文件变更
│ 同步执行         │  • 复制文件
└────────┬────────┘  • 转换格式
         │
         ↓ 创建
┌─────────────────┐
│ Pull Request    │  代码审核
│                 │  • 自动创建 PR
│ 审核合并         │  • 可选自动合并
└────────┬────────┘  • 保留历史记录
         │
         ↓ 触发
┌─────────────────┐
│ GitHub Pages    │  自动部署
│                 │  • 构建网站
│ c2pa.wiki       │  • 发布上线
└─────────────────┘
```

### 优势

✅ **全自动化**：推送即同步，无需手动干预
✅ **实时更新**：内容变更后立即反映到网站
✅ **可追溯**：每次同步都有 PR 记录和 commit 历史
✅ **可审核**：合并前可以检查变更内容
✅ **安全可靠**：使用 GitHub Token 认证，权限可控
✅ **灵活配置**：支持文件映射、路径转换、格式转换

### 关键文件

1. **`.github/workflows/sync-to-wiki.yml`** (在 awesome-c2pa)
   - 监听文件变更
   - 执行同步逻辑
   - 创建 Pull Request

2. **文件映射配置** (在工作流中)
   ```javascript
   FILE_MAPPINGS = [
     { source: 'docs/...', target: 'src/content/docs/...' },
     // ...
   ]
   ```

3. **GitHub Secret**
   - Name: `WIKI_SYNC_TOKEN`
   - Permissions: `repo`, `workflow`

## 🔧 辅助方案：本地手动同步

### 使用场景

- 测试同步逻辑
- 紧急手动同步
- 不想配置自动化

### 使用方法

```bash
cd c2pa-wiki
node scripts/sync-from-awesome.js ../awesome-c2pa
```

### 脚本功能

- ✅ 同步 Markdown 文档
- ✅ 同步 PDF 规范文件
- ✅ 自动创建目标目录
- ✅ 显示详细同步日志
- ✅ 统计同步结果
- ✅ 提供下一步操作提示

## 📁 同步内容映射

### Markdown 文档

| awesome-c2pa | c2pa-wiki | 说明 |
|--------------|-----------|------|
| `docs/getting-started/quick-start.md` | `src/content/docs/getting-started/quick-start.md` | 快速入门 |
| `docs/getting-started/faq.md` | `src/content/docs/getting-started/faq.md` | 常见问题 |
| `docs/specifications/index.md` | `src/content/docs/specifications/index.md` | 规范概述 |
| `docs/tools/official.md` | `src/content/docs/tools/official.md` | 官方工具 |
| `docs/community/contributing.md` | `src/content/docs/community/contributing.md` | 贡献指南 |
| `docs/community/translations.md` | `src/content/docs/community/translations.md` | 翻译指南 |
| `docs/zh-cn/**/*.md` | `src/content/docs/zh-cn/**/*.md` | 中文文档 |

### PDF 规范

| awesome-c2pa | c2pa-wiki | 说明 |
|--------------|-----------|------|
| `specifications/*.pdf` | `public/specifications/*.pdf` | 所有语言的 PDF 规范 |

## 🚀 实施步骤

### Phase 1: 准备工作 ✅

- [x] 设计同步方案
- [x] 编写 GitHub Actions 工作流模板
- [x] 编写本地同步脚本
- [x] 创建文档
  - [x] SYNC_README.md - 总览
  - [x] SYNC_SETUP.md - 详细设置指南
  - [x] SYNC_SUMMARY.md - 方案总结

### Phase 2: 配置自动同步 (待完成)

在 **awesome-c2pa 仓库**中：

1. ✅ 创建 Personal Access Token
   - 访问 https://github.com/settings/tokens/new
   - 名称: `C2PA Wiki Sync Token`
   - 权限: `repo`, `workflow`
   - 保存 Token

2. ✅ 添加 Repository Secret
   - 进入 awesome-c2pa 设置
   - Settings → Secrets and variables → Actions
   - New repository secret
   - Name: `WIKI_SYNC_TOKEN`
   - Value: 粘贴刚才的 Token

3. ✅ 创建工作流文件
   - 创建 `.github/workflows/sync-to-wiki.yml`
   - 复制 SYNC_SETUP.md 中的完整工作流配置
   - 提交到 awesome-c2pa

4. ✅ 测试工作流
   - 手动触发: Actions → Sync to C2PA Wiki → Run workflow
   - 或推送一个文档更新测试自动触发

### Phase 3: 配置自动合并 (可选)

在 **c2pa-wiki 仓库**中：

1. 创建 `.github/workflows/auto-merge-sync.yml`
2. 配置自动批准和合并同步 PR
3. 适用于信任自动同步的场景

### Phase 4: 验证和监控

1. ✅ 推送测试内容到 awesome-c2pa
2. ✅ 检查 GitHub Actions 执行状态
3. ✅ 验证 PR 是否正确创建
4. ✅ 合并 PR 并检查网站更新

## 📊 方案对比

| 特性 | 自动同步 | 本地脚本 | Git Submodule |
|------|---------|---------|---------------|
| 自动化程度 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| 实时性 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| 可审核性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 配置复杂度 | ⭐⭐⭐ | ⭐ | ⭐ |
| 灵活性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 格式转换 | ✅ | ✅ | ❌ |
| 历史记录 | ✅ | ✅ | ✅ |
| 推荐度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

## 🎓 使用建议

### 日常工作流

```bash
# 在 awesome-c2pa 中编辑内容
cd awesome-c2pa
vim docs/getting-started/quick-start.md

# 提交并推送
git add docs/getting-started/quick-start.md
git commit -m "docs: update quick start guide"
git push

# 自动触发同步 → 创建 PR → 审核合并 → 网站更新
# 全程无需干预！
```

### 添加新文档

```bash
# 1. 在 awesome-c2pa 创建新文档
cd awesome-c2pa
mkdir -p docs/new-section
echo "# New Section" > docs/new-section/index.md

# 2. 更新 c2pa-wiki 的同步配置
cd c2pa-wiki
# 编辑 scripts/sync-from-awesome.js 或工作流配置
# 添加新的文件映射

# 3. 更新 c2pa-wiki 的导航
# 编辑 astro.config.mjs 的 sidebar 配置

# 4. 提交所有变更
```

### 紧急手动同步

```bash
# 如果自动同步出问题，可以手动执行
cd c2pa-wiki
node scripts/sync-from-awesome.js ../awesome-c2pa
git add .
git commit -m "sync: manual update from awesome-c2pa"
git push
```

## 🔍 常见问题

### Q: 同步会覆盖手动修改吗？

**A:** 是的。同步是单向的，会覆盖 c2pa-wiki 中的对应文件。

**解决方案**：
- 始终在 awesome-c2pa 中编辑内容
- 或从同步映射中排除需要自定义的文件

### Q: 如何跳过某次同步？

**A:** 在 commit 消息中添加 `[skip sync]`：

```bash
git commit -m "docs: fix typo [skip sync]"
```

### Q: 同步失败了怎么办？

**A:** 按以下顺序排查：

1. 检查 GitHub Actions 日志
2. 验证 `WIKI_SYNC_TOKEN` 是否有效
3. 确认文件路径是否正确
4. 查看是否有语法错误
5. 尝试手动同步脚本验证逻辑

### Q: 能否双向同步？

**A:** 技术上可以，但**不推荐**。

原因：
- 会导致冲突和循环同步
- 难以确定"真实来源"
- 增加维护复杂度

建议：保持单向数据流，awesome-c2pa → c2pa-wiki

## 📈 未来优化方向

1. **智能差异检测**
   - 只同步真正改变的内容
   - 减少不必要的 PR

2. **内容验证**
   - 自动检查链接有效性
   - 验证 frontmatter 格式
   - Markdown lint

3. **批量同步**
   - 合并一段时间内的多次更新
   - 减少 PR 数量

4. **同步通知**
   - 同步成功/失败通知
   - Slack/Discord 集成

5. **版本标记**
   - 自动在 c2pa-wiki 中标记源版本
   - 便于追溯和回滚

## 📚 相关文档

- **SYNC_README.md** - 使用指南和最佳实践
- **SYNC_SETUP.md** - 详细配置步骤
- **scripts/sync-from-awesome.js** - 本地同步脚本

## ✅ 总结

本同步方案具备以下特点：

🎯 **目标明确**：awesome-c2pa 专注内容，c2pa-wiki 专注展示
🤖 **高度自动化**：推送即同步，无需人工干预
🔒 **安全可靠**：Token 认证，PR 审核，完整历史
🔧 **灵活可控**：支持自动/手动，可配置映射规则
📊 **易于监控**：清晰的日志和状态反馈
📈 **可扩展**：易于添加新的同步规则和优化

---

**状态**: 方案设计完成 ✅ | 文档已编写 ✅ | 待部署配置 ⏳

**下一步**: 按照 SYNC_SETUP.md 在 awesome-c2pa 仓库中配置 GitHub Actions 工作流
