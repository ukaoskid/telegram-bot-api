import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
import { IInputMessageContent } from "./input-message-content";
/**
 * Represents a link to a page containing an embedded video player or a video file.
 * By default, this video file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
export interface IInlineQueryResultVideo extends IInlineQueryResult {
    /**
     * Type of the result, must be video.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * A valid URL for the embedded video player or video file.
     */
    video_url: string;
    /**
     * Mime type of the content of video url, “text/html” or “video/mp4”.
     */
    mime_type: string;
    /**
     * URL of the thumbnail (jpeg only) for the video.
     */
    thumb_url: string;
    /**
     * Title for the result.
     */
    title: string;
    /**
     * Caption of the video to be sent, 0-200 characters.
     */
    caption?: string;
    /**
     * Video width.
     */
    video_width?: number;
    /**
     * Video height.
     */
    video_height?: number;
    /**
     * Video duration in seconds.
     */
    video_duration?: number;
    /**
     * Short description of the result.
     */
    description?: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
    /**
     * Content of the message to be sent instead of the video.
     */
    input_message_content?: IInputMessageContent;
}
