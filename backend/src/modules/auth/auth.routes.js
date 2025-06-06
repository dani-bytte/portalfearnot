// Auth routes
import authController from './auth.controller.js';

async function authRoutes(fastify, opts) {
  fastify.post('/login', authController.login);
}

export default authRoutes;
