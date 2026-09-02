// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxtjs/seo",
    "nuxt-gtag",
    'nuxt-ai-ready',
    "nuxt-skew-protection",
    "motion-v/nuxt",
    "@nuxt/scripts",
    "nuxt-link-checker",
    "@nuxt/a11y",
  ],
  components: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://use.typekit.net",
          crossorigin: "",
        },
        {
          rel: "preconnect",
          href: "https://p.typekit.net",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/orr3dhh.css",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://trumediacreative.com",
    name: "TruMedia Creative",
  },

  runtimeConfig: {
    public: {
      honeyBookFormId: "62f67000c557950007e38acd",
    },
  },

  // Optimize module loading
  build: {
    transpile: ["@headlessui/vue"],
  },
  routeRules: {
    "/docs": { redirect: "/docs/getting-started" },
  },
  compatibilityDate: "2024-07-11",
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        "@nuxtjs/mdc > remark-gfm",
        "@nuxtjs/mdc > remark-emoji",
        "@nuxtjs/mdc > remark-mdc",
        "@nuxtjs/mdc > remark-rehype",
        "@nuxtjs/mdc > rehype-raw",
        "@nuxtjs/mdc > parse5",
        "@nuxtjs/mdc > unist-util-visit",
        "@nuxtjs/mdc > unified",
        "@nuxtjs/mdc > debug",
        "@nuxtjs/mdc > extend"
      ]
    }
  },
  debug: false,

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  fonts: {
    adobe: {
      id: "orr3dhh",
    },
  },
  gtag: {
    id: "G-G22P0WJNVM",
  },
  robots: {
    allow: "/",
    disallow: ["/admin", "/private"],
    groups: [
      {
        userAgent: "GPTBot",
        allow: "/",
      },
    ],
  },
  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-T6DBWPNS",
      },
    },
  },
  seo: {
    meta: {
      // Basic SEO
      description:
        "TruMedia Creative is a New Jersey-based digital marketing agency helping expert-led and B2B companies clarify their message, create sales-ready content, and deploy repeatable growth systems.",
      author: "Larryon Truman",
      title:
        "TruMedia Creative | Video-Led Growth for B2B & Expert-Led Companies",
      titleTemplate: "%s · TruMedia Creative",
      // Theme & Color
      themeColor: [
        { content: "#18181b", media: "(prefers-color-scheme: dark)" },
        { content: "white", media: "(prefers-color-scheme: light)" },
      ],
      colorScheme: "dark light",

      // App Info
      applicationName: "TruMedia Creative",

      ogLocale: "en_US",
      ogTitle: "TruMedia Creative",
      // Other Nuxt SEO modules handle these
      ogImage: "https://www.trumediacreative.com/ogimage.png",
    },
  },
});
