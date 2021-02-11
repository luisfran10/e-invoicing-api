import { Controller, Get, HttpException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';
import { UserRole } from './user-role.enum';
import { Roles } from '../../shared/role.decorator';
import { SignupResponseDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard())
  @Roles(UserRole.ADMINISTRATOR)
  getAllUsers(): Promise<SignupResponseDto[]> {
    try {
      return this._userService.findAll();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
