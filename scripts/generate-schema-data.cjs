#!/usr/bin/env node

/**
 * Generate Schema.org structured data from awesome-c2pa Markdown files
 *
 * This script parses FAQ and Quick Start guides from awesome-c2pa repository
 * and generates TypeScript data files for Schema.org markup.
 */

const fs = require('fs');
const path = require('path');

// Path configurations
const AWESOME_C2PA_PATH = path.join(__dirname, '../../awesome-c2pa');
const WIKI_DATA_PATH = path.join(__dirname, '../src/data');

// Language mappings
const LANGUAGES = [
  { code: 'en', awesomeCode: null, wikiLocale: 'en', label: 'English' },
  { code: 'zh-Hans', awesomeCode: 'zh-Hans', wikiLocale: 'zh-cn', label: '简体中文' },
  { code: 'zh-Hant', awesomeCode: 'zh-Hant', wikiLocale: 'zh-tw', label: '繁體中文' },
  { code: 'ja', awesomeCode: 'ja', wikiLocale: 'ja', label: '日本語' },
  { code: 'ko', awesomeCode: 'ko', wikiLocale: 'ko', label: '한국어' },
  { code: 'de', awesomeCode: 'de', wikiLocale: 'de', label: 'Deutsch' },
  { code: 'fr', awesomeCode: 'fr', wikiLocale: 'fr', label: 'Français' },
  { code: 'ru', awesomeCode: 'ru', wikiLocale: 'ru', label: 'Русский' },
];

/**
 * Parse FAQ markdown and extract Q&A pairs
 */
function parseFAQ(markdownContent, maxQuestions = 10) {
  const faqs = [];
  const lines = markdownContent.split('\n');

  let currentQuestion = null;
  let currentAnswer = [];
  let inAnswer = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match question headings like "### 1. What is C2PA?"
    const questionMatch = line.match(/^###\s+\d+\.\s+(.+)$/);

    if (questionMatch) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: cleanAnswer(currentAnswer.join('\n'))
        });

        if (faqs.length >= maxQuestions) {
          break;
        }
      }

      // Start new question
      currentQuestion = questionMatch[1].trim();
      currentAnswer = [];
      inAnswer = true;
      continue;
    }

    // Stop collecting answer when hitting next section or major heading
    if (inAnswer && (line.startsWith('## ') || line.startsWith('---'))) {
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: cleanAnswer(currentAnswer.join('\n'))
        });

        if (faqs.length >= maxQuestions) {
          break;
        }
      }
      inAnswer = false;
      currentQuestion = null;
      currentAnswer = [];
      continue;
    }

    // Collect answer content
    if (inAnswer && line.trim() !== '') {
      currentAnswer.push(line);
    }
  }

  // Add last Q&A if exists
  if (currentQuestion && currentAnswer.length > 0 && faqs.length < maxQuestions) {
    faqs.push({
      question: currentQuestion,
      answer: cleanAnswer(currentAnswer.join('\n'))
    });
  }

  return faqs;
}

/**
 * Clean answer text for schema output
 */
