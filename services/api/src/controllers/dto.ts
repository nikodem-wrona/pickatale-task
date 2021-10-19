import { IsString, IsNotEmpty } from 'class-validator';

export class StartGameDto {
  @IsString()
  @IsNotEmpty()
  player!: string;
}

export class PlayerDto {
  player: string;

  points: number;

  cards: Array<string>;
}

export class ResultDto {
  winner: string;

  players: Array<PlayerDto>;
}
