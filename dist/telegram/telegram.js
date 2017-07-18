"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("./services/messages");
const info_1 = require("./services/info");
const updates_1 = require("./services/updates");
const payments_1 = require("./services/payments");
class Telegram {
    constructor(token) {
        this.token = token;
        this.messages = new messages_1.Messages(token);
        this.info = new info_1.Info(token);
        this.updates = new updates_1.Updates(token);
        this.payments = new payments_1.Payments(token);
    }
}
exports.Telegram = Telegram;
