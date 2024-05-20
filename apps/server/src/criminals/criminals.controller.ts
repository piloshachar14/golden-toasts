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
} from '@nestjs/common';
import { CriminalsService } from './criminals.service';
import { CreateCriminalDto } from './dto/create-criminal.dto';
import { UpdateCriminalDto } from './dto/update-criminal.dto';
import { Criminal } from './entities/criminals.model';

@Controller('criminals')
export class CriminalsController {
  constructor(private readonly criminalsService: CriminalsService) {}

  @Get()
  async findAll(): Promise<Criminal[]> {
    return await this.criminalsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Criminal | null> {
    return await this.criminalsService.findById(id);
  }

  @Get('user/:userId')
  async findByUserId(
    @Param('userId') userId: string
  ): Promise<Criminal | null> {
    return await this.criminalsService.findOne(userId);
  }

  @Post()
  async create(@Body() createCriminalDto: CreateCriminalDto) {
    try {
      return await this.criminalsService.createCriminal(createCriminalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCriminalDto: UpdateCriminalDto
  ) {
    return await this.criminalsService.updateCriminal(id, updateCriminalDto);
  }
  catch(error) {
    throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.criminalsService.remove(id);
  }
}
