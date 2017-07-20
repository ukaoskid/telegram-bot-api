import { IBaseEditPayload } from "./base-edit-payload";
/**
 * Edit Message Text API Payload.
 */
export interface IEditMessageTextPayload extends IBaseEditPayload {
    /**
     * New text of the message.
     */
    text?: string;
    /**
     * Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs
     * in your bot's message.
     */
    parse_mode?: string;
    /**
     * Disables link previews for links in this message.
     */
    disable_web_page_preview?: boolean;
}
