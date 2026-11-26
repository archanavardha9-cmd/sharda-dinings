/**
 * Central configuration for the client website preview & activation popup.
 *
 * Manual Off Switch:
 * Set PROJECT_PREVIEW_POPUP_ENABLED to false after the client's 50% kickoff
 * payment is confirmed. When false, the popup, footer trigger, and device
 * preview iframes are completely disabled across all routes.
 */
export const PROJECT_PREVIEW_POPUP_ENABLED = true;

export const PROJECT_PREVIEW_CONFIG = {
  projectName: 'Sharda Dinings',
  logoSrc: '/images/home/sharda-dinings-logo-clean.webp',

  // Fixed preview publication date (YYYY-MM-DD). The 30-day deadline is
  // calculated once from this date and never resets on page load.
  publishedAt: '2026-11-26',
  retentionDays: 30,

  // Central WhatsApp contact (digits only: India 91 + 9670111167)
  whatsappNumber: '919670111167',

  activationMessage:
    'Hi, I’ve reviewed the Sharda Dinings website preview and would like to discuss activating the business website. I understand the kickoff payment is 50% of our agreed project fee. Please share the next steps for the remaining development work and launch. Thank you.',

  changesMessage:
    'Hi, I’ve reviewed the Sharda Dinings website preview. I’d like to request a few changes before proceeding. The changes I’d like are: ',
};

/**
 * Computes the fixed preview deadline date from publishedAt + retentionDays.
 * @returns {string} Formatted date, e.g. "December 26, 2026"
 */
export function getPreviewDeadlineLabel() {
  const [year, month, day] = PROJECT_PREVIEW_CONFIG.publishedAt
    .split('-')
    .map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  utcDate.setUTCDate(utcDate.getUTCDate() + PROJECT_PREVIEW_CONFIG.retentionDays);

  return utcDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * Builds an editable WhatsApp draft link using the centrally configured number.
 * @param {string} message
 * @returns {string}
 */
export function buildPreviewWhatsAppUrl(message) {
  return `https://wa.me/${PROJECT_PREVIEW_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Checks whether the current window is rendered inside a device preview iframe.
 * Preview mode only disables the popup inside the embedded device mockups.
 * @returns {boolean}
 */
export function isPreviewEmbedMode() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('preview') === '1';
}
