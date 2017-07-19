import { IBaseSendPayload } from "./base-send-payload";
import { InputFile } from "../../../telegram/types/input-file";
/**
 * Send Video API Payload
 */
export interface ISendVideoPayload extends IBaseSendPayload {
    /**
     * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended),
     * pass an HTTP URL as a String for Telegram to get a video from the Internet,
     * or upload a new video using multipart/form-data
     */
    video: InputFile | string;
    /**
     * Duration of sent video in seconds.
     */
    duration?: number;
    /**
     * Video width.
     */
    width?: number;
    /**
     * Video height.
     */
    height?: number;
    /**
     * Video caption (may also be used when resending documents by file_id), 0-200 characters.
     */
    caption?: string;
}
