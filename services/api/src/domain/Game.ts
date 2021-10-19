import { Hand, Player, INITIAL_NUMBER_OF_CARDS } from './Hand';
import { Deck } from './Deck';

export interface GameResult {
  winner: Player | null;
  players: Array<{
    player: Player;
    points: number;
    cards: string[];
  }>;
}

export interface GameBuilder {
  playerOne: Player;
  playerTwo: Player;
  deck: Deck;
}

const DRAW_SUM = 17;

export class Game {
  private deck: Deck;
  private readonly target: number;

  playerOneHand: Hand;
  playerTwoHand: Hand;

  constructor(builder: GameBuilder) {
    this.target = DRAW_SUM;
    this.deck = builder.deck;

    this.playerOneHand = new Hand({
      player: builder.playerOne,
      cards: [this.deck.GetCard(), this.deck.GetCard()],
    });

    this.playerTwoHand = new Hand({
      player: builder.playerTwo,
      cards: [this.deck.GetCard(), this.deck.GetCard()],
    });
  }

  private IsDraw(): boolean {
    if (
      this.playerOneHand.GetNumberOfCards() !== INITIAL_NUMBER_OF_CARDS ||
      this.playerTwoHand.GetNumberOfCards() !== INITIAL_NUMBER_OF_CARDS
    ) {
      return false;
    }

    const bothPlayersHaveBlackjack =
      this.playerOneHand.CheckBlackjack() &&
      this.playerTwoHand.CheckBlackjack();

    const bothPlayerHaveExceededScore =
      this.playerOneHand.CheckExceededScore() &&
      this.playerTwoHand.CheckExceededScore();

    return bothPlayersHaveBlackjack || bothPlayerHaveExceededScore;
  }

  private GetPlayerWithBlackjack(): Player | null {
    if (this.playerOneHand.CheckBlackjack()) {
      return this.playerOneHand.GetPlayer();
    }

    if (this.playerTwoHand.CheckBlackjack()) {
      return this.playerTwoHand.GetPlayer();
    }

    return null;
  }

  private GetResult(winner: Player | null): GameResult {
    return {
      winner,
      players: [this.playerOneHand, this.playerTwoHand].map((hand) => ({
        player: hand.GetPlayer(),
        points: hand.GetValue(),
        cards: hand.GetCards(),
      })),
    };
  }

  private DrawCards(hand: Hand, target: number): void {
    while (hand.GetValue() < target) {
      hand.AddCard(this.deck.GetCard());
    }
  }

  private ProcessTurns(): GameResult {
    this.DrawCards(this.playerOneHand, this.target);

    if (this.playerOneHand.CheckExceededScore()) {
      return this.GetResult(this.playerTwoHand.GetPlayer());
    }

    this.DrawCards(this.playerTwoHand, this.playerOneHand.GetValue() + 1);

    if (this.playerTwoHand.CheckExceededScore()) {
      return this.GetResult(this.playerOneHand.GetPlayer());
    }

    return this.GetResult(this.playerTwoHand.GetPlayer());
  }

  public Start(): GameResult {
    if (this.IsDraw()) {
      return this.GetResult(null);
    }

    const playerWithBlackjack = this.GetPlayerWithBlackjack();

    if (playerWithBlackjack) {
      return this.GetResult(playerWithBlackjack);
    }

    if (this.playerOneHand.CheckExceededScore()) {
      return this.GetResult(this.playerTwoHand.GetPlayer());
    }

    return this.ProcessTurns();
  }
}
