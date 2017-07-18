import { IMessages } from "./services/messages";
import { IInfo } from "./services/info";
import { IUpdates } from "./services/updates";
import { IPayments } from "./services/payments";
import { IGames } from "./services/games";

export interface ITelegram {

  messages: IMessages;
  info: IInfo;
  updates: IUpdates;
  payments: IPayments;
  games: IGames;
}