import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';

import { GameService } from '../../services';
import { GameController } from '../game.controller';

import { MockGameService } from '../../services/__test__';

describe('Game Controller', () => {
  let service: MockGameService;
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      controllers: [GameController],
      providers: [GameService],
    })
      .overrideProvider(GameService)
      .useClass(MockGameService)
      .compile();

    service = module.get(GameService);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /game/start', () => {
    // Given
    const player = 'Master Yoda';
    const payload = { player };

    service.Start.mockResolvedValue({ winner: player });

    // When
    // Then
    return supertest(app.getHttpServer())
      .post('/game/start')
      .send(payload)
      .expect(HttpStatus.CREATED);
  });
});
