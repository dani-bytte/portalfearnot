// Guides routes
import guidesController from './guides.controller.js';

async function guidesRoutes(fastify, opts) {
  fastify.get('/:type', guidesController.getGuideByType);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', guidesController.createGuide);
    adminScope.put('/:id', guidesController.updateGuide);
    adminScope.delete('/:id', guidesController.deleteGuide);
  }, { prefix: '/admin' });
}

export default guidesRoutes;
