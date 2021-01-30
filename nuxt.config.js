export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Panor.am',
    title: 'Panor.am',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/composition-api',
    // Google Analytics setup https://nuxtjs.org/faq/ga
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://purgecss.com/guides/nuxt.html#nuxt-js-plugin
    'nuxt-purgecss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/vaso2/nuxt-vue-material
    'nuxt-vue-material',
  ],

  vueMaterial: {
    theme: 'default-dark',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: process.env.BUILD_ANALYZE || false,
    parallel: false,
    extractCSS: true,
    optimizations: {
      splitChunks: {
        minSize: 0,
        maxSize: 51200,
        enforceSizeThreshold: 51200,
        layouts: true,
        pages: true,
        commons: true,
      },
    },
  },

  render: {
    crossorigin: '',
  },

  router: {
    base: process.env.BASE_URL || '/',
  },

  generate: {
    generate: {
      async routes() {
        const { $content } = require('@nuxt/content')
        const files = await $content({ deep: true }).only(['path']).fetch()

        return files.map((file) => (file.path === '/index' ? '/' : file.path))
      },
    },
    cache: {
      ignore: [
        'lighthouserc.pr.js',
        'budget.json',
        'README.md',
        '.github',
        '.idea',
        'dist',
        'node_modules',
        'test',
        'cypress',
      ],
    },
  },
}
