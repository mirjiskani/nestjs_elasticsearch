import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(films)
        private readonly filmRepository: Repository<films>,
      ) {}
    addFlims(filmsData: Partial<films>): Promise<films> {
        const newUser = this.filmRepository.create(filmsData);
        return this.filmRepository.save(newUser);
    }
    updateFlims():String{
        return "Update Flims";
    }
    deleteFlims():String{
        return "Update Flims";
    }
    findAllFlims():Promise<films[]>{
        return this.filmRepository.find();
    }
}
