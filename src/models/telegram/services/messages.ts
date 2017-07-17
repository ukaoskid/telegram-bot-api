import { IMessages } from "../../interfaces/services/messages";
import { ISendMessagePayload } from "../../interfaces/payloads/send/send-message-payload";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { IForwardMessagePayload } from "../../interfaces/payloads/send/forward-message";
import { ISendPhotoPayload } from "../../interfaces/payloads/send/send-photo-payload";
import { IMessage } from "../../interfaces/entities/message";
import { ISendAudioPayload } from "../../interfaces/payloads/send/send-audio-payload";
import { ISendDocumentPayload } from "../../interfaces/payloads/send/send-document-payload";
import { ISendStickerPayload } from "../../interfaces/payloads/send/send-sticker-payload";
import { ISendVideoPayload } from "../../interfaces/payloads/send/send-video-payload";
import { ISendVoicePayload } from "../../interfaces/payloads/send/send-voice-payload";
import { ISendVideoNotePayload } from "../../interfaces/payloads/send/send-video-note-payload";
import { ISendLocationPayload } from "../../interfaces/payloads/send/send-location-payload";
import { ISendVenuePayload } from "../../interfaces/payloads/send/send-venue-payload";
import { ISendContactPayload } from "../../interfaces/payloads/send/send-contact-payload";
import { ISendChatAction } from "../../interfaces/payloads/send/send-chat-action-payload";
import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";

export class Messages extends BaseService implements IMessages {

  public sendMessage(payload: ISendMessagePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendMessage, this.token);
  }

  public forwardMessage(payload: IForwardMessagePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.forwardMessage, this.token);
  }

  public sendPhoto(payload: ISendPhotoPayload): Promise<TelegramResponse<IMessage>>{
    return HTTPRequest.request(payload, TelegramProvider.services.sendPhoto, this.token);
  }

  public sendAudio(payload: ISendAudioPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendAudio, this.token);
  }

  public sendDocument(payload: ISendDocumentPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendDocument, this.token);
  }

  public sendSticker(payload: ISendStickerPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendSticker, this.token);
  }

  public sendVideo(payload: ISendVideoPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVideo, this.token);
  }

  public sendVoice(payload: ISendVoicePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVoice, this.token);
  }

  public sendVideoNote(payload: ISendVideoNotePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVideoNote, this.token);
  }

  public sendLocation(payload: ISendLocationPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendLocation, this.token);
  }

  public sendVenue(payload: ISendVenuePayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendVenue, this.token);
  }

  public sendContact(payload: ISendContactPayload): Promise<TelegramResponse<IMessage>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendContact, this.token);
  }

  public sendChatAction(payload: ISendChatAction): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.sendChatAction, this.token);
  }
}