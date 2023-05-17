import { Test, TestingModule } from '@nestjs/testing';
import { ServiceRating } from './service.rating';

describe('ServiceRating', () => {
  let provider: ServiceRating;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceRating],
    }).compile();

    provider = module.get<ServiceRating>(ServiceRating);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
