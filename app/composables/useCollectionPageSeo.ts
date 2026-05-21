interface BaseCollectionPage {
  seo?: {
    title?: string;
    description?: string;
  };
  title?: string;
  description?: string;
}

export async function useCollectionPageSeo<T extends BaseCollectionPage>(
  collection: string,
  key?: string,
) {
  const { data: page } = await useAsyncData(key ?? collection, () =>
    queryCollection(collection).first() as Promise<T | null>,
  );

  const title = computed(() => page.value?.seo?.title || page.value?.title);
  const description = computed(
    () => page.value?.seo?.description || page.value?.description,
  );

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
  });

  return { page, title, description };
}
