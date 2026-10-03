const siteUrl = "https://www.trumediacreative.com";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const homepageImageId = `${siteUrl}/ogimage.png#primary-image`;
const treeStapleImageId = `${siteUrl}/images/video/tree-staple/tree-staple-hero.png#primary-image`;

const breadcrumbRoutes: Record<string, { name: string; parent?: string }> = {
  "/who-we-are": { name: "Who We Are" },
  "/contact": { name: "Contact" },
  "/pricing": { name: "Pricing" },
  "/privacy": { name: "Privacy Policy" },
  "/login": { name: "Login" },
  "/signup": { name: "Sign Up" },
  "/coming-soon": { name: "Coming Soon" },
  "/blog": { name: "Blog" },
  "/changelog": { name: "Changelog" },
  "/resources": { name: "Resources" },
  "/resources/guides": { name: "Guides", parent: "/resources" },
  "/resources/blog": { name: "Blog", parent: "/resources" },
  "/resources/case-studies": { name: "Case Studies", parent: "/resources" },
  "/resources/media-kit": { name: "Media Kit", parent: "/resources" },
  "/resources/offer-creator": { name: "Offer Creator", parent: "/resources" },
  "/resources/tutorials": { name: "Tutorials", parent: "/resources" },
  "/industries": { name: "Industries" },
  "/industries/contractors-manufactures": {
    name: "Industrial & Manufacturing",
    parent: "/industries",
  },
  "/industries/financial-services": {
    name: "Financial Services",
    parent: "/industries",
  },
  "/industries/food-services": { name: "Food Services", parent: "/industries" },
  "/industries/health-and-wellness": {
    name: "Health & Wellness",
    parent: "/industries",
  },
  "/industries/live-events-and-entertainment": {
    name: "Live Events & Entertainment",
    parent: "/industries",
  },
  "/industries/non-profits": { name: "Nonprofits", parent: "/industries" },
  "/solutions": { name: "Solutions" },
  "/solutions/clarify-your-message": {
    name: "Clarify Your Message",
    parent: "/solutions",
  },
  "/solutions/fix-your-live-stream-and-events": {
    name: "Live Stream & Events",
    parent: "/solutions",
  },
  "/solutions/get-more-leads": { name: "Get More Leads", parent: "/solutions" },
  "/solutions/keep-customers-longer": {
    name: "Keep Customers Longer",
    parent: "/solutions",
  },
  "/solutions/reach-more-buyers": {
    name: "Reach More Buyers",
    parent: "/solutions",
  },
  "/solutions/speed-up-sales": { name: "Speed Up Sales", parent: "/solutions" },
  "/solutions/products/clarity-to-clients-workshop": {
    name: "Clarity to Clients Workshop",
    parent: "/solutions",
  },
  "/services": { name: "Services" },
  "/services/content-creation": {
    name: "Content Creation",
    parent: "/services",
  },
  "/services/marketing-automation": {
    name: "Marketing Automation",
    parent: "/services",
  },
  "/services/outreach-engine": {
    name: "Outreach Engine",
    parent: "/services",
  },
  "/services/seo-and-paid-ads": {
    name: "SEO & Paid Ads",
    parent: "/services",
  },
  "/services/video-growth-engine": {
    name: "Video Growth Engine",
    parent: "/services",
  },
  "/services/web-design": { name: "Web Design", parent: "/services" },
  "/services/web-design/comparison": {
    name: "Web Design Comparison",
    parent: "/services/web-design",
  },
  "/projects": { name: "Projects" },
  "/projects/advanced-snow-management": {
    name: "Advanced Snow Management",
    parent: "/projects",
  },
  "/projects/bidchip": { name: "BidChip", parent: "/projects" },
  "/projects/church/spruce-run-lutheran": {
    name: "Spruce Run Lutheran",
    parent: "/projects",
  },
  "/projects/cut-artisan-hair-design": {
    name: "Cut Artisan Hair Design",
    parent: "/projects",
  },
  "/projects/fiddlers-elbow-country-club": {
    name: "Fiddler's Elbow Country Club",
    parent: "/projects",
  },
  "/projects/ici-consulting": { name: "ICI Consulting", parent: "/projects" },
  "/projects/nascar-cody-ware": { name: "NASCAR Cody Ware", parent: "/projects" },
  "/projects/nourish-to-heal": {
    name: "Nourish to Heal",
    parent: "/projects",
  },
  "/projects/olivet-baptist-church": {
    name: "Olivet Baptist Church",
    parent: "/projects",
  },
  "/projects/pinetar": { name: "PineTar", parent: "/projects" },
  "/projects/pjpolke": { name: "pj polke", parent: "/projects" },
  "/projects/resurgent": { name: "Resurgent", parent: "/projects" },
  "/projects/shore-christian": {
    name: "Shore Christian",
    parent: "/projects",
  },
  "/projects/south-ridge-cc": {
    name: "South Ridge Community Church",
    parent: "/projects",
  },
  "/projects/tree-staple": { name: "Tree Staple", parent: "/projects" },
  "/projects/zero-surge": { name: "Zero Surge", parent: "/projects" },
};

export function useSeoSchema() {
  const route = useRoute();
  const pageUrl = computed(() => new URL(route.path, siteUrl).href);
  const breadcrumbId = computed(() => `${pageUrl.value}#breadcrumb`);
  const breadcrumbItems = computed(() => {
    if (route.path === "/") {
      return undefined;
    }

    const items: { name: string; item: string }[] = [];
    let currentPath: string | undefined = route.path;

    while (currentPath && currentPath !== "/") {
      const breadcrumb:
        | { name: string; parent?: string }
        | undefined = breadcrumbRoutes[currentPath];

      if (!breadcrumb) {
        return undefined;
      }

      items.unshift({
        name: breadcrumb.name,
        item: new URL(currentPath, siteUrl).href,
      });
      currentPath = breadcrumb.parent;
    }

    return [
      {
        name: "Home",
        item: `${siteUrl}/`,
      },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    }));
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

  useSchemaOrg(
    computed(() => [
      defineImage({
        "@id": homepageImageId,
        url: `${siteUrl}/ogimage.png`,
        name: "TruMedia Creative",
        description:
          "TruMedia Creative's video-led growth services for B2B companies.",
        width: 1459,
        height: 824,
      }),
      defineImage({
        "@id": treeStapleImageId,
        url: `${siteUrl}/images/video/tree-staple/tree-staple-hero.png`,
        name: "Tree Staple Product Video Thumbnail",
        description:
          "Tree Staple product installation explainer video thumbnail.",
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
      defineWebPage({
        "@id": `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        isPartOf: { "@id": websiteId },
        about: relatedServiceId.value
          ? { "@id": relatedServiceId.value }
          : undefined,
        breadcrumb: breadcrumbItems.value
          ? { "@id": breadcrumbId.value }
          : undefined,
        primaryImageOfPage:
          route.path === "/"
            ? { "@id": homepageImageId }
            : route.path === "/projects/tree-staple"
              ? { "@id": treeStapleImageId }
              : undefined,
      }),
      ...(breadcrumbItems.value
        ? [
            defineBreadcrumb({
              "@id": breadcrumbId.value,
              itemListElement: breadcrumbItems.value,
            }),
          ]
        : []),
    ]),
  );
}
