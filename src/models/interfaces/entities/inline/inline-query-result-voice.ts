import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";

/**
 * Represents a link to a voice recording in an .ogg container encoded with OPUS.
 * By default, this voice recording will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the the voice message.
 */
export interface IInlineQueryResultVoice extends IInlineQueryResult {

    /**
     * Type of the result, must be voice.
     */
    type: string,

    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string,

    /**
     * A valid URL for the voice recording.
     */
    voice_url: string,

    /**
     * Recording title.
     */
    title: string,

    /**
     * Caption, 0-200 characters.
     */
    caption: string,

    /**
     * Recording duration in seconds.
     */
    voice_duration?: number,

    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup,

    /**
     * Content of the message to be sent instead of the voice recording.
     */
    input_message_content?: IInputMessageContent
}