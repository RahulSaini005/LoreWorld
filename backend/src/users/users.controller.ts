import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.usersService.signup(name, email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.usersService.login(email, password);
  }
}
