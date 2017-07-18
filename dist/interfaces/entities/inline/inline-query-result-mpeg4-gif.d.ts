import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound).
 * By default, this animated MPEG-4 file will be sent by the user with optional caption.
 * Alternatively, you can use input_message_content to send a message with
 * the specified content instead of the animation.
 */
export interface IInlineQueryResultMpeg4Gif extends IInlineQueryResult {
    /**
     * Type of the result, must be mpeg4_gif.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * A valid URL for the MP4 file. File size must not exceed 1MB.
     */
    mpeg4_url?: string;
    /**
     * Video width.
     */
    mpeg4_width?: number;
    /**
     * Video height.
     */
    mpeg4_height?: number;
    /**
     * Video duration.
     */
    mpeg4_duration?: number;
    /**
     * URL of the static thumbnail (jpeg or gif) for the result.
     */
    thumb_url: string;
    /**
     * Title for the result.
     */
    title?: string;
    /**
     * Caption of the MPEG-4 file to be sent, 0-200 characters.
     */
    caption?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the video animation.
     */
    input_message_content?: IInputMessageContent;
}
