/**
 * Utility for sending events to Google Analytics (gtag.js) and Google Tag Manager (dataLayer)
 */

type AnalyticsEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

// Teacher Note: We use window.dataLayer to communicate with GTM.
// It's an array of objects that GTM "watches". When we push an event here,
// GTM can trigger tags based on the event name.
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = ({ action, category, label, value, ...rest }: AnalyticsEvent) => {
  if (typeof window === "undefined") return;

  // 1. Send to GA4 directly via gtag (if available)
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }

  // 2. Push to GTM dataLayer
  // This is the preferred way for GTM to see what's happening.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: action, // This is what GTM uses as the "Custom Event" name
    category,
    label,
    value,
    ...rest,
  });

  // Logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${action}:`, { category, label, value, ...rest });
  }
};

export const trackCopyAction = (type: string, componentId: string, metadata?: any) => {
  trackEvent({
    action: `copy_${type}`,
    category: "Engagement",
    label: componentId,
    ...metadata
  });
};
