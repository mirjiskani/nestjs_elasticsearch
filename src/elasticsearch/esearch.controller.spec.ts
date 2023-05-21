import { Test, TestingModule } from '@nestjs/testing';
import { EsearchController } from './esearch.controller';

describe('EsearchController', () => {
  let controller: EsearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsearchController],
    }).compile();

    controller = module.get<EsearchController>(EsearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
