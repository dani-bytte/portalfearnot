// Guides routes
import guidesController from './guides.controller.js';
import { createGuideSchema, updateGuideSchema } from '../../schemas/guides.schema.js';

async function guidesRoutes(fastify, opts) {
  fastify.get('/:type', guidesController.getGuideByType);

  fastify.register(async function (adminScope) {
    adminScope.addHook('preHandler', adminScope.authenticateAdmin);
    adminScope.post('/', { schema: createGuideSchema }, guidesController.createGuide);
    adminScope.put('/:id', { schema: updateGuideSchema }, guidesController.updateGuide);
    adminScope.delete('/:id', guidesController.deleteGuide);
  }, { prefix: '/admin' });
}

export default guidesRoutes;
