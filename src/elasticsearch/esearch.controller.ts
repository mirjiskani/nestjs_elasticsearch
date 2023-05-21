import { Controller, Get, Query } from '@nestjs/common';
import { EsearchService } from './esearch.service';
import { query } from 'express';

@Controller('esearch')
export class EsearchController {
  constructor(private readonly elasticsearchService: EsearchService) {}

  @Get('search')
  async search(@Query() query) {
    const results = await this.elasticsearchService.search('movies',query.keyword);
    return results;
  }
}
