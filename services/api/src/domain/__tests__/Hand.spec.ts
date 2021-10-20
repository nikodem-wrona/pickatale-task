import { Hand } from '../Hand';
import { Card, Suit, Value } from '../Card';

import { createTestCard } from '../../helpers/tests';

describe('Hand', () => {
  const player = 'Master Yoda';

  it('should create a Hand', () => {
    // Given
    const cards: Card[] = [createTestCard(), createTestCard()];

    // When

    // Then
    expect(() => new Hand({ player, cards })).not.toThrow();
  });

  it('should calculate sum of the points', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ value: Value.JACK }),
      createTestCard({ value: Value.FIVE }),
    ];

    // When
    const hand = new Hand({ player, cards });

    // Then
    expect(hand.GetValueOfCards()).toEqual(15);
  });

  it('should calculate number of Cards', () => {
    // Given
    const cards: Card[] = [
      createTestCard(),
      createTestCard(),
      createTestCard(),
    ];
    const hand = new Hand({ player, cards });
    const cardToAdd = createTestCard({ suit: Suit.SPADES, value: Value.KING });
    expect(hand.GetNumberOfCards()).toEqual(3);

    // When
    hand.AddCard(cardToAdd);

    // Then
    expect(hand.GetNumberOfCards()).toEqual(4);
  });

  it('should add Cards to the Hand', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ suit: Suit.SPADES, value: Value.SIX }),
      createTestCard({ suit: Suit.HEARTS, value: Value.QUEEN }),
    ];
    const hand = new Hand({ player, cards });
    const cardToAdd = createTestCard({ suit: Suit.DIAMONDS, value: Value.ACE });

    // When
    hand.AddCard(cardToAdd);

    // Then
    expect(hand.GetStringifiedCards()).toEqual(['S6', 'HQ', 'DA']);
  });

  it('should return true if Hand has 21 points', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ value: Value.ACE }),
      createTestCard({ value: Value.TEN }),
    ];
    const hand = new Hand({ player, cards });

    // When
    // Then
    expect(hand.CheckBlackjack()).toEqual(true);
  });

  it('should return false if Hand has 21 points, after drawing a Card', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ value: Value.EIGHT }),
      createTestCard({ value: Value.SEVEN }),
    ];

    const hand = new Hand({ player, cards });

    const cardToDraw = createTestCard({ value: Value.SIX });
    hand.AddCard(cardToDraw);

    // When
    // Then
    expect(hand.CheckBlackjack()).toEqual(false);
  });

  it('should return true if Hand has more than 21 points', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ value: Value.TEN }),
      createTestCard({ value: Value.SEVEN }),
    ];
    const hand = new Hand({ player, cards });
    expect(hand.CheckExceededScore()).toEqual(false);

    // When
    const cardToDraw = createTestCard({ value: Value.SIX });
    hand.AddCard(cardToDraw);

    // Then
    expect(hand.CheckExceededScore()).toEqual(true);
  });

  it('should return correct stringified Cards', () => {
    // Given
    const cards: Card[] = [
      createTestCard({ suit: Suit.CLUBS, value: Value.KING }),
      createTestCard({ suit: Suit.DIAMONDS, value: Value.TWO }),
    ];

    // When
    const hand = new Hand({ player, cards });

    // Then
    expect(hand.GetStringifiedCards()).toEqual(['CK', 'D2']);
  });
});
