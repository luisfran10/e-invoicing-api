import { IsNotEmpty, IsString, IsUUID, IsDate } from 'class-validator';

export class UserResponseDto {
  @IsNotEmpty()
  @IsUUID('all')
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  readonly user_name: string;

  @IsNotEmpty()
  @IsString()
  readonly user_email: string;

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
