import { IUser } from "../entities/user";
import { IGetUserProfilePhotosPayload } from "../payloads/info/get-user-profile-photos-payload";
import { IUserProfilePhotos } from "../entities/user-profile-photos";
import { IGetFile } from "../payloads/info/get-file-payload";
import { IFile } from "../entities/file";
import { IGetChat } from "../payloads/info/get-chat-payload";
import { IChat } from "../entities/chat";
import { IGetChatAdministratorsPayload } from "../payloads/info/get-chat-administrators-payload";
import { IChatMember } from "../entities/chat-member";

export interface IInfo {

  getMe(): Promise<IUser>;
  getUserProfilePhotos(payload: IGetUserProfilePhotosPayload): Promise<IUserProfilePhotos>;
  getFile(payload: IGetFile): Promise<IFile>;
  getChat(payload: IGetChat): Promise<IChat>;
  getChatAdministrators(payload: IGetChatAdministratorsPayload): Promise<IChatMember[]>;
}