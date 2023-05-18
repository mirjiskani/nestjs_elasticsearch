import { IsNotEmpty,IsEmail } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { rating } from './rating.entity';

@Entity()
export class users {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;
   
  @IsNotEmpty()
  @Column()
  firstName: string;
 
  @IsNotEmpty()
  @Column()
  lastName: string;

  @IsNotEmpty()
  @Column()
  password: string;
 
  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;
 
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => rating, rating => rating.u)
  userRatings: rating[];
}