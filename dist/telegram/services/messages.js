"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
const base_service_1 = require("./base-service");
class Messages extends base_service_1.BaseService {
    sendMessage(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendMessage, this.token);
    }
    forwardMessage(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.forwardMessage, this.token);
    }
    sendPhoto(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendPhoto, this.token);
    }
    sendAudio(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendAudio, this.token);
    }
    sendDocument(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendDocument, this.token);
    }
    sendSticker(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendSticker, this.token);
    }
    sendVideo(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendVideo, this.token);
    }
    sendVoice(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendVoice, this.token);
    }
    sendVideoNote(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendVideoNote, this.token);
    }
    sendLocation(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendLocation, this.token);
    }
    sendVenue(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendVenue, this.token);
    }
    sendContact(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendContact, this.token);
    }
    sendChatAction(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.sendChatAction, this.token);
    }
}
exports.Messages = Messages;
