import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.model';
import { CriminalsModule } from '../criminals/criminals.module';
import { Criminal } from '../criminals/entities/criminals.model';
import { Toast } from '../toasts/entities/toasts.model';
import { ToastsModule } from '../toasts/toasts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      autoLoadModels: true,
      synchronize: true,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      models: [User, Criminal, Toast],
    }),
    UsersModule,
    CriminalsModule,
    ToastsModule,
  ],
})
export class AppModule {}
