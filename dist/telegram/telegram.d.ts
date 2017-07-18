import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
import { Updates } from "./services/updates";
import { Payments } from "./services/payments";
export declare class Telegram implements ITelegram {
    private token;
    messages: Messages;
    info: Info;
    updates: Updates;
    payments: Payments;
    constructor(token: string);
}
