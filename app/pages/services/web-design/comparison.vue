<script setup lang="ts">
const { data: page } = await useAsyncData("webdesigncomparison", () =>
  queryCollection("webdesigncomparison").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <div v-if="page">
    <BackToIndexButton />
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
    />

    <UContainer>
      <UPageSection
        :title="page.comparison.title"
        :description="page.comparison.description"
      >
        <UPricingPlans :plans="page.comparison.items" />
      </UPageSection>
    </UContainer>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
      :links="section.links"
    />

    <USeparator />

    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden" />
  </div>
</template>
