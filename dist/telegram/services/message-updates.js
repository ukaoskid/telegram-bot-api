"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class MessageUpdates extends base_service_1.BaseService {
    editMessageText(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.messageUpdates.editMessageText, this.token);
    }
    editMessageCaption(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.messageUpdates.editMessageCaption, this.token);
    }
    editMessageReplyMarkup(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.messageUpdates.editMessageReplyMarkup, this.token);
    }
    deleteMessage(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.messageUpdates.deleteMessage, this.token);
    }
}
exports.MessageUpdates = MessageUpdates;
