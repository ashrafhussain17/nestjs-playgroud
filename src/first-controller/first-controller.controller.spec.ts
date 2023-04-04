import { Test, TestingModule } from '@nestjs/testing';
import { FirstController } from './first-controller.controller';
import { User } from '@/dtos/user';

describe('FirstControllerController', () => {
  let controller: FirstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstController],
    }).compile();

    controller = module.get<FirstController>(FirstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
