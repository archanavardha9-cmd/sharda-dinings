import { config } from '../config/env.js';

/**
 * Integration placeholder for WhatsApp / Email / SMS notifications.
 * Intentionally does NOT dispatch real external messages while credentials are unconnected.
 */
export async function dispatchNotificationPlaceholder({ channel, referenceCode, category }) {
  const configured =
    channel === 'whatsapp'
      ? config.integrations.whatsappConfigured
      : channel === 'email'
        ? config.integrations.emailConfigured
        : config.integrations.smsConfigured;

  return {
    channel,
    category,
    referenceCode,
    dispatched: false,
    mode: configured ? 'adapter-ready' : 'placeholder-unconnected',
    note: 'External messaging is disabled until provider credentials are configured in .env.',
  };
}
