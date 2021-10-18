import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

import { Deck, FailedToFetchDeck } from '../domain';
import { SourceDeck, DeckMapper } from '../mappers';

@Injectable()
export class DeckRepository {
  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  async GetDeck(): Promise<Deck> {
    const url = this.configService.get<string>('PICKATALE_API_URL');

    try {
      const { data } = await axios.get<SourceDeck>(`${url}`);
      return DeckMapper.FromSource(data);
    } catch {
      throw new FailedToFetchDeck();
    }
  }
}
