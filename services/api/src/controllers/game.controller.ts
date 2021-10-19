import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { GameService } from '../services';

import { StartGameDto, ResultDto } from './dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start')
  @HttpCode(HttpStatus.CREATED)
  Start(@Body() startGame: StartGameDto): Promise<ResultDto> {
    return this.gameService.Start(startGame.player);
  }
}
