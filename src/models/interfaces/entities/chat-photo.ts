export interface IChatPhoto {

  /**
   * Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download.
   */
  small_file_id: string,

  /**
   * Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.
   */
  big_file_id: string
}