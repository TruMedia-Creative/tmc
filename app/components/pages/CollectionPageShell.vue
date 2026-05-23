<script setup lang="ts">
interface CollectionPageSection {
  title?: string;
  description?: string;
  headline?: string;
  orientation?: "vertical" | "horizontal";
  reverse?: boolean;
  features?: Record<string, unknown>[];
  price?: string | { display?: string; amount?: number; billing?: string };
}

interface CollectionPageTestimonial {
  quote?: string;
  user?: Record<string, unknown>;
}

interface CollectionPage {
  title?: string;
  description?: string;
  hero?: {
    headline?: string;
    links?: Record<string, unknown>[];
  };
  sections?: CollectionPageSection[];
  features?: {
    title?: string;
    description?: string;
    items?: Record<string, unknown>[];
  };
  testimonials?: {
    headline?: string;
    title?: string;
    description?: string;
    items?: CollectionPageTestimonial[];
  };
  cta?: Record<string, unknown>;
}

const props = withDefaults(
  defineProps<{
    page: CollectionPage;
    showBackButton?: boolean;
    sectionsFirst?: boolean;
    showSections?: boolean;
    showFeatures?: boolean;
    showTestimonials?: boolean;
    showCta?: boolean;
  }>(),
  {
    showBackButton: true,
    sectionsFirst: true,
    showSections: true,
    showFeatures: true,
    showTestimonials: true,
    showCta: true,
  },
);

const sectionItems = computed(() =>
  props.showSections ? props.page.sections || [] : [],
);
</script>

<template>
  <div v-if="page?.title">
    <BackToIndexButton v-if="showBackButton" />

    <UPageHero
      :title="page.title"
      :description="page.description"
      :headline="page.hero?.headline"
      :links="page.hero?.links"
    >
      <template #title>
        <slot name="hero-title">
          <h1 class="text-5xl md:text-7xl font-bold leading-tight">
            {{ page.title }}
          </h1>
        </slot>
      </template>
      <slot name="hero-media" />
    </UPageHero>

    <template v-if="sectionsFirst">
      <UPageSection
        v-for="(section, index) in sectionItems"
        :key="`section-${index}`"
        :title="section.title"
        :description="section.description"
        :headline="section.headline"
        :orientation="section.orientation"
        :reverse="section.reverse"
        :features="section.features"
        :price="section.price"
      >
        <ImagePlaceholder />
      </UPageSection>

      <UPageSection
        v-if="showFeatures && page.features"
        :title="page.features.title"
        :description="page.features.description"
      >
        <UPageGrid>
          <UPageCard
            v-for="(item, index) in page.features.items"
            :key="`feature-${index}`"
            v-bind="item"
            spotlight
          />
        </UPageGrid>
      </UPageSection>
    </template>

    <template v-else>
      <UPageSection
        v-if="showFeatures && page.features"
        :title="page.features.title"
        :description="page.features.description"
      >
        <UPageGrid>
          <UPageCard
            v-for="(item, index) in page.features.items"
            :key="`feature-${index}`"
            v-bind="item"
            spotlight
          />
        </UPageGrid>
      </UPageSection>

      <UPageSection
        v-for="(section, index) in sectionItems"
        :key="`section-${index}`"
        :title="section.title"
        :description="section.description"
        :headline="section.headline"
        :orientation="section.orientation"
        :reverse="section.reverse"
        :features="section.features"
        :price="section.price"
      >
        <ImagePlaceholder />
      </UPageSection>
    </template>

    <UPageSection
      v-if="showTestimonials && page.testimonials"
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-4">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="`testimonial-${index}`"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description: 'before:content-[open-quote] after:content-[close-quote]',
          }"
        >
          <template #footer>
            <UAvatar v-bind="testimonial.user" size="lg" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <slot name="after-content" />

    <USeparator v-if="showCta && page.cta" />
    <UPageCTA
      v-if="showCta && page.cta"
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
