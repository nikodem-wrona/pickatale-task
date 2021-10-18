import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';

import { GameService } from '../services';

import { StartGameDto, ResultDto } from './dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    type: ResultDto,
  })
  Start(@Body() startGame: StartGameDto): Promise<ResultDto> {
    return this.gameService.Start(startGame.player);
  }

  @Get('ping')
  Hello(): string {
    return 'PONG';
  }
}
