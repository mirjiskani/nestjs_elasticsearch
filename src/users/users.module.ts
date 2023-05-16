import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'db/entity/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
    constructor(){
        console.log("users Module");
    }
}
