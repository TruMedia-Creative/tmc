<script setup lang="ts">
const { title = 'My Page', description = '' } = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', padding: '60px', backgroundColor: 'white', color: '#171717' }">
    <h1 :style="{ fontSize: '72px', fontWeight: 'bold', margin: 0, lineHeight: 1.1, textAlign: 'center' }">
      {{ title }}
    </h1>
    <p v-if="description" :style="{ fontSize: '32px', opacity: 0.6, marginTop: '16px', textAlign: 'center', maxWidth: '900px' }">
      {{ description }}
    </p>
  </div>
</template>
