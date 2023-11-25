import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entity/user.entity';
import { CreateUserSingUpDto } from '../dto/signup.dto';
import { BcryptService } from './bcrypt.service';
import { UserLoginDto } from '../dto/login.dto';
import { JwtAuthService } from './jwt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private bcryptService: BcryptService,
    private jwtService: JwtAuthService,
  ) {}

  async create(data: CreateUserSingUpDto) {
    const { email } = data;
    const existingUser = (await this.userModel.findOne({ email })) as User;

    if (existingUser) {
      throw new ConflictException("You're already a member! Please log in.");
    }
    data.password = await this.bcryptService.hashPassword(data.password);
    const createdData = (await this.userModel.create(data)) as User;
    return {
      message: 'Successfully create',
      success: true,
      data: createdData,
    };
  }

  async login(data: UserLoginDto) {
    const { email } = data;
    const User = (await this.userModel.findOne({ email })) as User;

    if (!User) {
      throw new NotFoundException('Email not found');
    }

    const passCheck = await this.bcryptService.comparePasswords(
      data.password,
      User.password,
    );

    if (!passCheck) {
      throw new BadRequestException('Incorrect Password');
    }
    User.isLogin = true;
    await User.save();
    const jwtToken = await this.jwtService.signPayload({
      email: User.email,
      id: User.id,
      name: User.name,
      role: User.role,
      isLogin: User.isLogin,
    });
    return {
      message: 'Successfully login',
      success: true,
      data: jwtToken,
    };
  }

  async userInformation(id: number) {
    const User = await this.userModel.findById(id);
    if (User) {
      return {
        message: 'operation successfully done',
        success: true,
        data: User,
      };
    }
    return {
      message: 'Data not found',
      success: false,
    };
  }

  async logout(id: number) {
    const User = await this.userModel.findById(id);
    if (!User) {
      return {
        message: 'User Not Found',
        success: false,
      };
    }
    await this.userModel.findByIdAndUpdate(id, {
      isLogin: false,
    });
    return {
      message: 'Successfully logout',
      success: true,
    };
  }
}
