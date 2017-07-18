import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IInline } from "../../interfaces/services/inline";
import { IAnswerInlineQueryPayload } from "../../interfaces/payloads/inline/answer-inline-query-payload";
export declare class Inline extends BaseService implements IInline {
    answerInlineQuery(payload: IAnswerInlineQueryPayload): Promise<TelegramResponse<boolean>>;
}
