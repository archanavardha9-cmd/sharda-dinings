import mongoose from 'mongoose';

const menuCategorySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    icon: { type: String, default: '🍽️', trim: true },
    tag: { type: String, default: '', trim: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const MenuCategory = mongoose.model('MenuCategory', menuCategorySchema);
