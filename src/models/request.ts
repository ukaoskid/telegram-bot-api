import * as rp from "request-promise-native";
import { TelegramProvider } from "./telegram/telegram-provider";

export class HTTPRequest {

  public static request(payload: any, uri: string, token: string): any {

    const query = TelegramProvider.baseUri + TelegramProvider.bot + token + uri;
    let options = {
      method: TelegramProvider.method,
      uri: query,
      formData: payload,
      json: true
    };


    return rp(options).promise()
      .catch((error) => {
        throw error.error;
      });
    ;
  }
}
