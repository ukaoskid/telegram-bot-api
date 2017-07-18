import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user
 * with an optional caption. Alternatively, you can use input_message_content to send a message with
 * the specified content instead of the file.
 */
export interface IInlineQueryResultCachedDocument extends IInlineQueryResult {
    /**
     * Type of the result, must be document.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * Title for the result.
     */
    title: string;
    /**
     * A valid file identifier for the file.
     */
    document_file_id: string;
    /**
     * Short description of the result.
     */
    description?: string;
    /**
     * Caption of the document to be sent, 0-200 characters.
     */
    caption?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the file.
     */
    input_message_content?: IInputMessageContent;
}
