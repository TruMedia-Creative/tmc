<script setup lang="ts">
import { computed } from "vue";

// Fetch navigation data from content collection
const { data: navigationData } = await useAsyncData("header-navigation", () =>
  queryCollection("navigation").first(),
);

// Desktop navigation items
const items = computed(() => navigationData.value?.items || []);

// Mobile navigation items - derived from desktop items with 'open' property
const mobileItems = computed(() =>
  (navigationData.value?.items || []).map((item) => ({
    ...item,
    open: true,
  })),
);

const { trackCtaClick } = useAnalytics();

const trackHeaderContactCta = (location: string) => {
  trackCtaClick({
    label: "Contact Us",
    destination: "/contact",
    location,
  });
};
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-full" />
      </NuxtLink>
      <!-- <TemplateMenu /> -->
    </template>

    <UNavigationMenu
      orientation="horizontal"
      size="xl"
      :items="items"
      class="w-full justify-center"
      :ui="{
        viewport: 'w-full',
        viewportWrapper: 'absolute top-full left-0 flex w-full',
        link: 'hover:bg-gray-100 hover:text-primary-400 dark:hover:bg-gray-800 dark:hover:text-primary-400',

        linkLabel: 'whitespace-normal break-words text-lg font-medium',

        /* Force consistent 2-column layout across all groups */

        /* Ensure every item fills full column width */
        childItem: 'w-full',

        /* Ensure the clickable link spans the entire column */
        childLink:
          'w-full flex items-center px-3 py-2 rounded-md hover:bg-gray-100 hover:text-primary-400',
        childLinkLabel: 'flex-1 whitespace-normal text-base font-normal',
      }"
    />

    <template #right>
      <UButton
        icon="i-lucide-phone-call"
        color="primary"
        variant="solid"
        to="/contact"
        aria-label="Contact Us"
        class="lg:hidden"
        @click="trackHeaderContactCta('header_mobile')"
      />

      <UButton
        label="Contact Us"
        color="primary"
        variant="solid"
        to="/contact"
        class="hidden lg:inline-flex text-lg header-cta-button"
        @click="trackHeaderContactCta('header_desktop')"
      />
      <UColorModeButton />
      <!-- <UButton
        label="Sign up"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="/signup"
      /> -->
    </template>

    <template #body>
      <UNavigationMenu
        :items="mobileItems"
        orientation="vertical"
        color="primary"
        class="-mx-2.5"
        multiple
      />

      <USeparator class="my-6" />

      <!-- <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        to="/signup"
        block
      /> -->
    </template>
  </UHeader>
</template>
