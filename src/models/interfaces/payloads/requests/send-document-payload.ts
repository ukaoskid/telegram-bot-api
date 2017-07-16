/**
 * Send Document API Payload
 */
export interface ISendDocumentPayload {

  /*
   Todo add the following types - reply_markup:
   InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply
   */

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string,

  /**
   * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using
   * multipart/form-data.
   */
  document: string,

  /**
   * Document caption (may also be used when resending documents by file_id), 0-200 characters.
   */
  caption?: string,

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean,

  /**
   * If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number,

  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,
   * instructions to remove reply keyboard or to force a reply from the user.
   */
  reply_markup?: any;
}