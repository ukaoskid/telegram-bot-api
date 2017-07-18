import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * Currently, only .PDF and .ZIP files can be sent using this method.
 */
export interface IInlineQueryResultDocument extends IInlineQueryResult {
    /**
     * Type of the result, must be document.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * Title for the result
     */
    title: string;
    /**
     * Caption of the document to be sent, 0-200 characters.
     */
    caption: string;
    /**
     * A valid URL for the file.
     */
    document_url: string;
    /**
     * Mime type of the content of the file, either “application/pdf” or “application/zip”.
     */
    mime_type: string;
    /**
     * Short description of the result.
     */
    description?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the file.
     */
    input_message_content?: IInputMessageContent;
    /**
     * URL of the thumbnail (jpeg only) for the file.
     */
    thumb_url?: string;
    /**
     * Thumbnail width.
     */
    thumb_width?: number;
    /**
     * Thumbnail height.
     */
    thumb_height?: number;
}
