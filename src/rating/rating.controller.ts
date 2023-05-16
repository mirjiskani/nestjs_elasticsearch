import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { rating } from 'db/entity/rating.entity';
import { ServiceRating } from './service/service.rating';

@Controller('rating')
export class RatingController {
    constructor(private ratingService:ServiceRating){}

    @Post('add')
    addRating(@Body(new ValidationPipe()) ratingData:rating):Promise<rating>{
        return this.ratingService.addRating(ratingData);
    }
}
