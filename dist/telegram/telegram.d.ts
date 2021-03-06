import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
import { Updates } from "./services/updates";
import { Payments } from "./services/payments";
import { Games } from "./services/games";
import { Inline } from "./services/inline";
import { MessageUpdates } from "./services/message-updates";
export declare class Telegram implements ITelegram {
    private token;
    messages: Messages;
    info: Info;
    updates: Updates;
    payments: Payments;
    games: Games;
    inline: Inline;
    messageUpdates: MessageUpdates;
    constructor(token: string);
}
