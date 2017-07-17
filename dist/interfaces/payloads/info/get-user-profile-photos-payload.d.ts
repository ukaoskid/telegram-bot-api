/**
 * Get User Profile Photo API Payload.
 */
export interface IGetUserProfilePhotosPayload {
    /**
     * Unique identifier of the target user.
     */
    user_id: number;
    /**
     * Sequential number of the first photo to be returned. By default, all photos are returned.
     */
    offset?: number;
    /**
     * Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.
     */
    limit?: number;
}
