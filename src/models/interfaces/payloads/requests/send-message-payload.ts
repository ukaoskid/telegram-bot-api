/**
 * Send Message API Payload
 */
export interface ISendMessagePayload {

    /*
        Todo add the following types - reply_markup:
        InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply
    */

    /**
     * 	Unique identifier for the target chat or username of the target channel (in the format @channelusername).
     */
    chat_id: number | string,

    /**
     * Text of the message to be sent.
     */
    text: string,

    /**
     * Send Markdown or HTML, if you want Telegram apps to show bold, italic,
     * fixed-width text or inline URLs in your bot's message.
     */
    parse_mode?: string,

    /**
     * Disables link previews for links in this message.-
     */
    disable_web_page_preview?: boolean,

    /**
     * Sends the message silently. Users will receive a notification with no sound.
     */
    disable_notification?: boolean,

    /**
     * If the message is a reply, ID of the original message.
     */
    reply_to_message_id?: number,

    /**
     * Additional interface options. A JSON-serialized object for an inline keyboard,
     * custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    reply_markup?: any
}