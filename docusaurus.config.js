import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'MU Backend',
  tagline: 'Documentação do backend do Website da Maratona Unioeste',
  favicon: 'img/favicon.svg',

  url: 'https://mudocs.dev',
  baseUrl: '/',

  organizationName: 'joaovdamaceno',
  projectName: 'mu-backend-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/joaovdamaceno/mu-backend-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'MU Backend',
        logo: {
          alt: 'MU Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/joaovdamaceno/mu-backend',
            label: 'Backend (GitHub)',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projeto',
            items: [
              {
                label: 'Backend (GitHub)',
                href: 'https://github.com/joaovdamaceno/mu-backend',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Endpoints',
                to: '/api/endpoints',
              },
                label: 'Contributing / Dev Notes',
                to: '/dev-notes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MU.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
