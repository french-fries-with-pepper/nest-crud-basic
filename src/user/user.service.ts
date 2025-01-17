import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserProvider } from './user.provider';

@Injectable()
export class UserService {
  constructor(private readonly userProvider: UserProvider) {}

  async findAll() {
    return await this.userProvider.findAll();
  }

  async findOne(id: number) {
    return await this.userProvider.findOne(`${id}`);
  }
}
