const info = require('../../package.json');

module.exports = {
  plugins: ['@vuepress/search'],

  locales: {
    '/': {
      lang: 'en-US',
      name: 'English',
      title: info.name,
      description: info.description
    },
    '/es/': {
      lang: 'es-ES',
      name: 'Español',
      title: info.name,
      description: 'La forma más simple de integrar drag en Vue.js'
    },
    '/fr/': {
      lang: 'fr-FR',
      name: 'Français',
      title: info.name,
      description: 'La forma más simple de integrar drag en Vue.js'
    },
    '/it/': {
      lang: 'it-IT',
      name: 'Italiano',
      title: info.name,
      description: 'La forma más simple de integrar drag en Vue.js'
    },
    '/zh/': {
      lang: 'zh-MA',
      name: 'Chino',
      title: info.name,
      description: 'La forma más simple de integrar drag en Vue.js'
    },
    '/pt/': {
      lang: 'pt-BR',
      name: 'Portuguêsh',
      title: info.name,
      description: 'La forma más simple de integrar drag en Vue.js'
    }
  },

  themeConfig: {
    locales: {
      '/': {
        editLinkText: 'Edit this page',
        nav: [
          { text: 'Docs', link: '/installation.html' },
          { text: 'Playground', link: '/playground.html' }
        ],
        sidebar: [
          '/',
          '/installation',
          '/options',
          ['/playground', 'Explicit link text']
        ],
      },

      '/es/': {
        editLinkText: 'Editar esta página',
        nav: [
          { text: 'Docs', link: '/es/installation.html' },
          { text: 'Patio', link: '/es/playground.html' }
        ],
        sidebar: [
          '/es/',
          '/es/installation',
          '/es/options',
          ['/es/playground', 'Explicit link text']
        ],
      }
    }
  },
}
