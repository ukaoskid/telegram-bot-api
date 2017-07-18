import { BaseService } from "./base-service";
import { TelegramResponse } from "../../interfaces/payloads/response/generic-response";
import { IUpdates } from "../../interfaces/services/updates";
import { IGetUpdatesPayload } from "../../interfaces/payloads/updates/get-updates-payload";
import { IUpdate } from "../../interfaces/entities/updates/update";
import { ISetWebhookPayload } from "../../interfaces/payloads/updates/set-webhook-payload";
import { IWebhookInfo } from "../../interfaces/entities/updates/webhook-info";
export declare class Updates extends BaseService implements IUpdates {
    getUpdates(payload: IGetUpdatesPayload): Promise<TelegramResponse<IUpdate[]>>;
    setWebook(payload: ISetWebhookPayload): Promise<TelegramResponse<boolean>>;
    deleteWebhook(): Promise<TelegramResponse<boolean>>;
    getWebhookInfo(): Promise<TelegramResponse<IWebhookInfo>>;
}
