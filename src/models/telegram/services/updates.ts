import { BaseService } from "./base-service";
import { HTTPRequest } from "../../request";
import { TelegramProvider } from "../telegram-provider";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IUpdates } from "../../interfaces/services/updates";
import { IGetUpdatesPayload } from "../../interfaces/payloads/updates/get-updates-payload";
import { IUpdate } from "../../interfaces/entities/updates/update";
import { ISetWebhookPayload } from "../../interfaces/payloads/updates/set-webhook-payload";
import { IWebhookInfo } from "../../interfaces/entities/updates/webhook-info";

export class Updates extends BaseService implements IUpdates {

  public getUpdates(payload: IGetUpdatesPayload): Promise<TelegramResponse<IUpdate[]>> {
    return HTTPRequest.request(payload, TelegramProvider.services.updates.getUpdates, this.token);
  }

  public setWebook(payload: ISetWebhookPayload): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(payload, TelegramProvider.services.updates.setWebook, this.token);
  }

  public deleteWebhook(): Promise<TelegramResponse<boolean>> {
    return HTTPRequest.request(null, TelegramProvider.services.updates.deleteWebhook, this.token);
  }

  public getWebhookInfo(): Promise<TelegramResponse<IWebhookInfo>> {
    return HTTPRequest.request(null, TelegramProvider.services.updates.getWebhookInfo, this.token);
  }
}