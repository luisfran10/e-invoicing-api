import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  schema_path: process.env.GRAPHQL_SCHEMA_PATH,
}));
