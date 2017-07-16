export interface IVoice {

  /**
   * Unique identifier for this file.
   */
  file_id: string,

  /**
   * Duration of the audio in seconds as defined by sender.
   */
  duration: number,

  /**
   * MIME type of the file as defined by sender.
   */
  mime_type?: string,

  /**
   * File size.
   */
  file_size?: number
}