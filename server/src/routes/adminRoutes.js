import { Router } from 'express';
import { adminController } from '../controllers/adminController.js';
import { requireAdminAuth } from '../middleware/authMiddleware.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/login', submissionLimiter, adminController.login);

router.use(requireAdminAuth);
router.get('/me', adminController.me);
router.get('/reservations', adminController.listReservations);
router.patch('/reservations/:id', adminController.updateReservationStatus);
router.get('/enquiries', adminController.listEnquiries);
router.patch('/enquiries/:id', adminController.updateEnquiryStatus);
router.post('/menu/items', adminController.createMenuItem);
router.patch('/menu/items/:id', adminController.updateMenuItem);
router.delete('/menu/items/:id', adminController.deleteMenuItem);

export default router;
