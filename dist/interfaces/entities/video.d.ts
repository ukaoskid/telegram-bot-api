import { IPhotoSize } from "./photo-size";
export interface IVideo {
    /**
     * Unique identifier for this file.
     */
    file_id: string;
    /**
     * Video width as defined by sender.
     */
    width: number;
    /**
     * Video height as defined by sender.
     */
    height: number;
    /**
     * Duration of the video in seconds as defined by sender.
     */
    duration: number;
    /**
     * Video thumbnail.
     */
    thumb?: IPhotoSize;
    /**
     * Mime type of a file as defined by sender.
     */
    mime_type?: string;
    /**
     * File size.
     */
    file_size?: number;
}
