import { Deck } from '../Deck';
import { EmptyDeckException } from '../errors';

import { createTestCard } from '../../helpers/tests';
import { Value } from '..';

describe('Deck', () => {
  it('should create a Deck', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.EIGHT }),
    ];

    // When
    // Then
    expect(() => new Deck({ cards })).not.toThrow();
  });

  it('should draw a Card from the Deck', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.EIGHT }),
    ];
    const deck = new Deck({ cards });

    // When
    const cardOne = deck.GetCard();
    const cardTwo = deck.GetCard();

    // Then
    expect(cardOne).toEqual(cards[0]);
    expect(cardTwo).toEqual(cards[1]);
    expect(deck.cards.length).toEqual(0);
  });

  it('should throw an error when there is no cards in the Deck', () => {
    // Given
    const deck = new Deck({ cards: [] });

    // When
    // Then
    expect(() => deck.GetCard()).toThrow(EmptyDeckException);
  });
});
