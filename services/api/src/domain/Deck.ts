import { Card } from './Card';
import { EmptyDeckException } from './errors';

export interface DeckBuilder {
  cards: Card[];
}

export class Deck {
  cards: Card[];

  constructor(builder: DeckBuilder) {
    this.cards = builder.cards;
  }

  RemoveCard(cardToRemove: Card) {
    this.cards = this.cards.filter(
      (card) => card.ToString() !== cardToRemove.ToString(),
    );
  }

  GetCard(): Card {
    if (!this.cards.length) {
      throw new EmptyDeckException();
    }

    const [pickedCard] = this.cards;
    this.RemoveCard(pickedCard);

    return pickedCard;
  }
}
