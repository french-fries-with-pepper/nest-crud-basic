import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UserProvider {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async onModuleInit() {
    /*  const tmpUser = {
      firstName: 'Morgan',
      lastName: 'Peterson',
      isActive: true,
    };
    await this.userModel.create(tmpUser);
    console.log('created'); */

    const result = await this.userModel.findAll();
    console.log(result);
  }
}
