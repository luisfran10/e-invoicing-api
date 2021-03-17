import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  secret: process.env.APP_SECRET,
}));
