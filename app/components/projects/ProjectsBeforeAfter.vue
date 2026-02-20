<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  beforeImage?: string;
  afterImage?: string;
}>();
const activeTab = ref<"before" | "after">("after");
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-900 py-8">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-3xl font-bold mb-2 text-center">Before & After</h3>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-4">
          See the transformation from the old website to our modern design
        </p>

        <div class="flex justify-center mb-8">
          <div class="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
            <button
              :class="[
                'px-6 py-3 rounded-md font-semibold transition-all duration-200',
                activeTab === 'before'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary',
              ]"
              @click="activeTab = 'before'"
            >
              Before
            </button>
            <button
              :class="[
                'px-6 py-3 rounded-md font-semibold transition-all duration-200',
                activeTab === 'after'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary',
              ]"
              @click="activeTab = 'after'"
            >
              After
            </button>
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-2xl min-h-[800px]"
        >
          <transition name="fade" mode="out-in">
            <div
              v-if="activeTab === 'before'"
              key="before"
              class="absolute inset-0 overflow-auto"
            >
              <img
                v-if="props.beforeImage"
                :src="props.beforeImage"
                alt="Before - Old Website"
                class="w-full min-h-full h-auto object-top"
              />
              <div
                class="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
              >
                Before
              </div>
            </div>
            <div v-else key="after" class="absolute inset-0 overflow-auto">
              <img
                v-if="props.afterImage"
                :src="props.afterImage"
                alt="After - New Website"
                class="w-full min-h-full h-auto object-top"
              />
              <div
                class="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
              >
                After
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
