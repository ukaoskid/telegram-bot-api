import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IGames } from "../../interfaces/services/games";
import { ISendGamePayload } from "../../interfaces/payloads/games/send-game-payload";
import { IMessage } from "../../interfaces/entities/message";
import { ISetGameScorePayload } from "../../interfaces/payloads/games/set-game-score-payload";
import { IGetGameHighScoresPayload } from "../../interfaces/payloads/games/get-game-high-scores-payload";
import { IGameHighScore } from "../../interfaces/entities/games/game-high-score";

export class Games extends BaseService implements IGames {

  public sendGame(payload: ISendGamePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.games.sendGame, this.token);
  }

  public setGameScore(payload: ISetGameScorePayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.games.setGameScore, this.token);
  }

  public getGameHighScores(payload: IGetGameHighScoresPayload): Promise<TelegramResponse<IGameHighScore[]>> {
    return HTTPRequest.request(payload, TelegramProvider.services.games.getGameHighScores, this.token);
  }
}