/*
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { UserRequestDto, UserResponseDto } from '../dtos';

@Injectable()
export class UserResponseService {
  userResponseObject(userObject?: UserRequestDto): UserResponseDto {
    if (!userObject)
      throw new HttpException('No content', HttpStatus.BAD_REQUEST);

    return {
      _id: userObject._id,
      user_name: userObject.user_name,
      user_email: userObject.user_email,
      user_role: userObject.user_role,
      createdAt: userObject.createdAt,
      updatedAt: userObject.updatedAt,
    };
  }
}
*/
