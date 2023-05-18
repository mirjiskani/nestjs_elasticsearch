import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { rating } from './rating.entity';

@Entity()
export class films {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  description: string;
 
  @IsNotEmpty()
  @Column()
  price: string;
 
  @IsNotEmpty()
  @Column({ default: Date.now() })
  release_date: string;

  @OneToMany(() => rating, rating => rating.film)
  filmRatings: rating[];
}