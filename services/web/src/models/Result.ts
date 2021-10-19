export type Player = {
  player: string;
  points: number;
  cards: string[];
};

export interface Result {
  winner: string | null;
  players: Player[];
}
