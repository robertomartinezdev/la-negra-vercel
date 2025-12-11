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
    langDir: "locales",
    locales: [
      { code: "es", iso: "es-ES", file: "es.json", name: "Español" },
      { code: "en", iso: "en-EN", file: "en.json", name: "English" },
      { code: "val", iso: "val-VAL", file: "val.json", name: "Valencià" },
    ],
  },
  image: {
    dir: "public",
    domains: ["https://setup-landing-page.firebaseapp.com"],
    provider: "ipx",
    inject: true,
    quality: 100,
    format: ["jpg"],
  },
  googleFonts: {
    families: {
      "Open+Sans": true,
    },
    display: "swap",
  },
  pinia: {
    storesDirs: ['./stores/**']  // Nuxt buscará todos los stores aquí
  }
})