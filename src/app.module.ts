import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'secret',
      database: 'test_db',
      autoLoadModels: true,
      synchronize: true,
      models: [User],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
