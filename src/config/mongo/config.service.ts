import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService {
  constructor(private _configService: ConfigService) {}

  get uri(): string {
    return this._configService.get<string>('mongo.uri');
  }
}
