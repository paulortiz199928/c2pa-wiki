#!/usr/bin/env node

/**
 * Sync content from awesome-c2pa to c2pa-wiki
 *
 * Usage:
 *   node scripts/sync-from-awesome.js [awesome-c2pa-path]
 *
 * Example:
 *   node scripts/sync-from-awesome.js ../awesome-c2pa
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取命令行参数
const AWESOME_PATH = process.argv[2] || '../awesome-c2pa';
const WIKI_PATH = process.cwd();

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 检查 awesome-c2pa 路径是否存在
if (!fs.existsSync(AWESOME_PATH)) {
  log(`❌ Error: awesome-c2pa directory not found at: ${AWESOME_PATH}`, 'red');
  log(`\nUsage: node scripts/sync-from-awesome.js [awesome-c2pa-path]`, 'yellow');
  log(`Example: node scripts/sync-from-awesome.js ../awesome-c2pa`, 'yellow');
  process.exit(1);
}

log(`🚀 Starting content sync from awesome-c2pa...\n`, 'blue');
log(`Source: ${path.resolve(AWESOME_PATH)}`, 'blue');
log(`Target: ${WIKI_PATH}\n`, 'blue');

// 文件映射配置
const FILE_MAPPINGS = [
  // 英文文档
  {
    source: 'docs/getting-started/quick-start.md',
    target: 'src/content/docs/getting-started/quick-start.md'
  },
  {
    source: 'docs/getting-started/faq.md',
    target: 'src/content/docs/getting-started/faq.md'
  },
  {
    source: 'docs/specifications/index.md',
    target: 'src/content/docs/specifications/index.md'
  },
  {
    source: 'docs/tools/official.md',
    target: 'src/content/docs/tools/official.md'
  },
  {
    source: 'docs/community/contributing.md',
    target: 'src/content/docs/community/contributing.md'
  },
  {
    source: 'docs/community/translations.md',
    target: 'src/content/docs/community/translations.md'
  },
  // 中文文档
  {
    source: 'docs/zh-cn/getting-started/quick-start.md',
    target: 'src/content/docs/zh-cn/getting-started/quick-start.md'
  },
  {
    source: 'docs/zh-cn/getting-started/faq.md',
    target: 'src/content/docs/zh-cn/getting-started/faq.md'
  },
  {
    source: 'docs/zh-cn/specifications/index.md',
    target: 'src/content/docs/zh-cn/specifications/index.md'
  },
  {
    source: 'docs/zh-cn/tools/official.md',
    target: 'src/content/docs/zh-cn/tools/official.md'
  },
  {
    source: 'docs/zh-cn/community/contributing.md',
    target: 'src/content/docs/zh-cn/community/contributing.md'
  },
  {
    source: 'docs/zh-cn/community/translations.md',
    target: 'src/content/docs/zh-cn/community/translations.md'
  },
];

// PDF 规范文件
const PDF_FILES = [
  'specifications/C2PA_Specification.pdf',
  'specifications/C2PA_Specification_zh-Hans.pdf',
  'specifications/C2PA_Specification_ja.pdf',
  'specifications/C2PA_Specification_de.pdf',
  'specifications/C2PA_Specification_fr.pdf',
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function syncFile(mapping) {
  const sourcePath = path.join(AWESOME_PATH, mapping.source);
  const targetPath = path.join(WIKI_PATH, mapping.target);

  if (!fs.existsSync(sourcePath)) {
    log(`⚠️  Source not found: ${mapping.source}`, 'yellow');
    return false;
  }

  try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    ensureDir(targetPath);
    fs.writeFileSync(targetPath, content);
    log(`✅ Synced: ${mapping.source}`, 'green');
    return true;
  } catch (error) {
    log(`❌ Error syncing ${mapping.source}: ${error.message}`, 'red');
    return false;
  }
}

function syncPdfFiles() {
  log(`\n📄 Syncing PDF files...\n`, 'blue');

  let syncedCount = 0;
  PDF_FILES.forEach(pdfPath => {
    const sourcePath = path.join(AWESOME_PATH, pdfPath);
    const targetPath = path.join(WIKI_PATH, 'public', pdfPath);

    if (!fs.existsSync(sourcePath)) {
      log(`⚠️  PDF not found: ${pdfPath}`, 'yellow');
      return;
    }

    try {
      ensureDir(targetPath);
      fs.copyFileSync(sourcePath, targetPath);
      log(`✅ Synced PDF: ${pdfPath}`, 'green');
      syncedCount++;
    } catch (error) {
      log(`❌ Error syncing PDF ${pdfPath}: ${error.message}`, 'red');
    }
  });

  return syncedCount;
}

function getGitInfo() {
  try {
    const cwd = AWESOME_PATH;
    const hash = execSync('git rev-parse --short HEAD', { cwd }).toString().trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd }).toString().trim();
    const date = execSync('git log -1 --format=%cd --date=short', { cwd }).toString().trim();
    return { hash, branch, date };
  } catch (error) {
    return null;
  }
}

// 执行同步
log(`📝 Syncing Markdown files...\n`, 'blue');

let syncedCount = 0;
let failedCount = 0;

FILE_MAPPINGS.forEach(mapping => {
  if (syncFile(mapping)) {
    syncedCount++;
  } else {
    failedCount++;
  }
});

const pdfCount = syncPdfFiles();

// 显示统计信息
log(`\n${'='.repeat(60)}`, 'blue');
log(`📊 Sync Summary`, 'blue');
log(`${'='.repeat(60)}`, 'blue');

const gitInfo = getGitInfo();
if (gitInfo) {
  log(`\n📍 Source Info:`, 'blue');
  log(`   Branch: ${gitInfo.branch}`);
  log(`   Commit: ${gitInfo.hash}`);
  log(`   Date:   ${gitInfo.date}`);
}

log(`\n📈 Results:`, 'blue');
log(`   ✅ Markdown files synced: ${syncedCount}`, 'green');
log(`   ✅ PDF files synced: ${pdfCount}`, 'green');
if (failedCount > 0) {
  log(`   ❌ Failed: ${failedCount}`, 'red');
}

log(`\n✨ Sync completed!\n`, 'green');

// 提示下一步操作
log(`📌 Next steps:`, 'yellow');
log(`   1. Review the changes: git status`);
log(`   2. Test the build: npm run build`);
log(`   3. Commit the changes: git add . && git commit -m "sync: update content from awesome-c2pa"`);
log(`   4. Push to GitHub: git push\n`);

process.exit(failedCount > 0 ? 1 : 0);
