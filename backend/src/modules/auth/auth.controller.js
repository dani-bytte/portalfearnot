// Auth controller
import authService from './auth.service.js';

const login = async (request, reply) => {
  const { username, password } = request.body;
  const token = await authService.login(username, password);
  if (!token) return reply.code(401).send({ error: 'Invalid credentials' });
  return reply.send({ token });
};


export default {
  login,

};
