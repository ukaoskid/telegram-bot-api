import { TelegramResponse } from "../payloads/response/generic-response";
import { IUser } from "../entities/user";
import { IGetUserProfilePhotosPayload } from "../payloads/info/get-user-profile-photos-payload";
import { IUserProfilePhotos } from "../entities/user-profile-photos";
import { IGetFilePayload } from "../payloads/info/get-file-payload";
import { IFile } from "../entities/file";
import { IKickChatMemberPayload } from "../payloads/info/kick-chat-member-payload";
import { IUnbanChatMemberPayload } from "../payloads/info/unban-chat-member-payload";
import { IRestrictChatMemberPayload } from "../payloads/info/restrict-chat-member-payload";
import { IPromoteChatMemberPayload } from "../payloads/info/promote-chat-member-payload";
import { IExportChatInviteLinkPayload } from "../payloads/info/export-chat-invite-link-payload";
import { ISetChatPhotoPayload } from "../payloads/info/set-chat-photo-payload";
import { IDeleteChatPhotoPayload } from "../payloads/info/delete-chat-photo-payload";
import { ISetChatTitlePayload } from "../payloads/info/set-chat-title-payload";
import { ISetChatDescriptionPayload } from "../payloads/info/set-chat-description-payload";
import { IPinChatMessagePayload } from "../payloads/info/pin-chat-message-payload";
import { IUnpinChatMessagePayload } from "../payloads/info/unpin-chat-message-payload";
import { ILeaveChatPayload } from "../payloads/info/leave-chat-payload";
import { IGetChatPayload } from "../payloads/info/get-chat-payload";
import { IChat } from "../entities/chat";
import { IGetChatAdministratorsPayload } from "../payloads/info/get-chat-administrators-payload";
import { IChatMember } from "../entities/chat-member";
import { IGetChatMembersCountPayload } from "../payloads/info/get-chat-members-count-payload";
import { IGetChatMemberPayload } from "../payloads/info/get-chat-member-payload";
import { IAnswerCallbackQueryPayload } from "../payloads/info/answer-callback-query-payload";

export interface IInfo {

  /**
   * A simple method for testing your bot's auth token. Requires no parameters.
   * Returns basic information about the bot in form of a User object.
   * @returns {Promise<TelegramResponse<IUser>>}
   */
  getMe(): Promise<TelegramResponse<IUser>>;

  /**
   * Use this method to get a list of profile pictures for a user.
   * Returns a UserProfilePhotos object.
   * @param payload
   * @returns {Promise<TelegramResponse<IUserProfilePhotos>>}
   */
  getUserProfilePhotos(payload: IGetUserProfilePhotosPayload): Promise<TelegramResponse<IUserProfilePhotos>>;

  /**
   * Use this method to get basic info about a file and prepare it for downloading.
   * For the moment, bots can download files of up to 20MB in size.
   * On success, a File object is returned.
   * The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response.
   * It is guaranteed that the link will be valid for at least 1 hour.
   * When the link expires, a new one can be requested by calling getFile again.
   * @param payload
   * @returns {Promise<TelegramResponse<IFile>>}
   */
  getFile(payload: IGetFilePayload): Promise<TelegramResponse<IFile>>;

  /**
   * Use this method to kick a user from a group, a supergroup or a channel.
   * In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
   * Otherwise members may only be removed by the group's creator or by the member that added them.
   * @param payload
   * @returns Promise<TelegramResponse<boolean>>
   */
  kickChatMember(payload: IKickChatMemberPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to unban a previously kicked user in a supergroup or channel.
   * The user will not return to the group or channel automatically, but will be able to join via link, etc.
   * The bot must be an administrator for this to work.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  unbanChatMember(payload: IUnbanChatMemberPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to restrict a user in a supergroup.
   * The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights.
   * Pass True for all boolean parameters to lift restrictions from a user.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  restrictChatMember(payload: IRestrictChatMemberPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to promote or demote a user in a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Pass False for all boolean parameters to demote a user.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  promoteChatMember(payload: IPromoteChatMemberPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to export an invite link to a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns exported invite link as String on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  exportChatInviteLink(payload: IExportChatInviteLinkPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to set a new profile photo for the chat.
   * Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  setChatPhoto(payload: ISetChatPhotoPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to delete a chat photo.
   * Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  deleteChatPhoto(payload: IDeleteChatPhotoPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to change the title of a chat.
   * Titles can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  setChatTitle(payload: ISetChatTitlePayload): Promise<TelegramResponse<boolean>>;

  /**
   *  Use this method to change the description of a supergroup or a channel.
   *  The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   *  Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  setChatDescription(payload: ISetChatDescriptionPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to pin a message in a supergroup.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  pinChatMessage(payload: IPinChatMessagePayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to unpin a message in a supergroup chat.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  unpinChatMessage(payload: IUnpinChatMessagePayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method for your bot to leave a group, supergroup or channel.
   * Returns True on success.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  leaveChat(payload: ILeaveChatPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
   * Returns a Chat object on success.
   * @param payload
   * @returns {Promise<TelegramResponse<IChat>>}
   */
  getChat(payload: IGetChatPayload): Promise<TelegramResponse<IChat>>;

  /**
   * Use this method to get a list of administrators in a chat.
   * On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots.
   * If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   * @param payload
   * @returns {Promise<TelegramResponse<IChatMember[]>>}
   */
  getChatAdministrators(payload: IGetChatAdministratorsPayload): Promise<TelegramResponse<IChatMember[]>>;

  /**
   * Use this method to get the number of members in a chat.
   * Returns Int on success.
   * @param payload
   * @returns {Promise<TelegramResponse<number>>}
   */
  getChatMembersCount(payload: IGetChatMembersCountPayload): Promise<TelegramResponse<number>>;

  /**
   * Use this method to get information about a member of a chat.
   * Returns a ChatMember object on success.
   * @param payload
   * @returns {Promise<TelegramResponse<IChatMember>>}
   */
  getChatMember(payload: IGetChatMemberPayload): Promise<TelegramResponse<IChatMember>>;

  /**
   * Use this method to send answers to callback queries sent from inline keyboards.
   * The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
   * On success, True is returned.
   * Alternatively, the user can be redirected to the specified Game URL.
   * For this option to work, you must first create a game for your bot via BotFather and accept the terms.
   * Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
   * @param payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  answerCallbackQuery(payload: IAnswerCallbackQueryPayload): Promise<TelegramResponse<boolean>>;
}