import { Suit, Value, Card, CardBuilder } from '../domain';

export interface SourceCard {
  suit: Suit;
  value: Value;
}

export class CardMapper {
  static FromSource(source: SourceCard): Card {
    const builder: CardBuilder = {
      suit: source.suit,
      value: source.value,
    };

    return new Card(builder);
  }
}
