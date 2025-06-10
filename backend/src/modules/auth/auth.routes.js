// Auth routes
import authController from './auth.controller.js';
import { loginSchema } from '../../schemas/auth.schema.js';

async function authRoutes(fastify, opts) {
  fastify.post('/login', { schema: loginSchema }, authController.login);
  fastify.post('/register', { schema: loginSchema }, authController.register);
}

export default authRoutes;
