import { IMessages } from "../interfaces/services/messages/messages";
import { IUser } from "../interfaces/user";
import { ISendMessagePayload } from "../interfaces/payloads/requests/send-message-payload";
import { HTTPRequest } from "../request";
import { TelegramProvider } from "./telegram-provider";
import { ISendMessageResponse } from "../interfaces/payloads/response/send-message-response";
import { IForwardMessagePayload } from "../interfaces/payloads/requests/forward-message";
import { ISendPhotoPayload } from "../interfaces/payloads/requests/send-photo-payload";

export class Messages implements IMessages {

    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    public getMe(): Promise<IUser> {
        return HTTPRequest.request(null, TelegramProvider.services.getMe, this.token);
    }

    public sendMessage(payload: ISendMessagePayload): Promise<ISendMessageResponse> {
        return HTTPRequest.request(payload, TelegramProvider.services.sendMessage, this.token);
    }

    public forwardMessage(payload: IForwardMessagePayload): Promise<ISendMessageResponse> {
        return HTTPRequest.request(payload, TelegramProvider.services.forwardMessage, this.token);
    }

    public sendPhoto(payload: ISendPhotoPayload): Promise<ISendMessageResponse> {
        return HTTPRequest.request(payload, TelegramProvider.services.sendPhoto, this.token);
    }
}