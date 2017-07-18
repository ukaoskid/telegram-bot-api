export declare const TelegramProvider: {
    baseUri: string;
    bot: string;
    method: string;
    services: {
        send: {};
        info: {};
        getMe: string;
        sendMessage: string;
        forwardMessage: string;
        sendPhoto: string;
        sendAudio: string;
        sendDocument: string;
        sendSticker: string;
        sendVideo: string;
        sendVoice: string;
        sendVideoNote: string;
        sendLocation: string;
        sendVenue: string;
        sendContact: string;
        sendChatAction: string;
        getUserProfilePhotos: string;
        getFile: string;
        kickChatMember: string;
        unbanChatMember: string;
        restrictChatMember: string;
        promoteChatMember: string;
        exportChatInviteLink: string;
        setChatPhoto: string;
        deleteChatPhoto: string;
        setChatTitle: string;
        setChatDescription: string;
        pinChatMessage: string;
        unpinChatMessage: string;
        leaveChat: string;
        getChat: string;
        getChatAdministrators: string;
        getChatMembersCount: string;
        getChatMember: string;
        answerCallbackQuery: string;
        updates: {
            getUpdates: string;
            setWebook: string;
            deleteWebhook: string;
            getWebhookInfo: string;
        };
        payments: {
            sendInvoice: string;
            answerShippingQuery: string;
            answerPreCheckoutQuery: string;
        };
        games: {
            sendGame: string;
            setGameScore: string;
            getGameHighScores: string;
        };
        inline: {
            answerInlineQuery: string;
        };
    };
};
