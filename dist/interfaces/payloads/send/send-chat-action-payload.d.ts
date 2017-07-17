/**
 * Send Chat Action API Payload.
 */
export interface ISendChatAction {
    /**
     * identifier for the target chat or username of the target channel (in the format @channelusername).
     */
    chat_id: number | string;
    /**
     * Type of action to broadcast. Choose one, depending on what the user is about to receive:
     * typing for text messages, upload_photo for photos, record_video or upload_video for videos,
     * record_audio or upload_audio for audio files, upload_document for general files,
     * find_location for location data, record_video_note or upload_video_note for video notes.
     */
    action: string;
}
