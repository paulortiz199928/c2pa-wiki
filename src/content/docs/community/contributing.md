---
title: Contributing Guide
description: How to contribute to the C2PA community
sidebar:
  order: 1
lastUpdated: 2025-11-24
---

Thank you for your interest in contributing to the C2PA Wiki! This guide will help you get started.

## Ways to Contribute

### 1. Improve Documentation

- Fix typos or clarify explanations
- Add examples and tutorials
- Update outdated information
- Translate content to new languages

### 2. Report Issues

Found a problem? Let us know:
- [Report documentation issues](https://github.com/paulortiz199928/issues)
- [Report content issues](https://github.com/paulortiz199928/awesome-c2pa/issues)
- [Report translation errors](https://github.com/paulortiz199928/awesome-c2pa/issues/new?template=translation.md)

### 3. Add Resources

Help expand the awesome-c2pa list:
- New tools and libraries
- Tutorials and articles
- Use cases and demos
- Implementation examples

### 4. Improve Translations

Help make C2PA accessible worldwide:
- Review AI-generated translations
- Translate documentation to new languages
- Update existing translations

## Getting Started

### For awesome-c2pa Repository

This is the source of truth for all content:

1. Fork the [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa) repository
2. Create a feature branch: `git checkout -b feature/my-contribution`
3. Make your changes
4. Submit a pull request

### For c2pa-wiki Repository

For infrastructure and UI improvements:

1. Fork the [c2pa-wiki](https://github.com/paulortiz199928/c2pa-wiki) repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Make changes and test locally
5. Submit a pull request

**Note**: Don't edit synced content directly in c2pa-wiki - it will be overwritten. Edit source content in awesome-c2pa instead.

## Content Guidelines

### Quality Standards

Contributions should be:
- **Accurate**: Fact-checked and technically correct
- **Relevant**: Related to C2PA implementation or understanding
- **Well-written**: Clear, concise, and properly formatted
- **Up-to-date**: Recent and actively maintained

### Markdown Style

Use GitHub-flavored markdown:
- Use heading hierarchy (h1, h2, h3)
- Add code blocks with language tags
- Include descriptive link text
- Use tables for structured data

Example:
```markdown
## Section Title

Clear explanation here.

### Subsection

```javascript
// Code example with language tag
const manifest = await c2pa.read('image.jpg');
```

[Descriptive link text](https://example.com)
\```

## Translation Guidelines

### Translation Process

1. **Check existing translations**: Avoid duplicating work
2. **Use translation tools**: DeepL, Google Translate for initial draft
3. **Review carefully**: Ensure technical accuracy
4. **Test locally**: Verify formatting and links
5. **Submit for review**: Include notes about translation choices

### Translation Checklist

- [ ] Technical terms translated correctly
- [ ] Code examples remain in English
- [ ] Links updated to localized versions (when available)
- [ ] Frontmatter includes correct language metadata
- [ ] Formatting preserved

## Code of Conduct

Be respectful and professional:
- Be welcoming to newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

## Questions?

- [GitHub Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- [Open an issue](https://github.com/paulortiz199928/awesome-c2pa/issues)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to C2PA!**
