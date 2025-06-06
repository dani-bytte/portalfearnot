// Loads environment variables
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET_KEY,
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PASSWORD,
};
