import { MongooseModule } from '@nestjs/mongoose';

import { MongoConfigModule } from '../../settings/mongo/config.module';
import { MongoConfigService } from '../../settings/mongo/config.service';

export const databaseProvider = [
  MongooseModule.forRootAsync({
    imports: [MongoConfigModule],
    inject: [MongoConfigService],
    useFactory: async (_mongoConfigService: MongoConfigService) => ({
      uri: _mongoConfigService.uri,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
  }),
];
