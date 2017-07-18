import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
import { Updates } from "./services/updates";
import { Payments } from "./services/payments";
import { Games } from "./services/games";

export class Telegram implements ITelegram {

  private token: string;
  public messages: Messages;
  public info: Info;
  public updates: Updates;
  public payments: Payments;
  public games: Games;

  constructor(token: string) {

    this.token = token;
    this.messages = new Messages(token);
    this.info = new Info(token);
    this.updates = new Updates(token);
    this.payments = new Payments(token);
    this.games = new Games(token);
  }
}