"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise-native");
const qs = require("querystring");
const telegram_provider_1 = require("./telegram/telegram-provider");
class HTTPRequest {
    static request(payload, uri, token) {
        const query = telegram_provider_1.TelegramProvider.baseUri + telegram_provider_1.TelegramProvider.bot + token + uri;
        let options = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: telegram_provider_1.TelegramProvider.method,
            uri: query,
            body: qs.stringify(payload),
            json: true
        };
        return rp(options).promise()
            .catch((error) => {
            console.error("SM", error.error);
            throw error.error;
        });
        ;
    }
}
exports.HTTPRequest = HTTPRequest;
