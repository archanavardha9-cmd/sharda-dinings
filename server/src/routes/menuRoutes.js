import { Router } from 'express';
import { menuController } from '../controllers/menuController.js';

const router = Router();

router.get('/categories', menuController.getCategories);
router.get('/items', menuController.getItems);
router.get('/items/:id', menuController.getItemById);

export default router;
