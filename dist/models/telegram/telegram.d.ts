import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./services/messages";
import { Info } from "./services/info";
export declare class Telegram implements ITelegram {
    private token;
    messages: Messages;
    info: Info;
    constructor(token: string);
}
