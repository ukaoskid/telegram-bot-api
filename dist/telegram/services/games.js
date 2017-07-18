"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base-service");
const request_1 = require("../../request");
const telegram_provider_1 = require("../telegram-provider");
class Games extends base_service_1.BaseService {
    sendGame(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.games.sendGame, this.token);
    }
    setGameScore(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.games.setGameScore, this.token);
    }
    getGameHighScores(payload) {
        return request_1.HTTPRequest.request(payload, telegram_provider_1.TelegramProvider.services.games.getGameHighScores, this.token);
    }
}
exports.Games = Games;
