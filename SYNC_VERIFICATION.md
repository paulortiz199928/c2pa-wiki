# 同步工作流验证清单

本文档帮助你验证自动同步配置是否正确。

## ✅ 前置条件检查

在开始测试前，确认以下内容：

- [x] GitHub Personal Access Token 已创建
  - Token 名称：`C2PA Wiki Sync Token`
  - 权限包含：`repo`, `workflow`

- [x] Secret 已添加到 awesome-c2pa
  - Secret 名称：`WIKI_SYNC_TOKEN`
  - 位置：awesome-c2pa → Settings → Secrets and variables → Actions

- [x] 工作流文件已创建
  - 文件路径：`awesome-c2pa/.github/workflows/sync-to-wiki.yml`
  - 文件内容：从 SYNC_SETUP.md 复制的完整工作流

## 🧪 测试步骤

### 测试 1: 手动触发工作流（推荐首次）

这是最安全的测试方式，不会对内容造成影响。

**步骤：**

1. 访问 awesome-c2pa Actions 页面
   ```
   https://github.com/paulortiz199928/awesome-c2pa/actions
   ```

2. 在左侧工作流列表中找到 **"Sync to C2PA Wiki"**

3. 点击工作流名称进入详情页

4. 点击右上角的 **"Run workflow"** 下拉按钮

5. 确认分支选择为 `main`

6. 点击绿色的 **"Run workflow"** 按钮

**预期结果：**

- [ ] 工作流开始运行（状态变为黄色 🟡）
- [ ] 大约 1-2 分钟后完成
- [ ] 工作流状态变为绿色 ✅（成功）

**如果成功，你应该看到：**

1. 工作流运行日志中显示：
   ```
   🚀 Starting content sync...
   ✅ Synced: docs/getting-started/quick-start.md
   ✅ Synced: docs/getting-started/faq.md
   ...
   📄 Syncing PDF files...
   ✅ Synced PDF: specifications/C2PA_Specification.pdf
   ...
   ✨ Sync completed! X files synced.
   📝 Changes detected
   ```

2. c2pa-wiki 仓库自动创建了一个新的 Pull Request：
   ```
   标题: 🔄 Sync content from awesome-c2pa
   分支: sync/awesome-c2pa-XXX
   标签: automated, content-sync
   ```

### 测试 2: 推送内容触发自动同步

验证自动触发功能是否正常。

**步骤：**

```bash
cd awesome-c2pa

# 创建一个测试性修改
echo "" >> docs/getting-started/quick-start.md
echo "<!-- Sync test at $(date +%Y-%m-%d\ %H:%M:%S) -->" >> docs/getting-started/quick-start.md

git add docs/getting-started/quick-start.md
git commit -m "test: verify automatic sync trigger"
git push
```

**预期结果：**

- [ ] 推送后，GitHub Actions 自动触发（大约 5-10 秒内）
- [ ] 工作流自动运行
- [ ] 创建同步 PR 到 c2pa-wiki

**验证位置：**

1. awesome-c2pa Actions 页面
   ```
   https://github.com/paulortiz199928/awesome-c2pa/actions
   ```

2. c2pa-wiki Pull Requests 页面
   ```
   https://github.com/paulortiz199928/c2pa-wiki/pulls
   ```

### 测试 3: 验证同步的 PR 内容

检查创建的 Pull Request 是否正确。

**检查项：**

- [ ] PR 标题：`🔄 Sync content from awesome-c2pa`
- [ ] PR 描述包含：
  - [ ] Source commit 链接
  - [ ] Synced files 说明
  - [ ] Review Checklist
- [ ] PR 标签：`automated`, `content-sync`
- [ ] PR 分配给：`paulortiz199928`
- [ ] 文件变更正确：
  - [ ] 包含你修改的文件
  - [ ] 路径映射正确（docs/ → src/content/docs/）
  - [ ] 内容一致

**验证文件内容：**

1. 在 PR 的 "Files changed" 标签页查看变更

2. 点击某个文件，验证：
   - 内容是否与 awesome-c2pa 中的源文件一致
   - frontmatter 是否正确（如果适用）
   - 没有意外的格式变化

### 测试 4: 合并 PR 并验证部署

**步骤：**

1. 审核 PR 内容

2. 如果一切正常，点击 **"Merge pull request"**

3. 选择合并方式（推荐 **Squash and merge**）

4. 确认合并

**预期结果：**

- [ ] PR 成功合并到 c2pa-wiki 的 main 分支
- [ ] 触发 GitHub Pages 部署工作流
- [ ] 大约 1-2 分钟后，网站更新

**验证网站更新：**

1. 访问 c2pa-wiki Actions 页面
   ```
   https://github.com/paulortiz199928/c2pa-wiki/actions
   ```

2. 查看 "pages-build-deployment" 工作流

3. 等待完成后，访问网站验证：
   ```
   https://c2pa.wiki/
   ```

4. 检查你修改的页面是否已更新

## 🐛 故障排查

### 问题 1: 工作流没有触发

**症状：**
- 推送后 Actions 页面没有新的工作流运行

