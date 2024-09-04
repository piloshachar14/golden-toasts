import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
  @Post('login')
  async createUser(@Body() creatDto: CreateUserDto) {
    return await this.usersService.createUser(creatDto);
  }
}
