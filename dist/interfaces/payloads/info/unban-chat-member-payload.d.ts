/**
 * Unban Chat Member API Payload.
 */
export interface IUnbanChatMemberPayload {
    /**
     * Unique identifier for the target chat or username of the target supergroup or
     * channel (in the format @channelusername)
     */
    chat_id: number | string;
    /**
     * Unique identifier of the target user.
     */
    user_id: number;
}
