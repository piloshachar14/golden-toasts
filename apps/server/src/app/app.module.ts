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
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      autoLoadModels: true,
      synchronize: true,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '12345',
      database: process.env.DB_NAME || 'postgres',
      models: [User, Criminal, Toast],
    }),
    UsersModule,
    CriminalsModule,
    ToastsModule,
  ],
})
export class AppModule {}
