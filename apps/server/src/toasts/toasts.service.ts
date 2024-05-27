import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './entities/toasts.model';
import { CreateToastDto } from './dto/create-toast.dto';
import { UpdateToastDto } from './dto/update-toast.dto';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.model';

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
    const JULY_INDEX = 6;
    const JANUARY_INDEX = 0;
    const FIRST_DAY_OF_MONTH = 1;
    const startDate =
      currentMonth < JULY_INDEX
        ? new Date(currentYear, JANUARY_INDEX, FIRST_DAY_OF_MONTH)
        : new Date(currentYear, JULY_INDEX, FIRST_DAY_OF_MONTH);
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
  async countToastsInPeriod(): Promise<number> {
    const currentDate = new Date();
    const { startDate } = this.getCurrentPeriod(currentDate);
    const endMonth = startDate.getMonth() + 6;
    const FIRST_DAY_OF_MONTH = 1;
    return await this.toastModel.count({
      where: {
        date: {
          [Op.gte]: startDate,
          [Op.lte]: new Date(
            startDate.getFullYear(),
            endMonth,
            FIRST_DAY_OF_MONTH
          ),
        },
        hasHappened: true,
      },
    });
  }
  async getToastsByUser(
    userId: string,
    hasHappened?: boolean
  ): Promise<Toast[]> {
    if (hasHappened)
      return await this.toastModel.findAll({
        where: { userId, hasHappened },
      });
    else
      return await this.toastModel.findAll({
        where: { userId },
      });
  }
  async getLeaderBoard() {
    return this.toastModel.findAll({
      attributes: [
        [
          Sequelize.fn('COUNT', Sequelize.col('hasHappened')),
          'allHappendToasts',
        ],
      ],
      include: [
        {
          required: true,
          model: User,
          attributes: ['id', 'fullName'],
        },
      ],
      where: {
        hasHappened: true,
      },
      group: ['user.id', 'user.fullName'],
      order: [['allHappendToasts', 'DESC']],
    });
  }
}
