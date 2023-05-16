import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}