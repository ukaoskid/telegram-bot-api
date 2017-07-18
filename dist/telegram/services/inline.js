"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class Inline extends base_service_1.BaseService {
    answerInlineQuery(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.inline.answerInlineQuery, this.token);
    }
}
exports.Inline = Inline;
