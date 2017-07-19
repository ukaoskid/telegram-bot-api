import { IBaseSendPayload } from "./base-send-payload";
import { InputFile } from "../../../telegram/types/input-file";

/**
 * Send Document API Payload
 */
export interface ISendDocumentPayload extends IBaseSendPayload {

  /**
   * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using
   * multipart/form-data.
   */
  document: InputFile | string,

  /**
   * Document caption (may also be used when resending documents by file_id), 0-200 characters.
   */
  caption?: string
}