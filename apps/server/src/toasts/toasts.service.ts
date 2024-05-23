import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './entities/toasts.model';
import { CreateToastDto } from './dto/create-toast.dto';
import { UpdateToastDto } from './dto/update-toast.dto';
import { Op, where } from 'sequelize';
import { start } from 'repl';
import { UUID } from 'crypto';

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

  getCurrentPeriod(currentDate: Date) {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const startDate =
      currentMonth >= 0 && currentMonth < 5
        ? new Date(currentYear, 0, 1)
        : new Date(currentYear, 6, 1);
    return { startDate };
  }

  async findAllPending(): Promise<Toast[]> {
    return await this.toastModel.findAll({ where: { hasHappened: false } });
  }

  async findHappenedToasts(): Promise<Toast[]> {
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
  async countHappenedToastsInLastSixMonths(): Promise<number> {
    const currentDate = new Date();
    const { startDate } = this.getCurrentPeriod(currentDate);
    return await this.toastModel.count({
      where: {
        date: {
          [Op.gte]: startDate,
          [Op.lte]: new Date(
            startDate.getFullYear(),
            startDate.getMonth() + 6,
            1
          ),
        },
        hasHappened: true,
      },
    });
  }
  async getToastsByUser(userId: string, hasHappened?: boolean): Promise<Toast[]> {
    if(hasHappened!==undefined)
      return await this.toastModel.findAll({
       where: { userId, hasHappened },
    });
    else
    return await this.toastModel.findAll({
       where: { userId },
  });

}
}