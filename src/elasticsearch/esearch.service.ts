import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { InjectRepository } from '@nestjs/typeorm';
import { films } from 'db/entity/films.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EsearchService {

    constructor(private readonly elasticsearchService: ElasticsearchService, @InjectRepository(films)
    private readonly filmsRepo: Repository<films>,) {}

    // async synchronizeData() {
    //     const allEntities = await this.filmsRepo.find();
    //     const bulkPayload = allEntities.flatMap((entity) => [
    //       { index: { _index: 'films' } },
    //       entity,
    //     ]);
    //     await this.elasticsearchService.bulk({
    //       body: bulkPayload,
    //     });
    // }
    async addDocument(id: any, document: any): Promise<void> {
        const doc = await this.elasticsearchService.index({
          index:'movies',
          id,
          body: document,
        });
      }
   
    async search(index:string,query: string) {
        const results = await this.elasticsearchService.search({
            index: index,
            body: {
                query: {
                    match: {
                        name: query,
                    },
                },
            },
        });
        return results.hits.hits.map((hit) => hit._source);
    }
}
