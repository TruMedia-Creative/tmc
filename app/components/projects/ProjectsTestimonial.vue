<script setup lang="ts">
interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}

interface Props {
  testimonial: Testimonial;
}

defineProps<Props>();
</script>

<template>
  <section class="py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <FadeInUp>
          <div
            class="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/50 dark:bg-slate-800/80"
          >
            <p
              class="text-sm font-semibold text-slate-900 dark:text-white mb-6"
            >
              Client Testimonial
            </p>
            <blockquote
              class="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 mb-8 before:content-[open-quote] after:content-[close-quote]"
            >
              {{ testimonial.quote }}
            </blockquote>
            <div class="flex items-center gap-4">
              <NuxtImg
                v-if="testimonial.author.avatar"
                :src="testimonial.author.avatar"
                :alt="testimonial.author.name"
                class="w-14 h-14 rounded-full object-cover border-2 border-white/60 shadow-md"
              />
              <div class="text-left">
                <div
                  class="font-semibold text-slate-900 dark:text-white text-sm"
                >
                  {{ testimonial.author.name }}
                </div>
                <div class="text-slate-600 dark:text-slate-300 text-sm">
                  {{ testimonial.author.title }}
                </div>
                <div class="text-slate-500 dark:text-slate-400 text-sm">
                  {{ testimonial.author.company }}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </UContainer>
  </section>
</template>
