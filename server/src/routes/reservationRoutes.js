import { Router } from 'express';
import { reservationController } from '../controllers/reservationController.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', submissionLimiter, reservationController.create);

export default router;
