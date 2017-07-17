import { IInlineKeyboardButton } from "./inline-keyboard-button";

export interface IInlineKeyboardMarkup {

  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects.
   */
  inline_keyboard: IInlineKeyboardButton[][]
}