import { Schema } from 'mongoose';

import {
  EMAIL_PATTERN,
  PHONE_NUMBER_PATTERN,
  NAME_MIN_LENGHT,
  NAME_MAX_LENGHT,
  PHONE_LENGHT,
  PASSWORD_PATTERN,
  PASSWORD_MIN_LENGHT,
  PASSWORD_MAX_LENGHT,
} from './user.constant';
import { UserRole } from './user-role.enum';
import { ValidationMessage } from '../../shared/schema-validation.message';

const emailValidator = (email: string): boolean => EMAIL_PATTERN.test(email);

const phoneValidator = (phone: string): boolean =>
  PHONE_NUMBER_PATTERN.test(phone);

const passwordValidator = (password: string): boolean =>
  PASSWORD_PATTERN.test(password);

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, ValidationMessage.requiredMessage('name')],
      lowercase: true,
      minlenght: [
        NAME_MIN_LENGHT,
        ValidationMessage.minLenghtMesage('name', NAME_MIN_LENGHT),
      ],
      maxlenght: [
        NAME_MAX_LENGHT,
        ValidationMessage.maxLenghtMesage('name', NAME_MAX_LENGHT),
      ],
    },
    email: {
      type: String,
      required: [true, ValidationMessage.requiredMessage('user-email')],
      unique: [true, ValidationMessage.uniqueMessage('user-email')],
      lowercase: true,
      validate: [
        emailValidator,
        ValidationMessage.patternMessage('user-email'),
      ],
      alias: 'user_email',
    },
    password: {
      type: String,
      required: [true, ValidationMessage.requiredMessage('user-password')],
      validate: [passwordValidator, ValidationMessage.patternMessage('')],
      minlenght: [
        PASSWORD_MIN_LENGHT,
        ValidationMessage.minLenghtMesage('user-password', PASSWORD_MIN_LENGHT),
      ],
      maxlenght: [
        PASSWORD_MAX_LENGHT,
        ValidationMessage.maxLenghtMesage('user-password', PASSWORD_MAX_LENGHT),
      ],
      alias: 'user_password',
    },
    role: {
      type: String,
      default: UserRole.DEFAULT,
      enum: Object.values(UserRole),
      alias: 'user_role',
    },
  },
  { timestamps: true },
);
