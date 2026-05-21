<script setup lang="ts">
const { page } = useCollectionPageSeo("getmoreleads");
</script>

<template>
  <CollectionPageShell
    v-if="page"
    :page="page"
    :sections-first="false"
    :show-testimonials="false"
  >
    <template #hero-media>
      <PromotionalVideo />
    </template>
  </CollectionPageShell>
</template>
