import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
import { Updates } from "./services/updates";
import { Payments } from "./services/payments";
import { Games } from "./services/games";
import { Inline } from "./services/inline";
import { MessageUpdates } from "./services/message-updates";

export class Telegram implements ITelegram {

  private token: string;
  public messages: Messages;
  public info: Info;
  public updates: Updates;
  public payments: Payments;
  public games: Games;
  public inline: Inline;
  public messageUpdates: MessageUpdates;

  constructor(token: string) {

    this.token = token;
    this.messages = new Messages(token);
    this.info = new Info(token);
    this.updates = new Updates(token);
    this.payments = new Payments(token);
    this.games = new Games(token);
    this.inline = new Inline(token);
    this.messageUpdates = new MessageUpdates(token);
  }
}