import { IPhotoSize } from "./photo-size";
export interface IVideoNote {
    /**
     * Unique identifier for this file.
     */
    file_id: string;
    /**
     * Video width and height as defined by sender.
     */
    length: number;
    /**
     * Duration of the video in seconds as defined by sender.
     */
    duration: number;
    /**
     * Video thumbnail.
     */
    thumb?: IPhotoSize;
    /**
     * File size.
     */
    file_size?: number;
}
