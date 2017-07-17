import { ISendMessagePayload } from "../../payloads/requests/send-message-payload";
import { IUser } from "../../entities/user";
import { IForwardMessagePayload } from "../../payloads/requests/forward-message";
import { ISendPhotoPayload } from "../../payloads/requests/send-photo-payload";
import { IMessageResponse } from "../../payloads/response/message-response";
import { ISendAudioPayload } from "../../payloads/requests/send-audio-payload";
import { ISendDocumentPayload } from "../../payloads/requests/send-document-payload";
import { ISendStickerPayload } from "../../payloads/requests/send-sticker-payload";
import { ISendVideoPayload } from "../../payloads/requests/send-video-payload";
import { ISendVoicePayload } from "../../payloads/requests/send-voice-payload";
import { ISendVideoNotePayload } from "../../payloads/requests/send-video-note-payload";
import { ISendLocationPayload } from "../../payloads/requests/send-location-payload";
import { ISendVenuePayload } from "../../payloads/requests/send-venue-payload";
import { ISendContactPayload } from "../../payloads/requests/send-contact-payload";
import { ISendChatAction } from "../../payloads/requests/send-chat-action-payload";

export interface IMessages {

  getMe(): Promise<IUser>;
  sendMessage(payload: ISendMessagePayload): Promise<IMessageResponse>;
  forwardMessage(payload: IForwardMessagePayload): Promise<IMessageResponse>;
  sendPhoto(payload: ISendPhotoPayload): Promise<IMessageResponse>;
  sendAudio(payload: ISendAudioPayload): Promise<IMessageResponse>;
  sendDocument(payload: ISendDocumentPayload): Promise<IMessageResponse>;
  sendSticker(payload: ISendStickerPayload): Promise<IMessageResponse>;
  sendVideo(payload: ISendVideoPayload): Promise<IMessageResponse>;
  sendVoice(payload: ISendVoicePayload): Promise<IMessageResponse>;
  sendVideoNote(payload: ISendVideoNotePayload): Promise<IMessageResponse>;
  sendLocation(payload: ISendLocationPayload): Promise<IMessageResponse>;
  sendVenue(payload: ISendVenuePayload): Promise<IMessageResponse>;
  sendContact(payload: ISendContactPayload): Promise<IMessageResponse>;
  sendChatAction(payload: ISendChatAction): Promise<boolean>;
}