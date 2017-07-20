import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IMessageUpdates } from "../../interfaces/services/message-updates";
import { IEditMessageTextPayload } from "../../interfaces/payloads/message-updates/edit-message-text-payload";
import { IEditMessageCaptionPayload } from "../../interfaces/payloads/message-updates/edit-message-caption-payload";
import { IEditMessageReplyMarkupPayload } from "../../interfaces/payloads/message-updates/edit-message-reply-markup-payload";
import { IDeleteMessagePayload } from "../../interfaces/payloads/message-updates/delete-message-payload";
export declare class MessageUpdates extends BaseService implements IMessageUpdates {
    editMessageText(payload: IEditMessageTextPayload): Promise<TelegramResponse<boolean>>;
    editMessageCaption(payload: IEditMessageCaptionPayload): Promise<TelegramResponse<boolean>>;
    editMessageReplyMarkup(payload: IEditMessageReplyMarkupPayload): Promise<TelegramResponse<boolean>>;
    deleteMessage(payload: IDeleteMessagePayload): Promise<TelegramResponse<boolean>>;
}
