import { wizardServices } from '../data/wizard';
import { site } from '../data/site';
import { metaLead, metaStep, metaView } from './meta';

declare global {
  interface Window {
    va?: (event: string, payload?: unknown) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(name: string, data: Record<string, string | number> = {}) {
  window.va?.('event', { name, data });
  (window.dataLayer ??= []).push({ event: name, ...data });
}

const dialog = document.querySelector<HTMLDialogElement>('#wizard');
const calendar = document.querySelector<HTMLDialogElement>('#calendar');
const lastStep = 3;
const pageService = document.body.dataset.service ?? '';
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function adParams() {
  try {
    const current = new URLSearchParams(location.search);
    if (utmKeys.some((k) => current.has(k))) sessionStorage.setItem('kv-utm', current.toString());
    return new URLSearchParams(sessionStorage.getItem('kv-utm') ?? '');
  } catch {
    return new URLSearchParams();
  }
}

const state = {
  step: 1,
  services: new Set<string>(),
  details: {} as Record<string, string>,
  timing: '',
  owner: '',
  opened: false,
};

function label(id: string) {
  return wizardServices.find((s) => s.id === id)?.label ?? id;
}

function values() {
  const form = dialog!.querySelector('form')!;
  return {
    name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
    zip: (form.elements.namedItem('zip') as HTMLInputElement).value.trim(),
  };
}

function serviceLines() {
  return [...state.services].map((id) =>
    state.details[id] ? `${label(id)}: ${state.details[id]}` : label(id),
  );
}

function message() {
  const { name, zip } = values();
  const lines = [`Hi Kava! I'd like a free estimate.`, `Project: ${serviceLines().join('; ') || '-'}`];
  if (state.timing) lines.push(`Timing: ${state.timing}`);
  if (state.owner) lines.push(`Home: ${state.owner}`);
  if (name) lines.push(`Name: ${name}`);
  if (zip) lines.push(`ZIP: ${zip}`);
  return lines.join('\n');
}

function activeService() {
  return [...state.services].join('+') || pageService;
}

function calendlyUrl() {
  const { name } = values();
  const url = new URL(site.calendly);
  if (name) url.searchParams.set('name', name);
  // Fills the first booking question so the wizard answers reach Kava
  if (state.services.size) url.searchParams.set('a1', message());
  const ads = adParams();
  utmKeys.forEach((k) => {
    if (ads.has(k)) url.searchParams.set(k, ads.get(k)!);
  });
  return url.toString();
}

function openCalendar(href: string) {
  if (!calendar) return;
  const url = new URL(href);
  url.searchParams.set('embed_domain', location.host);
  url.searchParams.set('embed_type', 'Inline');
  url.searchParams.set('hide_gdpr_banner', '1');
  calendar.querySelector<HTMLIFrameElement>('[data-cal-frame]')!.src = url.toString();
  calendar.querySelector<HTMLAnchorElement>('[data-cal-fallback]')!.href = href;
  if (dialog?.open) dialog.close();
  calendar.showModal();
}

function smsUrl() {
  return `sms:${site.smsNumber}?&body=${encodeURIComponent(message())}`;
}

function syncLinks() {
  dialog!.querySelector<HTMLAnchorElement>('[data-calendly]')!.href = calendlyUrl();
  dialog!.querySelector<HTMLAnchorElement>('[data-sms]')!.href = smsUrl();
}

function show(step: number) {
  state.step = step;
  dialog!.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
    el.hidden = el.dataset.step !== String(step);
  });
  dialog!.querySelector<HTMLElement>('[data-tape-fill]')!.style.width = `${step * 33.34}%`;
  dialog!.querySelector<HTMLElement>('[data-step-label]')!.textContent = `Step ${step} of ${lastStep}`;
  dialog!.querySelector<HTMLElement>('[data-back]')!.hidden = step === 1;
  dialog!.querySelector<HTMLElement>('[data-next]')!.hidden = step === lastStep;
  dialog!.querySelector<HTMLElement>('.sheet-body')!.scrollTop = 0;
  if (step === 2) renderDetails();
  if (step === lastStep) {
    syncLinks();
    metaStep('EstimateDetailsDone', activeService());
  }
  showPickError(false);
  track('wizard_step', { step });
}

function showPickError(visible: boolean) {
  dialog!.querySelector<HTMLElement>('[data-pick-error]')!.hidden = !visible;
}

// Keeps the focused field visible above the on-screen keyboard
function centerField() {
  const field = document.activeElement;
  const body = dialog!.querySelector<HTMLElement>('.sheet-body')!;
  if (!(field instanceof HTMLInputElement) || !body.contains(field)) return;
  const box = body.getBoundingClientRect();
  const rect = field.getBoundingClientRect();
  body.scrollTop += rect.top - box.top - (box.height - rect.height) / 2;
}

// dvh ignores the iOS keyboard, so the sheet follows the visual viewport instead
function fitSheet() {
  const view = window.visualViewport;
  if (!view) return;
  const keyboard = Math.max(0, Math.round(window.innerHeight - view.height - view.offsetTop));
  dialog!.style.setProperty('--sheet-bottom', `${keyboard}px`);
  dialog!.style.setProperty('--sheet-max', `${Math.round(view.height * (keyboard ? 1 : 0.92))}px`);
  dialog!.toggleAttribute('data-compact', view.height < 640);
  centerField();
}

