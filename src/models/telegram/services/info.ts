import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { IInfo } from "../../interfaces/services/info";
import { IUser } from "../../interfaces/entities/user";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IGetUserProfilePhotosPayload } from "../../interfaces/payloads/info/get-user-profile-photos-payload";
import { IUserProfilePhotos } from "../../interfaces/entities/user-profile-photos";
import { IGetFilePayload } from "../../interfaces/payloads/info/get-file-payload";
import { IFile } from "../../interfaces/entities/file";
import { IKickChatMemberPayload } from "../../interfaces/payloads/info/kick-chat-member-payload";
import { IUnbanChatMemberPayload } from "../../interfaces/payloads/info/unban-chat-member-payload";
import { IRestrictChatMemberPayload } from "../../interfaces/payloads/info/restrict-chat-member-payload";
import { IPromoteChatMemberPayload } from "../../interfaces/payloads/info/promote-chat-member-payload";
import { IExportChatInviteLinkPayload } from "../../interfaces/payloads/info/export-chat-invite-link-payload";
import { ISetChatPhotoPayload } from "../../interfaces/payloads/info/set-chat-photo-payload";
import { IDeleteChatPhotoPayload } from "../../interfaces/payloads/info/delete-chat-photo-payload";
import { ISetChatTitlePayload } from "../../interfaces/payloads/info/set-chat-title-payload";
import { ISetChatDescriptionPayload } from "../../interfaces/payloads/info/set-chat-description-payload";
import { IPinChatMessagePayload } from "../../interfaces/payloads/info/pin-chat-message-payload";
import { IUnpinChatMessagePayload } from "../../interfaces/payloads/info/unpin-chat-message-payload";
import { ILeaveChatPayload } from "../../interfaces/payloads/info/leave-chat-payload";
import { IGetChatPayload } from "../../interfaces/payloads/info/get-chat-payload";
import { IChat } from "../../interfaces/entities/chat";
import { IGetChatAdministratorsPayload } from "../../interfaces/payloads/info/get-chat-administrators-payload";
import { IChatMember } from "../../interfaces/entities/chat-member";
import { IGetChatMembersCountPayload } from "../../interfaces/payloads/info/get-chat-members-count-payload";
import { IGetChatMemberPayload } from "../../interfaces/payloads/info/get-chat-member-payload";
import { IAnsweCallbackQueryPayload } from "../../interfaces/payloads/info/answer-callback-query-payload";

export class Info extends BaseService implements IInfo {

  public getMe(): Promise<TelegramResponse<IUser>> {
    return HTTPRequest.request(null, TelegramProvider.services.getMe, this.token);
  }

  public getUserProfilePhotos(payload: IGetUserProfilePhotosPayload): Promise<TelegramResponse<IUserProfilePhotos>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getUserProfilePhotos, this.token);
  }

  public getFile(payload: IGetFilePayload): Promise<TelegramResponse<IFile>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getFile, this.token);
  }

  public kickChatMember(payload: IKickChatMemberPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.kickChatMember, this.token);
  }

  public unbanChatMember(payload: IUnbanChatMemberPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.unbanChatMember, this.token);
  }

  public restrictChatMember(payload: IRestrictChatMemberPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.restrictChatMember, this.token);
  }

  public promoteChatMember(payload: IPromoteChatMemberPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.promoteChatMember, this.token);
  }

  public exportChatInviteLink(payload: IExportChatInviteLinkPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.exportChatInviteLink, this.token);
  }

  public setChatPhoto(payload: ISetChatPhotoPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.setChatPhoto, this.token);
  }

  public deleteChatPhoto(payload: IDeleteChatPhotoPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.deleteChatPhoto, this.token);
  }

  public setChatTitle(payload: ISetChatTitlePayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.setChatTitle, this.token);
  }

  public setChatDescription(payload: ISetChatDescriptionPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.setChatDescription, this.token);
  }

  public pinChatMessage(payload: IPinChatMessagePayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.pinChatMessage, this.token);
  }

  public unpinChatMessage(payload: IUnpinChatMessagePayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.unpinChatMessage, this.token);
  }

  public leaveChat(payload: ILeaveChatPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.leaveChat, this.token);
  }

  public getChat(payload: IGetChatPayload): Promise<TelegramResponse<IChat>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getChat, this.token);
  }

  public getChatAdministrators(payload: IGetChatAdministratorsPayload): Promise<TelegramResponse<IChatMember[]>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getChatAdministrators, this.token);
  }

  public getChatMembersCount(payload: IGetChatMembersCountPayload): Promise<TelegramResponse<number>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getChatMembersCount, this.token);
  }

  public getChatMember(payload: IGetChatMemberPayload): Promise<TelegramResponse<IChatMember>> {
    return HTTPRequest.request(payload, TelegramProvider.services.getChatMember, this.token);
  }

  public answerCallbackQuery(payload: IAnsweCallbackQueryPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.answerCallbackQuery, this.token);
  }
}