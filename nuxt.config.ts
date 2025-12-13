import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: true,
  components: true,

  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // ============================
  // Vite
  // ============================
  vite: {
    plugins: [tsconfigPaths()],
  },

  // ============================
  // Modules
  // ============================
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  // ============================
  // I18n
  // ============================
  i18n: {
    defaultLocale: 'es',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'en', iso: 'en-EN', file: 'en.json', name: 'English' },
      { code: 'val', iso: 'val-VAL', file: 'val.json', name: 'Valencià' },
    ],
  },

  // ============================
  // Google Fonts
  // ============================
  googleFonts: {
    families: {
      'Open+Sans': true,
    },
    display: 'swap',
  },

  // ============================
  // Pinia
  // ============================
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // ============================
  // CSS
  // ============================
  css: ['~/assets/scss/main.scss'],

  // ============================
  // Runtime Config
  // ============================
  runtimeConfig: {
    service: process.env.SERVICE,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    mailContact: process.env.MAIL_CONTACT,
    mailUserRobert: process.env.MAIL_USER_ROBERT,
    mailPasswordRobert: process.env.MAIL_PASSWORD_ROBERT,
    mailContactRobert: process.env.MAIL_CONTACT_ROBERT,

    public: {
      baseLocalUrl: process.env.VITE_BASE_LOCAL_URL,
      baseProUrl: process.env.VITE_BASE_PRO_URL,
    },
  },

  // ============================
  // Nuxt Image (optimizado SSR + Vercel)
  // ============================
  image: {
    // IPX en local, Vercel en prod
    provider: process.env.NODE_ENV === 'production' ? 'vercel' : 'ipx',

    // Formatos modernos
    formats: ['avif', 'webp'],

    // Calidad por defecto
    quality: 80,

    // Breakpoints reales
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },

    // Presets (intención visual, no layout)
    presets: {
      // Logo pequeño
      lanegra: {
        width: 120,
        height: 40,
        fit: 'contain',
        format: 'webp',
      },

      // Logo principal
      logo: {
        width: 250,
        height: 40,
        fit: 'contain',
        format: 'webp',
      },

      // Imagen hero (LCP)
      hero: {
        fit: 'cover',
        quality: 80,
      },

      // Carteles / posters
      poster: {
        fit: 'cover',
        quality: 80,
      },
    },
  },

  // ============================
  // Nitro / Vercel
  // ============================
  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
  },
})
