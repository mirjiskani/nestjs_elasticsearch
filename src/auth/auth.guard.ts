import { CanActivate, ExecutionContext, Injectable, UnauthorizedException,Headers, Header } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService:UsersService){}
    async canActivate(context: ExecutionContext):Promise<boolean> {
       const request = context.switchToHttp().getRequest();
       const headers = request.headers;
       let isAthenticated = false;
       
      if(headers?.email){
        const email = headers.email;
        const password = headers.password 
        
        const user = await this.userService.getUserbyEmail(email);
        if (!user) {
            isAthenticated = false
            return isAthenticated
        }
        const passwordsMatch = await this.comparePasswords(password, user.password);
        
        if (!passwordsMatch) {
            isAthenticated = false
        }else{
            isAthenticated = true
        }
      }
      if(!isAthenticated){
        throw new UnauthorizedException('User is not authorized');
      }else{
          return true
      }
    }
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
   
}