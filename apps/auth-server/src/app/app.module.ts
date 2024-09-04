import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

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
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
