import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import {
  EMAIL_PATTERN,
  NAME_MIN_LENGHT,
  NAME_MAX_LENGHT,
  PASSWORD_PATTERN,
  PASSWORD_MIN_LENGHT,
  PASSWORD_MAX_LENGHT,
  DEFAULT_ROLE,
} from '../constants/user-schema.constant';
import {
  NAME_ALIAS,
  EMAIL_ALIAS,
  PASSWORD_ALIAS,
  ROLE_ALIAS,
} from '../constants/user-alias.constant';
import { MessageHandler } from '../../../../shared/helpers';

export type UserDocument = User & Document;

const emailValidator = (email: string): boolean => EMAIL_PATTERN.test(email);

const passwordValidator = (password: string): boolean =>
  PASSWORD_PATTERN.test(password);

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: [true, MessageHandler.requiredField(NAME_ALIAS)],
    lowercase: true,
    minlenght: [
      NAME_MIN_LENGHT,
      MessageHandler.minLenght(NAME_ALIAS, NAME_MIN_LENGHT),
    ],
    maxlenght: [
      NAME_MAX_LENGHT,
      MessageHandler.maxLenght(NAME_ALIAS, NAME_MAX_LENGHT),
    ],
    //alias: NAME_ALIAS,
  })
  name: string;

  @Prop({
    type: String,
    required: [true, MessageHandler.requiredField(EMAIL_ALIAS)],
    unique: true,
    lowercase: true,
    validate: {
      validator: emailValidator,
      message: props => MessageHandler.inputPattern(props.value),
    },
    //alias: EMAIL_ALIAS,
  })
  email: string;

  @Prop({
    type: String,
    required: [true, MessageHandler.requiredField(PASSWORD_ALIAS)],
    validate: {
      validator: passwordValidator,
      message: props => MessageHandler.inputPattern(props.value),
    },
    minlenght: [
      PASSWORD_MIN_LENGHT,
      MessageHandler.minLenght(PASSWORD_ALIAS, PASSWORD_MIN_LENGHT),
    ],
    maxlenght: [
      PASSWORD_MAX_LENGHT,
      MessageHandler.maxLenght(PASSWORD_ALIAS, PASSWORD_MAX_LENGHT),
    ],
    //alias: PASSWORD_ALIAS,
  })
  password: string;

  @Prop({
    type: String,
    default: DEFAULT_ROLE,
    //alias: ROLE_ALIAS,
    //enum: Object.values(UserRole),
  })
  role: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
