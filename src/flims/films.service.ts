import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';
import { EsearchService } from 'src/elasticsearch/esearch.service';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(films)
        private readonly filmRepository: Repository<films>,
        private EsearchService:EsearchService
      ) {}
    async addFlims(filmsData: Partial<films>): Promise<films> {
        const newUser = this.filmRepository.create(filmsData);
        const doc = await this.EsearchService.addDocument(newUser.id,newUser)
        console.log(doc,'Document');
        return this.filmRepository.save(newUser);
    }
    async updateFlims(filmsData):Promise<films> {
        const film = await this.filmRepository.findOneBy({ id: filmsData.id });
        if (!film) {
            throw new NotFoundException(`User with ID ${filmsData.id} not found`);
        }
        film.name = filmsData.name;
        film.description = filmsData.description;
        film.price = filmsData.price;
        film.release_date = filmsData.release_date;
        return this.filmRepository.save(film);
    }
    deleteFlims():String{
        return "Update Flims";
    }
    async findAllFlims():Promise<films[]>{
        return await this.filmRepository.createQueryBuilder('films')
            .leftJoinAndSelect('films.filmRatings', 'rating')
            .getMany();
    }
}
