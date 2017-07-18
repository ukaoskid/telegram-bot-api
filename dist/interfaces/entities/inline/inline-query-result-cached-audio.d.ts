import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to an mp3 audio file stored on the Telegram servers.
 * By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
export interface IInlineQueryResultCachedAudio extends IInlineQueryResult {
    /**
     * Type of the result, must be audio.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * A valid file identifier for the audio file.
     */
    audio_file_id: string;
    /**
     * Caption, 0-200 characters.
     */
    caption?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the audio.
     */
    input_message_content?: IInputMessageContent;
}
