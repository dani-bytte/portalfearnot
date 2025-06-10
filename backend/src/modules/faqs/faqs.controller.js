// FAQs controller
import faqsService from './faqs.service.js';

const listFaqs = async (request, reply) => {
  const { offset = 0, limit = 10 } = request.query;
  const faqs = await faqsService.getAll(request.server.db, {
    offset: Number(offset),
    limit: Number(limit),
  });
  return reply.send(faqs);
};

const createFaq = async (request, reply) => {
  const faq = await faqsService.create(request.server.db, request.body);
  return reply.code(201).send(faq);
};

const updateFaq = async (request, reply) => {
  const { id } = request.params;
  const updated = await faqsService.update(request.server.db, id, request.body);
  if (!updated) return reply.code(404).send({ error: 'Not found' });
  return reply.send(updated);
};

const deleteFaq = async (request, reply) => {
  const { id } = request.params;
  const deleted = await faqsService.remove(request.server.db, id);
  if (!deleted) return reply.code(404).send({ error: 'Not found' });
  return reply.send({ success: true });
};

export default {
  listFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
};
