// FAQs validation schemas
export const createFaqSchema = {
  body: {
    type: 'object',
    required: ['question', 'answer'],
    properties: {
      question: { type: 'string', minLength: 1 },
      answer: { type: 'string', minLength: 1 },
      order: { type: 'integer' },
    },
    additionalProperties: false
  }
};

export const updateFaqSchema = {
  body: {
    type: 'object',
    properties: {
      question: { type: 'string' },
      answer: { type: 'string' },
      order: { type: 'integer' },
    },
    additionalProperties: false
  }
};
