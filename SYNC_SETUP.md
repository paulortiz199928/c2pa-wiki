# awesome-c2pa → c2pa-wiki 自动同步方案

本文档说明如何设置从 `awesome-c2pa` 仓库到 `c2pa-wiki` 的自动内容同步。

## 方案概述

当 `awesome-c2pa` 的文档或规范文件更新时，GitHub Actions 会自动：
1. 检测到内容变更
2. 同步更新的文件到 `c2pa-wiki`
3. 创建 Pull Request 供审核
4. 合并后自动部署到 c2pa.wiki

## 设置步骤

### 1. 创建 GitHub Personal Access Token

在 GitHub 设置中创建一个 Personal Access Token：

1. 访问 https://github.com/settings/tokens/new
2. 设置 Token 名称：`C2PA Wiki Sync Token`
3. 选择权限：
   - ✅ `repo` (完整权限)
   - ✅ `workflow` (触发工作流)
4. 点击 "Generate token" 并**保存好这个 token**

### 2. 在 awesome-c2pa 仓库添加 Secret

1. 进入 `awesome-c2pa` 仓库设置
2. 导航到 `Settings` → `Secrets and variables` → `Actions`
3. 点击 `New repository secret`
4. 名称：`WIKI_SYNC_TOKEN`
5. 值：粘贴刚才创建的 Personal Access Token
6. 点击 `Add secret`

### 3. 在 awesome-c2pa 创建同步工作流

在 `awesome-c2pa` 仓库中创建文件：`.github/workflows/sync-to-wiki.yml`

