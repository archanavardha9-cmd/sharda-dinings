import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { AdminUser } from '../models/AdminUser.js';
import { AppError } from '../utils/AppError.js';

export const authService = {
  async login({ email, password }) {
    if (!config.jwtSecret || config.jwtSecret.length < 16) {
      throw new AppError(
        'Admin authentication is not configured yet (JWT_SECRET is missing or too short).',
        503,
        'ADMIN_AUTH_UNCONFIGURED'
      );
    }

    const normalizedEmail = String(email || '').trim().toLowerCase();
    const rawPassword = String(password || '');
    if (!normalizedEmail || !rawPassword) {
      throw new AppError('Email and password are required.', 400, 'VALIDATION_ERROR');
    }

    let adminRecord = null;
    if (config.dataDriver === 'mongo') {
      adminRecord = await AdminUser.findOne({ email: normalizedEmail, isActive: true }).lean();
    } else if (config.adminEmail && config.adminPasswordHash && normalizedEmail === config.adminEmail) {
      adminRecord = {
        id: 'env-admin',
        email: config.adminEmail,
        passwordHash: config.adminPasswordHash,
        role: 'admin',
      };
    }

    if (!adminRecord) {
      throw new AppError('Invalid credentials.', 401, 'INVALID_CREDENTIALS');
    }

    const matches = await bcrypt.compare(rawPassword, adminRecord.passwordHash);
    if (!matches) {
      throw new AppError('Invalid credentials.', 401, 'INVALID_CREDENTIALS');
    }

    const token = jwt.sign(
      { sub: String(adminRecord._id || adminRecord.id), email: adminRecord.email, role: adminRecord.role },
      config.jwtSecret,
      { algorithm: 'HS256', expiresIn: config.jwtExpiresIn }
    );

    return {
      token,
      expiresIn: config.jwtExpiresIn,
      admin: { email: adminRecord.email, role: adminRecord.role },
    };
  },
};
