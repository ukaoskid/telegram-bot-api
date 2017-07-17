import { IPhotoSize } from "./photo-size";
export interface IUserProfilePhotos {
    /**
     * Total number of profile pictures the target user has.
     */
    total_count: number;
    /**
     * Array of PhotoSize	Requested profile pictures (in up to 4 sizes each).
     */
    photos: IPhotoSize[][];
}
