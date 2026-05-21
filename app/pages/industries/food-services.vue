<script setup lang="ts">
const { page } = useCollectionPageSeo("foodservices");
</script>

<template>
  <CollectionPageShell v-if="page" :page="page">
    <template #hero-title>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight">
        Video-Led
        <span class="text-primary italic"> Growth Agency</span>
        for Food Service Companies.
      </h1>
    </template>

    <template #hero-media>
      <PromotionalVideo />
    </template>
  </CollectionPageShell>
</template>
