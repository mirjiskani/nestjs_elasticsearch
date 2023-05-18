import {  Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'db/entity/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(users)
        private readonly userRepository: Repository<users>,
      ) {}

    async addUsers(userData: Partial<users>): Promise<users> {
        const salt = await bcrypt.genSalt();
        const email = userData.email;
        let userExist = await this.userRepository.findOne({where:{ email }});
        if (userExist) {
            throw new NotFoundException(`User with this email ${userData.email} is alread exist.`);
        }
        userData.password = await bcrypt.hash(userData.password, salt)
        console.log(userData.password);
        const newUser = this.userRepository.create(userData);
        return this.userRepository.save(newUser);
    }

    async findAll():Promise<users[]>{
        return await this.userRepository.createQueryBuilder('users')
        .leftJoinAndSelect('users.userRatings', 'rating')
        .getMany();
    }

    async updateUsers(userData):Promise<users> {
        const salt = await bcrypt.genSalt();
        const id = userData.id;
        const user = await this.userRepository.findOne({where: { id }});
        if (!user) {
            throw new NotFoundException(`User with ID ${userData.id} not found`);
        }
        user.password = await bcrypt.hash(userData.password, salt);
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        return this.userRepository.save(user);
    }
    deleteUser():String{
        return 'Delete Users';
    }
    async userLogin(formData):Promise<users> {
        const salt = await bcrypt.genSalt();
        const email = formData.email;
        const user = await this.userRepository.findOneBy({where:{ email }});
        if (!user) {
            throw new UnauthorizedException('This user is not exist with this email');
        }
        const passwordsMatch = await this.comparePasswords(formData.password, user.password);
        if (!passwordsMatch) {
            throw new UnauthorizedException('Login failed');
        }
        return user;
    }
    
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    async getUserbyEmail(email):Promise<users>{
        const user = await this.userRepository.findOne({where: { email }});
        return user;
    }
}
