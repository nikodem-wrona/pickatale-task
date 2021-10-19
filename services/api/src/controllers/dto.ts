import { IsString, IsNotEmpty } from 'class-validator';
class PlayerDto {
  player: string;
  points: number;
  cards: string[];
}
export class StartGameDto {
  @IsString()
  @IsNotEmpty()
  player!: string;
}
export class ResultDto {
  winner: string;
  players: PlayerDto[];
}
