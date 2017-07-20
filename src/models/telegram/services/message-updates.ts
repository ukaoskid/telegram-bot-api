import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IMessageUpdates } from "../../interfaces/services/message-updates";
import { IEditMessageTextPayload } from "../../interfaces/payloads/message-updates/edit-message-text-payload";
import { IEditMessageCaptionPayload } from "../../interfaces/payloads/message-updates/edit-message-caption-payload";
import { IEditMessageReplyMarkupPayload } from "../../interfaces/payloads/message-updates/edit-message-reply-markup-payload";
import { IDeleteMessagePayload } from "../../interfaces/payloads/message-updates/delete-message-payload";

export class MessageUpdates extends BaseService implements IMessageUpdates {

  public editMessageText(payload: IEditMessageTextPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.messageUpdates.editMessageText, this.token);
  }

  public editMessageCaption(payload: IEditMessageCaptionPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.messageUpdates.editMessageCaption, this.token);
  }

  public editMessageReplyMarkup(payload: IEditMessageReplyMarkupPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.messageUpdates.editMessageReplyMarkup, this.token);
  }

  public deleteMessage(payload: IDeleteMessagePayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.messageUpdates.deleteMessage, this.token);
  }
}