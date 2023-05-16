import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'db/entity/users.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(users)
        private readonly userRepository: Repository<users>,
      ) {}

    async addUsers(userData: Partial<users>): Promise<users> {
        const newUser = this.userRepository.create(userData);
        return this.userRepository.save(newUser);
    }

    findAll():Promise<users[]>{
        return this.userRepository.find();
    }

    updateUsers():String{
        return "Update Users";
    }
    deleteUser():String{
        return 'Delete Users';
    }
    

}
