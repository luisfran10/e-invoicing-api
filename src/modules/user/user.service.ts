import {
  Injectable,
  HttpException,
  HttpStatus,
  OnModuleInit,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { genSalt, hash, compare } from 'bcryptjs';
import { Model } from 'mongoose';

import { IUser } from './user.interface';
import {
  SignupDto,
  SigninDto,
  SigninResponseDto,
  SignupResponseDto,
} from './dto';
import { IJwtPayload } from './jwt-payload.interface';
import { USER_SCHEMA, SALT } from './user.constant';
import { UserResponseService } from './user-response.service';

@Injectable()
export class UserService implements OnModuleInit {
  users: IUser[];

  constructor(
    @InjectModel(USER_SCHEMA) private readonly _userModel: Model<IUser>,
    private readonly _jwtService: JwtService,
    private readonly _userResponseService: UserResponseService,
  ) {}

  async onModuleInit() {
    try {
      this.users = await this._userModel.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  async signup(signupUserData: SignupDto): Promise<SignupResponseDto> {
    const {
      name,
      user_email,
      user_phone_number,
      user_password,
    } = signupUserData;

    const userExist = await this._userModel.findOne(
      this._userModel.translateAliases({ user_email }),
    );

    if (userExist)
      throw new HttpException(
        `${user_email} is already exist`,
        HttpStatus.CONFLICT,
      );

    const salt = await genSalt(SALT);
    const hashPassword = await hash(user_password, salt);

    const createUser = {
      name,
      user_email,
      user_phone_number,
      user_password: hashPassword,
    };

    try {
      const createUserModel = new this._userModel(createUser);
      const createdUser = await createUserModel.save();

      return this._userResponseService.userResponseObject(createdUser);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async signin(signinUserData: SigninDto): Promise<SigninResponseDto> {
    const { user_email, user_password } = signinUserData;

    const userExist = await this._userModel.findOne(
      this._userModel.translateAliases({ user_email }),
    );

    if (!userExist)
      throw new HttpException(
        `${user_email} does not exist`,
        HttpStatus.NOT_FOUND,
      );

    const passwordMatch = await compare(user_password, userExist.user_password);

    if (!passwordMatch)
      throw new HttpException(
        'User credentials are invalid',
        HttpStatus.UNAUTHORIZED,
      );

    const payload: IJwtPayload = {
      _id: userExist._id,
      name: userExist.name,
      email: userExist.user_email,
    };

    const token = this._jwtService.sign(payload);
    const userRO = {
      name: userExist.name,
      email: userExist.user_email,
      token,
    };

    return userRO;
  }

  async findAll(): Promise<SignupResponseDto[]> {
    try {
      //return from(this._userModel.find());
      if (!this.users.length)
        throw new HttpException('No content', HttpStatus.NOT_FOUND);

      return this.users.map(user =>
        this._userResponseService.userResponseObject(user),
      );
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
