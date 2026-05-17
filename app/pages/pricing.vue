<script setup lang="ts">
const { data: page } = await useAsyncData("pricing", () =>
  queryCollection("pricing").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

const isYearly = ref("0");

const items = ref([
  {
    label: "Monthly",
    value: "0",
  },
  {
    label: "Yearly",
    value: "1",
  },
]);
</script>

<template>
  <div v-if="page">
    <UPageHero :title="page.title" :description="page.description">
      <template #links>
        <UTabs
          v-model="isYearly"
          :items="items"
          color="neutral"
          size="xs"
          class="w-48"
          :ui="{
            list: 'ring ring-accented rounded-full',
            indicator: 'rounded-full',
            trigger: 'w-1/2',
          }"
        />
      </template>
    </UPageHero>

    <UContainer />

    <UPageSection>
      <UPageLogos>
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-muted"
        />
      </UPageLogos>
    </UPageSection>

    <UPageSection :title="page.faq.title" :description="page.faq.description">
      <UPageAccordion
        :items="page.faq.items"
        multiple
        class="max-w-4xl mx-auto"
      />
    </UPageSection>
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <UIcon
        name="i-lucide-loader-circle"
        class="w-12 h-12 animate-spin mx-auto mb-4 text-primary"
      />
      <p class="text-muted">Loading pricing information...</p>
    </div>
  </div>
</template>
