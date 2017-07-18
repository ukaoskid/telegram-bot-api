import { IMessage } from "../message";
import { IInlineQuery } from "../inline-query";
import { IChosenInlineResult } from "../inline/chosen-inline-result";
import { ICallbackQuery } from "../callback-query";
import { IShippingQuery } from "../payments/shipping-query";
import { IPreCheckoutQuery } from "../payments/pre-checkout-query";

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 */
export interface IUpdate {

  /**
   * The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially.
   * This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or
   * to restore the correct update sequence, should they get out of order.
   */
  update_id: number,

  /**
   * New incoming message of any kind — text, photo, sticker, etc.
   */
  message?: IMessage,

  /**
   * New version of a message that is known to the bot and was edited.
   */
  edited_message?: IMessage,

  /**
   * New incoming channel post of any kind — text, photo, sticker, etc.
   */
  channel_post?: IMessage,

  /**
   * New version of a channel post that is known to the bot and was edited.
   */
  edited_channel_post?: IMessage,

  /**
   * New incoming inline query.
   */
  inline_query?: IInlineQuery,

  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner.
   */
  chosen_inline_result?: IChosenInlineResult,

  /**
   * New incoming callback query.
   */
  callback_query?: ICallbackQuery,

  /**
   * New incoming shipping query. Only for invoices with flexible price.
   */
  shipping_query?: IShippingQuery,

  /**
   * New incoming pre-checkout query. Contains full information about checkout.
   */
  pre_checkout_query?: IPreCheckoutQuery
}