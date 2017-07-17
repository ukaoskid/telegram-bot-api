import * as rp from "request-promise-native";
import * as qs from "querystring";
import { TelegramProvider } from "./telegram/telegram-provider";

export class HTTPRequest {

  public static request(payload: any, uri: string, token: string): any {

    const query = TelegramProvider.baseUri + TelegramProvider.bot + token + uri;
    let options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: TelegramProvider.method,
      uri: query,
      body: qs.stringify(payload),
      json: true
    };

    return rp(options).promise()
      .catch((error) => {
        throw error.error;
      });
    ;
  }
}
