import { TelegramResponse } from "../payloads/response/generic-response";
import { IEditMessageTextPayload } from "../payloads/message-updates/edit-message-text-payload";
import { IEditMessageCaptionPayload } from "../payloads/message-updates/edit-message-caption-payload";
import { IEditMessageReplyMarkupPayload } from "../payloads/message-updates/edit-message-reply-markup-payload";
import { IDeleteMessagePayload } from "../payloads/message-updates/delete-message-payload";

export interface IMessageUpdates {

  /**
   * Use this method to edit text and game messages sent by the bot or via the bot (for inline bots).
   * On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
   * @param {IEditMessageTextPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  editMessageText(payload: IEditMessageTextPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to edit captions of messages sent by the bot or via the bot (for inline bots).
   * On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
   * @param {IEditMessageCaptionPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  editMessageCaption(payload: IEditMessageCaptionPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to edit only the reply markup of messages sent by the bot or via the bot (for inline bots).
   * On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
   * @param {IEditMessageReplyMarkupPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  editMessageReplyMarkup(payload: IEditMessageReplyMarkupPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to delete a message, including service messages, with the following limitations:
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - Bots can delete outgoing messages in groups and supergroups.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot is an administrator of a group, it can delete any message there.
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   * Returns True on success.
   * @param {IDeleteMessagePayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  deleteMessage(payload: IDeleteMessagePayload): Promise<TelegramResponse<boolean>>;
}