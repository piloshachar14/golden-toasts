import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './entities/toasts.model';
import { CreateToastDto } from './dto/create-toast.dto';
import { UpdateToastDto } from './dto/update-toast.dto';
import { col, fn, Op, where } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.model';
import { add } from 'date-fns';

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
    return {
      startDate,
      endDate: new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 6,
        FIRST_DAY_OF_MONTH
      ),
    };
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
    const { startDate, endDate } = this.getCurrentPeriod(currentDate);
    return await this.toastModel.count({
      where: {
        date: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
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
  async getPriod1() {
    const desiredStartMonth = 1;
    const desiredEndMonth = 6;
    const a = (
      await this.toastModel.findOne({
        attributes: [
          [
            Sequelize.fn('COUNT', Sequelize.col('hasHappened')),
            'allHappendToasts',
          ],
        ],
        where: {
          [Op.and]: [
            Sequelize.where(fn('DATE_PART', 'month', col('date')), {
              [Op.between]: [desiredStartMonth, desiredEndMonth],
            }),
            { hasHappened: true },
          ],
        },
        group: [
          'date',
          Sequelize.fn('date_trunc', 'year', Sequelize.col('date')),
        ],
        order: [['allHappendToasts', 'DESC']],
        limit: 1,
      })
    ).dataValues as { allHappendToasts: bigint };
    return a.allHappendToasts;
  }
  async getPriod2() {
    const desiredStartMonth = 7;
    const desiredEndMonth = 12;
    const a = (
      await this.toastModel.findOne({
        attributes: [
          [
            Sequelize.fn('COUNT', Sequelize.col('hasHappened')),
            'allHappendToasts',
          ],
        ],
        where: {
          [Op.and]: [
            Sequelize.where(fn('DATE_PART', 'month', col('date')), {
              [Op.between]: [desiredStartMonth, desiredEndMonth],
            }),
            { hasHappened: true },
          ],
        },
        group: [
          'date',
          Sequelize.fn('date_trunc', 'year', Sequelize.col('date')),
        ],
        order: [['allHappendToasts', 'DESC']],
        limit: 1,
      })
    ).dataValues as { allHappendToasts: bigint };
    return a.allHappendToasts;
  }
  async getRecord1() {
    const period1Value = Number(this.getPriod1);
    const period2Value = Number(this.getPriod2);
    return Math.max(period1Value, period2Value);
  }
}
