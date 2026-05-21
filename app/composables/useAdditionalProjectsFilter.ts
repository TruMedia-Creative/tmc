import type { AdditionalProject } from "~/types/project";

export function useAdditionalProjectsFilter(projects: Ref<AdditionalProject[]>) {
  const selectedTags = ref<string[]>([]);
  const selectedClientTypes = ref<string[]>([]);

  const allTags = computed(() => {
    const tags = new Set<string>();
    for (const project of projects.value) {
      for (const tag of project.tags || []) {
        tags.add(tag);
      }
    }
    return [...tags].sort();
  });

  const allClientTypes = computed(() => {
    const types = new Set<string>();
    for (const project of projects.value) {
      if (project.client_type) {
        types.add(project.client_type);
      }
    }
    return [...types].sort();
  });

  const filteredProjects = computed(() =>
    projects.value.filter((project) => {
      if (!selectedTags.value.length && !selectedClientTypes.value.length) {
        return true;
      }

      const matchesTags =
        !selectedTags.value.length ||
        project.tags?.some((tag) => selectedTags.value.includes(tag));

      const matchesClientType =
        !selectedClientTypes.value.length ||
        (project.client_type &&
          selectedClientTypes.value.includes(project.client_type));

      return selectedTags.value.length && selectedClientTypes.value.length
        ? matchesTags && matchesClientType
        : Boolean(matchesTags || matchesClientType);
    }),
  );

  const hasActiveFilters = computed(
    () => selectedTags.value.length > 0 || selectedClientTypes.value.length > 0,
  );

  const clearFilters = () => {
    selectedTags.value = [];
    selectedClientTypes.value = [];
  };

  return {
    selectedTags,
    selectedClientTypes,
    allTags,
    allClientTypes,
    filteredProjects,
    hasActiveFilters,
    clearFilters,
  };
}
