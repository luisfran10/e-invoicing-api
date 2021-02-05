import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { object, string } from 'joi';

import configuration from './configuration';
import { MongoConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      validationSchema: object({
        MONGO_URI: string(),
      }),
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
