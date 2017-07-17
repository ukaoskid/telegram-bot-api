export interface IFile {
    /**
     * Unique identifier for this file.
     */
    file_id: string;
    /**
     * File size, if known.
     */
    file_size?: number;
    /**
     * File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.
     */
    file_path?: string;
}
