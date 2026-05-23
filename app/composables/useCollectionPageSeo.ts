interface BaseCollectionPage {
  [key: string]: unknown;
  seo?: {
    title?: string;
    description?: string;
  };
  title?: string;
  description?: string;
  cta?: Record<string, unknown>;
  pricing?: {
    title?: string;
    description?: string;
    items?: unknown[];
  };
}

export function useCollectionPageSeo(
  collection: string,
  key?: string,
) {
  const collectionName = collection as Parameters<typeof queryCollection>[0];

  const { data: pageData } = useAsyncData(key ?? String(collection), () =>
    queryCollection(collectionName).first(),
  );

  const page = computed(
    () => (pageData.value || null) as BaseCollectionPage | null,
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
