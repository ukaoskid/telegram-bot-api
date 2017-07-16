import { IMessages } from "../interfaces/services/messages/messages";
import { IUser } from "../interfaces/entities/user";
import { ISendMessagePayload } from "../interfaces/payloads/requests/send-message-payload";
import { HTTPRequest } from "../request";
import { TelegramProvider } from "./telegram-provider";
import { IForwardMessagePayload } from "../interfaces/payloads/requests/forward-message";
import { ISendPhotoPayload } from "../interfaces/payloads/requests/send-photo-payload";
import { IMessageResponse } from "../interfaces/payloads/response/message-response";
import { ISendAudioPayload } from "../interfaces/payloads/requests/send-audio-payload";
import { ISendDocumentPayload } from "../interfaces/payloads/requests/send-document-payload";

export class Messages implements IMessages {

  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public getMe(): Promise<IUser> {
    return HTTPRequest.request(null, TelegramProvider.services.getMe, this.token);
  }

  public sendMessage(payload: ISendMessagePayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendMessage, this.token);
  }

  public forwardMessage(payload: IForwardMessagePayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.forwardMessage, this.token);
  }

  public sendPhoto(payload: ISendPhotoPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendPhoto, this.token);
  }

  public sendAudio(payload: ISendAudioPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendAudio, this.token);
  }

  public sendDocument(payload: ISendDocumentPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendDocument, this.token);
  }
}