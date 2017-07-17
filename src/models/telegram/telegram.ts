import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";

export class Telegram implements ITelegram {

  private token: string;
  public messages: Messages;
  public info: Info;

  constructor(token: string) {
    this.token = token;
    this.messages = new Messages(token);
    this.info = new Info(token);
  }
}