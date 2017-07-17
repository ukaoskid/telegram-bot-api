/**
 * Set Chat Photo API Payload.
 */
export interface ISetChatPhotoPayload {

  // Todo InputFile object for photo.

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chat_id: number | string,

  /**
   * New chat photo, uploaded using multipart/form-data.
   */
  photo: any
}