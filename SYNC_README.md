# awesome-c2pa ↔ c2pa-wiki 内容同步

本项目实现了从 [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa) 到 [c2pa-wiki](https://github.com/paulortiz199928/c2pa-wiki) 的内容自动同步。

## 🎯 目标

- awesome-c2pa 作为**内容源仓库**，存放所有原始文档和规范
- c2pa-wiki 作为**展示仓库**，使用 Astro Starlight 构建网站
- 当 awesome-c2pa 更新时，自动同步到 c2pa-wiki 并部署到 https://c2pa.wiki

## 📋 方案对比

| 方案 | 优点 | 缺点 | 推荐度 |
|------|------|------|--------|
| **GitHub Actions 自动同步** | ✅ 全自动<br>✅ 实时更新<br>✅ 可审核<br>✅ 有历史记录 | ⚠️ 需要配置 Token<br>⚠️ 依赖 GitHub Actions | ⭐⭐⭐⭐⭐ |
| **本地脚本手动同步** | ✅ 简单直接<br>✅ 可控性强<br>✅ 无需配置 | ❌ 需要手动运行<br>❌ 容易忘记 | ⭐⭐⭐ |
| **Git Submodule** | ✅ Git 原生支持<br>✅ 版本锁定 | ❌ 无法自动转换格式<br>❌ 更新繁琐 | ⭐⭐ |

## 🚀 快速开始

### 方案 A：自动同步（推荐）

完整的设置步骤请参考 [SYNC_SETUP.md](./SYNC_SETUP.md)

**概要步骤：**

1. 创建 GitHub Personal Access Token
2. 在 awesome-c2pa 添加 Secret: `WIKI_SYNC_TOKEN`
3. 在 awesome-c2pa 创建工作流文件
4. 推送到 awesome-c2pa，自动触发同步

**工作流程：**

```
awesome-c2pa 更新 → 自动同步 → 创建 PR → 审核合并 → 自动部署
```

### 方案 B：本地手动同步

如果你只是想偶尔手动同步，使用本地脚本即可：

```bash
# 确保 awesome-c2pa 和 c2pa-wiki 在同一父目录下
cd c2pa-wiki

# 运行同步脚本
node scripts/sync-from-awesome.js ../awesome-c2pa

# 查看变更
git status

# 提交变更
git add .
git commit -m "sync: update content from awesome-c2pa"
git push
```

## 📁 文件结构

### awesome-c2pa（源仓库）

```
awesome-c2pa/
├── README.md                    # 英文首页内容
├── README_zh-CN.md              # 中文首页内容
├── docs/                        # 文档目录
│   ├── getting-started/
│   │   ├── quick-start.md
│   │   └── faq.md
│   ├── specifications/
│   │   └── index.md
│   ├── tools/
│   │   └── official.md
│   ├── community/
│   │   ├── contributing.md
│   │   └── translations.md
│   └── zh-cn/                   # 中文文档
│       ├── getting-started/
│       ├── specifications/
│       ├── tools/
│       └── community/
└── specifications/              # PDF 规范文件
    ├── C2PA_Specification.pdf
    ├── C2PA_Specification_zh-Hans.pdf
    ├── C2PA_Specification_ja.pdf
    ├── C2PA_Specification_de.pdf
    └── C2PA_Specification_fr.pdf
```

### c2pa-wiki（展示仓库）

```
c2pa-wiki/
├── src/content/docs/            # 同步后的文档
│   ├── index.md                 # 从 README.md 同步
│   ├── getting-started/
│   ├── specifications/
│   ├── tools/
│   ├── community/
│   └── zh-cn/                   # 中文文档
│       ├── index.md             # 从 README_zh-CN.md 同步
│       ├── getting-started/
│       ├── specifications/
│       ├── tools/
│       └── community/
├── public/specifications/       # PDF 文件
│   ├── C2PA_Specification.pdf
│   └── ...
└── scripts/
    └── sync-from-awesome.js     # 本地同步脚本
```

## 🔄 同步内容

### 会被同步的文件

- ✅ `docs/**/*.md` - 所有 Markdown 文档
- ✅ `specifications/*.pdf` - 所有 PDF 规范
- ✅ `README.md` / `README_zh-CN.md` - 首页内容

### 不会被同步的文件

- ❌ `astro.config.mjs` - Wiki 配置
- ❌ `src/styles/` - 样式文件
- ❌ `.github/workflows/` - Wiki 的 CI/CD 配置
- ❌ `package.json` - Wiki 的依赖

## 📝 内容编辑工作流

### 场景 1：更新现有文档

```bash
# 在 awesome-c2pa 中编辑
cd awesome-c2pa
vim docs/getting-started/quick-start.md

# 提交变更
git add docs/getting-started/quick-start.md
git commit -m "docs: update quick start guide"
git push

# 自动同步到 c2pa-wiki（如果配置了自动同步）
# 或手动运行同步脚本
```

### 场景 2：添加新文档

```bash
# 1. 在 awesome-c2pa 创建新文档
cd awesome-c2pa
mkdir -p docs/advanced
echo "# Advanced Topics" > docs/advanced/index.md

# 2. 更新同步配置
cd c2pa-wiki
# 编辑 scripts/sync-from-awesome.js 或 GitHub Actions 工作流
# 添加新文件到 FILE_MAPPINGS

# 3. 更新 Wiki 配置
# 编辑 astro.config.mjs，添加到 sidebar 配置

# 4. 提交所有变更
```

### 场景 3：更新 PDF 规范

```bash
# 在 awesome-c2pa 中更新 PDF
cd awesome-c2pa
cp new-spec.pdf specifications/C2PA_Specification.pdf

git add specifications/C2PA_Specification.pdf
git commit -m "docs: update C2PA specification to v2.3"
git push

# 自动同步到 c2pa-wiki
```

## 🔍 故障排查

### 同步失败

**症状**：GitHub Actions 运行失败

**可能原因和解决方案**：

1. **Token 权限不足**
   ```bash
   # 检查 Token 是否有以下权限：
   # - repo (完整权限)
   # - workflow
   ```

2. **源文件不存在**
   ```bash
   # 检查 FILE_MAPPINGS 中的路径是否正确
   # 查看 Actions 日志中的 "Source not found" 警告
   ```

3. **PR 创建失败**
   ```bash
   # 可能是 c2pa-wiki 有保护规则
   # 检查仓库设置 → Branches → Branch protection rules
   ```

### 本地同步失败

**症状**：运行 `sync-from-awesome.js` 报错

**解决方案**：

```bash
# 检查路径是否正确
ls ../awesome-c2pa  # 应该能看到 docs/ 目录

# 使用绝对路径
node scripts/sync-from-awesome.js /path/to/awesome-c2pa

# 检查权限
chmod +x scripts/sync-from-awesome.js
```

### 构建失败

**症状**：同步后 Wiki 构建失败

**可能原因**：

1. **Frontmatter 格式错误**
   ```bash
   # 检查同步后的 .md 文件顶部的 frontmatter
   head -n 10 src/content/docs/index.md
   ```

2. **链接失效**
   ```bash
   # 构建并检查链接
   npm run build
   # 查看错误信息，修复失效链接
   ```

3. **图片路径错误**
   ```bash
   # 确保图片也被同步
   # 或更新 Markdown 中的图片路径
   ```

## 🛠️ 高级配置

### 自定义同步映射

编辑同步脚本或工作流中的 `FILE_MAPPINGS`：

```javascript
const FILE_MAPPINGS = [
  {
    source: 'docs/new-section/page.md',
    target: 'src/content/docs/new-section/page.md'
  },
  // 添加更多映射...
];
```

### 跳过特定提交的同步

在 commit 消息中添加 `[skip sync]`：

```bash
git commit -m "docs: minor typo fix [skip sync]"
```

### 定时同步而非实时同步

修改工作流触发条件：

```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # 每天 UTC 00:00 运行
  workflow_dispatch:      # 保留手动触发
```

## 📊 监控和维护

### 查看同步历史

```bash
# 在 c2pa-wiki 中查看同步相关的 commits
cd c2pa-wiki
git log --grep="sync:" --oneline

# 查看特定文件的同步历史
git log --follow src/content/docs/getting-started/quick-start.md
```

### 检查同步状态

1. 访问 awesome-c2pa 的 Actions 页面
2. 查看 "Sync to C2PA Wiki" 工作流
3. 检查最近的运行状态和日志

### 定期维护任务

- [ ] 每周检查同步 PR 是否及时合并
- [ ] 每月检查 Token 是否需要续期
- [ ] 每季度审查同步映射是否需要更新
- [ ] 每年审查整个同步流程是否需要优化

## 🎓 最佳实践

1. **保持源仓库简洁**
   - awesome-c2pa 只存放纯内容
   - 不在其中编写特定于 Starlight 的配置

2. **使用语义化提交**
   - `docs: update quick start guide`
   - `feat: add new section about AI detection`
   - `fix: correct broken links in FAQ`

3. **及时审核 PR**
   - 自动同步创建的 PR 也应该审核
   - 检查格式、链接、图片等

4. **保持文档结构一致**
   - 两个仓库的目录结构应保持同步
   - 新增页面时更新 sidebar 配置

5. **版本标记**
   - 在 awesome-c2pa 使用 Git tags 标记重要版本
   - 同步时可以在 PR 中引用源版本

## 🔗 相关链接

- [awesome-c2pa 仓库](https://github.com/paulortiz199928/awesome-c2pa)
- [c2pa-wiki 仓库](https://github.com/paulortiz199928/c2pa-wiki)
- [c2pa.wiki 网站](https://c2pa.wiki)
- [详细设置指南](./SYNC_SETUP.md)

## 💡 常见问题

**Q: 为什么要分两个仓库？**

A: 职责分离：
- awesome-c2pa：内容管理，适合协作编辑
- c2pa-wiki：展示和部署，专注于网站功能

**Q: 可以从 c2pa-wiki 反向同步到 awesome-c2pa 吗？**

A: 不推荐。应该始终在 awesome-c2pa 中编辑内容，保持单向数据流。

**Q: 同步会覆盖 c2pa-wiki 中的手动修改吗？**

A: 是的。如果需要自定义内容，应该：
- 在 awesome-c2pa 中修改，或
- 从同步映射中排除该文件

**Q: 多久同步一次？**

A: 默认配置是实时同步（推送后立即触发）。可以修改为定时同步。

## 📞 支持

如有问题或建议，请在对应仓库中提 Issue：

- 内容相关：[awesome-c2pa Issues](https://github.com/paulortiz199928/awesome-c2pa/issues)
- 网站相关：[c2pa-wiki Issues](https://github.com/paulortiz199928/c2pa-wiki/issues)
- 同步相关：在任一仓库提 Issue 并打上 `sync` 标签
