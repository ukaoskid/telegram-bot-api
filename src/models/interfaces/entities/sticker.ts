import { IPhotoSize } from "./photo-size";

export interface ISticker {

  /**
   * Unique identifier for this file.
   */
  file_id: string,

  /**
   * Sticker width.
   */
  width: number,

  /**
   * Sticker height.
   */
  height: number,

  /**
   * Sticker thumbnail in .webp or .jpg format.
   */
  thumb?: IPhotoSize,

  /**
   * Emoji associated with the sticker.
   */
  emoji?: string,

  /**
   * File size.
   */
  file_size?: number
}