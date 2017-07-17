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
import { IAnsweCallbackQueryPayload } from "../payloads/info/answer-callback-query-payload";

export interface IInfo {

  /**
   * A simple method for testing your bot's auth token. Requires no parameters.
   * Returns basic information about the bot in form of a User object.
   * @returns {Promise<TelegramResponse<IUser>>}
   */
  getMe(): Promise<TelegramResponse<IUser>>;

  /**
   * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   * @param payload
   * @returns {Promise<TelegramResponse<IUserProfilePhotos>>}
   */
  getUserProfilePhotos(payload: IGetUserProfilePhotosPayload): Promise<TelegramResponse<IUserProfilePhotos>>;
  getFile(payload: IGetFilePayload): Promise<TelegramResponse<IFile>>;
  kickChatMember(payload: IKickChatMemberPayload): Promise<TelegramResponse<boolean>>;
  unbanChatMember(payload: IUnbanChatMemberPayload): Promise<TelegramResponse<boolean>>;
  restrictChatMember(payload: IRestrictChatMemberPayload): Promise<TelegramResponse<boolean>>;
  promoteChatMember(payload: IPromoteChatMemberPayload): Promise<TelegramResponse<boolean>>;
  exportChatInviteLink(payload: IExportChatInviteLinkPayload): Promise<TelegramResponse<boolean>>;
  setChatPhoto(payload: ISetChatPhotoPayload): Promise<TelegramResponse<boolean>>;
  deleteChatPhoto(payload: IDeleteChatPhotoPayload): Promise<TelegramResponse<boolean>>;
  setChatTitle(payload: ISetChatTitlePayload): Promise<TelegramResponse<boolean>>;
  setChatDescription(payload: ISetChatDescriptionPayload): Promise<TelegramResponse<boolean>>;
  pinChatMessage(payload: IPinChatMessagePayload): Promise<TelegramResponse<boolean>>;
  unpinChatMessage(payload: IUnpinChatMessagePayload): Promise<TelegramResponse<boolean>>;
  leaveChat(payload: ILeaveChatPayload): Promise<TelegramResponse<boolean>>;
  getChat(payload: IGetChatPayload): Promise<TelegramResponse<IChat>>;
  getChatAdministrators(payload: IGetChatAdministratorsPayload): Promise<TelegramResponse<IChatMember[]>>;
  getChatMembersCount(payload: IGetChatMembersCountPayload): Promise<TelegramResponse<number>>;
  getChatMember(payload: IGetChatMemberPayload): Promise<TelegramResponse<IChatMember>>;
  answerCallbackQuery(payload: IAnsweCallbackQueryPayload): Promise<TelegramResponse<boolean>>;
}