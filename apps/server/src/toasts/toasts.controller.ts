import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ToastsService } from './toasts.service';
import { Toast } from './entities/toasts.model';
import { CreateToastDto } from './dto/create-toast.dto';
import { UpdateToastDto } from './dto/update-toast.dto';

@Controller('toasts')
export class ToastsController {
  constructor(private readonly toastsService: ToastsService) {}

  @Get()
  async findAll(): Promise<Toast[]> {
    return await this.toastsService.findAll();
  }

  @Get('find-by-id/:id')
  async findById(@Param('id') id: string): Promise<Toast | null> {
    return await this.toastsService.findById(id);
  }

  @Get('pending')
  async findAllPending(): Promise<Toast[]> {
    return await this.toastsService.findAllPending();
  }

  @Get('happened')
  async getHappenedToasts(): Promise<Toast[]> {
    return await this.toastsService.findHappenedToasts();
  }
  @Get('current-period-toasts')
  async countToastsInPeriod(): Promise<number> {
    return await this.toastsService.countToastsInPeriod();
  }
  @Get('current-user-toasts/:userId')
  async getToastsByUser(
    @Param('userId') userId: string,
    @Query('hasHappened') hasHappened: boolean
  ): Promise<Toast[]> {
    return await this.toastsService.getToastsByUser(userId, hasHappened);
  }
  @Get('leader-board')
  async getLeaderBoard() {
    return await this.toastsService.getLeaderBoard();
  }

  @Post()
  async create(@Body() createToastDto: CreateToastDto): Promise<Toast> {
    try {
      return await this.toastsService.createToast(createToastDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateToastDto: UpdateToastDto
  ) {
    try {
      console.log(id, updateToastDto);
      return await this.toastsService.updateToast(id, updateToastDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.toastsService.remove(id);
  }
}
