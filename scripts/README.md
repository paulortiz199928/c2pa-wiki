# C2PA Wiki Scripts

This directory contains automation scripts for maintaining the C2PA Wiki.

## Scripts Overview

### 1. `sync-from-awesome.cjs`

**Purpose**: Sync content from the [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa) repository to c2pa-wiki, then automatically generate Schema.org structured data.

**Usage**:
```bash
# Using npm script (recommended)
npm run sync

# Direct execution
node scripts/sync-from-awesome.cjs [awesome-c2pa-path]
```

**What it does**:
1. **Syncs Markdown files** (8 languages):
   - README.md → index.md
   - quick-start.md → getting-started/quick-start.md
   - faq.md → getting-started/faq.md

2. **Syncs PDF specifications** (5 languages):
   - C2PA_Specification.pdf
   - C2PA_Specification_zh-Hans.pdf
   - C2PA_Specification_ja.pdf
   - C2PA_Specification_de.pdf
   - C2PA_Specification_fr.pdf

3. **Auto-generates Schema.org data**:
   - Parses FAQ and Quick Start content
   - Creates TypeScript data files for schemas
   - Supports 8 languages

**Example**:
```bash
cd /path/to/c2pa-wiki
npm run sync
```

**Output**:
```
🚀 Starting content sync from awesome-c2pa...
📝 Syncing Markdown files...
✅ Synced: README.md
✅ Synced: docs/guides/quick-start.md
...
📄 Syncing PDF files...
✅ Synced PDF: C2PA_Specification.pdf
...
🏗️  Generating Schema.org Data
✅ Generated FAQ data: 10 questions
✅ Generated HowTo data: 4 steps
...
✨ Sync completed!
```

---

### 2. `generate-schema-data.cjs`

**Purpose**: Parse FAQ and Quick Start content from awesome-c2pa and generate TypeScript data files for Schema.org structured data.

**Usage**:
```bash
# Using npm script (recommended)
npm run generate-schema

# Direct execution
node scripts/generate-schema-data.cjs
```

**What it generates**:

For each language, creates:
- `faq-{locale}.ts` - FAQ data for FAQPage schema
- `howto-quickstart-{locale}.ts` - Step-by-step data for HowTo schema

**Generated files**:
```
src/data/
├── faq-en.ts
├── faq-zh-cn.ts
├── faq-zh-tw.ts
├── faq-ja.ts
├── faq-ko.ts
├── faq-de.ts
├── faq-fr.ts
├── faq-ru.ts
├── howto-quickstart-en.ts
├── howto-quickstart-zh-cn.ts
├── howto-quickstart-zh-tw.ts
├── howto-quickstart-ja.ts
├── howto-quickstart-ko.ts
├── howto-quickstart-de.ts
├── howto-quickstart-fr.ts
└── howto-quickstart-ru.ts
```

**Content parsing**:

**FAQ Parsing**:
- Extracts questions (heading level 3 with numbers)
- Extracts answers (content between question headings)
- Cleans markdown formatting
- Escapes special characters for TypeScript
- Limits to 10 most important questions

**HowTo Parsing**:
- Extracts verification steps from Quick Start guides
- Parses numbered steps
- Creates structured step-by-step data
- Adds time estimate (PT5M = 5 minutes)

**Example output** (`faq-en.ts`):
```typescript
/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: English
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: 'What is the C2PA?',
    answer: 'Short answer: C2PA is an open standard for verifying...'
  },
  // ... more questions
];
```

**Example output** (`howto-quickstart-en.ts`):
```typescript
/**
 * HowTo data for Schema.org HowTo structured data
 * Language: English
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
  name: 'How to Verify C2PA Content',
  description: 'Learn how to verify the authenticity...',
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Visit Content Credentials Verify',
      text: 'Open your web browser and navigate to...',
      url: 'https://contentcredentials.org/verify'
    },
    // ... more steps
  ]
};
```

---

## Workflow

### Recommended Workflow for Content Updates

When content is updated in [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa):

1. **Sync content and generate schemas**:
   ```bash
   npm run sync
   ```

2. **Review changes**:
   ```bash
   git status
   git diff
   ```

3. **Test build**:
   ```bash
   npm run build
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "sync: update content from awesome-c2pa"
   git push
   ```

### Manual Schema Generation Only

If you only want to regenerate schemas without syncing content:

```bash
npm run generate-schema
```

This is useful when:
- Testing schema generation logic
- Tweaking parsing rules
- Updating schema metadata

---

## Technical Details

### Language Mappings