function cleanAnswer(text) {
  return text
    .trim()
    // Remove markdown bold/italic
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    // Remove markdown links but keep text
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`(.+?)`/g, '$1')
    // Remove markdown tables (simplified)
    .replace(/\|.+\|/g, '')
    // Collapse multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    // Replace Chinese quotes with English for TypeScript compatibility
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .replace(/'/g, "'")
    .replace(/'/g, "'")
    // Escape single quotes for JavaScript strings
    .replace(/'/g, "\\'")
    .trim();
}

/**
 * Parse Quick Start guide and extract steps for HowTo schema
 */
function parseQuickStart(markdownContent, language) {
  const steps = [];

  // Extract verification section (most important for beginners)
  const verifyMatch = markdownContent.match(/## (?:Verifying|验证|驗證|検証|확인|Vérifier|Verificar|Проверка) C2PA (?:Content|内容|內容|コンテンツ|콘텐츠|contenu|contenido|содержимого)[\s\S]*?(?=\n## |\n---|\z)/i);

  if (!verifyMatch) {
    return getDefaultHowToSteps(language);
  }

  const verifySection = verifyMatch[0];

  // Try to extract from "Method 1: Online Tool" section (for en/zh-Hans/zh-Hant)
  const method1Match = verifySection.match(/### Method 1.*?\n\n(?:.*?\n\n)?(\d+\..+?)(?=\n\n(?:###|\*\*Try))/s);

  if (method1Match) {
    // Parse numbered list from Method 1
    const listText = method1Match[1];
    const lines = listText.split('\n');

    let currentStep = null;
    let currentText = [];

    for (const line of lines) {
      const stepMatch = line.match(/^(\d+)\.\s+(.+)$/);

      if (stepMatch) {
        // Save previous step
        if (currentStep) {
          steps.push({
            name: currentStep,
            text: cleanAnswer(currentText.join(' '))
          });
        }

        currentStep = stepMatch[2].trim();
        currentText = [];
      } else if (currentStep && line.trim() && line.trim().startsWith('-')) {
        // Collect bullet points as part of description
        currentText.push(line.trim());
      }
    }

    // Add last step
    if (currentStep) {
      steps.push({
        name: currentStep,
        text: cleanAnswer(currentText.join(' '))
      });
    }
  }

  // If Method 1 parsing failed, try direct numbered list parsing
  if (steps.length === 0) {
    const lines = verifySection.split('\n');
    let currentStep = null;
    let currentText = [];

    for (const line of lines) {
      // Match step numbers like "1. Visit" or "**1. Step**"
      const stepMatch = line.match(/^(?:\*\*)?\d+\.\s+(.+?)(?:\*\*)?$/);

      if (stepMatch) {
        // Save previous step
        if (currentStep && currentText.length > 0) {
          steps.push({
            name: currentStep,
            text: cleanAnswer(currentText.join(' '))
          });
        }

        currentStep = stepMatch[1].trim();
        currentText = [];
        continue;
      }

      // Collect step description (but skip code blocks and method headings)
      if (currentStep && line.trim() !== '' && !line.startsWith('#') && !line.startsWith('```')) {
        currentText.push(line.trim());
      }
    }

    // Add last step
    if (currentStep && currentText.length > 0) {
      steps.push({
        name: currentStep,
        text: cleanAnswer(currentText.join(' '))
      });
    }
  }

  // If parsing still failed, return default steps
  if (steps.length === 0) {
    return getDefaultHowToSteps(language);
  }

  return steps.slice(0, 5); // Max 5 steps
}

/**
 * Get default HowTo steps based on language
 */
function getDefaultHowToSteps(language) {
  const defaults = {
    'en': [
      { name: 'Visit Content Credentials Verify', text: 'Open your web browser and navigate to https://contentcredentials.org/verify to access the official C2PA verification tool.' },
      { name: 'Upload your media file', text: 'Drag and drop your image, video, or document onto the verification page, or click to browse and select the file from your device.' },
      { name: 'Review provenance information', text: 'Examine the displayed information including creator identity, creation date, editing history, and signature validation status.' },
      { name: 'Verify signature status', text: 'Check that the signature shows as Valid with a green checkmark, confirming the content has not been tampered with since signing.' }
    ],
    'zh-cn': [
      { name: '访问内容凭证验证工具', text: '打开网页浏览器并访问 https://contentcredentials.org/verify 以使用官方 C2PA 验证工具。' },
      { name: '上传媒体文件', text: '将图片、视频或文档拖放到验证页面，或点击浏览并从设备中选择文件。' },
      { name: '查看来源信息', text: '检查显示的信息，包括创作者身份、创建日期、编辑历史和签名验证状态。' },
      { name: '验证签名状态', text: '确认签名显示为有效并带有绿色勾号，这表明内容自签名后未被篡改。' }
    ]
  };

  return defaults[language] || defaults['en'];
}

/**
 * Generate TypeScript FAQ data file
 */
function generateFAQDataFile(faqs, locale, label) {
  const faqsCode = faqs.map(faq => `  {
    question: '${faq.question}',
    answer: '${faq.answer}'
  }`).join(',\n');

  return `/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: ${label}
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
${faqsCode}
];
`;
}

/**
 * Generate TypeScript HowTo data file
 */
function generateHowToDataFile(steps, locale, label, title, description) {
  const stepsCode = steps.map((step, index) => {
    const hasUrl = index === 0;
    const parts = [];

    parts.push('    {');
    parts.push(`      name: '${step.name}',`);
    parts.push(`      text: '${step.text || ''}'${hasUrl ? ',' : ''}`);

    if (hasUrl) {
      parts.push(`      url: 'https://contentcredentials.org/verify'`);
    }

    parts.push('    }');

    return parts.join('\n');
  }).join(',\n');

  return `/**
 * HowTo data for Schema.org HowTo structured data
 * Language: ${label}
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: '${title}',
  description: '${description}',
  totalTime: 'PT5M',
  steps: [
${stepsCode}
  ]
};
`;
}

/**
 * Get HowTo title and description by language
 */
function getHowToMetadata(locale) {
  const metadata = {
    'en': {
      title: 'How to Verify C2PA Content',
      description: 'Learn how to verify the authenticity and provenance of digital content using C2PA tools in just 5 minutes.'
    },
    'zh-cn': {
      title: '如何验证 C2PA 内容',
      description: '学习如何使用 C2PA 工具验证数字内容的真实性和来源，仅需 5 分钟。'
    },
    'zh-tw': {
      title: '如何驗證 C2PA 內容',
      description: '學習如何使用 C2PA 工具驗證數位內容的真實性和來源，僅需 5 分鐘。'
    },
    'ja': {
      title: 'C2PA コンテンツの検証方法',
      description: 'C2PA ツールを使用してデジタルコンテンツの真正性と出所を検証する方法を、わずか 5 分で学びます。'
    },
    'ko': {
      title: 'C2PA 콘텐츠 확인 방법',
      description: '단 5분 만에 C2PA 도구를 사용하여 디지털 콘텐츠의 진위성과 출처를 확인하는 방법을 배웁니다.'
    },
    'de': {
      title: 'So überprüfen Sie C2PA-Inhalte',
      description: 'Erfahren Sie in nur 5 Minuten, wie Sie die Authentizität und Herkunft digitaler Inhalte mit C2PA-Tools überprüfen.'
    },
    'fr': {
      title: 'Comment vérifier le contenu C2PA',
      description: 'Apprenez à vérifier l&#39;authenticité et la provenance du contenu numérique à l&#39;aide des outils C2PA en seulement 5 minutes.'
    },
    'ru': {
      title: 'Как проверить контент C2PA',
      description: 'Узнайте, как проверить подлинность и происхождение цифрового контента с помощью инструментов C2PA всего за 5 минут.'
    }
  };

  return metadata[locale] || metadata['en'];
}

/**
 * Main generation function
 */
function generateSchemaData() {
  console.log('🚀 Generating Schema.org data from awesome-c2pa...\n');

  let generated = 0;
  let skipped = 0;

  for (const lang of LANGUAGES) {
    console.log(`📝 Processing ${lang.label} (${lang.wikiLocale})...`);

    // Determine source paths
    const faqPath = lang.awesomeCode
      ? path.join(AWESOME_C2PA_PATH, 'i18n', lang.awesomeCode, 'faq.md')
      : path.join(AWESOME_C2PA_PATH, 'docs/guides', 'faq.md');

    const quickStartPath = lang.awesomeCode
      ? path.join(AWESOME_C2PA_PATH, 'i18n', lang.awesomeCode, 'quick-start.md')
      : path.join(AWESOME_C2PA_PATH, 'docs/guides', 'quick-start.md');

    // Check if source files exist
    if (!fs.existsSync(faqPath)) {
      console.log(`  ⚠️  FAQ not found: ${faqPath}`);
      skipped++;
      continue;
    }

    if (!fs.existsSync(quickStartPath)) {
      console.log(`  ⚠️  Quick Start not found: ${quickStartPath}`);
      skipped++;
      continue;
    }

    try {
      // Generate FAQ data
      const faqContent = fs.readFileSync(faqPath, 'utf-8');
      const faqs = parseFAQ(faqContent, 10);

      if (faqs.length > 0) {
        const faqDataFile = generateFAQDataFile(faqs, lang.wikiLocale, lang.label);
        const faqOutputPath = path.join(WIKI_DATA_PATH, `faq-${lang.wikiLocale}.ts`);
        fs.writeFileSync(faqOutputPath, faqDataFile, 'utf-8');
        console.log(`  ✅ Generated FAQ data: ${faqs.length} questions`);
        generated++;
      }

      // Generate HowTo data
      const quickStartContent = fs.readFileSync(quickStartPath, 'utf-8');
      const steps = parseQuickStart(quickStartContent, lang.wikiLocale);
      const { title, description } = getHowToMetadata(lang.wikiLocale);

      if (steps.length > 0) {
        const howToDataFile = generateHowToDataFile(steps, lang.wikiLocale, lang.label, title, description);
        const howToOutputPath = path.join(WIKI_DATA_PATH, `howto-quickstart-${lang.wikiLocale}.ts`);
        fs.writeFileSync(howToOutputPath, howToDataFile, 'utf-8');
        console.log(`  ✅ Generated HowTo data: ${steps.length} steps`);
        generated++;
      }

    } catch (error) {
      console.error(`  ❌ Error processing ${lang.label}:`, error.message);
      skipped++;
    }

    console.log('');
  }

  console.log(`\n✨ Generation complete!`);
  console.log(`   Generated: ${generated} files`);
  console.log(`   Skipped: ${skipped} files`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review generated files in ${WIKI_DATA_PATH}`);
  console.log(`   2. Run 'npm run build' to verify schemas`);
  console.log(`   3. Commit changes if everything looks good`);
}

// Run if executed directly
if (require.main === module) {
  generateSchemaData();
}

module.exports = { generateSchemaData, parseFAQ, parseQuickStart };
