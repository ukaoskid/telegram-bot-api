import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
import { Updates } from "./services/updates";
import { Payments } from "./services/payments";
import { Games } from "./services/games";
export declare class Telegram implements ITelegram {
    private token;
    messages: Messages;
    info: Info;
    updates: Updates;
    payments: Payments;
    games: Games;
    constructor(token: string);
}