**可能原因：**
1. 工作流文件路径错误
2. 工作流文件语法错误
3. 推送的文件不在监听的路径中

**解决方案：**
```bash
# 检查工作流文件是否存在
cd awesome-c2pa
ls -la .github/workflows/sync-to-wiki.yml

# 检查文件语法（使用 GitHub 的工作流编辑器）
# 在 GitHub 网页上编辑文件时会自动验证语法

# 确认推送的文件在监听路径中
# 工作流监听的路径：
# - docs/**
# - specifications/**
# - README.md
# - README_zh-CN.md
```

### 问题 2: 工作流运行失败

**症状：**
- 工作流状态显示红色 ❌

**排查步骤：**

1. 点击失败的工作流运行

2. 查看错误日志，常见错误：

   **Error: "WIKI_SYNC_TOKEN not found"**
   ```
   → 检查 Secret 名称是否正确（区分大小写）
   → 确认 Secret 已添加到 awesome-c2pa 仓库
   ```

   **Error: "Permission denied"**
   ```
   → 检查 Token 权限是否包含 repo 和 workflow
   → Token 可能已过期，需要重新创建
   ```

   **Error: "Source not found"**
   ```
   → 检查 FILE_MAPPINGS 中的源文件路径
   → 确认文件确实存在于 awesome-c2pa 仓库
   ```

   **Error: "Failed to create pull request"**
   ```
   → 可能 c2pa-wiki 已有相同的同步分支
   → 删除旧的分支或 PR 后重试
   ```

### 问题 3: PR 创建了但内容不对

**症状：**
- PR 创建成功，但同步的文件不正确或内容有误

**检查项：**

1. **文件映射配置**
   ```javascript
   // 检查 FILE_MAPPINGS 配置
   { source: 'docs/...', target: 'src/content/docs/...' }
   ```

2. **路径大小写**
   ```bash
   # 确认源文件路径大小写正确
   ls -la awesome-c2pa/docs/getting-started/
   ```

3. **文件内容**
   ```bash
   # 对比源文件和同步后的文件
   diff awesome-c2pa/docs/file.md c2pa-wiki/src/content/docs/file.md
   ```

### 问题 4: PR 合并后网站没更新

**症状：**
- PR 成功合并，但 c2pa.wiki 没有显示更新

**排查步骤：**

1. 检查 GitHub Pages 部署状态
   ```
   https://github.com/paulortiz199928/c2pa-wiki/actions
   ```

2. 查看 "pages-build-deployment" 工作流
   - 如果失败，查看错误日志
   - 常见问题：构建错误、链接失效

3. 清除浏览器缓存
   ```
   Ctrl + Shift + R (Windows/Linux)
   Cmd + Shift + R (Mac)
   ```

4. 等待 CDN 缓存刷新
   - GitHub Pages 有 CDN 缓存
   - 可能需要 5-10 分钟才能完全更新

## 📊 验证清单总结

完成以下所有项目即表示同步配置成功：

### 配置验证

- [x] Token 已创建并有正确权限
- [x] Secret 已添加到 awesome-c2pa
- [x] 工作流文件已创建且语法正确

### 功能验证

- [ ] 手动触发工作流成功运行
- [ ] 自动触发工作流正常工作
- [ ] PR 自动创建且内容正确
- [ ] PR 合并后网站正确更新

### 内容验证

- [ ] Markdown 文件正确同步
- [ ] PDF 文件正确同步
- [ ] 文件路径映射正确
- [ ] 中英文内容都正常

## 🎉 成功标志

当你看到以下情况，说明同步系统已成功运行：

1. ✅ 在 awesome-c2pa 推送内容后，Actions 自动运行
2. ✅ c2pa-wiki 自动创建同步 PR
3. ✅ PR 内容正确且完整
4. ✅ 合并 PR 后网站自动更新
5. ✅ 网站显示最新内容

## 🔄 日常使用

配置完成后，日常使用非常简单：

```bash
# 1. 在 awesome-c2pa 编辑内容
cd awesome-c2pa
vim docs/getting-started/quick-start.md

# 2. 提交并推送
git add docs/getting-started/quick-start.md
git commit -m "docs: update quick start guide"
git push

# 3. 自动同步！
# - Actions 自动运行
# - PR 自动创建
# - 审核后合并
# - 网站自动更新
```

## 📞 获取帮助

如果遇到问题：

1. 查看 Actions 日志获取详细错误信息
2. 参考 SYNC_SETUP.md 中的详细配置说明
3. 查看 SYNC_README.md 中的故障排查章节
4. 在 GitHub Issues 中提问：
   - awesome-c2pa: https://github.com/paulortiz199928/awesome-c2pa/issues
   - c2pa-wiki: https://github.com/paulortiz199928/c2pa-wiki/issues

## 🔗 相关资源

- **SYNC_README.md** - 总览和使用指南
- **SYNC_SETUP.md** - 详细配置步骤
- **SYNC_SUMMARY.md** - 方案总结
- **scripts/sync-from-awesome.js** - 本地同步脚本

---

**最后更新**: 2025-11-25
**版本**: 1.0.0
