import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './entities/toasts.model';
import { CreateToastDto } from './dto/create-toast.dto';
import { UpdateToastDto } from './dto/update-toast.dto';

@Injectable()
export class ToastsService {
  constructor(
    @InjectModel(Toast)
    private readonly toastModel: typeof Toast
  ) {}

  async findAll(): Promise<Toast[]> {
    return await this.toastModel.findAll();
  }

  async findById(id: string): Promise<Toast | null> {
    return this.toastModel.findOne({
      where: {
        id,
      },
    });
  }

  async findAllPending(): Promise<Toast[]> {
    return await this.toastModel.findAll({ where: { hasHappened: false } });
  }

  async findAllHappened(): Promise<Toast[]> {
    return await this.toastModel.findAll({ where: { hasHappened: true } });
  }

  async createToast(CreateToastDto: CreateToastDto) {
    return await this.toastModel.create({
      userId: CreateToastDto.userId,
      date: CreateToastDto.date,
      hasHappened: CreateToastDto.hasHappened,
      desc: CreateToastDto.desc,
      solids: CreateToastDto.solids,
      fluids: CreateToastDto.fluids,
    });
  }

  async updateToast(id: string, updateToastDto: UpdateToastDto) {
    const toast = await this.findById(id);
    if (!toast) {
      throw new Error('toast not found');
    }
    const updateToast = {
      ...Toast,
      date: updateToastDto.date,
      hasHappened: updateToastDto.hasHappened,
      desc: updateToastDto.desc,
      solids: updateToastDto.solids,
      fluids: updateToastDto.fluids,
    };
    return await this.toastModel.update(updateToast, {
      where: { id },
    });
  }

  async remove(id: string): Promise<void> {
    const toast = await this.findById(id);
    if (toast) {
      await toast.destroy();
    }
  }
}