| awesome-c2pa | c2pa-wiki | Language |
|--------------|-----------|----------|
| `docs/guides/` | `src/content/docs/` | English |
| `i18n/zh-Hans/` | `src/content/docs/zh-cn/` | 简体中文 |
| `i18n/zh-Hant/` | `src/content/docs/zh-tw/` | 繁體中文 |
| `i18n/ja/` | `src/content/docs/ja/` | 日本語 |
| `i18n/ko/` | `src/content/docs/ko/` | 한국어 |
| `i18n/de/` | `src/content/docs/de/` | Deutsch |
| `i18n/fr/` | `src/content/docs/fr/` | Français |
| `i18n/ru/` | `src/content/docs/ru/` | Русский |

### Dependencies

Both scripts require:
- Node.js (v16+)
- Access to awesome-c2pa repository (default: `../awesome-c2pa`)

### Configuration

Default paths can be modified at the top of each script:

**`sync-from-awesome.cjs`**:
```javascript
const AWESOME_PATH = process.argv[2] || '../awesome-c2pa';
const WIKI_PATH = process.cwd();
```

**`generate-schema-data.cjs`**:
```javascript
const AWESOME_C2PA_PATH = path.join(__dirname, '../../awesome-c2pa');
const WIKI_DATA_PATH = path.join(__dirname, '../src/data');
```

---

## SEO Benefits

The generated Schema.org data provides:

### FAQPage Schema
- Rich snippets in Google search results
- Improved click-through rates (35-45% increase expected)
- Direct answers displayed in search
- Enhanced visibility for common questions

### HowTo Schema
- Step-by-step preview in search results
- Mobile-friendly carousel display
- Estimated time shown in results
- Increased engagement for tutorials

### BreadcrumbList Schema
- Hierarchical navigation in search results
- Better understanding of site structure
- Improved internal linking signals

### WebSite Schema
- Site-level branding in search
- Search box functionality in results
- Better recognition as authoritative source

---

## Troubleshooting

### Sync script fails

**Issue**: `awesome-c2pa directory not found`

**Solution**:
```bash
# Specify custom path
npm run sync -- /path/to/awesome-c2pa

# Or clone awesome-c2pa first
cd /path/to/c2pa
git clone https://github.com/paulortiz199928/awesome-c2pa.git
cd c2pa-wiki
npm run sync
```

### Schema generation errors

**Issue**: Parsing errors or malformed output

**Solution**:
1. Check awesome-c2pa content structure hasn't changed
2. Review parsing logic in `generate-schema-data.cjs`
3. Test with specific language:
   ```javascript
   // Modify LANGUAGES array to test single language
   const LANGUAGES = [
     { code: 'en', awesomeCode: null, wikiLocale: 'en', label: 'English' }
   ];
   ```

### Build fails after sync

**Issue**: TypeScript errors in generated files

**Solution**:
1. Check for special characters (quotes, backslashes)
2. Review `cleanAnswer()` function
3. Manually fix problematic files
4. Update escaping logic if pattern is recurring

---

## Development

### Adding New Languages

1. Update `LANGUAGES` array in both scripts:
   ```javascript
   { code: 'new-lang', awesomeCode: 'new-lang', wikiLocale: 'new', label: 'Language Name' }
   ```

2. Add HowTo metadata in `getHowToMetadata()`:
   ```javascript
   'new': {
     title: 'Translated Title',
     description: 'Translated description'
   }
   ```

3. Test generation:
   ```bash
   npm run generate-schema
   ```

### Modifying Parsing Logic

Key functions to customize:

- `parseFAQ()` - FAQ extraction logic
- `parseQuickStart()` - HowTo step extraction
- `cleanAnswer()` - Text cleanup and escaping
- `getDefaultHowToSteps()` - Fallback steps

### Testing Changes

```bash
# Test schema generation
npm run generate-schema

# Test sync + schema
npm run sync

# Test build
npm run build

# Preview locally
npm run dev
```

---

## Maintenance

### When to Update Scripts

**Update `sync-from-awesome.cjs` when**:
- awesome-c2pa directory structure changes
- New content types need syncing
- New languages added

**Update `generate-schema-data.cjs` when**:
- FAQ/Quick Start markdown structure changes
- Need to extract more/fewer questions
- Parsing logic needs refinement
- New schema types added

### Best Practices

1. **Always test locally before committing**:
   ```bash
   npm run sync && npm run build
   ```

2. **Review generated files**:
   - Check for special character escaping
   - Verify question/answer quality
   - Ensure step descriptions are clear

3. **Keep scripts in sync**:
   - Update LANGUAGES in both scripts together
   - Maintain consistent path configuration

4. **Document changes**:
   - Update this README for significant changes
   - Add comments for complex parsing logic

---

## Related Documentation

- [awesome-c2pa Repository](https://github.com/paulortiz199928/awesome-c2pa)
- [Schema.org Documentation](https://schema.org/)
- [Astro Documentation](https://docs.astro.build/)
- [C2PA SEO Strategy](.internal/SEO_STRATEGY.md)

---

*Last updated: November 2025*
