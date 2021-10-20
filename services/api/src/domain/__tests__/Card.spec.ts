import { Card, Suit, Value } from '../Card';

describe('Card', () => {
  it('should create a Card', () => {
    expect(
      () => new Card({ suit: Suit.CLUBS, value: Value.TEN }),
    ).not.toThrow();
  });

  it('should get the correct points for Six', () => {
    // Given
    const six = new Card({ suit: Suit.DIAMONDS, value: Value.SIX });

    // When

    // Then
    expect(six.GetPoints()).toEqual(6);
  });

  it('should get the correct points for King', () => {
    // Given
    const king = new Card({ suit: Suit.DIAMONDS, value: Value.KING });

    // When

    // Then
    expect(king.GetPoints()).toEqual(10);
  });

  it('should get the correct points for Ace', () => {
    // Given
    const ace = new Card({ suit: Suit.DIAMONDS, value: Value.ACE });

    // When

    // Then
    expect(ace.GetPoints()).toEqual(11);
  });

  it('should convert Card to string', () => {
    // Given
    const card = new Card({ suit: Suit.DIAMONDS, value: Value.KING });

    // When

    // Then
    expect(card.ToString()).toEqual('DK');
  });
});
