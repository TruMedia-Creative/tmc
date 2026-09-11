<script setup lang="ts">
const { data: footerData } = await useAsyncData("footer", () =>
  queryCollection("footer").first(),
);

const columns = computed(() => footerData.value?.columns || []);
</script>

<template>
  <USeparator class="h-px" color="primary" />

  <UFooter :ui="{ top: 'border-b border-default' }" class="bg-zinc-900">
    <template #top>
      <UContainer class="text-primary-500 w-full">
        <UFooterColumns
          class="xl:grid-cols-2 gap-12 sm"
          :columns="columns"
          :ui="{
            link: 'text-primary-50 hover:text-primary-400',
            label: 'text-lg',
          }"
        />
      </UContainer>
    </template>

    <template #left>
      <div class="flex items-center space-x-4">
        <p class="font-semibold text-sm text-white">
          TruMedia LLC • TruMedia Creative • © {{ new Date().getFullYear() }}
        </p>
        <UButton
          to="/privacy"
          variant="link"
          size="sm"
          class="text-sm text-white hover:text-primary"
        >
          Privacy Policy
        </UButton>
      </div>
    </template>

    <template #right>
      <SocialLinks />
    </template>
  </UFooter>
</template>
