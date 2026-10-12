<script setup lang="ts">
const { data: page } = await useAsyncData("webdesign", () =>
  queryCollection("webdesign").first(),
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
    <BackToIndexButton />
    <UPageHero
      :title="page.title"
      :description="page.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
    >
    </UPageHero>

    <!-- At a Glance Section -->
    <UPageSection
      v-if="page.atAGlance"
      :title="page.atAGlance.title"
      :description="page.atAGlance.description"
      :headline="page.atAGlance.headline"
      :features="page.atAGlance.items"
      orientation="vertical"
      :ui="{ features: 'sm:grid-cols-2 lg:grid-cols-2 gap-8' }"
    />

    <!-- Main Sections -->
    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
      :price="section.price"
      :links="section.links"
      :image="section.image"
      :ui="
        section.features?.length === 4
          ? { features: 'sm:grid-cols-2 lg:grid-cols-2 gap-8' }
          : undefined
      "
    >
    </UPageSection>

    <!-- Pricing Section -->
    <UPageSection
      v-if="page.pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      orientation="vertical"
      class="bg-neutral-50 dark:bg-neutral-900"
    >
      <UPricingPlans :plans="page.pricing.items as any" />
    </UPageSection>

    <!-- Ideal For Section -->
    <UPageSection
      v-if="page.idealFor"
      :title="page.idealFor.title"
      :description="page.idealFor.description"
      :headline="page.idealFor.headline"
      orientation="vertical"
    >
      <UPageList>
        <li v-for="(item, index) in page.idealFor.items" :key="index">
          {{ item }}
        </li>
      </UPageList>
    </UPageSection>

    <!-- Related Solutions Section -->
    <UPageSection
      v-if="page.relatedSolutions"
      :title="page.relatedSolutions.title"
      :description="page.relatedSolutions.description"
      :headline="page.relatedSolutions.headline"
      orientation="vertical"
      class="bg-neutral-50 dark:bg-neutral-900"
    >
      <UPageGrid class="lg:grid-cols-2">
        <UPageCard
          v-for="(solution, index) in page.relatedSolutions.items"
          :key="index"
          :title="solution.title"
          :description="solution.description"
          :to="solution.to"
        >
          <template v-if="solution.icon" #icon>
            <UIcon :name="solution.icon" class="size-8" />
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- Performance Commitments Section -->
    <UPageSection
      v-if="page.performance"
      :title="page.performance.title"
      :description="page.performance.description"
      :headline="page.performance.headline"
      :features="page.performance.commitments"
      orientation="vertical"
      class="bg-neutral-50 dark:bg-neutral-900"
      :ui="
        page.performance.commitments.length === 4
          ? { features: 'sm:grid-cols-2 lg:grid-cols-2 gap-8' }
          : undefined
      "
    />

    <!-- FAQ Section -->
    <UPageSection
      v-if="page.faq"
      :title="page.faq.title"
      :description="page.faq.description"
      :headline="page.faq.headline"
      orientation="vertical"
    >
      <UAccordion :items="page.faq.items" multiple />
    </UPageSection>

    <!-- Testimonials -->
    <UPageSection
      v-if="page.testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :headline="page.testimonials.headline"
      orientation="vertical"
      class="bg-neutral-50 dark:bg-neutral-900"
    >
      <UPageGrid>
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          :title="testimonial.user.name"
          :description="testimonial.user.description"
        >
          <template #icon>
            <UAvatar
              :src="testimonial.user.avatar.src"
              :alt="testimonial.user.name"
              size="lg"
            />
          </template>
          <p class="text-neutral-600 dark:text-neutral-400 italic">
            "{{ testimonial.quote }}"
          </p>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <!-- CTA -->
    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
    </UPageCTA>
  </div>
</template>
