export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PWA Mobile First',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
    VUE_APP_FIREBASE_DOMAIN: process.env.VUE_APP_FIREBASE_DOMAIN,
    VUE_APP_FIREBASE_URL_DATABASE: process.env.VUE_APP_FIREBASE_URL_DATABASE,
    VUE_APP_FIREBASE_PROJECT: process.env.VUE_APP_FIREBASE_PROJECT,
    VUE_APP_FIREBASE_STORAGE: process.env.VUE_APP_FIREBASE_STORAGE,
    VUE_APP_FIREBASE_MESSAGIN: process.env.VUE_APP_FIREBASE_MESSAGIN,
    VUE_APP_FIREBASE_APP_ID: process.env.VUE_APP_FIREBASE_APP_ID,
    VUE_APP_FIREBASE_ASUREMENT_ID: process.env.VUE_APP_FIREBASE_ASUREMENT_ID,
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/svg-module#readme
    '@nuxtjs/svg',
    // https://firebase.nuxtjs.org/guide/getting-started
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.VUE_APP_FIREBASE_KEY,
          authDomain: process.env.VUE_APP_FIREBASE_DOMAIN,
          databaseURL: process.env.VUE_APP_FIREBASE_URL_DATABASE,
          projectId: process.env.VUE_APP_FIREBASE_PROJECT,
          storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
          messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGIN,
          appId: process.env.VUE_APP_FIREBASE_APP_ID,
          measurementId: process.env.VUE_APP_FIREBASE_ASUREMENT_ID,
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          analytics: true,
          performance: true,
        },
      },
    ],
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
