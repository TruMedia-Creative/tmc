<script setup lang="ts">
const rotatingWords = [
  "Services",
  "Products",
  "Appointments",
  "Contracts",
  "Solutions",
  "Deals",
  "Projects",
  "Retainers",
  "Accounts",
  "Work",
];
const { currentWord, currentIndex } = useRotatingText(rotatingWords, 1200);
</script>

<template>
  <FadeInUp>
    <div class="page-hero-headline space-y-2">
      <h1
        class="text-5xl sm:text-7xl text-pretty tracking-tight text-highlighted"
      >
        Video-Led Growth for B2B Companies
      </h1>
      <h2
        class="text-3xl sm:text-5xl text-pretty tracking-tight text-highlighted"
      >
        We Help Brands Sell More
        <Transition name="slide" mode="out-in">
          <span
            :key="currentIndex"
            class="text-primary"
            :style="{
              fontFamily: 'new-spirit, serif',
              fontWeight: 700,
            }"
            >{{ currentWord }}</span
          >
        </Transition>
      </h2>
    </div>
  </FadeInUp>
</template>
