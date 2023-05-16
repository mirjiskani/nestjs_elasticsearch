import { Controller, Get, Post, Put, Delete, Body,ValidationPipe } from '@nestjs/common';
import { FilmsService } from './service/films.service';
import { films } from 'db/entity/films.entity';

@Controller('flims')
export class FlimsController {
    constructor(private filmsService:FilmsService){
        console.log("FlimsController");
    }

    @Post('/add')
    addFilm(@Body(new ValidationPipe()) films:films):Promise<films>{
        // add films to database
        return this.filmsService.addFlims(films);
    }

    @Get('/findAll')
    findFilms():Promise<films[]>{
        return this.filmsService.findAllFlims();
    }
    
    @Put('/update')
    updateFilms():String{
        return this.filmsService.updateFlims()
    }

    @Delete('/delete')
    deleteFilms():String{
        return this.filmsService.deleteFlims();
    }
}
