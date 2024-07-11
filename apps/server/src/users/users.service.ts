import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async findByArmyId(armyId: string, password: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        armyId,
        password,
      },
    });
  }

  async findOneById(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async removeUser(id: string): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOneById(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = {
      ...user,
      fullName: updateUserDto.fullName || user.fullName,
      armyId: updateUserDto.armyId || user.armyId,
      password: updateUserDto.password || user.password,
      isAdmin: updateUserDto.isAdmin,
    };
    return await this.userModel.update(updatedUser, {
      where: { id },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create({
      fullName: createUserDto.fullName,
      armyId: createUserDto.armyId,
      password: createUserDto.password,
      isAdmin: createUserDto.isAdmin,
    });
  }
}
