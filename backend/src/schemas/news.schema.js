// News validation schemas
export const createNewsSchema = {
  body: {
    type: 'object',
    required: ['title', 'slug', 'summary', 'content', 'image_url', 'publication_date'],
    properties: {
      title: { type: 'string', minLength: 1 },
      slug: { type: 'string', minLength: 1 },
      summary: { type: 'string', minLength: 1 },
      content: { type: 'string', minLength: 1 },
      image_url: { type: 'string', minLength: 1 },
      publication_date: { type: 'string', format: 'date-time' },
      author: { type: 'string' },
    },
    additionalProperties: false
  }
};

export const updateNewsSchema = {
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      slug: { type: 'string' },
      summary: { type: 'string' },
      content: { type: 'string' },
      image_url: { type: 'string' },
      publication_date: { type: 'string', format: 'date-time' },
      author: { type: 'string' },
    },
    additionalProperties: false
  }
};
