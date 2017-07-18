import { IPhotoSize } from "../photo-size";
export interface IAnimation {
    /**
     * Unique file identifier.
     */
    file_id: string;
    /**
     * Animation thumbnail as defined by sender.
     */
    thumb?: IPhotoSize;
    /**
     * Original animation filename as defined by sender.
     */
    file_name?: string;
    /**
     * MIME type of the file as defined by sender.
     */
    mime_type?: string;
    /**
     * File size.
     */
    file_size?: number;
}
