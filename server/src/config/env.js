import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const VALID_DRIVERS = new Set(['mock', 'mongo']);

function parseOrigins(raw) {
  const defaults = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ];
  if (!raw) return defaults;
  const configured = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return Array.from(new Set([...defaults, ...configured]));
}

export function loadConfig() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const port = Number(process.env.PORT || 5000);
  const dataDriver = (process.env.DATA_DRIVER || 'mock').trim().toLowerCase();
  const mongodbUri = (process.env.MONGODB_URI || '').trim();
  const jwtSecret = (process.env.JWT_SECRET || '').trim();
  const jwtExpiresIn = (process.env.JWT_EXPIRES_IN || '8h').trim();

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid PORT "${process.env.PORT}". Must be a valid TCP port (1-65535).`);
  }

  if (!VALID_DRIVERS.has(dataDriver)) {
    throw new Error(
      `Invalid DATA_DRIVER "${dataDriver}". Expected "mock" or "mongo".`
    );
  }

  if (dataDriver === 'mongo' && !mongodbUri) {
    throw new Error(
      'DATA_DRIVER is set to "mongo" but MONGODB_URI is empty. ' +
        'Add MONGODB_URI to your .env file, or set DATA_DRIVER=mock for local demo mode.'
    );
  }

  return {
    nodeEnv,
    isProduction: nodeEnv === 'production',
    port,
    dataDriver,
    mongodbUri,
    allowedOrigins: parseOrigins(process.env.FRONTEND_URL),
    jwtSecret,
    jwtExpiresIn,
    adminEmail: (process.env.ADMIN_EMAIL || '').trim().toLowerCase(),
    adminPasswordHash: (process.env.ADMIN_PASSWORD_HASH || '').trim(),
    rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000),
    rateLimitMaxPublic: Number(process.env.RATE_LIMIT_MAX_PUBLIC || 120),
    rateLimitMaxSubmissions: Number(process.env.RATE_LIMIT_MAX_SUBMISSIONS || 25),
    integrations: {
      whatsappConfigured: Boolean(process.env.WHATSAPP_API_URL && process.env.WHATSAPP_API_TOKEN),
      emailConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER),
      smsConfigured: Boolean(process.env.SMS_PROVIDER_KEY),
      paymentConfigured: Boolean(process.env.PAYMENT_GATEWAY_KEY),
    },
  };
}

export const config = loadConfig();
