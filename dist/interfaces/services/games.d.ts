import { TelegramResponse } from "../payloads/response/generic-response";
import { ISendGamePayload } from "../payloads/games/send-game-payload";
import { IMessage } from "../entities/message";
import { ISetGameScorePayload } from "../payloads/games/set-game-score-payload";
import { IGetGameHighScoresPayload } from "../payloads/games/get-game-high-scores-payload";
import { IGameHighScore } from "../entities/games/game-high-score";
export interface IGames {
    /**
     * Use this method to send a game.
     * On success, the sent Message is returned.
     * @param {ISendGamePayload} payload
     * @returns {Promise<TelegramResponse<IMessage>>}
     */
    sendGame(payload: ISendGamePayload): Promise<TelegramResponse<IMessage>>;
    /**
     * Use this method to set the score of the specified user in a game. On success, if the message was sent by
     * the bot, returns the edited Message, otherwise returns True.
     * Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
     * @param {ISetGameScorePayload} payload
     * @returns {Promise<TelegramResponse<boolean>>}
     */
    setGameScore(payload: ISetGameScorePayload): Promise<TelegramResponse<boolean>>;
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of
     * his neighbors in a game.
     * On success, returns an Array of GameHighScore objects.
     * @param {IGetGameHighScoresPayload} payload
     * @returns {Promise<TelegramResponse<IGameHighScore[]>>}
     */
    getGameHighScores(payload: IGetGameHighScoresPayload): Promise<TelegramResponse<IGameHighScore[]>>;
}
