import { Router } from 'express';
import { enquiryController } from '../controllers/enquiryController.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/banquets', submissionLimiter, enquiryController.createBanquet);
router.post('/hotel', submissionLimiter, enquiryController.createHotel);
router.post('/contact', submissionLimiter, enquiryController.createContact);

export default router;
