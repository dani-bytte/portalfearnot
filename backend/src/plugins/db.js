// PostgreSQL connection plugin
import fp from 'fastify-plugin';
import pkg from 'pg';
const { Pool } = pkg;
import { config } from '../config/index.js';

const dbPlugin = fp(async (fastify) => {
  const pool = new Pool({ connectionString: config.databaseUrl });
  fastify.decorate('db', pool);
  fastify.addHook('onClose', async () => {
    await pool.end();
  });
});

export default dbPlugin;
