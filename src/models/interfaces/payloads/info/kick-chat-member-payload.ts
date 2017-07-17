/**
 * Kick Chat Member API Payload.
 */
export interface IKickChatMemberPayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chat_id: number | string,

  /**
   * Unique identifier of the target user.
   */
  user_id: number,

  /**
   * Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less
   * than 30 seconds from the current time they are considered to be banned forever.
   */
  until_date?: number
}