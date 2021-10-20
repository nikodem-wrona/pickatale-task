import { IsString, IsNotEmpty } from 'class-validator';

export class StartGameDto {
  @IsString()
  @IsNotEmpty()
  player!: string;
}
class PlayerDto {
  player: string;
  points: number;
  cards: string[];
}
export class ResultDto {
  winner: string;
  players: PlayerDto[];
}
