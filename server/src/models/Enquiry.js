import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    referenceCode: { type: String, required: true, unique: true, index: true },
    type: {
      type: String,
      enum: ['banquet', 'hotel', 'contact'],
      required: true,
      index: true,
    },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    email: { type: String, default: '', trim: true, maxlength: 120 },
    department: { type: String, default: '', trim: true, maxlength: 80 },
    eventType: { type: String, default: '', trim: true, maxlength: 100 },
    guestCount: { type: String, default: '', trim: true, maxlength: 40 },
    eventDate: { type: String, default: '', trim: true, maxlength: 30 },
    foodPreference: { type: String, default: '', trim: true, maxlength: 140 },
    checkIn: { type: String, default: '', trim: true, maxlength: 30 },
    checkOut: { type: String, default: '', trim: true, maxlength: 30 },
    roomType: { type: String, default: '', trim: true, maxlength: 80 },
    roomsCount: { type: String, default: '', trim: true, maxlength: 40 },
    guestsCount: { type: String, default: '', trim: true, maxlength: 40 },
    message: { type: String, default: '', trim: true, maxlength: 1200 },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'confirmed', 'closed'],
      default: 'pending',
      index: true,
    },
  },
  { timestamps: true }
);

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