function watchViewport(on: boolean) {
  const method = on ? 'addEventListener' : 'removeEventListener';
  window.visualViewport?.[method]('resize', fitSheet);
  window.visualViewport?.[method]('scroll', fitSheet);
}

function chip(text: string, pressed: boolean, attr: string, value: string) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'chip';
  button.textContent = text;
  button.setAttribute('aria-pressed', String(pressed));
  button.setAttribute(attr, value);
  return button;
}

function renderDetails() {
  const box = dialog!.querySelector<HTMLElement>('[data-details]')!;
  box.replaceChildren();
  for (const id of state.services) {
    const service = wizardServices.find((s) => s.id === id)!;
    const group = document.createElement('div');
    group.className = 'mb-5';
    const heading = document.createElement('p');
    heading.className = 'font-bold mb-2';
    heading.textContent = service.question;
    const row = document.createElement('div');
    row.className = 'flex flex-wrap gap-2';
    service.options.forEach((option) => {
      const button = chip(option, state.details[id] === option, 'data-detail', option);
      button.dataset.service = id;
      row.append(button);
    });
    group.append(heading, row);
    box.append(group);
  }
}

function openWizard(preselect: string, source: string) {
  if (!dialog) return;
  if (preselect && wizardServices.some((s) => s.id === preselect)) {
    state.services = new Set([preselect]);
  }
  dialog.querySelectorAll<HTMLElement>('[data-service-tile]').forEach((tile) => {
    tile.setAttribute('aria-pressed', String(state.services.has(tile.dataset.serviceTile!)));
  });
  fitSheet();
  watchViewport(true);
  dialog.showModal();
  track('wizard_open', { source, service: preselect });
  metaStep('EstimateStarted', activeService());
  show(preselect ? 2 : 1);
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const anchor = target.closest<HTMLAnchorElement>('a');
  if (anchor?.href.startsWith('tel:')) {
    track('call_click');
    metaLead('call', activeService());
  }
  if (anchor?.href.startsWith('sms:')) {
    track('text_click');
    metaLead('text', activeService());
  }
  if (anchor?.href.includes('calendly.com')) {
    track('calendly_click');
    metaStep('CalendarOpened', activeService());
    if (!anchor.hasAttribute('data-cal-fallback')) {
      event.preventDefault();
      openCalendar(anchor.href);
      return;
    }
  }

  if (calendar?.contains(target)) {
    if (target === calendar || target.closest('[data-cal-close]')) calendar.close();
    return;
  }

  const opener = target.closest<HTMLElement>('[data-wizard]');
  if (opener) {
    event.preventDefault();
    openWizard(opener.dataset.wizard ?? '', opener.dataset.source ?? location.pathname);
    return;
  }
  if (!dialog?.contains(target)) return;

  const tile = target.closest<HTMLElement>('[data-service-tile]');
  if (tile) {
    const id = tile.dataset.serviceTile!;
    if (state.services.has(id)) state.services.delete(id);
    else state.services.add(id);
    tile.setAttribute('aria-pressed', String(state.services.has(id)));
    showPickError(false);
  }

  const detail = target.closest<HTMLElement>('[data-detail]');
  if (detail) {
    const id = detail.dataset.service!;
    state.details[id] = state.details[id] === detail.dataset.detail ? '' : detail.dataset.detail!;
    renderDetails();
  }

  const single = target.closest<HTMLElement>('[data-single]');
  if (single) {
    const key = single.dataset.single as 'timing' | 'owner';
    state[key] = state[key] === single.textContent ? '' : single.textContent!;
    dialog.querySelectorAll<HTMLElement>(`[data-single="${key}"]`).forEach((button) => {
      button.setAttribute('aria-pressed', String(button.textContent === state[key]));
    });
  }

  if (target.closest('[data-close]')) dialog.close();
  if (target.closest('[data-back]')) show(state.step - 1);
  if (target.closest('[data-next]')) {
    if (state.step === 1 && state.services.size === 0) {
      showPickError(true);
      dialog.querySelector<HTMLElement>('.sheet-body')!.scrollTop = 0;
      track('wizard_blocked');
    } else show(state.step + 1);
  }
  // A tap on the backdrop lands on the dialog element itself
  if (target === dialog) dialog.close();
});

// Nothing is sent from here. The Go key just closes the keyboard.
dialog?.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  (document.activeElement as HTMLElement | null)?.blur();
});

dialog?.addEventListener('close', () => watchViewport(false));

calendar?.addEventListener('close', () => {
  calendar.querySelector<HTMLIFrameElement>('[data-cal-frame]')!.removeAttribute('src');
});

// Calendly tells the page when a booking is finished
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://calendly.com' || event.data?.event !== 'calendly.event_scheduled') return;
  track('booking_complete');
  metaLead('booking', activeService());
});

adParams();
if (pageService) metaView(pageService);

dialog?.addEventListener('focusin', () => window.setTimeout(centerField, 300));

dialog?.addEventListener('input', (event) => {
  const input = event.target as HTMLInputElement;
  if (input.name === 'zip') input.value = input.value.replace(/\D/g, '').slice(0, 5);
  syncLinks();
});
