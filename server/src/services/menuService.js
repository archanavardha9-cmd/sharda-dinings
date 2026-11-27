import { getRepository } from '../repositories/index.js';

export const menuService = {
  async getCategories() {
    return getRepository().listCategories();
  },

  async getMenuItems(query) {
    return getRepository().listMenuItems(query);
  },

  async getMenuItemById(id) {
    return getRepository().getMenuItemById(id);
  },

  async createMenuItem(payload) {
    return getRepository().createMenuItem(payload);
  },

  async updateMenuItem(id, updates) {
    return getRepository().updateMenuItem(id, updates);
  },

  async deleteMenuItem(id) {
    return getRepository().deleteMenuItem(id);
  },
};
