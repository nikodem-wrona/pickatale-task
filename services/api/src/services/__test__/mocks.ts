import { Injectable } from '@nestjs/common';

import { MockClass } from '../../helpers/tests';
import { GameService } from '..';

@Injectable()
export class MockGameService implements MockClass<GameService> {
  Start = jest.fn();
}
