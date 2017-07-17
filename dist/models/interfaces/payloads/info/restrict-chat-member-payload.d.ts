/**
 * Restrict Chat Member API Payload
 */
export interface IRestrictChatMemberPayload {
    /**
     * Unique identifier for the target chat or username of the target supergroup or
     * channel (in the format @channelusername)
     */
    chat_id: number | string;
    /**
     * Unique identifier of the target user.
     */
    user_id: number;
    /**
     * Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less
     * than 30 seconds from the current time they are considered to be banned forever.
     */
    until_date?: number;
    /**
     * Pass True, if the user can send text messages, contacts, locations and venues.
     */
    can_send_messages?: boolean;
    /**
     * Pass True, if the user can send audios, documents, photos, videos, video notes and voice notes,
     * implies can_send_messages.
     */
    can_send_media_messages?: boolean;
    /**
     * Pass True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages.
     */
    can_send_other_messages?: boolean;
    /**
     * Pass True, if the user may add web page previews to their messages, implies can_send_media_messages.
     */
    can_add_web_page_previews?: boolean;
}
