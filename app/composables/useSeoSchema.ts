const siteUrl = "https://www.trumediacreative.com";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const homepageImageId = `${siteUrl}/ogimage.png#primary-image`;
const treeStapleImageId = `${siteUrl}/images/video/tree-staple/tree-staple-hero.png#primary-image`;

export function useSeoSchema() {
  const route = useRoute();
  const pageUrl = computed(() => new URL(route.path, siteUrl).href);
  const breadcrumbId = computed(() => `${pageUrl.value}#breadcrumb`);
  const breadcrumbItems = computed(() => {
    const segments = route.path.split("/").filter(Boolean);
    let currentPath = "";

    return [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      ...segments.map((segment, index) => {
        currentPath += `/${segment}`;

        return {
          "@type": "ListItem",
          position: index + 2,
          name: segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (character) => character.toUpperCase()),
          item: new URL(currentPath, siteUrl).href,
        };
      }),
    ];
  });
  const relatedServiceId = computed(() => {
    if (route.path.startsWith("/services/web-design")) {
      return `${siteUrl}/#web-design`;
    }

    if (
      route.path.startsWith("/services/seo-and-paid-ads") ||
      route.path.startsWith("/services/marketing-automation") ||
      route.path.includes("clarity-to-clients-workshop")
    ) {
      return `${siteUrl}/#digital-marketing`;
    }

    if (
      route.path.startsWith("/services/outreach-engine") ||
      route.path.startsWith("/solutions/outreach-engine")
    ) {
      return `${siteUrl}/#outbound-marketing`;
    }

    if (
      route.path.startsWith("/services/") ||
      route.path.startsWith("/solutions/")
    ) {
      return `${siteUrl}/#video-marketing`;
    }

    return undefined;
  });

  useSchemaOrg([
    defineImage({
      "@id": homepageImageId,
      url: `${siteUrl}/ogimage.png`,
      name: "TruMedia Creative",
      description: "TruMedia Creative's video-led growth services for B2B companies.",
      width: 1459,
      height: 824,
    }),
    defineImage({
      "@id": treeStapleImageId,
      url: `${siteUrl}/images/video/tree-staple/tree-staple-hero.png`,
      name: "Tree Staple Product Video Thumbnail",
      description: "Tree Staple product installation explainer video thumbnail.",
    }),
    defineService({
      "@id": `${siteUrl}/#web-design`,
      name: "Web Design & Development",
      serviceType: "Web Design and Development",
      description:
        "Strategy, design, development, and support for conversion-focused business websites.",
      provider: { "@id": organizationId },
      areaServed: "United States",
    }),
    defineService({
      "@id": `${siteUrl}/#video-marketing`,
      name: "Video Marketing & Production",
      serviceType: "Video Marketing and Production",
      description:
        "Video strategy, production, customer stories, and distribution that help B2B buyers understand and trust a business.",
      provider: { "@id": organizationId },
      areaServed: "United States",
    }),
    defineService({
      "@id": `${siteUrl}/#digital-marketing`,
      name: "Digital Marketing",
      serviceType: "Digital Marketing",
      description:
        "Search, paid advertising, content, and marketing automation services for B2B companies.",
      provider: { "@id": organizationId },
      areaServed: "United States",
    }),
    defineService({
      "@id": `${siteUrl}/#outbound-marketing`,
      name: "Outbound Marketing",
      serviceType: "Outbound Marketing",
      description:
        "Targeted outbound campaigns that put useful content in front of qualified B2B buyers.",
      provider: { "@id": organizationId },
      areaServed: "United States",
    }),
    defineWebPage(
      computed(() => ({
        "@id": `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        isPartOf: { "@id": websiteId },
        about: relatedServiceId.value
          ? { "@id": relatedServiceId.value }
          : undefined,
        mainEntity:
          route.path === "/projects/tree-staple"
            ? { "@id": `${pageUrl.value}#tree-staple-video` }
            : undefined,
        breadcrumb: { "@id": breadcrumbId.value },
        primaryImageOfPage:
          route.path === "/"
            ? { "@id": homepageImageId }
            : route.path === "/projects/tree-staple"
              ? { "@id": treeStapleImageId }
              : undefined,
      })),
    ),
    defineBreadcrumb(
      computed(() => ({
        "@id": breadcrumbId.value,
        itemListElement: breadcrumbItems.value,
      })),
    ),
  ]);
}
