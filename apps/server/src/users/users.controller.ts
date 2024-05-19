import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entites/user.model';
import { UpdateUserDto } from './userdto/updateuserdto';
import { CreateUserDto } from './userdto/createuserdto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.usersService.removeUser(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUser(id, updateUserDto);
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.createUser(createUserDto);
  }
}
