"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class Payments extends base_service_1.BaseService {
    sendInvoice(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.payments.sendInvoice, this.token);
    }
    answerShippingQuery(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.payments.answerShippingQuery, this.token);
    }
    answerPreCheckoutQuery(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.payments.answerPreCheckoutQuery, this.token);
    }
}
exports.Payments = Payments;
