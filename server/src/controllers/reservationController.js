import { reservationService } from '../services/reservationService.js';
import { validateReservationInput } from '../validators/submissionValidator.js';

export const reservationController = {
  async create(req, res, next) {
    try {
      const validated = validateReservationInput(req.body);
      const result = await reservationService.createReservation(validated);
      res.status(201).json({
        ok: true,
        message: 'Table reservation request received.',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};
