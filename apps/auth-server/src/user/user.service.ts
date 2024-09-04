import { Injectable } from '@nestjs/common';
import { User } from './entities/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}
  async findOne(id: string): Promise<User | undefined> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }
  async createUser(CreateUserDto: CreateUserDto) {
    return await this.userModel.create({
      fullName: CreateUserDto.fullName,
      password: CreateUserDto.password,
      email: CreateUserDto.email,
    });
  }
}
