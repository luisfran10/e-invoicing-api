import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly user_email: string;
  readonly user_phone_number: string;
  readonly user_password: string;
  readonly user_role: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
