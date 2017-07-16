import { IChatPhoto } from "./chat-photo";

export interface IChat {

    /**
     * Unique identifier for this chat. This number may be greater than 32 bits and some programming
     * languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits,
     * so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
     */
    id: number,

    /**
     * Type of chat, can be either “private”, “group”, “supergroup” or “channel”.
     */
    type: string,

    /**
     * Title, for supergroups, channels and group chats.
     */
    title?: string,

    /**
     * Username, for private chats, supergroups and channels if available.
     */
    username?: string,

    /**
     * First name of the other party in a private chat.
     */
    first_name?: string,

    /**
     * Last name of the other party in a private chat.
     */
    last_name?: string,

    /**
     * True if a group has ‘All Members Are Admins’ enabled.
     */
    all_members_are_administrators?: boolean,

    /**
     * Chat photo. Returned only in getChat.
     */
    photo?: IChatPhoto,

    /**
     * Description, for supergroups and channel chats. Returned only in getChat.
     */
    description?: string,

    /**
     * Chat invite link, for supergroups and channel chats. Returned only in getChat.
     */
    invite_link?: string
}