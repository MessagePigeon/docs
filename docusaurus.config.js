// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '飞鸽传书',
  tagline: '校园远程通知平台',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MessagePigeon', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'guide',
          path: 'docs/guide',
          routeBasePath: 'guide-docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MessagePigeon/docs/blob/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'deploy',
        path: 'docs/deploy',
        routeBasePath: 'deploy-docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/MessagePigeon/docs/blob/dev/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '飞鸽传书',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '使用指南',
            docsPluginId: 'guide',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '部署教程',
            docsPluginId: 'deploy',
          },
          {
            href: 'https://github.com/MessagePigeon/server',
            label: '后端',
            position: 'right',
          },
          {
            href: 'https://github.com/MessagePigeon/client-teacher',
            label: '教师端',
            position: 'right',
          },
          {
            href: 'https://github.com/MessagePigeon/client-student',
            label: '学生端',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '使用指南',
                to: '/guide-docs/intro',
              },
              {
                label: '部署教程',
                to: '/deploy-docs/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: '后端',
                href: 'https://github.com/MessagePigeon/server',
              },
              {
                label: '教师端',
                href: 'https://github.com/MessagePigeon/client-teacher',
              },
              {
                label: '学生端',
                href: 'https://github.com/MessagePigeon/client-student',
              },
            ],
          },
        ],
        copyright: `Copyright &copy ${new Date().getFullYear()} Message Pigeon, Org. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
