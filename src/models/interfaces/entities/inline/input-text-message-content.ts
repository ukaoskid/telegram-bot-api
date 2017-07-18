import { IInputMessageContent } from "./input-message-content";

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export interface IInputTextMessageContent extends IInputMessageContent {

  /**
   * Text of the message to be sent, 1-4096 characters.
   */
  message_text: string,

  /**
   * Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or
   * inline URLs in your bot's message.
   */
  parse_mode?: string,

  /**
   * Disables link previews for links in the sent message.
   */
  disable_web_page_preview?: boolean
}