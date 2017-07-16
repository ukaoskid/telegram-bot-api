import { IUser } from "./user";

export interface IMessageEntity {

    /**
     * Type of the entity. Can be mention (@username), hashtag, bot_command, url, email, bold (bold text),
     * italic (italic text), code (monowidth string), pre (monowidth block),
     * text_link (for clickable text URLs), text_mention (for users without usernames).
     */
    type: string,

    /**
     * Offset in UTF-16 code units to the start of the entity.
     */
    offset: number,

    /**
     * Length of the entity in UTF-16 code units.
     */
    length: number,

    /**
     * For “text_link” only, url that will be opened after user taps on the text.
     */
    url?: string

    /**
     * For “text_mention” only, the mentioned user.
     */
    user?: IUser
}