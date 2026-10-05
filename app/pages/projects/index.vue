<script setup>
useSeoMeta({
  title: "B2B Marketing Projects & Case Studies | TruMedia Creative",
  description:
    "Explore TruMedia Creative case studies in B2B video production, web design, lead generation, and growth strategy, with project details and outcomes.",
  ogTitle: "B2B Marketing Projects & Case Studies | TruMedia Creative",
  ogDescription:
    "Explore TruMedia Creative case studies in B2B video production, web design, lead generation, and growth strategy, with project details and outcomes.",
});

// Additional projects not in ProjectsPortfolio
const additionalProjects = ref([
  {
    title: "Ballroom Lighting Design for a Luxury Country Club Event Space",
    to: "/projects/fiddlers-elbow-country-club",
    thumbnail: "/images/projects/thumbnails/fiddlers-elbow-ballroom.jpg",
    tags: ["AV Design", "AV Install"],
    client_type: "Venue",
    year: 2023,
  },
  {
    title: "9.1× Revenue Growth for an Industrial Snow & Ice Contractor",
    to: "/projects/advanced-snow-management",
    thumbnail: "/images/projects/thumbnails/snow-removal.jpg",
    tags: [
      "Industrial Marketing Strategy",
      "Proposal & RFP Support",
      "Sales Messaging & Positioning",
    ],
    client_type: "Commercial Snow & Ice Management Client",
    year: 2024,
  },
  {
    title: "Seller Re-Activation & Outbound Growth for a B2B Marketplace",
    to: "/projects/bidchip",
    thumbnail: "/images/projects/thumbnails/bidchip.png",
    tags: [
      "Activation & Re-Engagement Strategy",
      "Outbound Campaign Design",
      "Sales Messaging & Email Systems",
    ],
    client_type: "B2B E-commerce Semiconductor Client",
    year: 2024,
  },
  {
    title: "Increasing Retention and Demand for a High-End Local Salon",
    to: "/projects/cut-artisan-hair-design",
    thumbnail: "/images/projects/thumbnails/hair-salon.jpg",
    tags: [
      "Local SEO Strategy",
      "Client Retention & Re-Engagement Campaigns",
      "Paid Ads Strategy",
    ],
    client_type: "High-End Local Hair Salon Client",
    year: 2024,
  },
  {
    title: "Building an Outbound Lead System for a Financial Consulting Firm",
    to: "/projects/ici-consulting",
    thumbnail: "/images/projects/thumbnails/ici-consulting.jpg",
    tags: [
      "Outbound Strategy & Campaign Design",
      "Sales Messaging & Positioning",
      "Sales Enablement & Performance Tracking",
    ],
    client_type: "Financial Consulting Client",
    year: 2024,
  },
  {
    title: "Meal Prep E-Commerce Case Study: Shopify 2.0 UX and Conversion",
    to: "/projects/nourish-to-heal",
    thumbnail: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
    tags: [
      "Shopify 2.0 Web Design",
      "UX & Conversion Strategy",
      "Brand Messaging & Positioning",
    ],
    client_type: "Meal Prep and Nutrition Brand Client",
    year: 2024,
  },
  {
    title: "Live Production and Media Systems for a Modern Church Campus",
    to: "/projects/south-ridge-cc",
    thumbnail: "/images/projects/thumbnails/south-ridge-cc.jpg",
    tags: ["Live Streaming", "AV Design", "AV Installation"],
    client_type: "House of Worship",
    year: 2024,
  },
  {
    title: "Livestream and Worship Production Systems for a Growing Church",
    to: "/projects/shore-christian",
    thumbnail: "/images/projects/thumbnails/shore-christian.jpg",
    tags: ["Live Streaming", "AV Design", "AV Installation"],
    client_type: "House of Worship",
    year: 2024,
  },
  {
    title: "Sanctuary Audio and Media Upgrades for a Historic Church",
    to: "/projects/olivet-baptist-church",
    thumbnail: "/images/projects/thumbnails/olivet-baptist.jpg",
    tags: ["Live Streaming", "AV Design", "AV Installation"],
    client_type: "House of Worship",
    year: 2023,
  },
  {
    title: "Portable Worship and Livestream Systems for a Church Plant",
    to: "/projects/resurgent",
    thumbnail: "/images/projects/thumbnails/resurgent.jpg",
    tags: ["Live Streaming", "AV Design", "AV Installation"],
    client_type: "House of Worship",
    year: 2024,
  },
  {
    title: "Simple Post-Covid Streaming Solution for Local Church",
    to: "/projects/church/spruce-run-lutheran",
    thumbnail: "/images/projects/thumbnails/spruce-run-lutheran.jpg",
    tags: ["Live Streaming", "AV Design", "AV Installation"],
    client_type: "House of Worship",
    year: 2023,
  },
]);

// Filter state
const selectedTags = ref([]);
const selectedClientTypes = ref([]);

