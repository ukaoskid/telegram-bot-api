import { IBaseSendPayload } from "./base-send-payload";
/**
 * Send Photo API Payload
 */
export interface ISendPhotoPayload extends IBaseSendPayload {
    /**
     * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended),
     * pass an HTTP URL as a String for Telegram to get a photo from the Internet,
     * or upload a new photo using multipart/form-data. More info on Sending Files.
     */
    photo: string;
    /**
     * Photo caption (may also be used when resending photos by file_id), 0-200 characters.
     */
    caption?: string;
}
