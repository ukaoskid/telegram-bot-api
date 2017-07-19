import { IBaseSendPayload } from "./base-send-payload";
import { InputFile } from "../../../telegram/types/input-file";
/**
 * Send Sticker API Payload
 */
export interface ISendStickerPayload extends IBaseSendPayload {
    /**
     * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
     * pass an HTTP URL as a String for Telegram to get a .webp file from the Internet,
     * or upload a new one using multipart/form-data.
     */
    sticker: InputFile | string;
    /**
     * Sticker caption (may also be used when resending documents by file_id), 0-200 characters.
     */
    caption?: string;
}
