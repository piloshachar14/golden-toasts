import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Criminal } from './entities/criminals.model';
import { CriminalsService } from './criminals.service';
import { CriminalsController } from './criminals.controller';

@Module({
  imports: [SequelizeModule.forFeature([Criminal])],
  providers: [CriminalsService],
  controllers: [CriminalsController],
})
export class CriminalsModule {}
