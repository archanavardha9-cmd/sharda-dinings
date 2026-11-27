import mongoose from 'mongoose';
import { config } from './env.js';

let isConnected = false;

export async function connectDatabase() {
  if (config.dataDriver !== 'mongo') {
    return { connected: false, mode: 'mock' };
  }

  if (isConnected || mongoose.connection.readyState === 1) {
    isConnected = true;
    return { connected: true, mode: 'mongo' };
  }

  mongoose.set('strictQuery', true);
  await mongoose.connect(config.mongodbUri, {
    serverSelectionTimeoutMS: 8000,
  });
  isConnected = true;
  return { connected: true, mode: 'mongo' };
}

export function getDatabaseStatus() {
  return {
    dataDriver: config.dataDriver,
    connected: config.dataDriver === 'mongo' && mongoose.connection.readyState === 1,
  };
}
