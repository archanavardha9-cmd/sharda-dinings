import crypto from 'crypto';
import { config } from '../config/env.js';
import { getRepository } from '../repositories/index.js';
import { dispatchNotificationPlaceholder } from './notificationPlaceholderService.js';

function makeReferenceCode(prefix) {
  return `${prefix}-${crypto.randomInt(100000, 999999)}`;
}

export const reservationService = {
  async createReservation(validated) {
    const referenceCode = makeReferenceCode('SD-TBL');
    const created = await getRepository().createReservation({
      ...validated,
      referenceCode,
      source: 'web',
    });

    const notification = await dispatchNotificationPlaceholder({
      channel: 'whatsapp',
      referenceCode,
      category: 'reservation',
    });

    return {
      reservation: created,
      persistenceMode: config.dataDriver,
      temporaryInMockMode: config.dataDriver === 'mock',
      notification,
    };
  },

  async listReservations(query) {
    return getRepository().listReservations(query);
  },

  async updateReservationStatus(id, status) {
    return getRepository().updateReservationStatus(id, status);
  },
};
