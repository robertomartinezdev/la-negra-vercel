import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  components: true,
  
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  vite: {
    plugins: [tsconfigPaths()]
  },

  modules: [
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@pinia/nuxt",
  ],

  // ============================
  // I18n
  // ============================
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

  // ============================
  // Google Fonts
  // ============================
  googleFonts: {
    families: {
      "Open+Sans": true,
    },
    display: "swap",
  },

  // ============================
  // Pinia
  // ============================
  pinia: {
    storesDirs: ['./stores/**']
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
      baseProUrl: process.env.VITE_BASE_PRO_URL
    }
  },

  // ============================
  // Nuxt Image Config (Vercel Optimized)
  // ============================
  image: {
    domains: [
      'avatars0.githubusercontent.com', // imágenes externas
      'images.unsplash.com'
    ],
    vercel: {
      formats: ['image/webp', 'image/avif'],
      // Tamaños globales para optimización y densidades de pantalla
      sizes: [40, 80, 120, 160, 240, 320, 480, 640, 768, 1024, 1280, 1440, 1920]
    },
    presets: {
      // Logo
      logo: {
        width: 120, // ancho fijo deseado
        height: 40, // alto fijo o null si quieres mantener proporción
        fit: 'contain',
        format: 'webp', // optimizado
      },
      // Avatar circular
      avatar: {
        width: 40,
        height: 40,
        fit: 'cover',
        format: 'webp'
      },
      // Banner principal
      banner: {
        width: 1024,
        height: 300,
        fit: 'cover',
        format: 'avif'
      },
      // Imagen responsiva de artículo
      article: {
        widths: [320, 640, 1024, 1440],
        format: 'webp',
        fit: 'contain'
      },
      // Imagen destacada pequeña
      thumb: {
        widths: [150, 300, 450],
        format: 'webp',
        fit: 'cover'
      }
    }
  }
})
