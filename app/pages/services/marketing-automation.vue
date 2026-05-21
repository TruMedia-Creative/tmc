<script setup lang="ts">
const { page } = await useCollectionPageSeo("marketingautomation");
</script>

<template>
  <CollectionPageShell
    v-if="page"
    :page="page"
    :sections-first="false"
    :show-testimonials="false"
  >
    <template #hero-title>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight">
        Turn
        <span class="text-primary italic"> conversations</span>
        into
        <span class="text-primary italic"> clients</span>
        with a video growth engine.
      </h1>
    </template>

    <template #hero-media>
      <PromotionalVideo />
    </template>
  </CollectionPageShell>
</template>
