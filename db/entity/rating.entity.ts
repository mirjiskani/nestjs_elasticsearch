import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { users } from './users.entity';
import { films } from './films.entity';

@Entity()
export class rating {
  @PrimaryGeneratedColumn()
  id: number;
   
  // @IsNotEmpty()
  // @Column({type: "integer", default: null})
  // filmid: number;
  
  // @IsNotEmpty()
  // @Column({type: "integer",  default: null})
  // uid: number;

  @IsNotEmpty()
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  ratings: number;
  
  @IsNotEmpty()
  @ManyToOne(() => users, users => users.userRatings)
  u: users;

  @IsNotEmpty()
  @ManyToOne(() => films, films => films.filmRatings)
  film: films;
}