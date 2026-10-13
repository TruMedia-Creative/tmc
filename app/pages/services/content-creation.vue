<script setup lang="ts">
const { data: page } = await useAsyncData("contentcreation", () =>
  queryCollection("contentcreation").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({ title, ogTitle: title, description, ogDescription: description });
</script>

<template>
  <div v-if="page">
    <BackToIndexButton />
    <UPageHero
      :title="page.hero.title || page.title"
      :description="page.hero.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
    />

    <UPageSection
      title="Content shaped around real buyer questions"
      description="Useful content starts with the expertise already inside your business. We help make it clear, accurate, and ready to support marketing and sales."
    >
      <UPageGrid>
        <UPageCard
          v-for="item in page.offerings"
          :key="item.title"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      title="From expert knowledge to useful assets"
      description="A collaborative process keeps the work grounded in what your team actually knows and what your buyers need to understand."
    >
      <UPageGrid>
        <UPageCard
          v-for="(step, index) in page.process"
          :key="step.title"
          :title="`${index + 1}. ${step.title}`"
          :description="step.description"
        />
      </UPageGrid>
    </UPageSection>

    <UPageCTA
      title="Have expertise that is hard to explain?"
      description="Tell us what buyers need to understand and where your current content falls short."
      :links="[
        {
          label: 'Talk About Your Content Needs',
          to: '/contact',
          icon: 'i-lucide-arrow-right',
        },
      ]"
    />
  </div>
</template>
