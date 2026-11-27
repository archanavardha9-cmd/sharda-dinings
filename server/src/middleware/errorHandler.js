import { config } from '../config/env.js';

export function notFoundHandler(req, res) {
  res.status(404).json({
    ok: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.originalUrl} not found.`,
    },
  });
}

export function errorHandler(err, _req, res, _next) {
  const statusCode = err?.statusCode && Number.isInteger(err.statusCode) ? err.statusCode : 500;
  const code = err?.code || (statusCode >= 500 ? 'INTERNAL_ERROR' : 'REQUEST_ERROR');

  if (statusCode >= 500) {
    console.error(`[server-error] ${code}: ${err?.message || 'Unexpected error'}`);
  }

  res.status(statusCode).json({
    ok: false,
    error: {
      code,
      message: statusCode >= 500 && config.isProduction ? 'An internal server error occurred.' : err?.message || 'Request failed.',
      ...(err?.details && !config.isProduction ? { details: err.details } : {}),
    },
  });
}
