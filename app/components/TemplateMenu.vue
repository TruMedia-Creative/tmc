<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="true"
    :items="[
      {
        label: 'Home',
        to: '/',
        color: 'primary',
        checked: true,
        type: 'checkbox',
      },
      {
        label: 'Offer Creator',
        to: '/offer-creator',
      },
      {
        label: 'Docs',
        to: 'https://docs-template.nuxt.dev/',
      },
      {
        label: 'Video',
        to: '/services/video-growth-engine',
      },
      {
        label: 'Dashboard',
        to: 'https://dashboard-template.nuxt.dev/',
      },
      {
        label: 'Chat',
        to: 'https://chat-template.nuxt.dev/',
      },
      {
        label: 'Portfolio',
        to: 'https://portfolio-template.nuxt.dev/',
      },
      {
        label: 'Changelog',
        to: 'https://changelog-template.nuxt.dev/',
      },
    ]"
    size="xs"
  >
    <UButton
      label="Tools"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: [
          'transition-transform duration-200',
          open ? 'rotate-180' : undefined,
        ]
          .filter(Boolean)
          .join(' '),
      }"
    />
  </UDropdownMenu>
</template>
