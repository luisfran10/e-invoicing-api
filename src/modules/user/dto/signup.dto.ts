import {
  IsString,
  IsEmpty,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

import {
  NAME_MIN_LENGHT,
  NAME_MAX_LENGHT,
  PHONE_LENGHT,
  PASSWORD_MIN_LENGHT,
  PASSWORD_MAX_LENGHT,
} from '../user.constant';

export class SignupDto {
  @IsEmpty()
  @IsString()
  @MinLength(NAME_MIN_LENGHT)
  @MaxLength(NAME_MAX_LENGHT)
  readonly name: string;

  @IsEmpty()
  @IsEmail()
  readonly user_email: string;

  @IsEmpty()
  @IsString()
  @MinLength(PHONE_LENGHT)
  @MaxLength(PHONE_LENGHT)
  readonly user_phone_number: string;

  @IsEmpty()
  @IsString()
  @MinLength(PASSWORD_MIN_LENGHT)
  @MaxLength(PASSWORD_MAX_LENGHT)
  readonly user_password: string;
}
