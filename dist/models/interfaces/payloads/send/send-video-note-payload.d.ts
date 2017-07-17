import { IBaseSendPayload } from "./base-send-payload";
/**
 * Send Video Note API Payload
 */
export interface ISendVideoNotePayload extends IBaseSendPayload {
    /**
     * Video Note to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended),
     * pass an HTTP URL as a String for Telegram to get a video from the Internet,
     * or upload a new video using multipart/form-data
     */
    video_note: string;
    /**
     * Duration of sent video in seconds.
     */
    duration?: number;
    /**
     * Video width and height.
     */
    length?: number;
}
