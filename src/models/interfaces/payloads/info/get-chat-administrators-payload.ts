/**
 * Get Chat Administrators API Payload.
 */
export interface IGetChatAdministratorsPayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername).
   */
  chat_id: number | string
}