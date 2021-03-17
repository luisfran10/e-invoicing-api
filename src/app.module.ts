import { Module } from '@nestjs/common';

import { AppConfigModule } from './settings/app/config.module';
import { DatabaseModule } from './config/database/database.module';
import { GraphQLConfigModule } from './config/graphql/graphql.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, GraphQLConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
