import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file
 * will be sent by the user with an optional caption. Alternatively, you can use input_message_content to
 * send a message with specified content instead of the animation.
 */
export interface IInlineQueryResultCachedGif extends IInlineQueryResult {

  /**
   * Type of the result, must be gif.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string,

  /**
   * A valid file identifier for the file.
   */
  gif_file_id: string,

  /**
   * Title for the result.
   */
  title?: string,

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