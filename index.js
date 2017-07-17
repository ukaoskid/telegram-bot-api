(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramProvider = {
    baseUri: "https://api.telegram.org",
    bot: "/bot",
    method: "POST",
    services: {
        getMe: "/getMe",
        sendMessage: "/sendMessage",
        forwardMessage: "/forwardMessage",
        sendPhoto: "/sendPhoto",
        sendAudio: "/sendAudio",
        sendDocument: "/sendDocument",
        sendSticker: "/sendSticker",
        sendVideo: "/sendVideo",
        sendVoice: "/sendVoice",
        sendVideoNote: "/sendVideoNote",
        sendLocation: "/sendLocation",
        sendVenue: "/sendVenue",
        sendContact: "/sendContact",
        sendChatAction: "/sendChatAction"
    }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rp = __webpack_require__(6);
const qs = __webpack_require__(7);
const telegram_provider_1 = __webpack_require__(0);
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    get token() {
        return this._token;
    }
    set token(token) {
        this._token = token;
    }
    constructor(token) {
        this._token = token;
    }
}
exports.BaseService = BaseService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = __webpack_require__(4);
let telegram = new telegram_1.Telegram("372720809:AAHtX0vmO77v2xeCef9xp9hY021SDhPq3Gc");
let photo = {
    chat_id: 74594377,
    text: "testing a text message",
    disable_notification: true
};
telegram.messages.sendMessage(photo).then((userCazzo) => {
    console.log("USER", userCazzo);
}).catch((error) => {
    console.error("VAFF", JSON.stringify(error));
});
telegram.info.getMe().then((u) => {
    console.log("UU", u);
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __webpack_require__(5);
const info_1 = __webpack_require__(8);
class Telegram {
    constructor(token) {
        this.token = token;
        this.messages = new messages_1.Messages(token);
        this.info = new info_1.Info(token);
    }
}
exports.Telegram = Telegram;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __webpack_require__(1);
const telegram_provider_1 = __webpack_require__(0);
const base_service_1 = __webpack_require__(2);
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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = __webpack_require__(2);
const request_1 = __webpack_require__(1);
const telegram_provider_1 = __webpack_require__(0);
class Info extends base_service_1.BaseService {
    getMe() {
        return request_1.HTTPRequest.request(null, telegram_provider_1.TelegramProvider.services.getMe, this.token);
    }
}
exports.Info = Info;


/***/ })
/******/ ])));