export const TelegramProvider = {

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
