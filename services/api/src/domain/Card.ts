export enum Suit {
  HEARTS = 'H',
  DIAMONDS = 'D',
  SPADES = 'S',
  CLUBS = 'C',
}

enum ShortFormOfSuit {
  H = 'H',
  D = 'D',
  S = 'S',
  C = 'C',
}

export enum Value {
  ACE = 'A',
  KING = 'K',
  QUEEN = 'Q',
  JACK = 'J',
  TEN = '10',
  NINE = '9',
  EIGHT = '8',
  SEVEN = '7',
  SIX = '6',
  FIVE = '5',
  FOUR = '4',
  THREE = '3',
  TWO = '2',
}

export interface CardBuilder {
  suit: Suit;
  value: Value;
}

const ACE_VALUE = 11;
const PICTURE_CARD_VALUE = 10;

export class Card {
  private readonly suit: ShortFormOfSuit;
  private readonly value: Value;

  constructor(builder: CardBuilder) {
    this.suit = ShortFormOfSuit[builder.suit];
    this.value = builder.value;
  }

  GetPoints(): number {
    switch (this.value) {
      case Value.ACE:
        return ACE_VALUE;
      case Value.KING:
      case Value.QUEEN:
      case Value.JACK:
        return PICTURE_CARD_VALUE;
      default:
        return Number(this.value);
    }
  }

  ToString(): string {
    return `${this.suit}${this.value}`;
  }
}
