import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { AppError } from '../utils/AppError.js';

export function requireAdminAuth(req, _res, next) {
  if (!config.jwtSecret) {
    return next(
      new AppError(
        'Admin API is locked because JWT_SECRET is not configured.',
        503,
        'ADMIN_AUTH_UNCONFIGURED'
      )
    );
  }

  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) {
    return next(new AppError('Authentication token is required.', 401, 'UNAUTHORIZED'));
  }

  const token = header.slice(7).trim();
  try {
    const decoded = jwt.verify(token, config.jwtSecret, { algorithms: ['HS256'] });
    if (!decoded || decoded.role !== 'admin') {
      return next(new AppError('Insufficient permissions.', 403, 'FORBIDDEN'));
    }
    req.admin = { id: decoded.sub, email: decoded.email, role: decoded.role };
    return next();
  } catch {
    return next(new AppError('Invalid or expired authentication token.', 401, 'INVALID_TOKEN'));
  }
}
