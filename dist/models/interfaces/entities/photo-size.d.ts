export interface IPhotoSize {
    /**
     * Unique identifier for this file.
     */
    file_id: string;
    /**
     * Photo width.
     */
    width: number;
    /**
     * Photo height
     */
    height: number;
    /**
     * File size
     */
    file_size?: number;
}
