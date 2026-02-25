<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryCollection("index").first(),
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
  <div v-if="page?.title">
    <FadeInUp :delay="0.3">
      <UPageHero
        :description="page.description"
        :headline="page.hero.headline"
        :links="page.hero.links"
        :orientation="page.hero.orientation"
      >
        <template #title>
          <HomeHeroTitle />
        </template>

        <HomeMarquee />
      </UPageHero>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeSections :sections="page.sections" />
    </FadeInUp>

    <FadeInUp v-if="page.cta_after_sections" :delay="0.2">
      <UContainer>
        <UPageCTA
          v-bind="page.cta_after_sections"
          variant="naked"
          class="py-8"
        />
      </UContainer>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <ProcessSteps
        v-if="page.process"
        :title="page.process.title"
        :subtitle="page.process.description"
        :steps="page.process.steps"
      />
    </FadeInUp>

    <FadeInUp v-if="page.cta_after_process" :delay="0.2">
      <UContainer>
        <UPageCTA
          v-bind="page.cta_after_process"
          variant="naked"
          class="py-8"
        />
      </UContainer>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeFeatures
        :title="page.features.title"
        :description="page.features.description"
        :items="page.features.items"
      />
    </FadeInUp>

    <FadeInUp v-if="page.cta_after_features" :delay="0.2">
      <UContainer>
        <UPageCTA
          v-bind="page.cta_after_features"
          variant="naked"
          class="py-8"
        />
      </UContainer>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <UContainer>
        <PromotionalVideo class="rounded-lg shadow-md" />
      </UContainer>
    </FadeInUp>
    <FadeInUp :delay="0.2">
      <ClientLogos />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeTestimonials
        :headline="page.testimonials.headline"
        :title="page.testimonials.title"
        :description="page.testimonials.description"
        :items="page.testimonials.items"
      />
    </FadeInUp>

    <FadeInUp v-if="page.cta_after_testimonials" :delay="0.2">
      <UContainer>
        <UPageCTA
          v-bind="page.cta_after_testimonials"
          variant="naked"
          class="py-8"
        />
      </UContainer>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <ProjectsPortfolio />
    </FadeInUp>
    <USeparator></USeparator>
    <FadeInUp :delay="0.2">
      <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden" />
    </FadeInUp>
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <UIcon
        name="i-lucide-loader-circle"
        class="w-12 h-12 animate-spin mx-auto mb-4 text-primary"
      />
      <p class="text-muted">Loading content...</p>
    </div>
  </div>
</template>
