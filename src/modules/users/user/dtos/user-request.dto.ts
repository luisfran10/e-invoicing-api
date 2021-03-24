import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsDate,
} from 'class-validator';

import {
  PASSWORD_MAX_LENGHT,
  PASSWORD_MIN_LENGHT,
} from '../constants/user-schema.constant';

export class UserRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly user_name: string;

  @IsNotEmpty()
  @IsString()
  readonly user_email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(PASSWORD_MIN_LENGHT)
  @MaxLength(PASSWORD_MAX_LENGHT)
  readonly user_password: string;

  @IsNotEmpty()
  @IsString()
  readonly user_role: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;
}
