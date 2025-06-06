// JWT authentication plugin
import fp from 'fastify-plugin';
import fastifyJwt from '@fastify/jwt';
import { config } from '../config/index.js';

const authPlugin = fp(async (fastify) => {
  fastify.register(fastifyJwt, { secret: config.jwtSecret });

  fastify.decorate('authenticateAdmin', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ error: 'Unauthorized' });
    }
  });
});

export default authPlugin;
