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
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
        'zh-tw': {
          label: '繁體中文',
          lang: 'zh-TW',
        },
        'ja': {
          label: '日本語',
          lang: 'ja',
        },
        'ko': {
          label: '한국어',
          lang: 'ko',
        },
        'de': {
          label: 'Deutsch',
          lang: 'de',
        },
        'fr': {
          label: 'Français',
          lang: 'fr',
        },
        'ru': {
          label: 'Русский',
          lang: 'ru',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            'zh-CN': '入门指南',
            'zh-TW': '入門指南',
            'ja': 'はじめに',
            'ko': '시작하기',
            'de': 'Erste Schritte',
            'fr': 'Commencer',
            'ru': 'Начало работы',
          },
          items: [
            {
              label: 'Introduction',
              link: '/',
              translations: {
                'zh-CN': '简介',
                'zh-TW': '簡介',
                'ja': '紹介',
                'ko': '소개',
                'de': 'Einführung',
                'fr': 'Introduction',
                'ru': 'Введение',
              }
            },
            {
              label: 'Quick Start',
              link: '/getting-started/quick-start/',
              translations: {
                'zh-CN': '快速入门',
                'zh-TW': '快速入門',
                'ja': 'クイックスタート',
                'ko': '빠른 시작',
                'de': 'Schnellstart',
                'fr': 'Démarrage rapide',
                'ru': 'Быстрый старт',
              }
            },
            {
              label: 'FAQ',
              link: '/getting-started/faq/',
              translations: {
                'zh-CN': '常见问题',
                'zh-TW': '常見問題',
                'ja': 'よくある質問',
                'ko': '자주 묻는 질문',
                'de': 'FAQ',
                'fr': 'FAQ',
                'ru': 'Часто задаваемые вопросы',
              }
            },
          ],
        },
        {
          label: 'Specifications',
          translations: {
            'zh-CN': '技术规范',
            'zh-TW': '技術規範',
            'ja': '仕様',
            'ko': '사양',
            'de': 'Spezifikationen',
            'fr': 'Spécifications',
            'ru': 'Спецификации',
          },
          items: [
            {
              label: 'Overview',
              link: '/specifications/',
              translations: {
                'zh-CN': '概述',
                'zh-TW': '概述',
                'ja': '概要',
                'ko': '개요',
                'de': 'Übersicht',
                'fr': 'Aperçu',
                'ru': 'Обзор',
              }
            },
            {
              label: 'C2PA Specification v2.2',
              link: '/specifications/C2PA_Specification.pdf',
              translations: {
                'zh-CN': 'C2PA 规范 v2.2',
                'zh-TW': 'C2PA 規範 v2.2',
                'ja': 'C2PA 仕様 v2.2',
                'ko': 'C2PA 사양 v2.2',
                'de': 'C2PA Spezifikation v2.2',
                'fr': 'Spécification C2PA v2.2',
                'ru': 'Спецификация C2PA v2.2',
              },
              attrs: { target: '_blank' }
            },
          ],
        },
        {
          label: 'Tools & Libraries',
          translations: {
            'zh-CN': '工具和库',
            'zh-TW': '工具和庫',
            'ja': 'ツールとライブラリ',
            'ko': '도구 및 라이브러리',
            'de': 'Werkzeuge & Bibliotheken',
            'fr': 'Outils et bibliothèques',
            'ru': 'Инструменты и библиотеки',
          },
          items: [
            {
              label: 'Official Tools',
              link: '/tools/official/',
              translations: {
                'zh-CN': '官方工具',
                'zh-TW': '官方工具',
                'ja': '公式ツール',
                'ko': '공식 도구',
                'de': 'Offizielle Werkzeuge',
                'fr': 'Outils officiels',
                'ru': 'Официальные инструменты',
              }
            },
          ],
        },
        {
          label: 'Community',
          translations: {
            'zh-CN': '社区',
            'zh-TW': '社群',
            'ja': 'コミュニティ',
            'ko': '커뮤니티',
            'de': 'Community',
            'fr': 'Communauté',
            'ru': 'Сообщество',
          },
          items: [
            {
              label: 'Contributing',
              link: '/community/contributing/',
              translations: {
                'zh-CN': '贡献指南',
                'zh-TW': '貢獻指南',
                'ja': '貢献ガイド',
                'ko': '기여 가이드',
                'de': 'Beitragen',
                'fr': 'Contribuer',
                'ru': 'Руководство по внесению вклада',
              }
            },
            {
              label: 'Translation Guide',
              link: '/community/translations/',
              translations: {
                'zh-CN': '翻译指南',
                'zh-TW': '翻譯指南',
                'ja': '翻訳ガイド',
                'ko': '번역 가이드',
                'de': 'Übersetzungsleitfaden',
                'fr': 'Guide de traduction',
                'ru': 'Руководство по переводу',
              }
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
