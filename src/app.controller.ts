import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './core/decorator/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './core/guard/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('random-joke')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('User')
  async jokes() {
    return this.appService.jokes();
  }

  @Get('test')
  async test() {
    return this.appService.test();
  }
}
