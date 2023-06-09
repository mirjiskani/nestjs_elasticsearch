import { Controller,Post,Put,Get,Delete, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import {users} from '../../db/entity/users.entity'

@Controller('users')
export class UsersController {
    constructor(public usersService:UsersService){}
    
    @Post('/add')
    addUser(@Body(new ValidationPipe()) userData:users):Promise<users>{
        // This function is used to create a users in database
        return this.usersService.addUsers(userData);
    }
    

    @Get('/findAll')
    getUsers():Promise<users[]>{
        // this function is used to get all the users from database
        return this.usersService.findAll();
    }

    @Put('/update')
    updateUser(@Body(new ValidationPipe()) usersData:users):Promise<users>{
        // This function is use to update user
        return this.usersService.updateUsers(usersData);
    }

    @Delete('/delete')
    deleteUser(){
        //This function is used to delete user from database
        return this.usersService.deleteUser();
    }
    @Post('/login')
    loginUser(@Body() userData):Promise<users>{
        return this.usersService.userLogin(userData)
    }
}

