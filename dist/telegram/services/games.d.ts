import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IGames } from "../../interfaces/services/games";
import { ISendGamePayload } from "../../interfaces/payloads/games/send-game-payload";
import { IMessage } from "../../interfaces/entities/message";
import { ISetGameScorePayload } from "../../interfaces/payloads/games/set-game-score-payload";
import { IGetGameHighScoresPayload } from "../../interfaces/payloads/games/get-game-high-scores-payload";
import { IGameHighScore } from "../../interfaces/entities/games/game-high-score";
export declare class Games extends BaseService implements IGames {
    sendGame(payload: ISendGamePayload): Promise<TelegramResponse<IMessage>>;
    setGameScore(payload: ISetGameScorePayload): Promise<TelegramResponse<boolean>>;
    getGameHighScores(payload: IGetGameHighScoresPayload): Promise<TelegramResponse<IGameHighScore[]>>;
}
