<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#021218" : "white",
);
const route = useRoute();
const canonicalUrl = computed(
  () => new URL(route.path, "https://www.trumediacreative.com").href,
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.png" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoSchema();

useSeoMeta({
  title: "TruMedia Creative | Video-Led Growth for B2B & Expert-Led Companies",
  titleTemplate: "%s",
  ogSiteName: "TruMedia Creative",
  ogImage: "https://www.trumediacreative.com/ogimage.png",
  ogUrl: canonicalUrl,
  twitterImage: "https://www.trumediacreative.com/ogimage.png",
  twitterCard: "summary_large_image",
  ogType: "website",
});
const { data: navigation } = await useAsyncData(
  "navigation",
  () => queryCollectionNavigation("docs"),
  {
    transform: (data) =>
      data.find((item) => item.path === "/docs")?.children || [],
  },
);
const { data: files } = useLazyAsyncData(
  "search",
  () => queryCollectionSearchSections("docs"),
  {
    server: false,
  },
);

const links = [
  {
    label: "Docs",
    icon: "i-lucide-book",
    to: "/docs/getting-started",
  },
  {
    label: "Pricing",
    icon: "i-lucide-credit-card",
    to: "/pricing",
  },
  {
    label: "Video Growth Engine ",
    icon: "i-lucide-building-warehouse",
    to: "/services/video-growth-engine",
  },
  {
    label: "Industrial",
    icon: "i-lucide-factory",
    to: "/industries/contractors-manufactures",
  },
  {
    label: "Blog",
    icon: "i-lucide-pencil",
    to: "/blog",
  },
  {
    label: "Changelog",
    icon: "i-lucide-history",
    to: "/changelog",
  },
];

// Note: Navigation is currently hardcoded. Consider moving to content collection for centralized management.

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
