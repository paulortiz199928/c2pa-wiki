---
title: Translation Guide
description: Guidelines for translating C2PA documentation
sidebar:
  order: 2
lastUpdated: 2025-11-24
---

Help make C2PA accessible to developers worldwide by contributing translations.

## Current Translation Status

### Available Languages

| Language | Status | Completeness |
|----------|--------|--------------|
| 🇬🇧 English | Official | 100% |
| 🇨🇳 简体中文 | Beta | ~80% |
| 🇯🇵 日本語 | Beta | Spec only |
| 🇩🇪 Deutsch | Beta | Spec only |
| 🇫🇷 Français | Beta | Spec only |

### Planned Languages

- 🇰🇷 Korean (한국어)
- 🇪🇸 Spanish (Español)
- 🇵🇹 Portuguese (Português)
- 🇮🇳 Hindi (हिन्दी)

## How to Contribute Translations

### 1. Choose Your Contribution Type

**Option A: Review Existing Translations**
- Check AI-generated translations for errors
- Report issues or suggest improvements
- Verify technical term accuracy

**Option B: Translate New Content**
- Translate documentation pages
- Translate tutorials and guides
- Create language-specific examples

**Option C: Add a New Language**
- Translate core pages (README, FAQ, Quick Start)
- Translate the specification summary
- Set up language infrastructure

### 2. Translation Workflow

#### For Reviewing Translations

1. Read the translated content
2. Compare with English original
3. [Report errors](https://github.com/paulortiz199928/awesome-c2pa/issues/new?template=translation.md)
4. Suggest corrections

#### For New Translations

1. Check if translation exists
2. Use translation tools (DeepL recommended)
3. Review and refine the output
4. Test formatting and links
5. Submit pull request

### 3. Technical Translation Guidelines

#### Technical Terms

**Keep in English** (use transliteration when needed):
- C2PA (Coalition for Content Provenance and Authenticity)
- Manifest
- Assertion
- Claim

**Translate carefully**:
- Content Provenance → 内容来源 (Chinese)
- Authenticity → 真实性
- Signature → 签名
- Trust Model → 信任模型

#### Code and Commands

**Never translate**:
- Code examples
- Command names
- API endpoints
- File paths

```javascript
// ✅ GOOD: Keep code in English
const manifest = await c2pa.read('image.jpg');

// ❌ BAD: Don't translate code
const 清单 = await c2pa.读取('image.jpg');
```

#### Links

Update links to localized versions:
```markdown
<!-- English -->
[FAQ](/c2pa-wiki/en/getting-started/faq/)

<!-- Chinese -->
[常见问题](/c2pa-wiki/zh/getting-started/faq/)
```

### 4. Quality Standards

#### Accuracy Checklist

- [ ] Technical terms translated correctly
- [ ] Context preserved
- [ ] Natural-sounding language
- [ ] No machine translation artifacts
- [ ] Links point to correct pages

#### Formatting Checklist

- [ ] Markdown formatting preserved
- [ ] Code blocks unchanged
- [ ] Tables formatted correctly
- [ ] Frontmatter updated

## Translation Tools

### Recommended Tools

1. **DeepL** - Best quality for technical content
2. **Google Translate** - Good alternative
3. **Microsoft Translator** - Good for technical docs
4. **CAT Tools** - For large projects (e.g., OmegaT, Trados)

### Dictionary Resources

- [Microsoft Language Portal](https://www.microsoft.com/en-us/language) - Technical term glossary
- [Google Translate Community](https://translate.google.com/community)

## File Organization

### Directory Structure

```
src/content/docs/
├── en/                    # English (source)
│   ├── index.md
│   ├── getting-started/
│   │   ├── quick-start.md
│   │   └── faq.md
│   └── specifications/
│       └── index.md
└── zh/                    # Chinese
    ├── index.md
    ├── getting-started/
    │   ├── quick-start.md
    │   └── faq.md
    └── specifications/
        └── index.md
```

### Frontmatter Example

```yaml
---
title: Quick Start Guide       # Translate
description: Get started...    # Translate
sidebar:
  order: 1                     # Keep same
lastUpdated: 2025-11-24       # Update to translation date
---
```

## Reporting Issues

Found a translation error?

1. Go to [Issues](https://github.com/paulortiz199928/awesome-c2pa/issues/new?template=translation.md)
2. Select "Translation Issue" template
3. Provide:
   - Language
   - Page/section
   - Current translation
   - Suggested correction
   - Context/explanation

## Recognition

Contributors will be credited:
- In the repository README
- In commit messages
- In release notes

## Questions?

- [GitHub Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- [Translation Issues](https://github.com/paulortiz199928/awesome-c2pa/issues?q=label%3Atranslation)

---

**Thank you for making C2PA accessible to everyone!**
