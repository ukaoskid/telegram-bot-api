import { IBaseSendPayload } from "./base-send-payload";

/**
 * Send Audio API Payload
 */
export interface ISendAudioPayload extends IBaseSendPayload {

  /**
   * Audio file to send. Pass a file_id as String to send an audio file that exists on the
   * Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file
   * from the Internet, or upload a new one using multipart/form-data.
   */
  audio: string,

  /**
   * Audio caption, 0-200 characters.
   */
  caption?: string,

  /**
   * Duration of the audio in seconds.
   */
  duration?: number,

  /**
   * Performer.
   */
  performer?: string,

  /**
   * Track name.
   */
  title?: string
}