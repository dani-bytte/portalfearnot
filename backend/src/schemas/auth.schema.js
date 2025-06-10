// Auth validation schemas
export const loginSchema = {
  body: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: { type: 'string', format: 'email', minLength: 5, maxLength: 100 },
      password: {
        type: 'string',
        minLength: 8,
        maxLength: 100,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};:\\|,.<>/?]).+$'
      }
    },
    additionalProperties: false
  }
};
