<script setup lang="ts">
const { page } = useCollectionPageSeo("nonprofits");
</script>

<template>
  <CollectionPageShell v-if="page" :page="page" :show-back-button="false">
    <template #hero-title>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight">
        Professional
        <span class="text-primary italic"> AV &amp; Live Streaming</span>
        for Non-Profits.
      </h1>
    </template>

    <template #hero-media>
      <PromotionalVideo />
    </template>
  </CollectionPageShell>
</template>
