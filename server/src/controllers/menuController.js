import { menuService } from '../services/menuService.js';
import { AppError } from '../utils/AppError.js';

export const menuController = {
  async getCategories(_req, res, next) {
    try {
      const categories = await menuService.getCategories();
      res.json({ ok: true, data: { categories } });
    } catch (err) {
      next(err);
    }
  },

  async getItems(req, res, next) {
    try {
      const { category = 'all', dietary = 'all', search = '', page = '1', limit = '100' } = req.query;
      const result = await menuService.getMenuItems({ category, dietary, search, page, limit });
      res.json({ ok: true, data: result });
    } catch (err) {
      next(err);
    }
  },

  async getItemById(req, res, next) {
    try {
      const item = await menuService.getMenuItemById(req.params.id);
      if (!item) {
        return next(new AppError('Menu item not found.', 404, 'NOT_FOUND'));
      }
      return res.json({ ok: true, data: { item } });
    } catch (err) {
      return next(err);
    }
  },
};
