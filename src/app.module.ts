import { Module } from '@nestjs/common';

import { AppConfigModule } from './settings/app/config.module';
import { DatabaseModule } from './config/database/database.module';
import { GraphQLConfigModule } from './config/graphql/graphql.module';
import { UserModule } from './modules/users/user/user.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, GraphQLConfigModule, UserModule],
  providers: [],
})
export class AppModule {}
