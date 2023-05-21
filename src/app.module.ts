import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { dataSourceOptions } from 'db/data-source';
import { FlimsModule } from './flims/flims.module';
import { RatingModule } from './rating/rating.module';
import { EsearchModule } from './elasticsearch/esearch.module';
// this is the root module where database is connection estabilished
// it has all the module is loaded 


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    FlimsModule,
    RatingModule,
    EsearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
