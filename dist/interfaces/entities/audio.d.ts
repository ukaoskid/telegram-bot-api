export interface IAudio {
    /**
     * Unique identifier for this file.
     */
    file_id: string;
    /**
     * Duration of the audio in seconds as defined by sender.
     */
    duration: number;
    /**
     * Performer of the audio as defined by sender or by audio tags.
     */
    performer?: string;
    /**
     * Title of the audio as defined by sender or by audio tags
     */
    title?: string;
    /**
     * MIME type of the file as defined by sender.
     */
    mime_type?: string;
    /**
     * File size
     */
    file_size?: number;
}
