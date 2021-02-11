import {
  Controller,
  Post,
  Body,
  HttpException,
  UsePipes,
} from '@nestjs/common';

import { UserService } from '../user/user.service';
import {
  SignupDto,
  SigninDto,
  SignupResponseDto,
  SigninResponseDto,
} from '../user/dto';
import { ValidationPipe } from '../../shared/validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly _userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post('signup')
  async signupUser(
    @Body() registerUser: SignupDto,
  ): Promise<SignupResponseDto> {
    let { name, user_email, user_phone_number, user_password } = registerUser;
    try {
      return await this._userService.signup({
        name,
        user_email,
        user_phone_number,
        user_password,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post('signin')
  async signinUser(@Body() loginUser: SigninDto): Promise<SigninResponseDto> {
    let { user_email, user_password } = loginUser;
    try {
      return await this._userService.signin({
        user_email,
        user_password,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
