import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AppConfigModule } from '../../config/app/config.module';
import { AppConfigService } from '../../config/app/config.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { JwtStrategy } from './strategies/jwt.strategy';
import { USER_SCHEMA, DEFAULT_STRATEGY, TOKEN_EXPIRES } from './user.constant';
import { UserResponseService } from './user-response.service';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forFeature([{ name: USER_SCHEMA, schema: UserSchema }]),
    PassportModule.register({
      defaultStrategy: DEFAULT_STRATEGY,
    }),
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (_appConfigService: AppConfigService) => {
        return {
          secret: _appConfigService.secret,
          signOptions: {
            expiresIn: TOKEN_EXPIRES,
          },
        };
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, AppConfigService, JwtStrategy, UserResponseService],
  exports: [UserService, PassportModule, JwtStrategy],
})
export class UserModule {}
