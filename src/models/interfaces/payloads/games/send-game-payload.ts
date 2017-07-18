import { IBaseSendPayload } from "../send/base-send-payload";

/**
 * Send Game API Payload.
 */
export interface ISendGamePayload extends IBaseSendPayload {

  /**
   * Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
   */
  game_short_name: string,
}