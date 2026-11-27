import { MenuCategory } from '../models/MenuCategory.js';
import { MenuItem } from '../models/MenuItem.js';
import { Reservation } from '../models/Reservation.js';
import { Enquiry } from '../models/Enquiry.js';
import { AppError } from '../utils/AppError.js';

export const mongoAdapter = {
  async listCategories() {
    return MenuCategory.find().sort({ sortOrder: 1 }).lean();
  },

  async listMenuItems({ category = 'all', dietary = 'all', search = '', page = 1, limit = 100 } = {}) {
    const query = { isAvailable: true };
    if (category && category !== 'all') query.category = category;
    if (dietary === 'veg') query.isVeg = true;
    if (dietary === 'nonveg') query.isVeg = false;
    if (dietary === 'special') query.chefSpecial = true;

    const q = (search || '').trim();
    if (q) {
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'i');
      query.$or = [{ name: regex }, { description: regex }, { pairing: regex }];
    }

    const safeLimit = Math.max(1, Math.min(200, Number(limit) || 100));
    const safePage = Math.max(1, Number(page) || 1);
    const skip = (safePage - 1) * safeLimit;

    const [paged, total, allCount, vegCount, nonvegCount, specialCount] = await Promise.all([
      MenuItem.find(query).skip(skip).limit(safeLimit).lean(),
      MenuItem.countDocuments(query),
      MenuItem.countDocuments({ isAvailable: true }),
      MenuItem.countDocuments({ isAvailable: true, isVeg: true }),
      MenuItem.countDocuments({ isAvailable: true, isVeg: false }),
      MenuItem.countDocuments({ isAvailable: true, chefSpecial: true }),
    ]);

    return {
      items: paged,
      dietaryCounts: {
        all: allCount,
        veg: vegCount,
        nonveg: nonvegCount,
        special: specialCount,
      },
      pagination: {
        page: safePage,
        limit: safeLimit,
        total,
        totalPages: Math.max(1, Math.ceil(total / safeLimit)),
      },
    };
  },

  async getMenuItemById(id) {
    return MenuItem.findOne({ id }).lean();
  },

  async createMenuItem(payload) {
    try {
      const created = await MenuItem.create(payload);
      return created.toObject();
    } catch (err) {
      if (err?.code === 11000) {
        throw new AppError(`Menu item with id "${payload.id}" already exists.`, 409, 'DUPLICATE_MENU_ITEM');
      }
      throw err;
    }
  },

  async updateMenuItem(id, updates) {
    return MenuItem.findOneAndUpdate({ id }, { $set: updates }, { new: true, runValidators: true }).lean();
  },

  async deleteMenuItem(id) {
    const deleted = await MenuItem.findOneAndDelete({ id }).lean();
    return Boolean(deleted);
  },

  async createReservation(payload) {
    const created = await Reservation.create(payload);
    return created.toObject();
  },

  async listReservations({ status, page = 1, limit = 20 } = {}) {
    const query = status ? { status } : {};
    const safeLimit = Math.max(1, Math.min(100, Number(limit) || 20));
    const safePage = Math.max(1, Number(page) || 1);
    const skip = (safePage - 1) * safeLimit;

    const [items, total] = await Promise.all([
      Reservation.find(query).sort({ createdAt: -1 }).skip(skip).limit(safeLimit).lean(),
      Reservation.countDocuments(query),
    ]);

    return {
      items,
      pagination: { page: safePage, limit: safeLimit, total, totalPages: Math.max(1, Math.ceil(total / safeLimit)) },
    };
  },

  async updateReservationStatus(id, status) {
    const filter = id.startsWith('SD-') ? { referenceCode: id } : { _id: id };
    return Reservation.findOneAndUpdate(filter, { $set: { status } }, { new: true, runValidators: true }).lean();
  },

  async createEnquiry(payload) {
    const created = await Enquiry.create(payload);
    return created.toObject();
  },

  async listEnquiries({ type, status, page = 1, limit = 20 } = {}) {
    const query = {};
    if (type) query.type = type;
    if (status) query.status = status;

    const safeLimit = Math.max(1, Math.min(100, Number(limit) || 20));
    const safePage = Math.max(1, Number(page) || 1);
    const skip = (safePage - 1) * safeLimit;

    const [items, total] = await Promise.all([
      Enquiry.find(query).sort({ createdAt: -1 }).skip(skip).limit(safeLimit).lean(),
      Enquiry.countDocuments(query),
    ]);

    return {
      items,
      pagination: { page: safePage, limit: safeLimit, total, totalPages: Math.max(1, Math.ceil(total / safeLimit)) },
    };
  },

  async updateEnquiryStatus(id, status) {
    const filter = id.startsWith('SD-') ? { referenceCode: id } : { _id: id };
    return Enquiry.findOneAndUpdate(filter, { $set: { status } }, { new: true, runValidators: true }).lean();
  },
};
