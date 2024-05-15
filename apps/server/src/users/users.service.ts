import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UpdateUserDto } from './user.dto';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    this.userModel.destroy({ where: { id } });
    };

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    await this.userModel.update({
      lastName : updateUserDto.lastName || user.lastName ,
      firstName : updateUserDto.firstName || user.firstName,
      isActive: true,
    });
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      isActive: true,
    });
  }
}
