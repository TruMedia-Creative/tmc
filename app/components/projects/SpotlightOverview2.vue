<script setup lang="ts">
interface Project2 {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  beforeImage?: string;
  afterImage?: string;
  websiteUrl?: string;
  challenge?: string;
  outcomes?: string;
  solution?: string;
  results?: string[];
}

const props = defineProps<{ project: Project2 }>();
</script>

<template>
  <div class="space-y-8">
    <div
      class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm"
    >
      <span class="h-2 w-2 rounded-full bg-primary-500" />
      Project Case Study
    </div>

    <div class="space-y-5">
      <h1
        class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
      >
        <span
          class="block bg-gradient-to-r from-primary-700 via-brand-400 to-amber-500 bg-clip-text text-transparent"
        >
          {{ props.project.title }}
        </span>
      </h1>
      <p class="max-w-xl text-lg text-slate-600 sm:text-xl">
        {{ props.project.description }}
      </p>
    </div>

    <div class="flex flex-wrap gap-3">
      <span
        v-if="props.project.client"
        class="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm"
      >
        {{ props.project.client }}
      </span>
      <span
        v-if="props.project.year"
        class="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm"
      >
        {{ props.project.year }}
      </span>
      <span
        v-if="props.project.services?.length"
        class="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm"
      >
        {{ props.project.services[0] }}
      </span>
    </div>

    <div class="flex flex-col gap-4 sm:flex-row">
      <UButton
        v-if="props.project.websiteUrl"
        :to="props.project.websiteUrl"
        target="_blank"
        rel="noreferrer"
        size="lg"
        color="primary"
        class="sm:px-8"
      >
        View live site
      </UButton>
      <UButton to="/contact" variant="ghost" color="primary" size="lg">
        Start a project
      </UButton>
    </div>

    <div class="space-y-4">
      <div
        class="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur"
      >
        <p class="text-sm font-semibold text-slate-900">Challenge</p>
        <p class="mt-3 text-sm text-slate-600">
          {{ props.project.challenge }}
        </p>
      </div>
      <div
        class="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur"
      >
        <p class="text-sm font-semibold text-slate-900">Solution</p>
        <p class="mt-3 text-sm text-slate-600">
          {{ props.project.solution }}
        </p>
      </div>
    </div>
  </div>
</template>
