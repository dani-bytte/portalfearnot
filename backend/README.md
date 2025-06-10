# LE SSERAFIM Hub Backend

Backend API for the LE SSERAFIM BR Hub fan platform.

## Features

- News management (CRUD, admin protected)
- Guides management (CRUD, admin protected)
- FAQs management (CRUD, admin protected)
- Admin authentication (JWT, bcrypt)
- PostgreSQL
- Input validation with Fastify schemas
- Health check endpoint

## How to Run

- `npm start` - Start server
- `npm run dev` - Start server with auto-reload (if using nodemon)

## API Reference

### Auth

#### POST /api/admin/auth/login

- Request:

```bash
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin@example.com", "password": "yourpassword"}'
```

- Response:

```json
{
  "token": "<jwt>"
}
```

#### POST /api/admin/auth/register

- Request:

```bash
curl -X POST http://localhost:3000/api/admin/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin@example.com", "password": "yourpassword"}'
```

- Response:

```json
{
  "success": true
}
```

### News

#### GET /api/news/

- Request:

```bash
curl "http://localhost:3000/api/news/?offset=0&limit=10"
```

- Query params:
  - offset (default: 0)
  - limit (default: 10)

- Response:

```json
[
  {
    "id": 1,
    "title": "Title",
    "slug": "unique-slug",
    "summary": "Short summary",
    "content": "Full content",
    "image_url": "https://...",
    "publication_date": "2025-01-01T00:00:00Z",
    "author": "Author Name",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  }
]
```

#### GET /api/news/:slug

- Request:

```bash
curl http://localhost:3000/api/news/unique-slug
```

- Response:

```json
{
  "id": 1,
  "title": "Title",
  "slug": "unique-slug",
  "summary": "Short summary",
  "content": "Full content",
  "image_url": "https://...",
  "publication_date": "2025-01-01T00:00:00Z",
  "author": "Author Name",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-01T00:00:00Z"
}
```

#### POST /api/news/admin/

- Protected (JWT)
- Request:

```bash
curl -X POST http://localhost:3000/api/news/admin/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt>" \
  -d '{
    "title": "Title",
    "slug": "unique-slug",
    "summary": "Short summary",
    "content": "Full content",
    "image_url": "https://...",
    "publication_date": "2025-01-01T00:00:00Z",
    "author": "Author Name"
  }'
```

- Response:

```json
{
  "id": 1,
  "title": "Title",
  "slug": "unique-slug",
  "summary": "Short summary",
  "content": "Full content",
  "image_url": "https://...",
  "publication_date": "2025-01-01T00:00:00Z",
  "author": "Author Name",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-01T00:00:00Z"
}
```

### Guides

#### GET /api/guides/:type

- Request:

```bash
curl http://localhost:3000/api/guides/category
```

- Response:

```json
{
  "id": 1,
  "title": "Guide Title",
  "type": "category",
  "content": "Guide content",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-01T00:00:00Z"
}
```

#### POST /api/guides/admin/

- Protected (JWT)
- Request:

```bash
curl -X POST http://localhost:3000/api/guides/admin/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt>" \
  -d '{
    "title": "Guide Title",
    "type": "category",
    "content": "Guide content"
  }'
```

- Response:

```json
{
  "id": 1,
  "title": "Guide Title",
  "type": "category",
  "content": "Guide content",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-01T00:00:00Z"
}
```

### FAQs

#### GET /api/faqs/

- Request:

```bash
curl "http://localhost:3000/api/faqs/?offset=0&limit=10"
```

- Query params:
  - offset (default: 0)
  - limit (default: 10)

- Response:

```json
[
  {
    "id": 1,
    "question": "Question?",
    "answer": "Answer.",
    "order": 1,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  }
]
```

#### POST /api/faqs/admin/

- Protected (JWT)
- Request:

```bash
curl -X POST http://localhost:3000/api/faqs/admin/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt>" \
  -d '{
    "question": "Question?",
    "answer": "Answer.",
    "order": 1
  }'
```

- Response:

```json
{
  "id": 1,
  "question": "Question?",
  "answer": "Answer.",
  "order": 1,
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-01T00:00:00Z"
}
```

### Health

#### GET /health

- Request:

```bash
curl http://localhost:3000/health
```

- Response:

```json
{ "status": "ok" }
```
