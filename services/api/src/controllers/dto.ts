import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StartGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  player!: string;
}

export class PlayerDto {
  @ApiProperty()
  player: string;

  @ApiProperty()
  points: number;

  @ApiProperty()
  cards: Array<string>;
}

export class ResultDto {
  @ApiProperty()
  winner: string;

  @ApiProperty({ type: [PlayerDto] })
  players: Array<PlayerDto>;
}
