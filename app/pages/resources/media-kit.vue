<script setup lang="ts">
const title = "Media Kit | TruMedia Creative";
const description =
  "A concise introduction to TruMedia Creative, our work, and how to request approved brand assets or press information.";

useSeoMeta({ title, ogTitle: title, description, ogDescription: description });
</script>

<template>
  <UContainer>
    <UPageHeader
      title="Media and Brand Information"
      description="A quick reference for introducing TruMedia Creative."
      class="py-[50px]"
    />

    <UPageBody class="space-y-10 pb-16">
      <UPageSection
        title="About TruMedia Creative"
        description="TruMedia Creative helps B2B and industrial businesses turn complex expertise into clear websites, credible video content, case studies, and practical lead generation systems."
      >
        <p class="text-muted max-w-3xl">
          Our work connects messaging, content, websites, and sales enablement
          so buyers can better understand what a company does and how it can
          help.
        </p>
      </UPageSection>

      <UPageSection title="Areas of work">
        <ul class="grid gap-3 sm:grid-cols-2">
          <li>Website strategy, design, and development</li>
          <li>Video production and distribution</li>
          <li>Content, SEO, and paid search</li>
          <li>Case studies and sales enablement</li>
          <li>Outbound marketing and lead generation</li>
          <li>Marketing automation and reporting</li>
        </ul>
      </UPageSection>

      <UPageSection
        title="Request approved assets or an interview"
        description="Contact us for current logos, photography, brand-use guidance, or press questions. We can provide the appropriate files and confirm how they may be used."
      >
        <UButton to="/contact" trailing-icon="i-lucide-arrow-right">
          Contact TruMedia Creative
        </UButton>
      </UPageSection>
    </UPageBody>
  </UContainer>
</template>
