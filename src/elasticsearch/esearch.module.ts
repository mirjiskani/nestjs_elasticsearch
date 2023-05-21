import { Global, Module, OnModuleInit } from '@nestjs/common';
import { EsearchController } from './esearch.controller';
import { EsearchService } from './esearch.service';
import { ElasticsearchModule, ElasticsearchService } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';

@Global()
@Module({
  imports:[
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
      requestTimeout: 3000 // Elasticsearch server URL
    }),
    TypeOrmModule.forFeature([films]),
  ],
  controllers: [ EsearchController],
  providers: [EsearchService],
  exports:[EsearchService]

})
export class EsearchModule implements OnModuleInit  {
  constructor(private readonly elasticsearchService: ElasticsearchService){}
  public async onModuleInit() {
    const indexName ='movies';
    const chkIndex = await this.elasticsearchService.indices.exists({ index: indexName });
    if(!chkIndex){
      try{
        const index = await this.elasticsearchService.indices.create({ index: indexName });
      }catch(err){
        console.log(err);
      }
     }
  }
}