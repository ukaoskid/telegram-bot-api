import { IBaseSendPayload } from "./base-send-payload";
import { InputFile } from "../../../telegram/types/input-file";

/**
 * Send Voice API Payload
 */
export interface ISendVoicePayload extends IBaseSendPayload {

  /**
   * Audio file to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a video from the Internet,
   * or upload a new video using multipart/form-data
   */
  voice: InputFile | string,

  /**
   * Voice message caption, 0-200 characters.
   */
  caption?: string,

  /**
   * Duration of the voice message in seconds.
   */
  duration?: number
}