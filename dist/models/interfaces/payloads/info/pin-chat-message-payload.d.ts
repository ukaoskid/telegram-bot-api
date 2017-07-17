/**
 * Pin Chat Message API Payload.
 */
export interface IPinChatMessagePayload {
    /**
     * Unique identifier for the target chat or username of the target supergroup or
     * channel (in the format @channelusername)
     */
    chat_id: number | string;
    /**
     * Identifier of a message to pin.
     */
    message_id: number;
    /**
     * Pass True, if it is not necessary to send a notification to all group members about the new pinned message.
     */
    disable_notification?: boolean;
}
