import { createParamDecorator } from '@nestjs/common';

import { SignupDto } from './dto/signup.dto';

export const GetUser = createParamDecorator(
  (data, req): SignupDto => {
    return req.user;
  },
);
