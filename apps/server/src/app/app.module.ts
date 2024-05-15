import { Module } from '@nestjs/common';
import { User } from '../users/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      autoLoadModels: true,
      synchronize:true,
      username: 'postgres',
      password: '12345',
      database: 'mydb',
      models: [User],
    }),
    UsersModule,
  ],
})
export class AppModule {}