```yaml
name: Sync to C2PA Wiki

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'specifications/**'
      - 'README.md'
      - 'README_zh-CN.md'
  workflow_dispatch:  # 允许手动触发

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout awesome-c2pa
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Checkout c2pa-wiki
        uses: actions/checkout@v4
        with:
          repository: paulortiz199928/c2pa-wiki
          token: ${{ secrets.WIKI_SYNC_TOKEN }}
          path: wiki

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          npm install -g js-yaml

      - name: Sync content files
        run: |
          node << 'EOF'
          const fs = require('fs');
          const path = require('path');
          const yaml = require('js-yaml');

          // 文件映射配置
          const FILE_MAPPINGS = [
            // Markdown 文档
            {
              source: 'README.md',
              target: 'wiki/src/content/docs/index.md',
              transform: (content) => addFrontmatter(content, {
                title: 'C2PA Wiki',
                description: 'Your comprehensive guide to Content Provenance and Authenticity',
                template: 'splash',
                hero: {
                  title: 'C2PA Wiki',
                  tagline: 'Your comprehensive guide to Content Provenance and Authenticity',
                  actions: [
                    { text: 'Quick Start', link: '/getting-started/quick-start/', icon: 'right-arrow', variant: 'primary' },
                    { text: 'View Specifications', link: '/specifications/', icon: 'external', variant: 'secondary' }
                  ]
                }
              })
            },
            {
              source: 'README_zh-CN.md',
              target: 'wiki/src/content/docs/zh-cn/index.md',
              transform: (content) => addFrontmatter(content, {
                title: 'C2PA Wiki',
                description: '内容来源和真实性联盟（C2PA）综合文档',
                template: 'splash',
                hero: {
                  title: 'C2PA Wiki',
                  tagline: '内容来源和真实性综合指南',
                  actions: [
                    { text: '快速入门', link: '/zh-cn/getting-started/quick-start/', icon: 'right-arrow', variant: 'primary' },
                    { text: '查看规范', link: '/zh-cn/specifications/', icon: 'external', variant: 'secondary' }
                  ]
                }
              })
            },
            // 英文文档
            { source: 'docs/getting-started/quick-start.md', target: 'wiki/src/content/docs/getting-started/quick-start.md' },
            { source: 'docs/getting-started/faq.md', target: 'wiki/src/content/docs/getting-started/faq.md' },
            { source: 'docs/specifications/index.md', target: 'wiki/src/content/docs/specifications/index.md' },
            { source: 'docs/tools/official.md', target: 'wiki/src/content/docs/tools/official.md' },
            { source: 'docs/community/contributing.md', target: 'wiki/src/content/docs/community/contributing.md' },
            { source: 'docs/community/translations.md', target: 'wiki/src/content/docs/community/translations.md' },
            // 中文文档
            { source: 'docs/zh-cn/getting-started/quick-start.md', target: 'wiki/src/content/docs/zh-cn/getting-started/quick-start.md' },
            { source: 'docs/zh-cn/getting-started/faq.md', target: 'wiki/src/content/docs/zh-cn/getting-started/faq.md' },
            { source: 'docs/zh-cn/specifications/index.md', target: 'wiki/src/content/docs/zh-cn/specifications/index.md' },
            { source: 'docs/zh-cn/tools/official.md', target: 'wiki/src/content/docs/zh-cn/tools/official.md' },
            { source: 'docs/zh-cn/community/contributing.md', target: 'wiki/src/content/docs/zh-cn/community/contributing.md' },
            { source: 'docs/zh-cn/community/translations.md', target: 'wiki/src/content/docs/zh-cn/community/translations.md' },
          ];

          // PDF 规范文件
          const PDF_FILES = [
            'specifications/C2PA_Specification.pdf',
            'specifications/C2PA_Specification_zh-Hans.pdf',
            'specifications/C2PA_Specification_ja.pdf',
            'specifications/C2PA_Specification_de.pdf',
            'specifications/C2PA_Specification_fr.pdf',
          ];

          function addFrontmatter(content, frontmatter) {
            // 移除现有的 frontmatter（如果有）
            content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

            // 添加新的 frontmatter
            const fm = yaml.dump(frontmatter);
            return `---\n${fm}---\n\n${content}`;
          }

          function ensureDir(filePath) {
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }
          }

          function syncFile(mapping) {
            if (!fs.existsSync(mapping.source)) {
              console.log(`⚠️  Source not found: ${mapping.source}`);
              return false;
            }

            let content = fs.readFileSync(mapping.source, 'utf8');

            // 应用转换函数（如果有）
            if (mapping.transform) {
              content = mapping.transform(content);
            }

            ensureDir(mapping.target);
            fs.writeFileSync(mapping.target, content);
            console.log(`✅ Synced: ${mapping.source} → ${mapping.target}`);
            return true;
          }

          function syncPdfFiles() {
            PDF_FILES.forEach(pdfPath => {
              if (!fs.existsSync(pdfPath)) {
                console.log(`⚠️  PDF not found: ${pdfPath}`);
                return;
              }

              const targetPath = path.join('wiki/public', pdfPath);
              ensureDir(targetPath);
              fs.copyFileSync(pdfPath, targetPath);
              console.log(`✅ Synced PDF: ${pdfPath}`);
            });
          }

          // 执行同步
          console.log('🚀 Starting content sync...\n');

          let syncedCount = 0;
          FILE_MAPPINGS.forEach(mapping => {
            if (syncFile(mapping)) syncedCount++;
          });

          console.log('\n📄 Syncing PDF files...\n');
          syncPdfFiles();

          console.log(`\n✨ Sync completed! ${syncedCount} files synced.`);
          EOF

      - name: Check for changes
        id: check_changes
        run: |
          cd wiki
          if [[ -n $(git status -s) ]]; then
            echo "has_changes=true" >> $GITHUB_OUTPUT
            echo "📝 Changes detected"
          else
            echo "has_changes=false" >> $GITHUB_OUTPUT
            echo "✅ No changes to sync"
          fi

      - name: Create Pull Request
        if: steps.check_changes.outputs.has_changes == 'true'
        uses: peter-evans/create-pull-request@v5
        with:
          token: ${{ secrets.WIKI_SYNC_TOKEN }}
          path: wiki
          commit-message: |
            sync: update content from awesome-c2pa

            Auto-synced from awesome-c2pa repository
            Source commit: ${{ github.sha }}

            🤖 Generated with automated sync workflow
          branch: sync/awesome-c2pa-${{ github.run_number }}
          title: "🔄 Sync content from awesome-c2pa"
          body: |
            ## 📦 Content Sync from awesome-c2pa

            This PR contains automatic content updates from the [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa) repository.

            ### Changes
            - Source commit: [`${{ github.sha }}`](https://github.com/paulortiz199928/awesome-c2pa/commit/${{ github.sha }})
            - Synced files: Documentation, specifications, and PDF files

            ### Review Checklist
            - [ ] Content is correctly formatted
            - [ ] Links are working
            - [ ] Images are properly displayed
            - [ ] No broken references

            🤖 This PR was created automatically by the sync workflow.
          labels: |
            automated
            content-sync
          assignees: paulortiz199928
```

### 4. 在 c2pa-wiki 设置 PR 自动合并（可选）

如果你信任自动同步，可以设置 PR 自动合并：

在 `c2pa-wiki` 仓库创建 `.github/workflows/auto-merge-sync.yml`：

```yaml
name: Auto-merge Sync PRs

on:
  pull_request:
    types: [opened, synchronize]
    branches: [main]

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: |
      github.actor == 'github-actions[bot]' &&
      contains(github.event.pull_request.labels.*.name, 'content-sync')
    steps:
      - name: Auto-approve
        uses: hmarr/auto-approve-action@v3
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}

      - name: Enable auto-merge
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 工作流程

### 自动流程

```
awesome-c2pa 更新
    ↓
GitHub Actions 检测变更
    ↓
