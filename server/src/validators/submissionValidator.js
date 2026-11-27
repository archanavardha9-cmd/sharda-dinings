import { AppError } from '../utils/AppError.js';

export function sanitizeText(value, maxLen = 200) {
  if (value === undefined || value === null) return '';
  return String(value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen);
}

export function validatePhone(rawPhone) {
  const cleaned = sanitizeText(rawPhone, 25);
  const digits = cleaned.replace(/[^\d]/g, '');
  if (digits.length < 10 || digits.length > 15) {
    throw new AppError('Please provide a valid 10-digit phone or WhatsApp number.', 400, 'VALIDATION_ERROR');
  }
  return cleaned;
}

export function validateOptionalEmail(rawEmail) {
  const email = sanitizeText(rawEmail, 120).toLowerCase();
  if (!email) return '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new AppError('Please provide a valid email address.', 400, 'VALIDATION_ERROR');
  }
  return email;
}

export function validateReservationInput(body = {}) {
  const name = sanitizeText(body.name, 100);
  if (name.length < 2) {
    throw new AppError('Please enter your full name (at least 2 characters).', 400, 'VALIDATION_ERROR');
  }
  const phone = validatePhone(body.phone);
  const enquiryType = body.enquiryType === 'cafe' ? 'cafe' : 'restaurant';
  const date = sanitizeText(body.date, 30) || 'Flexible';
  const time = sanitizeText(body.time, 20) || '19:30';
  const guests = sanitizeText(body.guests, 40) || '2 Guests';
  const preference = sanitizeText(body.preference || body.seating, 100) || 'Main Dining Hall';
  const seating = sanitizeText(body.seating || body.preference, 100) || preference;
  const notes = sanitizeText(body.notes || body.specifics, 600);

  return { enquiryType, name, phone, date, time, guests, preference, seating, notes };
}

export function validateBanquetEnquiryInput(body = {}) {
  const name = sanitizeText(body.organizerName || body.name, 100);
  if (name.length < 2) {
    throw new AppError('Please enter the organizer name.', 400, 'VALIDATION_ERROR');
  }
  const phone = validatePhone(body.organizerPhone || body.phone);
  const eventType = sanitizeText(body.eventType, 100) || 'Wedding Reception';
  const guestCount = sanitizeText(body.guestCount || body.guests, 40) || '100';
  const eventDate = sanitizeText(body.eventDate || body.date, 30) || 'Flexible';
  const foodPreference =
    sanitizeText(body.foodPreference || body.preference, 140) ||
    'Pure Vegetarian & Jain (Dedicated Cookware)';
  const notes = sanitizeText(body.notes || body.specifics, 800);

  return { type: 'banquet', name, phone, eventType, guestCount, eventDate, foodPreference, message: notes };
}

export function validateHotelEnquiryInput(body = {}) {
  const name = sanitizeText(body.name, 100);
  if (name.length < 2) {
    throw new AppError('Please enter the primary guest name.', 400, 'VALIDATION_ERROR');
  }
  const phone = validatePhone(body.phone);
  const checkIn = sanitizeText(body.checkIn || body.date, 30) || 'Flexible';
  const checkOut = sanitizeText(body.checkOut, 30) || 'Flexible';

  if (
    checkIn !== 'Flexible' &&
    checkOut !== 'Flexible' &&
    /^\d{4}-\d{2}-\d{2}$/.test(checkIn) &&
    /^\d{4}-\d{2}-\d{2}$/.test(checkOut) &&
    checkOut < checkIn
  ) {
    throw new AppError('Check-out date cannot be earlier than check-in date.', 400, 'VALIDATION_ERROR');
  }

  const roomType = sanitizeText(body.roomType || body.preference, 80) || 'Deluxe King Room';
  const roomsCount = sanitizeText(body.roomsCount, 40) || '1 Room';
  const guestsCount = sanitizeText(body.guestsCount || body.guests, 40) || '2 Guests';
  const message = sanitizeText(body.notes || body.specifics, 800);

  return { type: 'hotel', name, phone, checkIn, checkOut, roomType, roomsCount, guestsCount, message };
}

export function validateContactEnquiryInput(body = {}) {
  const name = sanitizeText(body.name, 100);
  if (name.length < 2) {
    throw new AppError('Please enter your full name.', 400, 'VALIDATION_ERROR');
  }
  const phone = validatePhone(body.phone);
  const email = validateOptionalEmail(body.email);
  const department = sanitizeText(body.department, 80) || 'Restaurant Table';
  const message = sanitizeText(body.message, 1200);
  if (message.length < 3) {
    throw new AppError('Please enter a brief message.', 400, 'VALIDATION_ERROR');
  }

  return { type: 'contact', name, phone, email, department, message };
}

export function validateMenuItemInput(body = {}, isUpdate = false) {
  const allowedSpices = new Set(['Mild', 'Medium', 'Hot', 'Sweet']);
  const out = {};

  if (!isUpdate) {
    const id = sanitizeText(body.id, 40);
    if (!id) throw new AppError('Menu item id is required.', 400, 'VALIDATION_ERROR');
    out.id = id;
  }

  if (!isUpdate || body.name !== undefined) {
    const name = sanitizeText(body.name, 140);
    if (name.length < 2) throw new AppError('Menu item name is required.', 400, 'VALIDATION_ERROR');
    out.name = name;
  }
  if (!isUpdate || body.category !== undefined) {
    const category = sanitizeText(body.category, 60);
    if (!category) throw new AppError('Menu item category is required.', 400, 'VALIDATION_ERROR');
    out.category = category;
  }
  if (!isUpdate || body.description !== undefined) {
    const description = sanitizeText(body.description, 500);
    if (!description) throw new AppError('Menu item description is required.', 400, 'VALIDATION_ERROR');
    out.description = description;
  }
  if (!isUpdate || body.image !== undefined) {
    const image = sanitizeText(body.image, 240);
    if (!image) throw new AppError('Menu item image path is required.', 400, 'VALIDATION_ERROR');
    out.image = image;
  }
  if (body.isVeg !== undefined) out.isVeg = Boolean(body.isVeg);
  if (body.chefSpecial !== undefined) out.chefSpecial = Boolean(body.chefSpecial);
  if (body.isAvailable !== undefined) out.isAvailable = Boolean(body.isAvailable);
  if (body.spice !== undefined) {
    const spice = sanitizeText(body.spice, 20);
    if (!allowedSpices.has(spice)) {
      throw new AppError('Spice must be Mild, Medium, Hot, or Sweet.', 400, 'VALIDATION_ERROR');
    }
    out.spice = spice;
  }
  if (body.pairing !== undefined) out.pairing = sanitizeText(body.pairing, 140);

  return out;
}
