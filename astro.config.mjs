import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://c2pa.wiki',
  integrations: [
    starlight({
      title: 'C2PA Wiki',
      description: 'Comprehensive documentation for the Coalition for Content Provenance and Authenticity',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/paulortiz199928/awesome-c2pa',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            zh: '入门指南',
          },
          items: [
            {
              label: 'Introduction',
              link: '/',
              translations: { zh: '简介' }
            },
            {
              label: 'Quick Start',
              link: '/getting-started/quick-start/',
              translations: { zh: '快速入门' }
            },
            {
              label: 'FAQ',
              link: '/getting-started/faq/',
              translations: { zh: '常见问题' }
            },
          ],
        },
        {
          label: 'Specifications',
          translations: {
            zh: '技术规范',
          },
          items: [
            {
              label: 'Overview',
              link: '/specifications/',
              translations: { zh: '概述' }
            },
            {
              label: 'C2PA Specification v2.2',
              link: '/specifications/C2PA_Specification.pdf',
              translations: { zh: 'C2PA 规范 v2.2' },
              attrs: { target: '_blank' }
            },
          ],
        },
        {
          label: 'Tools & Libraries',
          translations: {
            zh: '工具和库',
          },
          items: [
            {
              label: 'Official Tools',
              link: '/tools/official/',
              translations: { zh: '官方工具' }
            },
          ],
        },
        {
          label: 'Community',
          translations: {
            zh: '社区',
          },
          items: [
            {
              label: 'Contributing',
              link: '/community/contributing/',
              translations: { zh: '贡献指南' }
            },
            {
              label: 'Translation Guide',
              link: '/community/translations/',
              translations: { zh: '翻译指南' }
            },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      editLink: {
        baseUrl: 'https://github.com/paulortiz199928/awesome-c2pa/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'C2PA Wiki - Content Provenance Documentation',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Comprehensive documentation for C2PA (Coalition for Content Provenance and Authenticity)',
          },
        },
        // Google Analytics
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-7TVHW743JG',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TVHW743JG');
          `,
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: [],
      wrap: true,
    },
  },
});
