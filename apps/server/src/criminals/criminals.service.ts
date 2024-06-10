import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Criminal } from './entities/criminals.model';
import { UpdateCriminalDto } from './dto/update-criminal.dto';
import { CreateCriminalDto } from './dto/create-criminal.dto';

@Injectable()
export class CriminalsService {
  constructor(
    @InjectModel(Criminal)
    private readonly criminalModel: typeof Criminal
  ) {}

  async findAll(): Promise<Criminal[]> {
    return await this.criminalModel.findAll();
  }

  async findOne(id: string): Promise<Criminal> {
    return this.criminalModel.findOne({
      where: {
        id,
      },
    });
  }

  async findById(userId: string): Promise<Criminal | null> {
    return await this.criminalModel.findOne({ where: { userId } });
  }

  async createCriminal(createCriminalDto: CreateCriminalDto) {
    return await this.criminalModel.create({
      toast: createCriminalDto.toast,
      isPersonaNonGrata: createCriminalDto.isPersonaNonGrata,
    });
  }

  async updateCriminal(id: string, UpdateCriminalDto: UpdateCriminalDto) {
    const criminal = await this.findOne(id);
    if (!Criminal) {
      throw new Error('criminal not found');
    }
    const updatedUser = {
      ...criminal,
      toast: UpdateCriminalDto.toast,
      isPersonaNonGrata: UpdateCriminalDto.isPersonaNonGrata,
    };
    return await this.criminalModel.update(updatedUser, {
      where: { id },
    });
  }
  async remove(id: string): Promise<void> {
    const criminal = await this.findOne(id);
    if (criminal) {
      await criminal.destroy();
    }
  }
}