import {
  Deck,
  DeckBuilder,
  Suit,
  Value,
  CardBuilder,
  Card,
} from '../../domain';

export const createTestDeck = (source: Partial<DeckBuilder> = {}): Deck => {
  const builder = {
    cards: [],
    ...source,
  };

  return new Deck(builder);
};

export const createTestCard = (source: Partial<CardBuilder> = {}): Card => {
  const builder = {
    suit: Suit.D,
    value: Value.ACE,
    ...source,
  };

  return new Card(builder);
};
