<script setup lang="ts">
const { data: page } = await useAsyncData("contact", () =>
  queryCollection("contact").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

const { trackCtaClick } = useAnalytics();

const trackContactMethodClick = (title: string, href?: string) => {
  if (!href) {
    return;
  }

  trackCtaClick({
    label: title,
    destination: href,
    location: "contact_page",
  });
};

// Contact card configuration
const contactCards = computed(() => {
  if (!page.value?.contactInfo) return [];

  return [
    {
      icon: "i-lucide-mail",
      title: "Email",
      content: page.value.contactInfo.email,
      href: `mailto:${page.value.contactInfo.email}`,
    },
    {
      icon: "i-lucide-phone",
      title: "Phone",
      content: page.value.contactInfo.phone,
      href: `tel:${page.value.contactInfo.phone}`,
    },
    {
      icon: "i-lucide-map-pin",
      title: "Address",
      lines: [
        page.value.contactInfo.address.street,
        `${page.value.contactInfo.address.city}, ${page.value.contactInfo.address.state} ${page.value.contactInfo.address.zip}`,
      ],
    },
    {
      icon: "i-lucide-clock",
      title: "Hours",
      lines: [
        page.value.contactInfo.hours.weekdays,
        page.value.contactInfo.hours.weekend,
      ],
    },
  ];
});
</script>

<template>
  <div v-if="page">
    <!-- Hero Section -->
    <UPageHero>
      <template #title>
        <h1
          class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted"
        >
          {{ page.hero.headline }}
          <span
            v-if="page.hero.highlightedWord"
            class="text-primary block"
            :style="{
              fontFamily: 'new-spirit, serif',
              fontWeight: 700,
            }"
          >
            {{ page.hero.highlightedWord }}
          </span>
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl/8 text-muted">
          {{ page.hero.description }}
        </p>
      </template>
    </UPageHero>
    <h2 class="text-3xl text-center font-bold text-highlighted mb-8">
      {{ page.sections.contactInfoTitle }}
    </h2>
    <UPageSection class="py-6">
      <!-- Contact Information - 2 Column Layout -->
      <div>
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div
            v-for="(card, index) in contactCards"
            :key="card.icon"
            :class="index % 2 === 0 ? 'space-y-6' : ''"
          >
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <UIcon :name="card.icon" class="text-primary text-xl" />
              </div>
              <div>
                <h3 class="font-semibold text-highlighted">{{ card.title }}</h3>
                <a
                  v-if="card.href"
                  :href="card.href"
                  class="text-primary hover:underline"
                  @click="trackContactMethodClick(card.title, card.href)"
                >
                  {{ card.content }}
                </a>
                <p v-else-if="card.lines" class="text-muted">
                  <span
                    v-for="(line, idx) in card.lines"
                    :key="idx"
                    class="block"
                  >
                    {{ line }}
                  </span>
                </p>
                <p v-else class="text-muted">{{ card.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 Column Section: Quick Response Promise (center) and Follow Us -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Empty left column for spacing -->
          <div></div>

          <!-- Center Column: Quick Response Promise -->
          <div
            class="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6"
          >
            <div class="flex items-center gap-3 mb-3">
              <UIcon name="i-lucide-zap" class="text-primary text-xl" />
              <h3 class="font-semibold text-highlighted">
                {{ page.sections.responseGuarantee.title }}
              </h3>
            </div>
            <p class="text-muted text-sm">
              {{ page.sections.responseGuarantee.description }}
            </p>
          </div>
        </div>
      </div>
    </UPageSection>
    <UPageSection>
      <div>
        <h2 class="text-3xl font-bold text-center text-highlighted mb-6">
          {{ page.sections.formSection.title }}
        </h2>
        <p class="text-muted mb-8">
          {{ page.sections.formSection.description }}
        </p>

        <!-- Contact Form -->
        <HoneyBookForm2 />
      </div>
    </UPageSection>
    <!-- Main Contact Section -->
  </div>
</template>
