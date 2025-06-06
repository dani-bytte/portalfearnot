// Main Fastify app configuration
import Fastify from 'fastify';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { config } from './config/index.js';
import dbPlugin from './plugins/db.js';
import authPlugin from './plugins/auth.js';
import newsRoutes from './modules/news/news.routes.js';
import guidesRoutes from './modules/guides/guides.routes.js';
import faqsRoutes from './modules/faqs/faqs.routes.js';
import authRoutes from './modules/auth/auth.routes.js';

const app = Fastify({ logger: true });

app.register(sensible);
app.register(cors);
app.register(helmet);
app.register(dbPlugin);
app.register(authPlugin);

app.register(newsRoutes, { prefix: '/api/noticias' });
app.register(guidesRoutes, { prefix: '/api/guias' });
app.register(faqsRoutes, { prefix: '/api/faqs' });
app.register(authRoutes, { prefix: '/api/admin/auth' });

app.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

export default app;
