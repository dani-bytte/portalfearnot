# Backend Implementation Roadmap

 lista de tarefas para a implementação do backend

## Tarefas Pendentes

- [x] Implementar integração real com PostgreSQL em todos os services (news, guides, faqs, auth)
  - Todos os métodos dos services agora executam queries reais usando o pool do Fastify (`request.server.db`).
  - O módulo de autenticação utiliza bcrypt e JWT para login seguro.
- [x] Criar schemas de validação Fastify para todas as rotas que recebem dados
  - Schemas criados e aplicados para news, guides, faqs (criação/atualização) e login de admin.
- [x] Implementar autenticação JWT real e hash de senha com bcrypt
- [x] Configurar ESLint e Prettier no projeto
- [x] Documentar todas as rotas e exemplos de payloads no README
- [ ] Adicionar logging customizado (???)
- [ ] Implementar paginação nas rotas de listagem (news, faqs)
- [ ] Adicionar tratamento de erros detalhado e respostas
- [ ] Revisar e reforçar regras de segurança (CORS, helmet, validação de entrada) quem sabe :v