同步文件到 c2pa-wiki
    ↓
创建 Pull Request
    ↓
[可选] 自动审核和合并
    ↓
触发 GitHub Pages 部署
    ↓
c2pa.wiki 更新上线
```

### 手动触发

如果需要手动触发同步：

1. 进入 `awesome-c2pa` 仓库
2. 点击 `Actions` 标签
3. 选择 `Sync to C2PA Wiki` 工作流
4. 点击 `Run workflow`
5. 选择分支（通常是 `main`）
6. 点击 `Run workflow` 按钮

## 文件映射关系

### Markdown 文档

| awesome-c2pa | c2pa-wiki | 说明 |
|--------------|-----------|------|
| `README.md` | `src/content/docs/index.md` | 英文首页 |
| `README_zh-CN.md` | `src/content/docs/zh-cn/index.md` | 中文首页 |
| `docs/getting-started/*.md` | `src/content/docs/getting-started/*.md` | 入门文档 |
| `docs/zh-cn/getting-started/*.md` | `src/content/docs/zh-cn/getting-started/*.md` | 中文入门 |
| `docs/specifications/*.md` | `src/content/docs/specifications/*.md` | 规范文档 |
| `docs/tools/*.md` | `src/content/docs/tools/*.md` | 工具文档 |
| `docs/community/*.md` | `src/content/docs/community/*.md` | 社区文档 |

### PDF 规范

| awesome-c2pa | c2pa-wiki | 说明 |
|--------------|-----------|------|
| `specifications/*.pdf` | `public/specifications/*.pdf` | 所有 PDF 规范 |

## 同步规则

### 触发条件

以下文件变更会触发同步：
- `docs/**` - 所有文档目录
- `specifications/**` - 所有规范文件
- `README.md` - 英文 README
- `README_zh-CN.md` - 中文 README

### 转换规则

1. **Frontmatter 处理**：
   - README 文件会被添加 Starlight splash 模板的 frontmatter
   - 保留原有文档的 frontmatter（如果存在）

2. **路径处理**：
   - 自动创建目标目录
   - 保持相对路径结构

3. **文件类型**：
   - Markdown 文件：内容同步 + frontmatter 转换
   - PDF 文件：直接复制

## 监控和调试

### 查看同步状态

1. 进入 `awesome-c2pa` 仓库
2. 点击 `Actions` 标签
3. 查看 `Sync to C2PA Wiki` 工作流运行记录

### 常见问题

**Q: 同步失败了怎么办？**
A: 检查以下几点：
- `WIKI_SYNC_TOKEN` 是否正确配置
- Token 是否有足够的权限
- 源文件路径是否正确
- 查看 Actions 日志获取详细错误信息

**Q: 如何跳过某次同步？**
A: 在 commit 消息中添加 `[skip sync]`：
```bash
git commit -m "update docs [skip sync]"
```

**Q: 如何同步特定文件？**
A: 编辑 `FILE_MAPPINGS` 配置添加新的映射关系。

**Q: 同步会覆盖手动修改吗？**
A: 是的，同步会覆盖目标文件。如果需要在 c2pa-wiki 中自定义内容，应该：
- 在 awesome-c2pa 中修改源文件，或
- 从同步映射中排除该文件

## 维护建议

1. **定期检查 PR**：即使设置了自动合并，也应定期查看同步的 PR
2. **监控构建状态**：确保同步后的构建没有错误
3. **更新映射配置**：新增文档时记得更新 `FILE_MAPPINGS`
4. **测试链接**：同步后检查文档中的链接是否正常工作

## 方案优势

✅ **自动化**：无需手动复制粘贴
✅ **可追溯**：每次同步都有 PR 记录
✅ **可审核**：可以在合并前检查变更
✅ **实时性**：推送后立即触发同步
✅ **安全性**：使用 GitHub token 认证
✅ **灵活性**：支持手动触发和自定义映射

## 替代方案

### 方案二：Git Submodule

如果不想使用 GitHub Actions，也可以使用 Git Submodule：

```bash
cd c2pa-wiki
git submodule add https://github.com/paulortiz199928/awesome-c2pa.git source
```

优点：简单直接
缺点：需要手动更新，无法自动转换文件格式

### 方案三：定时同步

使用 cron 触发定时同步（每天一次）：

```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # 每天 UTC 00:00
```

优点：减少 PR 数量
缺点：不够实时

## 下一步

1. ✅ 创建 Personal Access Token
2. ✅ 在 awesome-c2pa 添加 Secret
3. ✅ 创建同步工作流文件
4. ✅ 测试工作流
5. ✅ 配置自动合并（可选）
6. ✅ 开始使用！

---

如有问题，请在 [awesome-c2pa Issues](https://github.com/paulortiz199928/awesome-c2pa/issues) 中提出。
