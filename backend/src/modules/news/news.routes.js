// News routes
import newsController from './news.controller.js';

async function newsRoutes(fastify, opts) {
  fastify.get('/', newsController.listNews);
  fastify.get('/:slug', newsController.getNewsBySlug);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', newsController.createNews);
    adminScope.put('/:id', newsController.updateNews);
    adminScope.delete('/:id', newsController.deleteNews);
  }, { prefix: '/admin' });
}

export default newsRoutes;
