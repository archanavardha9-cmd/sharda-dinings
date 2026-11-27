import { enquiryService } from '../services/enquiryService.js';
import {
  validateBanquetEnquiryInput,
  validateContactEnquiryInput,
  validateHotelEnquiryInput,
} from '../validators/submissionValidator.js';

export const enquiryController = {
  async createBanquet(req, res, next) {
    try {
      const validated = validateBanquetEnquiryInput(req.body);
      const result = await enquiryService.createEnquiry(validated);
      res.status(201).json({
        ok: true,
        message: 'Banquet enquiry submitted.',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async createHotel(req, res, next) {
    try {
      const validated = validateHotelEnquiryInput(req.body);
      const result = await enquiryService.createEnquiry(validated);
      res.status(201).json({
        ok: true,
        message: 'Hotel booking enquiry submitted.',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async createContact(req, res, next) {
    try {
      const validated = validateContactEnquiryInput(req.body);
      const result = await enquiryService.createEnquiry(validated);
      res.status(201).json({
        ok: true,
        message: 'Contact message submitted.',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};
