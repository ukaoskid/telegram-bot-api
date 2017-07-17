/**
 * Get Chat Member Count API Payload.
 */
export interface IGetChatMemberPayload {
    /**
     * Unique identifier for the target chat or username of the target supergroup or
     * channel (in the format @channelusername).
     */
    chat_id: number;
    /**
     * Unique identifier of the target user.
     */
    user_id: number;
}
