import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rating } from 'db/entity/rating.entity';
import { ServiceRating } from './service.rating';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([rating]),
    UsersModule,
    AuthModule
   ],
  controllers: [RatingController],
  providers: [ServiceRating]
})
export class RatingModule {}
