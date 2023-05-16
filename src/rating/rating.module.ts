import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rating } from 'db/entity/rating.entity';
import { ServiceRating } from './service/service.rating';

@Module({
  imports:[TypeOrmModule.forFeature([rating])],
  controllers: [RatingController],
  providers: [ServiceRating]
})
export class RatingModule {}