// Extract unique tags and client types
const allTags = computed(() => {
  const tags = new Set();
  additionalProjects.value.forEach((project) => {
    project.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
});

const allClientTypes = computed(() => {
  const types = new Set();
  additionalProjects.value.forEach((project) => {
    if (project.client_type) {
      types.add(project.client_type);
    }
  });
  return Array.from(types).sort();
});

// Filter projects based on selected filters
const filteredProjects = computed(() => {
  return additionalProjects.value.filter((project) => {
    // If no filters selected, show all projects
    if (
      selectedTags.value.length === 0 &&
      selectedClientTypes.value.length === 0
    ) {
      return true;
    }

    // Check if project matches selected tags (any tag match)
    const matchesTags =
      selectedTags.value.length === 0 ||
      project.tags?.some((tag) => selectedTags.value.includes(tag));

    // Check if project matches selected client types (any type match)
    const matchesClientType =
      selectedClientTypes.value.length === 0 ||
      (project.client_type &&
        selectedClientTypes.value.includes(project.client_type));

    // Project must match both filter categories if both have selections, otherwise match either
    return selectedTags.value.length > 0 && selectedClientTypes.value.length > 0
      ? matchesTags && matchesClientType
      : matchesTags || matchesClientType;
  });
});

// Clear all filters
const clearFilters = () => {
  selectedTags.value = [];
  selectedClientTypes.value = [];
};

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return selectedTags.value.length > 0 || selectedClientTypes.value.length > 0;
});
</script>

<template>
  <div>
    <ProjectsPortfolio />

    <!-- Additional Projects Section -->
    <FadeInUp>
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-8">More Projects</h2>

        <!-- Filter Section -->
        <div class="mb-8 space-y-4">
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex-1 min-w-[200px]">
              <label class="block text-sm font-medium mb-2"
                >Filter by Tag</label
              >
              <USelectMenu
                v-model="selectedTags"
                :options="allTags"
                multiple
                placeholder="Select tags..."
                searchable
                clear-search-on-close
              />
            </div>
            <div class="flex-1 min-w-[200px]">
              <label class="block text-sm font-medium mb-2"
                >Filter by Client Type</label
              >
              <USelectMenu
                v-model="selectedClientTypes"
                :options="allClientTypes"
                multiple
                placeholder="Select client types..."
                searchable
                clear-search-on-close
              />
            </div>
            <div class="flex items-end">
              <UButton
                v-if="hasActiveFilters"
                variant="outline"
                color="gray"
                @click="clearFilters"
              >
                Clear Filters
              </UButton>
            </div>
          </div>

          <!-- Active filters display -->
          <div v-if="hasActiveFilters" class="flex flex-wrap gap-2">
            <UBadge
              v-for="tag in selectedTags"
              :key="`tag-${tag}`"
              color="primary"
              variant="soft"
              size="md"
            >
              {{ tag }}
              <button
                type="button"
                class="ml-1 hover:text-primary-700"
                :aria-label="`Remove ${tag} filter`"
                @click="selectedTags = selectedTags.filter((t) => t !== tag)"
              >
                ×
              </button>
            </UBadge>
            <UBadge
              v-for="type in selectedClientTypes"
              :key="`type-${type}`"
              color="blue"
              variant="soft"
              size="md"
            >
              {{ type }}
              <button
                type="button"
                class="ml-1 hover:text-blue-700"
                :aria-label="`Remove ${type} filter`"
                @click="
                  selectedClientTypes = selectedClientTypes.filter(
                    (t) => t !== type,
                  )
                "
              >
                ×
              </button>
            </UBadge>
          </div>

          <!-- Results count -->
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Showing {{ filteredProjects.length }} of
            {{ additionalProjects.length }}
            {{ additionalProjects.length === 1 ? "project" : "projects" }}
          </p>
        </div>

        <!-- Projects Grid -->
        <div
          v-if="filteredProjects.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FadeInUp
            v-for="(project, index) in filteredProjects"
            :key="project.to"
            :delay="index * 0.2"
          >
            <NuxtLink :to="project.to" class="group block cursor-pointer">
              <img
                v-if="project.thumbnail"
                :src="project.thumbnail"
                :alt="project.title"
                class="rounded-xl w-full h-56 object-cover object-top shadow-lg drop-shadow-lg group-hover:shadow-xl group-hover:drop-shadow-xl transition-all duration-300"
              />
              <div
                v-else
                class="rounded-xl w-full h-56 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 shadow-lg drop-shadow-lg group-hover:shadow-xl group-hover:drop-shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <span
                  class="text-primary-700 dark:text-primary-200 font-bold text-2xl"
                >
                  {{ project.title }}
                </span>
              </div>
              <h3
                class="mt-4 font-bold text-xl group-hover:text-primary transition"
              >
                {{ project.title }}
              </h3>
              <p v-if="project.client_type" class="text-primary-400 text-sm">
                {{ project.client_type }}
              </p>
              <div v-if="project.tags" class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </FadeInUp>
        </div>

        <!-- No results message -->
        <div
          v-else
          class="text-center py-12 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <Icon
            name="i-lucide-search-x"
            class="w-12 h-12 mx-auto mb-4 text-gray-400"
          />
          <h3 class="text-xl font-semibold mb-2">No projects found</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Try adjusting your filters to see more results.
          </p>
          <UButton variant="outline" @click="clearFilters">
            Clear All Filters
          </UButton>
        </div>
      </div>
    </FadeInUp>
  </div>
</template>
