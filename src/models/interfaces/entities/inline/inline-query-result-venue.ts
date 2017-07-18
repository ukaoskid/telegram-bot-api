import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a venue. By default, the venue will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 */
export interface IInlineQueryResultVenue extends IInlineQueryResult {

  /**
   * Type of the result, must be venue.
   */
  type: string,

  /**
   * Unique identifier for this result, 1-64 Bytes.
   */
  id: string,

  /**
   * Latitude of the venue location in degrees.
   */
  latitude: number,

  /**
   * Longitude of the venue location in degrees.
   */
  longitude: number,

  /**
   * Title of the venue.
   */
  title: string,

  /**
   * Address of the venue.
   */
  address: string,

  /**
   * Foursquare identifier of the venue if known.
   */
  foursquare_id?: string,

  /**
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup,

  /**
   * Content of the message to be sent instead of the venue.
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