import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { dataSourceOptions } from 'db/data-source';
import { FlimsModule } from './flims/flims.module';
import { RatingModule } from './rating/rating.module';

// import * as path from 'path';
// const config = {
//   // Use an absolute path to the `typeorm.config.js` file
//   ...require(path.join(__dirname,'../../config/typeorm.config.js')),
//   autoLoadEntities: true,
// };

// this is the root module where database is connection estabilished
// it has all the module is loaded 

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    FlimsModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
