import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true, maxlength: 140 },
    category: { type: String, required: true, trim: true, index: true },
    isVeg: { type: Boolean, required: true, default: true },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    chefSpecial: { type: Boolean, default: false },
    spice: {
      type: String,
      enum: ['Mild', 'Medium', 'Hot', 'Sweet'],
      default: 'Mild',
    },
    pairing: { type: String, default: '', trim: true, maxlength: 140 },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);
