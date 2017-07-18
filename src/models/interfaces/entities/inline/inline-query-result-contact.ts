import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the contact.
 */
export interface IInlineQueryResultContact extends IInlineQueryResult {

  /**
   * Type of the result, must be contact.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 Bytes.
   */
  id: string,

  /**
   * Contact's phone number.
   */
  phone_number: string,

  /**
   * Contact's first name.
   */
  first_name: string,

  /**
   * Contact's last name.
   */
  last_name?: string,

  /**
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup,

  /**
   * Content of the message to be sent instead of the contact.
   */
  input_message_content?: IInputMessageContent,

  /**
   * Url of the thumbnail for the result.
   */
  thumb_url?: string,

  /**
   * Thumbnail width.
   */
  thumb_width?: number,

  /**
   * Thumbnail height.
   */
  thumb_height?: number
}