// Server entry point
import app from './app.js';
import { config } from './config/index.js';

const start = async () => {
  try {
    await app.listen({ port: config.port, host: config.host });
    app.log.info(`Server running at http://${config.host}:${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
