import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IInline } from "../../interfaces/services/inline";
import { IAnswerInlineQueryPayload } from "../../interfaces/payloads/inline/answer-inline-query-payload";

export class Inline extends BaseService implements IInline {

  public answerInlineQuery(payload: IAnswerInlineQueryPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.inline.answerInlineQuery, this.token);
  }
}