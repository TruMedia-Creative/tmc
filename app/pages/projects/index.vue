<script setup lang="ts">
import type { AdditionalProject } from "~/types/project";

const { data: additionalProjectsPage } = await useAsyncData(
  "additional-projects",
  () => queryCollection("additionalProjects").first(),
);

const additionalProjects = computed(
  () => (additionalProjectsPage.value?.items as AdditionalProject[]) || [],
);

const {
  selectedTags,
  selectedClientTypes,
  allTags,
  allClientTypes,
  filteredProjects,
  hasActiveFilters,
  clearFilters,
} = useAdditionalProjectsFilter(additionalProjects);
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
                color="neutral"
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
              color="info"
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
