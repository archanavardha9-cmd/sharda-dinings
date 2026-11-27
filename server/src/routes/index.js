import { Router } from 'express';
import { getDatabaseStatus } from '../config/db.js';
import menuRoutes from './menuRoutes.js';
import reservationRoutes from './reservationRoutes.js';
import enquiryRoutes from './enquiryRoutes.js';
import adminRoutes from './adminRoutes.js';

const router = Router();

router.get('/health', (_req, res) => {
  const db = getDatabaseStatus();
  res.json({
    ok: true,
    service: 'sharda-dinings-api',
    dataDriver: db.dataDriver,
    dbConnected: db.connected,
    timestamp: new Date().toISOString(),
  });
});

router.use('/menu', menuRoutes);
router.use('/reservations', reservationRoutes);
router.use('/enquiries', enquiryRoutes);
router.use('/admin', adminRoutes);

export default router;
