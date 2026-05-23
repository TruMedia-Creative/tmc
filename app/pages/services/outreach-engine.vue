<script setup lang="ts">
const { page } = useCollectionPageSeo("outreachengine");
</script>

<template>
  <CollectionPageShell
    v-if="page"
    :page="page"
    :sections-first="false"
    :show-sections="false"
    :show-testimonials="false"
    :show-cta="false"
  >
    <template #hero-title>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight">
        Turn
        <span class="text-secondary italic"> cold outreach</span>
        into
        <span class="text-primary italic"> warm conversations</span>
        with an outbound machine on autopilot.
      </h1>
    </template>

    <template #hero-media>
      <PromotionalVideo />
    </template>

    <template #after-content>
      <UPageSection
        v-if="page.pricing"
        :title="page.pricing.title"
        :description="page.pricing.description"
        orientation="vertical"
        class="bg-neutral-50 dark:bg-neutral-900"
      >
        <UPricingPlans :plans="page.pricing.items as any" />
      </UPageSection>
      <USeparator />
      <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
        <LazyStarsBg />
      </UPageCTA>
    </template>
  </CollectionPageShell>
</template>
