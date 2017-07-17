"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = require("./models/telegram/telegram");
let telegram = new telegram_1.Telegram("372720809:AAHtX0vmO77v2xeCef9xp9hY021SDhPq3Gc");
let photo = {
    chat_id: 74594377,
    text: "testing a text message"
};
telegram.messages.sendMessage(photo).then((userCazzo) => {
    console.log("USER", userCazzo);
}).catch((error) => {
    console.error("VAFF", JSON.stringify(error));
});
telegram.info.getMe().then((u) => {
    console.log("UU", u);
});
