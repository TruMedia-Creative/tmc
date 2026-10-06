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
    "nuxt-ai-ready",
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
    url: "https://www.trumediacreative.com",
    name: "TruMedia Creative",
    description:
      "TruMedia Creative designs, develops, and delivers creative, digital, and interactive experiences.",
    defaultLocale: "en-US",
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
    "/projects/nourish-to-heal-2": {
      redirect: {
        to: "/projects/nourish-to-heal",
        statusCode: 301,
      },
    },
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
        "@nuxtjs/mdc > extend",
      ],
    },
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
  schemaOrg: {
    identity: {
      "@id": "https://www.trumediacreative.com/#organization",
      type: "LocalBusiness",
      name: "TruMedia Creative",
      url: "https://www.trumediacreative.com",
      image: "https://www.trumediacreative.com/ogimage.png",
      logo: "https://www.trumediacreative.com/icon-512x512.png",
      description:
        "TruMedia Creative is a creative and digital agency that designs, develops, and delivers websites, video, digital marketing, software, interactive experiences, and other creative solutions for businesses and organizations.",
      email: "hello@trumediacreative.com",
      telephone: "+1-903-635-0855",
      address: {
        streetAddress: "21 Main St",
        addressLocality: "Annandale",
        addressRegion: "NJ",
        postalCode: "08801",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "16:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@trumediacreative.com",
        telephone: "+1-903-635-0855",
        areaServed: "US",
        availableLanguage: "English",
      },

      sameAs: [
        "https://www.linkedin.com/company/trumedia-creative/",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://www.trumediacreative.com/#web-design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://www.trumediacreative.com/#video-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://www.trumediacreative.com/#digital-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://www.trumediacreative.com/#outbound-marketing",
          },
        },
      ],
    },
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
      titleTemplate: "%s",
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
  sitemap: {
    exclude: [
      "/coming-soon",
      "/login",
      "/projects/nourish-to-heal-2",
      "/resources/blog",
      "/resources/case-studies",
      "/resources/media-kit",
      "/resources/tutorials",
      "/services/content-creation",
      "/signup",
    ],
  },
});
