// Auth controller
import authService from './auth.service.js';

const login = async (request, reply) => {
  const { username, password } = request.body;
  const token = await authService.login(
    request.server.db,
    username,
    password,
    (payload) => request.server.jwt.sign(payload)
  );
  if (!token) {
    return reply.code(401).send({ error: 'Invalid credentials' });
  }
  return reply.send({ token });
};

const register = async (request, reply) => {
  const { username, password } = request.body;
  await authService.register(request.server.db, username, password);
  return reply.code(201).send({ success: true });
};

export default {
  login,
  register,

};
