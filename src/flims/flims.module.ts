import { Module } from '@nestjs/common';
import { FlimsController } from './flims.controller';
import { FilmsService } from './service/films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';

@Module({
  imports:[TypeOrmModule.forFeature([films])],
  controllers: [FlimsController],
  providers: [FilmsService]
})
export class FlimsModule {
    constructor(){}
}
