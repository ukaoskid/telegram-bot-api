/**
 * Get Chat Members Count API Payload.
 */
export interface IGetChatMembersCountPayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername).
   */
  chat_id: number | string
}