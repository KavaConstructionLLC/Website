declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
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
}

export function metaView(name: string, type: 'service' | 'page') {
  window.fbq?.('track', 'ViewContent', { content_name: name, content_type: type });
}

export function metaStep(name: 'EstimateStarted' | 'EstimateDetailsDone' | 'CalendarOpened', service: string) {
  if (firstTime(name)) window.fbq?.('trackCustom', name, { content_name: service || 'general' });
}
