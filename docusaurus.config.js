/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TrueCoders',
  tagline: 'Web Development Documentation',
  url: 'https://truecoders-web-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'blvckcoffee', // Usually your GitHub org/user name.
  projectName: 'truecoders-web-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightowl'),
    },
    navbar: {
      title: '',
      logo: {
        alt: 'TrueCoders Logo',
        src: 'img/TrueCodersLogo_Inline.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/blvckcoffee',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'TrueCoders',
              href: 'https://truecoders.io/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/joe-johnson-dev/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/blvckcoffee',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} blvckcoffee.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
