import { Module } from '@nestjs/common';

import { CommonModule } from './common/common.module';
import { AppConfigModule } from './config/app/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
