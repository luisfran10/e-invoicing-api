import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private _configService: ConfigService) {}

  get schema_path(): string {
    return this._configService.get<string>('api.schema_path');
  }
}
