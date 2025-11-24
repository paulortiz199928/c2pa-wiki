# C2PA Wiki

[![Deploy to GitHub Pages](https://github.com/paulortiz199928/c2pa-wiki/actions/workflows/deploy.yml/badge.svg)](https://github.com/paulortiz199928/c2pa-wiki/actions/workflows/deploy.yml)

> 🌐 **Live Site**: [https://paulortiz199928.github.io/c2pa-wiki/](https://paulortiz199928.github.io/c2pa-wiki/)

Comprehensive documentation website for C2PA (Coalition for Content Provenance and Authenticity), built with Astro Starlight.

## 🌟 Features

- **Multi-language Support**: English and Simplified Chinese (more coming)
- **Fast Search**: Powered by Pagefind
- **Dark Mode**: Built-in theme switcher
- **Responsive Design**: Mobile-first approach
- **Automated Sync**: Content automatically synced from [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa)
- **Multi-language Specifications**: C2PA spec in 5 languages (EN, CN, JP, DE, FR)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS)
- npm or pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/paulortiz199928/c2pa-wiki.git
cd c2pa-wiki

# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:4321/c2pa-wiki/

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
c2pa-wiki/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── en/              # English content
│   │       │   ├── index.md
│   │       │   ├── getting-started/
│   │       │   ├── specifications/
│   │       │   ├── tools/
│   │       │   └── community/
│   │       └── zh/              # Chinese content
│   │           └── ...
│   ├── components/              # Custom Astro components
│   └── styles/
│       └── custom.css           # Custom styles
├── public/
│   └── specifications/          # PDF specification files
│       ├── C2PA_Specification.pdf
│       ├── C2PA_Specification_zh-Hans.pdf
│       ├── C2PA_Specification_ja.pdf
│       ├── C2PA_Specification_de.pdf
│       └── C2PA_Specification_fr.pdf
├── astro.config.mjs             # Astro configuration
├── package.json
└── README.md
```

## 📖 Content Management

### Important: Content Sync

This wiki's content is automatically synced from the [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa) repository.

**DO NOT** edit content files directly in this repository - they will be overwritten during sync.

To update content:
1. Edit content in [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa)
2. Content will be automatically synced to this wiki

### For Infrastructure Changes

You CAN directly edit:
- UI components in `src/components/`
- Styles in `src/styles/`
- Configuration in `astro.config.mjs`
- GitHub Actions workflows

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

### Technology Stack

- **Framework**: [Astro](https://astro.build/) v5.16+
- **Theme**: [Starlight](https://starlight.astro.build/) v0.36+
- **Search**: [Pagefind](https://pagefind.app/) (built-in)
- **Styling**: Custom CSS + Starlight theming
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🌍 Multi-language Support

### Available Languages

- 🇬🇧 English (`/en/`)
- 🇨🇳 简体中文 (`/zh/`)

### Adding New Languages

See the [Translation Guide](/en/community/translations/) for details on:
- Setting up new language directories
- Translating content
- Updating configuration

## 🚢 Deployment

### Automatic Deployment

- **Trigger**: Push to `main` branch
- **Platform**: GitHub Pages
- **URL**: https://paulortiz199928.github.io/c2pa-wiki/
- **Workflow**: `.github/workflows/deploy.yml`

### Manual Deployment

```bash
# Build the site
npm run build

# The output will be in ./dist/
# Deploy the contents of dist/ to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](/en/community/contributing/) for:
- How to report issues
- How to suggest improvements
- Development workflow
- Code of conduct

### Quick Contribution Guidelines

1. **For content**: Edit in [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa)
2. **For infrastructure**: Fork this repo and submit a PR
3. **For translations**: See [Translation Guide](/en/community/translations/)

## 📝 License

This project inherits the license from [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa).

Content is sourced from the awesome-c2pa repository and community contributions.

## 🔗 Related Projects

- **[awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa)** - Curated list of C2PA resources (content source)
- **[C2PA Specification](https://c2pa.org/specifications/)** - Official C2PA specification
- **[c2pa-rs](https://github.com/contentauth/c2pa-rs)** - Reference Rust implementation

## 📊 Project Status

- ✅ **Phase 1**: Foundation - Complete
- 🚧 **Phase 2**: Content Migration - In Progress
- ⏳ **Phase 3**: Automation - Planned
- ⏳ **Phase 4**: Enhancements - Planned

See [PRD.md](./PRD.md) for detailed project roadmap.

## 💬 Support & Community

- **Issues**: [GitHub Issues](https://github.com/paulortiz199928/c2pa-wiki/issues)
- **Discussions**: [GitHub Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- **Source Content**: [awesome-c2pa](https://github.com/paulortiz199928/awesome-c2pa)

## 🙏 Acknowledgments

- [C2PA Organization](https://c2pa.org) for developing the standard
- [Content Authenticity Initiative](https://contentauthenticity.org) for promoting adoption
- All contributors to awesome-c2pa
- Astro and Starlight teams for excellent tools

---

**Built with ❤️ by the C2PA community**

*Last Updated: November 2025*
