import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'db/entity/users.entity';
import { UsersController } from './users.controller';
import { Repository } from 'typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
    constructor(){}
}
