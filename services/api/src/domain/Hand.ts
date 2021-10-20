import { Card } from './Card';

export type Player = string;

export interface HandBuilder {
  player: Player;
  cards: Card[];
}

export const BLACKJACK_POINTS = 21;
export const INITIAL_NUMBER_OF_CARDS = 2;

export class Hand {
  private readonly player: Player;
  private cards: Card[];

  constructor(builder: HandBuilder) {
    this.player = builder.player;
    this.cards = builder.cards;
  }

  AddCard(card: Card): void {
    this.cards = [...this.cards, card];
  }

  GetStringifiedCards(): string[] {
    return this.cards.map((card) => card.ToString());
  }

  GetNumberOfCards(): number {
    return this.cards.length;
  }

  GetValueOfCards(): number {
    let sum = 0;
    this.cards.forEach((card) => (sum += card.GetPoints()));
    return sum;
  }

  GetPlayer(): Player {
    return this.player;
  }

  CheckBlackjack(): boolean {
    return (
      this.GetValueOfCards() === BLACKJACK_POINTS &&
      this.GetNumberOfCards() === INITIAL_NUMBER_OF_CARDS
    );
  }

  CheckExceededScore(): boolean {
    return this.GetValueOfCards() > BLACKJACK_POINTS;
  }
}
