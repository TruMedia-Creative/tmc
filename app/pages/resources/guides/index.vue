<script setup lang="ts">
const route = useRoute();

const { data: posts } = await useAsyncData(route.path, async () => {
  const items = await queryCollection("resources_posts").all();

  return items
    .filter(
      (post) => post.path.startsWith("/resources/guides/") && !post.noindex,
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const title = "Guides";
const description =
  "Plain-English guides that help small-business owners understand the digital pieces behind their website, domain, email, and marketing systems.";

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <UContainer>
    <UPageHeader
      :title="title"
      :description="description"
      class="py-[50px]"
    />

    <UPageBody>
      <UBlogPosts v-if="posts?.length">
        <UBlogPost
          v-for="(post, index) in posts"
          :key="post.path"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="
            new Date(post.date).toLocaleDateString('en', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          "
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2',
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>
