/**
 * Leave Chat API Payload.
 */
export interface ILeaveChatPayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chat_id: number | string
}