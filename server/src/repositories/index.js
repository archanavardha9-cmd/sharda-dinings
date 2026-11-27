import { config } from '../config/env.js';
import { mockAdapter } from './mockAdapter.js';
import { mongoAdapter } from './mongoAdapter.js';

export function getRepository() {
  return config.dataDriver === 'mongo' ? mongoAdapter : mockAdapter;
}
