import { Injectable } from '@nestjs/common';

import { Game, GameResult, Player } from '../domain';
import { DeckRepository } from '../repositories';

@Injectable()
export class GameService {
  constructor(private deckRepository: DeckRepository) {}

  async Start(player: Player): Promise<GameResult> {
    const deck = await this.deckRepository.GetDeck();
    const game = new Game({ playerOne: player, playerTwo: 'Bob', deck });
    return game.Start();
  }
}
