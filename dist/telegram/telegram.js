"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("./services/messages");
const info_1 = require("./services/info");
class Telegram {
    constructor(token) {
        this.token = token;
        this.messages = new messages_1.Messages(token);
        this.info = new info_1.Info(token);
    }
}
exports.Telegram = Telegram;
