// FAQs routes
import faqsController from './faqs.controller.js';

async function faqsRoutes(fastify, opts) {
  fastify.get('/', faqsController.listFaqs);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', faqsController.createFaq);
    adminScope.put('/:id', faqsController.updateFaq);
    adminScope.delete('/:id', faqsController.deleteFaq);
  }, { prefix: '/admin' });
}

export default faqsRoutes;
