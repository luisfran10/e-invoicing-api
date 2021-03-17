import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { object, string } from 'joi';

import configuration from './configuration';
import { ApiConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      validationSchema: object({
        GRAPHQL_SCHEMA_PATH: string(),
      }),
    }),
  ],
  providers: [ConfigService, ApiConfigService],
  exports: [ConfigService, ApiConfigService],
})
export class ApiConfigModule {}
