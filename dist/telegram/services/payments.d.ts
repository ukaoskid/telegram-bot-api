import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IPayments } from "../../interfaces/services/payments";
import { ISendInvoicePayload } from "../../interfaces/payloads/payments/send-invoice-payloads";
import { IMessage } from "../../interfaces/entities/message";
import { IAnswerShippingQueryPayload } from "../../interfaces/payloads/payments/answer-shipping-query-payload";
import { IAnswerPreCheckoutQueryPayload } from "../../interfaces/payloads/payments/answer-pre-checkout-query-payload";
export declare class Payments extends BaseService implements IPayments {
    sendInvoice(payload: ISendInvoicePayload): Promise<TelegramResponse<IMessage>>;
    answerShippingQuery(payload: IAnswerShippingQueryPayload): Promise<TelegramResponse<boolean>>;
    answerPreCheckoutQuery(payload: IAnswerPreCheckoutQueryPayload): Promise<TelegramResponse<boolean>>;
}
