import { Controller, Get, Post, Put, Delete, Body,ValidationPipe, UseGuards } from '@nestjs/common';
import { FilmsService } from './films.service';
import { films } from 'db/entity/films.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('flims')
export class FlimsController {
    constructor(private filmsService:FilmsService){
        console.log("FlimsController");
    }
    
    
    @Post('/add')
    @UseGuards(AuthGuard)
    addFilm(@Body(new ValidationPipe()) films:films):Promise<films>{
        // add films to database
        return this.filmsService.addFlims(films);
    }

    @Get('/findAll')
    @UseGuards(AuthGuard)
    findFilms():Promise<films[]>{
        return this.filmsService.findAllFlims();
    }
    
    @Put('/update')
    @UseGuards(AuthGuard)
    updateFilms(@Body(new ValidationPipe()) filmsData:films):Promise<films>{
        // this function is used for to update the films
        return this.filmsService.updateFlims(filmsData)
    }

    @Delete('/delete')
    @UseGuards(AuthGuard)
    deleteFilms():String{
        return this.filmsService.deleteFlims();
    }
}
