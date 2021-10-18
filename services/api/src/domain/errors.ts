export class EmptyDeckException extends Error {
  constructor() {
    super('There is no cards in the deck.');
  }
}

export class FailedToFetchDeck extends Error {
  constructor() {
    super(`Failed to fetch deck`);
  }
}
