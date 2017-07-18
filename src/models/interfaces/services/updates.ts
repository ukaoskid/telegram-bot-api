import { TelegramResponse } from "../payloads/response/generic-response";
import { IGetUpdatesPayload } from "../payloads/updates/get-updates-payload";
import { IUpdate } from "../entities/updates/update";
import { ISetWebhookPayload } from "../payloads/updates/set-webhook-payload";
import { IWebhookInfo } from "../entities/updates/webhook-info";

export interface IUpdates {

  /**
   * Use this method to receive incoming updates using long polling. An Array of Update objects is returned.
   * @param {IGetUpdatesPayload} payload
   * @returns {Promise<TelegramResponse<IUpdate[]>>}
   */
  getUpdates(payload: IGetUpdatesPayload): Promise<TelegramResponse<IUpdate[]>>;

  /**
   * Use this method to specify a url and receive incoming updates via an outgoing webhook.
   * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url,
   * containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable
   * amount of attempts.
   * Returns true. If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a
   * secret path in the URL, e.g. https://www.example.com/<token>. Since nobody else knows your bot‘s token,
   * you can be pretty sure it’s us.
   * @param {ISetWebhookPayload} payload
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  setWebook(payload: ISetWebhookPayload): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
   * Requires no parameters.
   * @returns {Promise<TelegramResponse<boolean>>}
   */
  deleteWebhook(): Promise<TelegramResponse<boolean>>;

  /**
   * Use this method to get current webhook status.
   * Requires no parameters.
   * On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an
   * object with the url field empty.
   * @returns {Promise<TelegramResponse<IWebhookInfo>>}
   */
  getWebhookInfo(): Promise<TelegramResponse<IWebhookInfo>>;
}