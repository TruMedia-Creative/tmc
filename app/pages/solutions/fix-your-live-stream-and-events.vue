<script setup lang="ts">
const { page } = await useCollectionPageSeo("fixyourlivestreamandevents");
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
