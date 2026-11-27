import { MENU_CATEGORIES, MENU_ITEMS } from '../../../src/data/menuData.js';
import { AppError } from '../utils/AppError.js';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const categories = MENU_CATEGORIES.map((c, idx) => ({ ...c, sortOrder: idx }));
const items = MENU_ITEMS.map((item) => ({ ...item, isAvailable: true }));

const reservations = [
  {
    id: 'res-demo-1',
    referenceCode: 'SD-TBL-1001',
    enquiryType: 'restaurant',
    name: 'Aarav Mishra',
    phone: '+91 98765 43210',
    date: '2026-12-01',
    time: '19:30',
    guests: '4 Guests',
    preference: 'Main Dining Hall',
    seating: 'Velvet Family Booth',
    notes: 'Demo record (mock mode)',
    status: 'confirmed',
    source: 'web',
    createdAt: new Date().toISOString(),
  },
];

const enquiries = [
  {
    id: 'enq-demo-1',
    referenceCode: 'SD-BNQ-2001',
    type: 'banquet',
    name: 'S. K. Gupta',
    phone: '+91 99724 03294',
    eventType: 'Wedding Reception',
    guestCount: '100',
    eventDate: '2026-12-15',
    foodPreference: 'Pure Vegetarian & Jain (Dedicated Cookware)',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

function applyMenuFilters(list, { category, dietary, search }) {
  const q = (search || '').trim().toLowerCase();
  return list.filter((item) => {
    if (item.isAvailable === false) return false;
    if (category && category !== 'all' && item.category !== category) return false;
    if (dietary === 'veg' && !item.isVeg) return false;
    if (dietary === 'nonveg' && item.isVeg) return false;
    if (dietary === 'special' && !item.chefSpecial) return false;
    if (q) {
      const hay = `${item.name} ${item.description} ${item.pairing || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export const mockAdapter = {
  async listCategories() {
    return clone(categories);
  },

  async listMenuItems({ category = 'all', dietary = 'all', search = '', page = 1, limit = 100 } = {}) {
    const filtered = applyMenuFilters(items, { category, dietary, search });
    const total = filtered.length;
    const safeLimit = Math.max(1, Math.min(200, Number(limit) || 100));
    const safePage = Math.max(1, Number(page) || 1);
    const start = (safePage - 1) * safeLimit;
    const paged = filtered.slice(start, start + safeLimit);

    const available = items.filter((i) => i.isAvailable !== false);
    const dietaryCounts = {
      all: available.length,
      veg: available.filter((i) => i.isVeg).length,
      nonveg: available.filter((i) => !i.isVeg).length,
      special: available.filter((i) => i.chefSpecial).length,
    };

    return {
      items: clone(paged),
      dietaryCounts,
      pagination: {
        page: safePage,
        limit: safeLimit,
        total,
        totalPages: Math.max(1, Math.ceil(total / safeLimit)),
      },
    };
  },

  async getMenuItemById(id) {
    const found = items.find((i) => i.id === id);
    return found ? clone(found) : null;
  },

  async createMenuItem(payload) {
    if (items.some((i) => i.id === payload.id)) {
      throw new AppError(`Menu item with id "${payload.id}" already exists.`, 409, 'DUPLICATE_MENU_ITEM');
    }
    const created = { ...payload, isAvailable: payload.isAvailable ?? true };
    items.push(created);
    return clone(created);
  },

  async updateMenuItem(id, updates) {
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    items[idx] = { ...items[idx], ...updates, id };
    return clone(items[idx]);
  },

  async deleteMenuItem(id) {
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1) return false;
    items.splice(idx, 1);
    return true;
  },

  async createReservation(payload) {
    const record = {
      id: `res-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      ...payload,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    reservations.unshift(record);
    return clone(record);
  },

  async listReservations({ status, page = 1, limit = 20 } = {}) {
    const filtered = status ? reservations.filter((r) => r.status === status) : reservations;
    const total = filtered.length;
    const safeLimit = Math.max(1, Math.min(100, Number(limit) || 20));
    const safePage = Math.max(1, Number(page) || 1);
    const start = (safePage - 1) * safeLimit;
    return {
      items: clone(filtered.slice(start, start + safeLimit)),
      pagination: { page: safePage, limit: safeLimit, total, totalPages: Math.max(1, Math.ceil(total / safeLimit)) },
    };
  },

  async updateReservationStatus(id, status) {
    const idx = reservations.findIndex((r) => r.id === id || r.referenceCode === id);
    if (idx === -1) return null;
    reservations[idx].status = status;
    reservations[idx].updatedAt = new Date().toISOString();
    return clone(reservations[idx]);
  },

  async createEnquiry(payload) {
    const record = {
      id: `enq-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      ...payload,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    enquiries.unshift(record);
    return clone(record);
  },

  async listEnquiries({ type, status, page = 1, limit = 20 } = {}) {
    const filtered = enquiries.filter((e) => {
      if (type && e.type !== type) return false;
      if (status && e.status !== status) return false;
      return true;
    });
    const total = filtered.length;
    const safeLimit = Math.max(1, Math.min(100, Number(limit) || 20));
    const safePage = Math.max(1, Number(page) || 1);
    const start = (safePage - 1) * safeLimit;
    return {
      items: clone(filtered.slice(start, start + safeLimit)),
      pagination: { page: safePage, limit: safeLimit, total, totalPages: Math.max(1, Math.ceil(total / safeLimit)) },
    };
  },

  async updateEnquiryStatus(id, status) {
    const idx = enquiries.findIndex((e) => e.id === id || e.referenceCode === id);
    if (idx === -1) return null;
    enquiries[idx].status = status;
    enquiries[idx].updatedAt = new Date().toISOString();
    return clone(enquiries[idx]);
  },
};
