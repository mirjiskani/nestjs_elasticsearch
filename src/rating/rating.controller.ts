import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { rating } from 'db/entity/rating.entity';
import { ServiceRating } from './service.rating';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('rating')
export class RatingController {
    constructor(private ratingService:ServiceRating){}

    @Post('add')
    @UseGuards(AuthGuard)
    addRating(@Body(new ValidationPipe()) ratingData:rating):Promise<rating>{
        return this.ratingService.addRating(ratingData);
    }
}
