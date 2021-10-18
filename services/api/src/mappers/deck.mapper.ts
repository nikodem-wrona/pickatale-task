import { Deck, DeckBuilder } from '../domain';

import { SourceCard, CardMapper } from './card.mapper';

export type SourceDeck = SourceCard[];

export class DeckMapper {
  static FromSource(source: SourceDeck): Deck {
    const builder: DeckBuilder = {
      cards: source.map(CardMapper.FromSource),
    };

    return new Deck(builder);
  }
}
