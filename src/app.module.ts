import { Module } from '@nestjs/common';

import { AppConfigModule } from './config/app/config.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLConfigModule } from './graphql/graphql.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, GraphQLConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
