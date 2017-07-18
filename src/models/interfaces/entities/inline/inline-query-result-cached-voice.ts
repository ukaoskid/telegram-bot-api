import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be
 * sent by the user. Alternatively, you can use input_message_content to send a message with the specified
 * content instead of the voice message.
 */
export interface IInlineQueryResultCachedVoice extends IInlineQueryResult {

  /**
   * Type of the result, must be voice.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string,

  /**
   * A valid file identifier for the voice message.
   */
  voice_file_id: string,

  /**
   * Title for the result.
   */
  title: string,

  /**
   * Caption of the document to be sent, 0-200 characters.
   */
  caption?: string,

  /**
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup,

  /**
   * Content of the message to be sent instead of the file.
   */
  input_message_content?: IInputMessageContent
}