// Guides validation schemas
export const createGuideSchema = {
  body: {
    type: 'object',
    required: ['title', 'type', 'content'],
    properties: {
      title: { type: 'string', minLength: 1 },
      type: { type: 'string', minLength: 1 },
      content: { type: 'string', minLength: 1 },
    },
    additionalProperties: false
  }
};

export const updateGuideSchema = {
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      type: { type: 'string' },
      content: { type: 'string' },
    },
    additionalProperties: false
  }
};
