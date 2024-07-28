import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "glicol.js",
  description: "glicol language shipped in js for browsers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'glicol.js',
    sidebar: [
      {
        items: [
          { text: 'introduction', link: '/' },
          { text: 'hello sound', link: '/hello-sound' },
          { text: 'basic connection', link: '/connection' },
          { text: 'gui', link: '/gui' },
          { text: 'use samples', link: '/use-samples' },
          { text: 'mixing', link: '/mixing' },
          { text: 'adsr envelope', link: '/adsr' },
          { text: 'use dsl', link: '/dsl' },
          { text: 'as web audio node', link: '/node' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chaosprint/glicol' }
    ]
  }
})
