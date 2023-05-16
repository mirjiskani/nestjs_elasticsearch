import { IsNotEmpty,IsEmail } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;
   
  @IsNotEmpty()
  @Column()
  firstName: string;
 
  @IsNotEmpty()
  @Column()
  lastName: string;
 
  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;
 
  @Column({ default: true })
  isActive: boolean;
}