import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { IUser } from './user.interface';
import { SignupResponseDto } from './dto';

@Injectable()
export class UserResponseService {
  userResponseObject(userObject: IUser): SignupResponseDto {
    if (!userObject)
      throw new HttpException('No content', HttpStatus.BAD_REQUEST);

    return {
      _id: userObject._id,
      name: userObject.name,
      user_email: userObject.user_email,
      user_phone: userObject.user_phone_number,
      user_role: userObject.user_role,
      created: userObject.createdAt,
      updated: userObject.updatedAt,
    };
  }
}
