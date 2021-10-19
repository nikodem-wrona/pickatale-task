import { Game } from '../Game';
import { Value } from '../Card';

import { createTestDeck, createTestCard } from '../../helpers/tests';
import { Suit } from '..';

describe('Game', () => {
  const playerOne = 'Master Yoda';
  const playerTwo = 'Lord Sidious';

  it('should create Game', () => {
    // Given
    const cards = [
      createTestCard({ suit: Suit.CLUBS, value: Value.FIVE }),
      createTestCard({ suit: Suit.DIAMONDS, value: Value.ACE }),
      createTestCard({ suit: Suit.SPADES, value: Value.EIGHT }),
      createTestCard({ suit: Suit.HEARTS, value: Value.QUEEN }),
    ];
    const deck = createTestDeck({ cards });

    // When
    // Then
    expect(() => new Game({ playerOne, playerTwo, deck })).not.toThrow();
  });

  it('should check if there is a draw each players have blackjack', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.ACE }),
      createTestCard({ value: Value.TEN }),
      createTestCard({ value: Value.QUEEN }),
      createTestCard({ suit: Suit.CLUBS, value: Value.ACE }),
    ];
    const deck = createTestDeck({ cards });
    const game = new Game({ playerOne, playerTwo, deck });

    // When
    const result = game.Start();

    // Then
    expect(result.winner).toEqual(null);
  });

  it('should finish Game when playerOne has blackjack', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.TEN }),
      createTestCard({ value: Value.ACE }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
    ];

    const deck = createTestDeck({ cards });
    const game = new Game({ playerOne, playerTwo, deck });

    // When
    const result = game.Start();

    // Then
    expect(result.winner).toEqual(playerOne);
  });

  it('should continue the Game until playerOne has more than 21 points', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.FIVE }),
      createTestCard({ value: Value.FOUR }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
      createTestCard({ value: Value.SIX }),
      createTestCard({ value: Value.KING }),
      createTestCard({ suit: Suit.SPADES, value: Value.QUEEN }),
    ];

    const deck = createTestDeck({ cards });
    const game = new Game({ playerOne, playerTwo, deck });

    // When
    const result = game.Start();

    // Then
    expect(result.winner).toEqual(playerTwo);
  });

  it('should check which player has higher score when no one exceeds 21 points', () => {
    // Given
    const cards = [
      createTestCard({ suit: Suit.HEARTS, value: Value.FIVE }),
      createTestCard({ suit: Suit.DIAMONDS, value: Value.FOUR }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
      createTestCard({ value: Value.SIX }),
      createTestCard({ suit: Suit.CLUBS, value: Value.FOUR }),
      createTestCard({ value: Value.TEN }),
      createTestCard({ suit: Suit.SPADES, value: Value.FIVE }),
    ];
    const deck = createTestDeck({ cards });
    const game = new Game({ playerOne, playerTwo, deck });

    // When
    const result = game.Start();

    // Then
    expect(result.winner).toEqual(playerTwo);
  });

  it('should finish game and let playerOne win when playerTwo exceeds 21 points', () => {
    // Given
    const cards = [
      createTestCard({ value: Value.FIVE }),
      createTestCard({ suit: Suit.DIAMONDS, value: Value.FOUR }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
      createTestCard({ value: Value.SIX }),
      createTestCard({ suit: Suit.SPADES, value: Value.FOUR }),
      createTestCard({ value: Value.TEN }),
      createTestCard({ value: Value.ACE }),
    ];
    const deck = createTestDeck({ cards });
    const game = new Game({ playerOne, playerTwo, deck });

    // When
    const result = game.Start();

    // Then
    expect(result.winner).toEqual(playerOne);
  });
});
