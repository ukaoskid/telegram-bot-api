"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramProvider = {
    baseUri: "https://api.telegram.org",
    bot: "/bot",
    method: "POST",
    services: {
        send: {},
        info: {},
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
        sendChatAction: "/sendChatAction",
        getUserProfilePhotos: "/getUserProfilePhotos",
        getFile: "/getFile",
        kickChatMember: "kickChatMember/",
        unbanChatMember: "/unbanChatMember",
        restrictChatMember: "/restrictChatMember",
        promoteChatMember: "/promoteChatMember",
        exportChatInviteLink: "/exportChatInviteLink",
        setChatPhoto: "/setChatPhoto",
        deleteChatPhoto: "/deleteChatPhoto",
        setChatTitle: "/setChatTitle",
        setChatDescription: "/setChatDescription",
        pinChatMessage: "/pinChatMessage",
        unpinChatMessage: "/unpinChatMessage",
        leaveChat: "/leaveChat",
        getChat: "/getChat",
        getChatAdministrators: "/getChatAdministrators",
        getChatMembersCount: "/getChatMembersCount",
        getChatMember: "/getChatMember",
        answerCallbackQuery: "/answerCallbackQuery",
        updates: {
            getUpdates: "/getUpdates",
            setWebook: "/setWebook",
            deleteWebhook: "/deleteWebhook",
            getWebhookInfo: "/getWebhookInfo"
        },
        payments: {
            sendInvoice: "/sendInvoice",
            answerShippingQuery: "/answerShippingQuery",
            answerPreCheckoutQuery: "/answerPreCheckoutQuery"
        },
        games: {
            sendGame: "/sendGame",
            setGameScore: "/setGameScore",
            getGameHighScores: "/getGameHighScores"
        }
    }
};
