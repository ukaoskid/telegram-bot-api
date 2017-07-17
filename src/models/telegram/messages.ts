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
import { ISendStickerPayload } from "../interfaces/payloads/requests/send-sticker-payload";
import { ISendVideoPayload } from "../interfaces/payloads/requests/send-video-payload";
import { ISendVoicePayload } from "../interfaces/payloads/requests/send-voice-payload";
import { ISendVideoNotePayload } from "../interfaces/payloads/requests/send-video-note-payload";
import { ISendLocationPayload } from "../interfaces/payloads/requests/send-location-payload";
import { ISendVenuePayload } from "../interfaces/payloads/requests/send-venue-payload";
import { ISendContactPayload } from "../interfaces/payloads/requests/send-contact-payload";
import { ISendChatAction } from "../interfaces/payloads/requests/send-chat-action-payload";

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

  public sendSticker(payload: ISendStickerPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendSticker, this.token);
  }

  public sendVideo(payload: ISendVideoPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVideo, this.token);
  }

  public sendVoice(payload: ISendVoicePayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVoice, this.token);
  }

  public sendVideoNote(payload: ISendVideoNotePayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVideoNote, this.token);
  }

  public sendLocation(payload: ISendLocationPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendLocation, this.token);
  }

  public sendVenue(payload: ISendVenuePayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVenue, this.token);
  }

  public sendContact(payload: ISendContactPayload): Promise<IMessageResponse> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendContact, this.token);
  }

  public sendChatAction(payload: ISendChatAction): Promise<boolean> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendChatAction, this.token);
  }
}