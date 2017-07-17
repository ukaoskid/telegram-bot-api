import { IUser } from "../entities/user";
import { IGetUserProfilePhotosPayload } from "../payloads/info/get-user-profile-photos-payload";
import { IUserProfilePhotos } from "../entities/user-profile-photos";
import { IGetFile } from "../payloads/info/get-file-payload";
import { IFile } from "../entities/file";
import { IGetChat } from "../payloads/info/get-chat-payload";
import { IChat } from "../entities/chat";
import { IGetChatAdministratorsPayload } from "../payloads/info/get-chat-administrators-payload";
import { IChatMember } from "../entities/chat-member";
import { IGetChatMembersCountPayload } from "../payloads/info/get-chat-members-count-payload";
import { TelegramResponse } from "../payloads/response/generic-response";

export interface IInfo {

  getMe(): Promise<TelegramResponse<IUser>>;
  getUserProfilePhotos(payload: IGetUserProfilePhotosPayload): Promise<TelegramResponse<IUserProfilePhotos>>;
  getFile(payload: IGetFile): Promise<TelegramResponse<IFile>>;
  getChat(payload: IGetChat): Promise<TelegramResponse<IChat>>;
  getChatAdministrators(payload: IGetChatAdministratorsPayload): Promise<TelegramResponse<IChatMember[]>>;
  getChatMembersCount(payload: IGetChatMembersCountPayload): Promise<TelegramResponse<number>>;
}