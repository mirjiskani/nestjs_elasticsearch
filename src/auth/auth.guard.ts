import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService:UsersService){}
    async canActivate(context: ExecutionContext):Promise<boolean> {
       const request = context.switchToHttp().getRequest();
     
      if(request?.user){
        const { email, password } = request.user; 
        const user = await this.userService.getUserbyEmail(email);
        if (!user) {
            throw new UnauthorizedException('This user is not exist with this email');
        }
        const passwordsMatch = await this.comparePasswords(password, user.password);
        if (!passwordsMatch) {
            throw new UnauthorizedException('Login failed');
        }
      }
      return true;
    }
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
   
}