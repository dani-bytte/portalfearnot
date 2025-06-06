// Guides controller
import guidesService from './guides.service.js';

const getGuideByType = async (request, reply) => {
  const { type } = request.params;
  const guide = await guidesService.getByType(type);
  if (!guide) return reply.code(404).send({ error: 'Not found' });
  return reply.send(guide);
};

const createGuide = async (request, reply) => {
  const guide = await guidesService.create(request.body);
  return reply.code(201).send(guide);
};

const updateGuide = async (request, reply) => {
  const { id } = request.params;
  const updated = await guidesService.update(id, request.body);
  if (!updated) return reply.code(404).send({ error: 'Not found' });
  return reply.send(updated);
};

const deleteGuide = async (request, reply) => {
  const { id } = request.params;
  const deleted = await guidesService.remove(id);
  if (!deleted) return reply.code(404).send({ error: 'Not found' });
  return reply.send({ success: true });
};

export default {
  getGuideByType,
  createGuide,
  updateGuide,
  deleteGuide,
};
