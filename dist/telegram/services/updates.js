"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class Updates extends base_service_1.BaseService {
    getUpdates(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.updates.getUpdates, this.token);
    }
    setWebook(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.updates.setWebook, this.token);
    }
    deleteWebhook() {
        return request_1.HTTPRequest.request(null, telegram_provider_1.TelegramProvider.services.updates.deleteWebhook, this.token);
    }
    getWebhookInfo() {
        return request_1.HTTPRequest.request(null, telegram_provider_1.TelegramProvider.services.updates.getWebhookInfo, this.token);
    }
}
exports.Updates = Updates;
