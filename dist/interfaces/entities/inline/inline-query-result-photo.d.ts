import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
export interface IInlineQueryResultPhoto extends IInlineQueryResult {
    /**
     * Type of the result, must be photo.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB.
     */
    photo_url: string;
    /**
     * URL of the thumbnail for the photo.
     */
    thumb_url: string;
    /**
     * Width of the photo.
     */
    photo_width?: number;
    /**
     * Height of the photo.
     */
    photo_height?: number;
    /**
     * Title for the result.
     */
    title: string;
    /**
     * Short description of the result.
     */
    description?: string;
    /**
     * Caption of the photo to be sent, 0-200 characters.
     */
    caption?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the photo.
     */
    input_message_content?: IInputMessageContent;
}
