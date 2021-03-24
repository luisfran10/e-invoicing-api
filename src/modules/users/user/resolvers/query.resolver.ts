import { Query, Resolver } from '@nestjs/graphql';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
//import { UserResponseDto } from '../dtos';

@Resolver(of => User)
export class UserQueryResolver {
  constructor(private userService: UserService) {}

  @Query(returns => [User], { name: 'users' })
  async getUsers() {
    const users = await this.userService.findAll();
    return users;
  }
}
