// https://nuxt.com/docs/api/configuration/nuxt-config

import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tsconfigPaths()]
  },
  ssr: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: true,
  modules: [
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  i18n: {
    defaultLocale: "es",
    langDir: "locales/",
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'en', iso: 'en-EN', file: 'en.json', name: 'English' },
      { code: 'val', iso: 'val-VAL', file: 'val.json', name: 'Valencià' },
    ],
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  },
  image: {
    inject: true,
    quality: 70,
    format: ["jpg", "png", "webp"]
  },
  googleFonts: {
    families: {
      "Open+Sans": true,
    },
    display: "swap",
  },
  pinia: {
    storesDirs: ['./stores/**']  // Nuxt buscará todos los stores aquí
  },
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    // SERVER
    service: process.env.SERVICE,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    mailContact: process.env.MAIL_CONTACT,
    mailUserRobert: process.env.MAIL_USER_ROBERT,
    mailPasswordRobert: process.env.MAIL_PASSWORD_ROBERT,
    mailContactRobert: process.env.MAIL_CONTACT_ROBERT,

    // CLIENT
    public: {
      baseLocalUrl: process.env.VITE_BASE_LOCAL_URL,
      baseProUrl: process.env.VITE_BASE_PRO_URL
    }
  }
})