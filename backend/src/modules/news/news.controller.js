// News controller
import newsService from './news.service.js';

const listNews = async (request, reply) => {
  const news = await newsService.getAll();
  return reply.send(news);
};

const getNewsBySlug = async (request, reply) => {
  const { slug } = request.params;
  const news = await newsService.getBySlug(slug);
  if (!news) return reply.code(404).send({ error: 'Not found' });
  return reply.send(news);
};

const createNews = async (request, reply) => {
  const news = await newsService.create(request.body);
  return reply.code(201).send(news);
};

const updateNews = async (request, reply) => {
  const { id } = request.params;
  const updated = await newsService.update(id, request.body);
  if (!updated) return reply.code(404).send({ error: 'Not found' });
  return reply.send(updated);
};

const deleteNews = async (request, reply) => {
  const { id } = request.params;
  const deleted = await newsService.remove(id);
  if (!deleted) return reply.code(404).send({ error: 'Not found' });
  return reply.send({ success: true });
};

export default {
  listNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
};
