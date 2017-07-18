/**
 * Get Game High Scores API Payload.
 */
export interface IGetGameHighScoresPayload {
    /**
     * Target user id.
     */
    user_id: number;
    /**
     * Required if inline_message_id is not specified. Unique identifier for the target chat.
     */
    chat_id?: number;
    /**
     * Required if inline_message_id is not specified. Identifier of the sent message.
     */
    message_id?: number;
    /**
     * Required if chat_id and message_id are not specified. Identifier of the inline message.
     */
    inline_message_id?: string;
}
