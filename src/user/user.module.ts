import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserProvider } from './user.provider';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserProvider],
})
export class UserModule {}
