import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private _configService: ConfigService) {}

  get env(): string {
    return this._configService.get<string>('app.env');
  }

  get port(): number {
    return Number(this._configService.get<number>('app.port'));
  }

  get secret(): string {
    return this._configService.get<string>('app.secret');
  }
}
