import { config } from './config/env.js';
import { connectDatabase } from './config/db.js';
import { createApp } from './app.js';

async function bootstrap() {
  try {
    const dbStatus = await connectDatabase();
    const app = createApp();

    app.listen(config.port, () => {
      console.log(
        `[sharda-dinings-api] Listening on http://localhost:${config.port}/api/v1 (driver=${dbStatus.mode}, connected=${dbStatus.connected})`
      );
      if (dbStatus.mode === 'mock') {
        console.log(
          '[sharda-dinings-api] Running in local mock mode. Writes are temporary in memory and not persisted to MongoDB.'
        );
      }
    });
  } catch (err) {
    console.error(`[sharda-dinings-api] Startup failed: ${err.message}`);
    process.exit(1);
  }
}

bootstrap();
