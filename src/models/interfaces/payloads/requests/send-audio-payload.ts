/**
 * Send Audio API Payload
 */
export interface ISendAudioPayload {

  /*
   Todo add the following types - reply_markup:
   InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply
   */

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string,

  /**
   * Audio file to send. Pass a file_id as String to send an audio file that exists on the
   * Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file
   * from the Internet, or upload a new one using multipart/form-data.
   */
  audio: string,

  /**
   * Audio caption, 0-200 characters.
   */
  caption?: string,

  /**
   * Duration of the audio in seconds.
   */
  duration?: number,

  /**
   * Performer.
   */
  performer?: string,

  /**
   * Track name.
   */
  title?: string,

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
  reply_markup?: any
}