import { IInlineKeyboardMarkup } from "../../entities/inline/inline-keyboard-markup";

export interface IBaseEditPayload {

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the
   * target channel (in the format @channelusername).
   */
  chat_id?: number | string,

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message.
   */
  message_id?: number,

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message.
   */
  inline_message_id?: string,

  /**
   * A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup
}