interface AnalyticsPayload {
  [key: string]: string | number | boolean | null | undefined;
}

interface CtaClickPayload {
  label: string;
  destination: string;
  location: string;
}

export function useAnalytics() {
  const trackEvent = (eventName: string, payload: AnalyticsPayload = {}) => {
    if (!import.meta.client) {
      return;
    }

    const trackingData = { event: eventName, ...payload };
    const globalWindow = window as typeof window & {
      dataLayer?: AnalyticsPayload[];
      gtag?: (
        command: string,
        eventName: string,
        payload?: AnalyticsPayload,
      ) => void;
    };

    if (Array.isArray(globalWindow.dataLayer)) {
      globalWindow.dataLayer.push(trackingData);
    }

    if (typeof globalWindow.gtag === "function") {
      globalWindow.gtag("event", eventName, payload);
    }
  };

  const trackCtaClick = ({ label, destination, location }: CtaClickPayload) => {
    trackEvent("cta_click", {
      cta_label: label,
      cta_destination: destination,
      cta_location: location,
    });
  };

  return {
    trackEvent,
    trackCtaClick,
  };
}