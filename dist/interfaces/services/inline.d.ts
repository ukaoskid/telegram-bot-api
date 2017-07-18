import { TelegramResponse } from "../payloads/response/generic-response";
import { IAnswerInlineQueryPayload } from "../payloads/inline/answer-inline-query-payload";
export interface IInline {
    /**
     * Use this method to send answers to an inline query. On success, True is returned.
     * No more than 50 results per query are allowed.
     * @param {IAnswerInlineQueryPayload} payload
     * @returns {Promise<TelegramResponse<boolean>>}
     */
    answerInlineQuery(payload: IAnswerInlineQueryPayload): Promise<TelegramResponse<boolean>>;
}
