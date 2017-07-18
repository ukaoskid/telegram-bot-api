import { TelegramResponse } from "../payloads/response/generic-response";
import { ISendInvoicePayload } from "../payloads/payments/send-invoice-payloads";
import { IMessage } from "../entities/message";
import { IAnswerShippingQueryPayload } from "../payloads/payments/answer-shipping-query-payload";
import { IAnswerPreCheckoutQueryPayload } from "../payloads/payments/answer-pre-checkout-query-payload";

export interface IPayments {

  /**
   * Use this method to send invoices.
   * On success, the sent Message is returned.
   * @param {ISendInvoicePayload} payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendInvoice(payload: ISendInvoicePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
   * the Bot API will send an Update with a shipping_query field to the bot.
   * Use this method to reply to shipping queries.
   * On success, True is returned.
   * @param {IAnswerShippingQueryPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  answerShippingQuery(payload: IAnswerShippingQueryPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in
   * the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries.
   * On success, True is returned.
   * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   * @param {IAnswerPreCheckoutQueryPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  answerPreCheckoutQuery(payload: IAnswerPreCheckoutQueryPayload): Promise<TelegramResponse<boolean>>;
}