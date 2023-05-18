import { Module } from '@nestjs/common';
import { FlimsController } from './flims.controller';
import { FilmsService } from './films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([films]),
    UsersModule
  ],
  controllers: [FlimsController],
  providers: [FilmsService]
})
export class FlimsModule {
    constructor(){}
}
