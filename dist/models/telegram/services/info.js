"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class Info extends base_service_1.BaseService {
    getMe() {
        return request_1.HTTPRequest.request(null, telegram_provider_1.TelegramProvider.services.getMe, this.token);
    }
    getUserProfilePhotos(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getUserProfilePhotos, this.token);
    }
    getFile(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getFile, this.token);
    }
    kickChatMember(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.kickChatMember, this.token);
    }
    unbanChatMember(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.unbanChatMember, this.token);
    }
    restrictChatMember(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.restrictChatMember, this.token);
    }
    promoteChatMember(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.promoteChatMember, this.token);
    }
    exportChatInviteLink(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.exportChatInviteLink, this.token);
    }
    setChatPhoto(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.setChatPhoto, this.token);
    }
    deleteChatPhoto(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.deleteChatPhoto, this.token);
    }
    setChatTitle(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.setChatTitle, this.token);
    }
    setChatDescription(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.setChatDescription, this.token);
    }
    pinChatMessage(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.pinChatMessage, this.token);
    }
    unpinChatMessage(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.unpinChatMessage, this.token);
    }
    leaveChat(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.leaveChat, this.token);
    }
    getChat(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getChat, this.token);
    }
    getChatAdministrators(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getChatAdministrators, this.token);
    }
    getChatMembersCount(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getChatMembersCount, this.token);
    }
    getChatMember(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.getChatMember, this.token);
    }
    answerCallbackQuery(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.answerCallbackQuery, this.token);
    }
}
exports.Info = Info;
