import { site } from '../data/site';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadMethod = 'call' | 'text' | 'email' | 'booking';

// A repeat tap in the same visit should not count as a second lead
function firstTime(name: string) {
  try {
    const key = `kv-meta-${name}`;
    if (sessionStorage.getItem(key)) return false;
    sessionStorage.setItem(key, '1');
  } catch {}
  return true;
}

export function metaLead(method: LeadMethod, service: string) {
  if (!firstTime(method)) return;
  const data = { content_name: service || 'general', content_category: method };
  window.fbq?.('track', 'Lead', data);
  window.fbq?.('track', method === 'booking' ? 'Schedule' : 'Contact', data);
  // Google bids on texts and bookings here. Calls are counted by the forwarding number (60s+) in
  // Base.astro, so a tap that never connects is not a lead. Texts leave the page, so the hit goes out as a beacon.
  if (method === 'text' || method === 'booking') window.gtag?.('event', 'conversion', {
    send_to: site.googleLeadConversion,
    event_category: method,
    event_label: service || 'general',
    transport_type: 'beacon',
  });
}

export function metaView(name: string, type: 'service' | 'page') {
  window.fbq?.('track', 'ViewContent', { content_name: name, content_type: type });
}

export function metaStep(name: 'EstimateStarted' | 'EstimateDetailsDone' | 'CalendarOpened', service: string) {
  if (firstTime(name)) window.fbq?.('trackCustom', name, { content_name: service || 'general' });
}
