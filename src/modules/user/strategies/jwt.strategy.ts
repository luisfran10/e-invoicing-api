import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from '@nestjs/mongoose';

import { Strategy, ExtractJwt } from 'passport-jwt';
import { Model } from 'mongoose';

import { AppConfigService } from '../../../config/app/config.service';
import { IUser } from '../user.interface';
import { IJwtPayload } from '../jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('User') private readonly _userModel: Model<IUser>,
    private readonly _appConfigService: AppConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: _appConfigService.secret,
    });
  }

  async validate(payload: IJwtPayload) {
    const { email } = payload;

    const user = await this._userModel.findOne({ email });

    if (!user)
      throw new HttpException(
        `${email}: Unauthorized to access`,
        HttpStatus.UNAUTHORIZED,
      );

    return payload;
  }
}
