// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '飞鸽传书',
  tagline: '校园远程通知平台',
  url: 'https://mpigeon.jsun969.cn',
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
            href: 'https://www.bilibili.com/video/BV1BL4y1c76d',
            label: '宣传片',
            position: 'right',
          },
          {
            href: 'https://github.com/MessagePigeon/server',
            label: '后端GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/MessagePigeon/client-teacher',
            label: '教师端GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/MessagePigeon/client-student',
            label: '学生端GitHub',
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
            title: '交流群',
            items: [
              {
                label: 'QQ',
                href: 'https://jq.qq.com/?_wv=1027&k=ijdRVZe8',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/53gr5HqnQF',
              },
            ],
          },
          {
            title: 'GitHub',
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
        copyright: `版权所有 &copy ${new Date().getFullYear()} 荆棘Justin | 文档使用 Docusaurus 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
