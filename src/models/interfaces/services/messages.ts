import { ISendMessagePayload } from "../payloads/send/send-message-payload";
import { IForwardMessagePayload } from "../payloads/send/forward-message";
import { ISendPhotoPayload } from "../payloads/send/send-photo-payload";
import { IMessageResponse } from "../payloads/response/message-response";
import { ISendAudioPayload } from "../payloads/send/send-audio-payload";
import { ISendDocumentPayload } from "../payloads/send/send-document-payload";
import { ISendStickerPayload } from "../payloads/send/send-sticker-payload";
import { ISendVideoPayload } from "../payloads/send/send-video-payload";
import { ISendVoicePayload } from "../payloads/send/send-voice-payload";
import { ISendVideoNotePayload } from "../payloads/send/send-video-note-payload";
import { ISendLocationPayload } from "../payloads/send/send-location-payload";
import { ISendVenuePayload } from "../payloads/send/send-venue-payload";
import { ISendContactPayload } from "../payloads/send/send-contact-payload";
import { ISendChatAction } from "../payloads/send/send-chat-action-payload";

export interface IMessages {

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