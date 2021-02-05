import { MongooseModule } from '@nestjs/mongoose';

import { MongoConfigModule } from '../config/mongo/config.module';
import { MongoConfigService } from '../config/mongo/config.service';

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
