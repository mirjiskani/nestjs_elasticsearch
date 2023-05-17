import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rating } from 'db/entity/rating.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceRating {
    constructor(@InjectRepository(rating) private readonly ratingRepository:Repository<rating>){}
    addRating(ratingData:Partial<rating>):Promise<rating>{
        const newrating = this.ratingRepository.create(ratingData);
        return this.ratingRepository.save(newrating);
    }
}
