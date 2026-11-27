import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    referenceCode: { type: String, required: true, unique: true, index: true },
    enquiryType: {
      type: String,
      enum: ['restaurant', 'cafe'],
      default: 'restaurant',
    },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    date: { type: String, default: 'Flexible', trim: true, maxlength: 30 },
    time: { type: String, default: '19:30', trim: true, maxlength: 20 },
    guests: { type: String, default: '2 Guests', trim: true, maxlength: 40 },
    preference: { type: String, default: 'Main Dining Hall', trim: true, maxlength: 100 },
    seating: { type: String, default: 'Main Dining Hall', trim: true, maxlength: 100 },
    notes: { type: String, default: '', trim: true, maxlength: 600 },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
      index: true,
    },
    source: { type: String, default: 'web', trim: true },
  },
  { timestamps: true }
);

export const Reservation = mongoose.model('Reservation', reservationSchema);
