import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from './models/users.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
