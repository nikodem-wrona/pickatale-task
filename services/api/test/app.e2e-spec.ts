import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/game/start (POST)', (done) => {
    request(app.getHttpServer())
      .post('/game/start')
      .send({ player: 'Master yoda' })
      .expect(HttpStatus.CREATED)
      .end((_, response) => {
        expect(response.body).toMatchObject({
          winner: expect.any(String),
          players: expect.arrayContaining([
            expect.objectContaining({
              player: expect.any(String),
              points: expect.any(Number),
              cards: expect.arrayContaining([
                expect.stringMatching(/^[HDSC]([2-9JQKA]|10)$/),
              ]),
            }),
          ]),
        });

        done();
      });
  });
});
