import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a location on a map. By default, the location will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 */
export interface IInlineQueryResultLocation extends IInlineQueryResult {

    /**
     * Type of the result, must be location.
     */
    type: string,

    /**
     * Unique identifier for this result, 1-64 Bytes.
     */
    id: string,

    /**
     * Location latitude in degrees.
     */
    latitude: number,

    /**
     * Location longitude in degrees.
     */
    longitude: number,

    /**
     * Location title.
     */
    title: string,

    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup,

    /**
     * Content of the message to be sent instead of the location.
     */
    input_message_content?: IInputMessageContent,

    /**
     * Url of the thumbnail for the result.
     */
    thumb_url?: string,

    /**
     * Thumbnail width.
     */
    thumb_width?: number

    /**
     * Thumbnail height.
     */
    thumb_height?: number
}