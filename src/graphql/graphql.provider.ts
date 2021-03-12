import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

import { ApiConfigModule } from '../config/api/config.module';
import { ApiConfigService } from '../config/api/config.service';
//import { UserModule } from '../modules/user/user.module';

export const gqlProvider = [
  GraphQLModule.forRootAsync({
    imports: [ApiConfigModule],
    inject: [ApiConfigService],
    useFactory: async (_apiConfigService: ApiConfigService) => ({
      autoSchemaFile: join(process.cwd(), _apiConfigService.schema_path),
      //include: [UserModule],
      //debug: false,
      //playground: false,
      sortSchema: true,
    }),
  }),
];
