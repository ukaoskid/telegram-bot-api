/**
 * Set Chat Title API Payload.
 */
export interface ISetChatTitlePayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chat_id: number | string,

  /**
   * New chat title, 1-255 characters.
   */
  title: string
}