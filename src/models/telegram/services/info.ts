import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { IInfo } from "../../interfaces/services/info";
import { IUser } from "../../interfaces/entities/user";

export class Info extends BaseService implements IInfo {

  public getMe(): Promise<IUser> {
    return HTTPRequest.request(null, TelegramProvider.services.getMe, this.token);
  }
}