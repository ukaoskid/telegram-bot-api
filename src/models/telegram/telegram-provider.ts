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
    sendDocument: "/sendDocument"
  }
};
