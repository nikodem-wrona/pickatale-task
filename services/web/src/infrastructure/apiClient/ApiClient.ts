import { Result } from "../../models";
import { createHttpClient, HttpClient } from "../_shared";

export class ApiClient {
  private readonly httpClient: HttpClient;

  constructor() {
    console.log("TEST : ", process.env.NEXT_PUBLIC_API_URL);

    this.httpClient = createHttpClient({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  StartGame(name: string): Promise<Result> {
    return this.httpClient
      .post<Result>(`/game/start`, { player: name })
      .then((r) => r.data);
  }
}
