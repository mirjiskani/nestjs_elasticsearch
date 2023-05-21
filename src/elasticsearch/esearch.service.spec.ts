import { Test, TestingModule } from '@nestjs/testing';
import { EsearchService } from './esearch.service';

describe('EsearchService', () => {
  let provider: EsearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsearchService],
    }).compile();

    provider = module.get<EsearchService>(EsearchService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
