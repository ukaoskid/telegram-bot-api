import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with
 * optional caption. Alternatively, you can use input_message_content to send a message with the specified
 * content instead of the animation.
 */
export interface IInlineQueryResultGif extends IInlineQueryResult {

  /**
   * Type of the result, must be gif.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string,

  /**
   * A valid URL for the GIF file. File size must not exceed 1MB.
   */
  gif_url: string,

  /**
   * Width of the GIF.
   */
  gif_width?: number,

  /**
   * Height of the GIF.
   */
  gif_height?: number,

  /**
   * Duration of the GIF.
   */
  gif_duration?: number,

  /**
   * URL of the static thumbnail for the result (jpeg or gif).
   */
  thumb_url: string,

  /**
   * Title for the result.
   */
  title?: string,

  /**
   * Caption of the GIF file to be sent, 0-200 characters.
   */
  caption?: string,

  /**
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup,

  /**
   * Content of the message to be sent instead of the GIF animation.
   */
  input_message_content?: IInputMessageContent
}