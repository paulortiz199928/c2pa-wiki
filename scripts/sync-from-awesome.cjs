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

// 语言配置 - 匹配 awesome-c2pa i18n 目录和 c2pa-wiki locale
const LANGUAGES = [
  { code: 'zh-Hans', wikiLocale: 'zh-cn', label: '简体中文' },
  { code: 'zh-Hant', wikiLocale: 'zh-tw', label: '繁體中文' },
  { code: 'ja', wikiLocale: 'ja', label: '日本語' },
  { code: 'ko', wikiLocale: 'ko', label: '한국어' },
  { code: 'de', wikiLocale: 'de', label: 'Deutsch' },
  { code: 'fr', wikiLocale: 'fr', label: 'Français' },
  { code: 'ru', wikiLocale: 'ru', label: 'Русский' },
];

// 文件映射配置 - 匹配 awesome-c2pa 的新目录结构 (重构后)
const FILE_MAPPINGS = [
  // 英文首页
  {
    source: 'README.md',
    target: 'src/content/docs/index.md',
    note: '⚠️  需要手动添加 splash template frontmatter'
  },
  // 英文快速入门指南 (新路径: docs/guides/)
  {
    source: 'docs/guides/quick-start.md',
    target: 'src/content/docs/getting-started/quick-start.md'
  },
  // 英文常见问题 (新路径: docs/guides/)
  {
    source: 'docs/guides/faq.md',
    target: 'src/content/docs/getting-started/faq.md'
  },
];

// 为每种语言添加翻译文件映射 (新的 i18n/ 目录结构)
LANGUAGES.forEach(lang => {
  FILE_MAPPINGS.push(
    {
      source: `i18n/${lang.code}/README.md`,
      target: `src/content/docs/${lang.wikiLocale}/index.md`,
      note: '⚠️  需要手动添加 splash template frontmatter'
    },
    {
      source: `i18n/${lang.code}/quick-start.md`,
      target: `src/content/docs/${lang.wikiLocale}/getting-started/quick-start.md`
    },
    {
      source: `i18n/${lang.code}/faq.md`,
      target: `src/content/docs/${lang.wikiLocale}/getting-started/faq.md`
    }
  );
});

// PDF 规范文件 - awesome-c2pa 中的实际路径
const PDF_FILES = [
  'docs/specifications/C2PA_Specification.pdf',
  'docs/specifications/C2PA_Specification_zh-Hans.pdf',
  'docs/specifications/C2PA_Specification_ja.pdf',
  'docs/specifications/C2PA_Specification_de.pdf',
  'docs/specifications/C2PA_Specification_fr.pdf',
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
    if (mapping.note) {
      log(`   ${mapping.note}`, 'yellow');
    }
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
    const fileName = path.basename(pdfPath);
    const targetPath = path.join(WIKI_PATH, 'public/specifications', fileName);

    if (!fs.existsSync(sourcePath)) {
      log(`⚠️  PDF not found: ${pdfPath}`, 'yellow');
      return;
    }

    try {
      ensureDir(targetPath);
      fs.copyFileSync(sourcePath, targetPath);
      log(`✅ Synced PDF: ${fileName}`, 'green');
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
log(`\n${'='.repeat(70)}`, 'blue');
log(`📊 Sync Summary`, 'blue');
log(`${'='.repeat(70)}`, 'blue');

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

log(`\n📦 Synced Files:`, 'blue');
log(`   • README (English + 7 translations = 8 languages)`);
log(`   • Quick Start Guide (English + 7 translations = 8 languages)`);
log(`   • FAQ (English + 7 translations = 8 languages)`);
log(`   • PDF Specifications (5 languages)`);
log(`\n🌍 Supported Languages:`, 'blue');
log(`   • English, 简体中文, 繁體中文, 日本語, 한국어, Deutsch, Français, Русский`);

log(`\n✨ Sync completed!\n`, 'green');

// 提示下一步操作
log(`📌 Next steps:`, 'yellow');
log(`   1. Review the changes: git status`);
log(`   2. Check frontmatter for index.md files (splash template)`);
log(`   3. Test the build: npm run build`);
log(`   4. Commit: git add . && git commit -m "sync: update content from awesome-c2pa"`);
log(`   5. Push: git push\n`);

log(`⚠️  Note: README files need manual frontmatter adjustment for splash template`, 'yellow');

process.exit(failedCount > 0 ? 1 : 0);
