import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig: AppConfigService = app.get('AppConfigService');

  app.setGlobalPrefix('api');

  await app.listen(appConfig.port);
  logger.log(`Mode [${appConfig.env}] running on: ${appConfig.port}`);
}
bootstrap();
