import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ToastsService } from './toasts.service';
import { ToastsController } from './toasts.controller';
import { Toast } from './entites/toasts.model';



@Module({
  imports: [SequelizeModule.forFeature([Toast,])], 
  controllers: [ToastsController],
  providers: [ToastsService],
  
})
export class ToastsModule {}
