import { ISendMessagePayload } from "../../payloads/requests/send-message-payload";
import { IUser } from "../../user";
import { ISendMessageResponse } from "../../payloads/response/send-message-response";
import { IForwardMessagePayload } from "../../payloads/requests/forward-message";
import { ISendPhotoPayload } from "../../payloads/requests/send-photo-payload";

export interface IMessages {

    getMe(): Promise<IUser>;
    sendMessage(payload: ISendMessagePayload): Promise<ISendMessageResponse>;
    forwardMessage(payload: IForwardMessagePayload): Promise<ISendMessageResponse>;
    sendPhoto(payload: ISendPhotoPayload): Promise<ISendMessageResponse>;
}