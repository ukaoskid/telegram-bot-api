import { IBaseSendPayload } from "./base-send-payload";
/**
 * Send Message API Payload
 */
export interface ISendMessagePayload extends IBaseSendPayload {
    /**
     * Text of the message to be sent.
     */
    text: string;
    /**
     * Send Markdown or HTML, if you want Telegram apps to show bold, italic,
     * fixed-width text or inline URLs in your bot's message.
     */
    parse_mode?: string;
    /**
     * Disables link previews for links in this message.-
     */
    disable_web_page_preview?: boolean;
}
