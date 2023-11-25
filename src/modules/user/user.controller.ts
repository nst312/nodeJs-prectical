import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './services/user.service';
import { CreateUserSingUpDto } from './dto/signup.dto';
import { UserLoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/core/guard/role.guard';
import { Roles } from 'src/core/decorator/roles.decorator';
import { UserId } from 'src/core/decorator/user.decorator';
// import { UserId } from 'src/core/decorator/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('singup')
  async singup(
    @Body()
      data: CreateUserSingUpDto,
  ) {
    return this.userService.create(data);
  }

  @Post('login')
  async login(@Body() data: UserLoginDto) {
    return this.userService.login(data);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('User')
  async userInformation(@UserId() userId: number) {
    return this.userService.userInformation(userId);
  }

  @Get('logout')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('User')
  async logout(@UserId() userId: number) {
    return this.userService.logout(userId);
  }
}
