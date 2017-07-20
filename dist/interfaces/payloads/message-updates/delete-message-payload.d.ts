/**
 * Delete Message API Payload.
 */
export interface IDeleteMessagePayload {
    /**
     * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the
     * target channel (in the format @channelusername).
     */
    chat_id: number | string;
    /**
     * Identifier of the message to delete
     */
    message_id: number;
}
