"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise-native");
const telegram_provider_1 = require("./telegram/telegram-provider");
class HTTPRequest {
    static request(payload, uri, token) {
        const query = telegram_provider_1.TelegramProvider.baseUri + telegram_provider_1.TelegramProvider.bot + token + uri;
        let options = {
            method: telegram_provider_1.TelegramProvider.method,
            uri: query,
            formData: payload,
            json: true
        };
        console.log(JSON.stringify(options));
        return rp(options).promise()
            .catch((error) => {
            throw error.error;
        });
        ;
    }
}
exports.HTTPRequest = HTTPRequest;
