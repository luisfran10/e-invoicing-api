import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/app/config/config.module';
import { ConfigModule } from './config/mongo/config/config.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';

@Module({
  imports: [ConfigModule, CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, Database],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    //AppModule.port = this._configService.get();
  }
}
