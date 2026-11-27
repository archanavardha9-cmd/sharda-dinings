import { authService } from '../services/authService.js';
import { menuService } from '../services/menuService.js';
import { reservationService } from '../services/reservationService.js';
import { enquiryService } from '../services/enquiryService.js';
import { validateMenuItemInput } from '../validators/submissionValidator.js';
import { AppError } from '../utils/AppError.js';

const RESERVATION_STATUSES = new Set(['pending', 'confirmed', 'completed', 'cancelled']);
const ENQUIRY_STATUSES = new Set(['pending', 'contacted', 'confirmed', 'closed']);

export const adminController = {
  async login(req, res, next) {
    try {
      const result = await authService.login(req.body || {});
      res.json({ ok: true, data: result });
    } catch (err) {
      next(err);
    }
  },

  async me(req, res) {
    res.json({ ok: true, data: { admin: req.admin } });
  },

  async listReservations(req, res, next) {
    try {
      const result = await reservationService.listReservations(req.query);
      res.json({ ok: true, data: result });
    } catch (err) {
      next(err);
    }
  },

  async updateReservationStatus(req, res, next) {
    try {
      const status = String(req.body?.status || '').trim();
      if (!RESERVATION_STATUSES.has(status)) {
        return next(new AppError('Invalid reservation status.', 400, 'VALIDATION_ERROR'));
      }
      const updated = await reservationService.updateReservationStatus(req.params.id, status);
      if (!updated) return next(new AppError('Reservation not found.', 404, 'NOT_FOUND'));
      return res.json({ ok: true, data: { reservation: updated } });
    } catch (err) {
      return next(err);
    }
  },

  async listEnquiries(req, res, next) {
    try {
      const result = await enquiryService.listEnquiries(req.query);
      res.json({ ok: true, data: result });
    } catch (err) {
      next(err);
    }
  },

  async updateEnquiryStatus(req, res, next) {
    try {
      const status = String(req.body?.status || '').trim();
      if (!ENQUIRY_STATUSES.has(status)) {
        return next(new AppError('Invalid enquiry status.', 400, 'VALIDATION_ERROR'));
      }
      const updated = await enquiryService.updateEnquiryStatus(req.params.id, status);
      if (!updated) return next(new AppError('Enquiry not found.', 404, 'NOT_FOUND'));
      return res.json({ ok: true, data: { enquiry: updated } });
    } catch (err) {
      return next(err);
    }
  },

  async createMenuItem(req, res, next) {
    try {
      const validated = validateMenuItemInput(req.body, false);
      const item = await menuService.createMenuItem(validated);
      res.status(201).json({ ok: true, data: { item } });
    } catch (err) {
      next(err);
    }
  },

  async updateMenuItem(req, res, next) {
    try {
      const updates = validateMenuItemInput(req.body, true);
      const item = await menuService.updateMenuItem(req.params.id, updates);
      if (!item) return next(new AppError('Menu item not found.', 404, 'NOT_FOUND'));
      return res.json({ ok: true, data: { item } });
    } catch (err) {
      return next(err);
    }
  },

  async deleteMenuItem(req, res, next) {
    try {
      const deleted = await menuService.deleteMenuItem(req.params.id);
      if (!deleted) return next(new AppError('Menu item not found.', 404, 'NOT_FOUND'));
      return res.json({ ok: true, message: 'Menu item deleted.' });
    } catch (err) {
      return next(err);
    }
  },
};
