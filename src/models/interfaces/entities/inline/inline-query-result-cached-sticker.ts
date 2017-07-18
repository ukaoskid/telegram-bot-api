import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the sticker.
 */
export interface IInlineQueryResultCachedSticker extends IInlineQueryResult {

  /**
   * Type of the result, must be sticker.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string,

  /**
   * A valid file identifier of the sticker.
   */
  sticker_file_id: string,

  /**
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup,

  /**
   * Content of the message to be sent instead of the file.
   */
  input_message_content?: IInputMessageContent
}