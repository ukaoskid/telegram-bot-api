import { ISendMessagePayload } from "../payloads/send/send-message-payload";
import { IForwardMessagePayload } from "../payloads/send/forward-message";
import { ISendPhotoPayload } from "../payloads/send/send-photo-payload";
import { IMessage } from "../entities/message";
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
import { TelegramResponse } from "../payloads/response/generic-response";

export interface IMessages {

  /**
   * Use this method to send text messages. On success, the sent Message is returned.
   * @param payload
   * @ {Promise<TelegramResponse<IMessage>>}
   */
  sendMessage(payload: ISendMessagePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to forward messages of any kind. On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  forwardMessage(payload: IForwardMessagePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send photos. On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendPhoto(payload: ISendPhotoPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send audio files, if you want Telegram clients to display them in the music player.
   * Your audio must be in the .mp3 format. On success, the sent Message is returned.
   * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   * For sending voice messages, use the sendVoice method instead.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendAudio(payload: ISendAudioPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send general files. On success, the sent Message is returned.
   * Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendDocument(payload: ISendDocumentPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send .webp stickers. On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendSticker(payload: ISendStickerPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document).
   * On success, the sent Message is returned.
   * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendVideo(payload: ISendVideoPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
   * For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as Audio or Document).
   * On success, the sent Message is returned.
   * Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendVoice(payload: ISendVoicePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long.
   * Use this method to send video messages.
   * On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendVideoNote(payload: ISendVideoNotePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send point on the map.
   * On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendLocation(payload: ISendLocationPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send information about a venue.
   * On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendVenue(payload: ISendVenuePayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method to send phone contacts.
   * On success, the sent Message is returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IMessage>>}
   */
  sendContact(payload: ISendContactPayload): Promise<TelegramResponse<IMessage>>;

  /**
   * Use this method when you need to tell the user that something is happening on the bot's side.
   * The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
   * Returns True on success.
   * Example: The ImageBot needs some time to process a request and upload the image.
   * Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use sendChatAction with action = upload_photo.
   * The user will see a “sending photo” status for the bot.
   * We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  sendChatAction(payload: ISendChatAction): Promise<TelegramResponse<boolean>>;
}