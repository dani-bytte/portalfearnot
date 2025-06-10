// News routes
import newsController from './news.controller.js';
import { createNewsSchema, updateNewsSchema } from '../../schemas/news.schema.js';

async function newsRoutes(fastify, opts) {
  fastify.get('/', newsController.listNews);
  fastify.get('/:slug', newsController.getNewsBySlug);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', { schema: createNewsSchema }, newsController.createNews);
    adminScope.put('/:id', { schema: updateNewsSchema }, newsController.updateNews);
    adminScope.delete('/:id', newsController.deleteNews);
  }, { prefix: '/admin' });
}

export default newsRoutes;
