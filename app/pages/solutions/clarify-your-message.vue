<script setup lang="ts">
const { page } = useCollectionPageSeo("clarifyyourmessage");
</script>

<template>
  <CollectionPageShell
    v-if="page"
    :page="page"
    :show-testimonials="false"
    :show-cta="false"
  >
    <template #hero-media>
      <PromotionalVideo />
    </template>

    <template #after-content>
      <USeparator />
      <UPageCTA v-bind="page.cta" variant="solid" class="overflow-hidden">
        <LazyStarsBg />
      </UPageCTA>
    </template>
  </CollectionPageShell>
</template>
