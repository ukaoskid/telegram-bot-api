import { ITelegram } from "../interfaces/telegram";
import { Messages } from "./messages";

export class Telegram implements ITelegram {

    private token: string;
    public messages: Messages;

    constructor(token: string) {
        this.token = token;
        this.messages = new Messages(token);
    }
}