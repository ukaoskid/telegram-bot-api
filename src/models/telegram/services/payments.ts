import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IPayments } from "../../interfaces/services/payments";
import { ISendInvoicePayload } from "../../interfaces/payloads/payments/send-invoice-payloads";
import { IMessage } from "../../interfaces/entities/message";
import { IAnswerShippingQueryPayload } from "../../interfaces/payloads/payments/answer-shipping-query-payload";
import { IAnswerPreCheckoutQueryPayload } from "../../interfaces/payloads/payments/answer-pre-checkout-query-payload";

export class Payments extends BaseService implements IPayments {

  public sendInvoice(payload: ISendInvoicePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.payments.sendInvoice, this.token);
  }

  public answerShippingQuery(payload: IAnswerShippingQueryPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.payments.answerShippingQuery, this.token);
  }

  public answerPreCheckoutQuery(payload: IAnswerPreCheckoutQueryPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.payments.answerPreCheckoutQuery, this.token);
  }
}