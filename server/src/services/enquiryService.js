import crypto from 'crypto';
import { config } from '../config/env.js';
import { getRepository } from '../repositories/index.js';
import { dispatchNotificationPlaceholder } from './notificationPlaceholderService.js';

function makeReferenceCode(type) {
  const map = { banquet: 'SD-BNQ', hotel: 'SD-HTL', contact: 'SD-CNT' };
  const prefix = map[type] || 'SD-ENQ';
  return `${prefix}-${crypto.randomInt(100000, 999999)}`;
}

export const enquiryService = {
  async createEnquiry(validated) {
    const referenceCode = makeReferenceCode(validated.type);
    const created = await getRepository().createEnquiry({
      ...validated,
      referenceCode,
    });

    const notification = await dispatchNotificationPlaceholder({
      channel: 'whatsapp',
      referenceCode,
      category: validated.type,
    });

    return {
      enquiry: created,
      persistenceMode: config.dataDriver,
      temporaryInMockMode: config.dataDriver === 'mock',
      notification,
    };
  },

  async listEnquiries(query) {
    return getRepository().listEnquiries(query);
  },

  async updateEnquiryStatus(id, status) {
    return getRepository().updateEnquiryStatus(id, status);
  },
};
