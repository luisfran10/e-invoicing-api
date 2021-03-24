import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsString()
  readonly user_email: string;

  @IsNotEmpty()
  @IsString()
  readonly user_password: string;
}
