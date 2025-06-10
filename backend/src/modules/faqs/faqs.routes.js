// FAQs routes
import faqsController from './faqs.controller.js';
import { createFaqSchema, updateFaqSchema } from '../../schemas/faqs.schema.js';

async function faqsRoutes(fastify, opts) {
  fastify.get('/', faqsController.listFaqs);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', { schema: createFaqSchema }, faqsController.createFaq);
    adminScope.put('/:id', { schema: updateFaqSchema }, faqsController.updateFaq);
    adminScope.delete('/:id', faqsController.deleteFaq);
  }, { prefix: '/admin' });
}

export default faqsRoutes;
