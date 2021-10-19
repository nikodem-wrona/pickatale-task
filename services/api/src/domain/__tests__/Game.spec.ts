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
      createTestCard({ suit: Suit.C, value: Value.FIVE }),
      createTestCard({ suit: Suit.D, value: Value.ACE }),
      createTestCard({ suit: Suit.S, value: Value.EIGHT }),
      createTestCard({ suit: Suit.H, value: Value.QUEEN }),
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
      createTestCard({ suit: Suit.C, value: Value.ACE }),
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
      createTestCard({ suit: Suit.S, value: Value.QUEEN }),
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
      createTestCard({ suit: Suit.H, value: Value.FIVE }),
      createTestCard({ suit: Suit.D, value: Value.FOUR }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
      createTestCard({ value: Value.SIX }),
      createTestCard({ suit: Suit.C, value: Value.FOUR }),
      createTestCard({ value: Value.TEN }),
      createTestCard({ suit: Suit.S, value: Value.FIVE }),
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
      createTestCard({ suit: Suit.D, value: Value.FOUR }),
      createTestCard({ value: Value.TWO }),
      createTestCard({ value: Value.THREE }),
      createTestCard({ value: Value.SIX }),
      createTestCard({ suit: Suit.S, value: Value.FOUR }),
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
