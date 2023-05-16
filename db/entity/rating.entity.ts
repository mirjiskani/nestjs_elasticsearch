import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class rating {
  @PrimaryGeneratedColumn()
  id: number;
   
  @IsNotEmpty()
  @Column({type: "integer", default: null})
  filmid: number;
  
  @IsNotEmpty()
  @Column({type: "integer",  default: null})
  uid: number;

  @IsNotEmpty()
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  ratings: number;
}