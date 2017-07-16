import { Telegram } from "./models/telegram/telegram";
import { ISendMessagePayload } from "./models/interfaces/payloads/requests/send-message-payload";
import { IForwardMessagePayload } from "./models/interfaces/payloads/requests/forward-message";
import { ISendPhotoPayload } from "./models/interfaces/payloads/requests/send-photo-payload";

let telegram: Telegram = new Telegram("372720809:AAHtX0vmO77v2xeCef9xp9hY021SDhPq3Gc");
let photo: ISendPhotoPayload = {
    chat_id: 14622030,
    photo: "https://git-for-windows.github.io/img/git_logo.png",
    caption: "GIT Logo"
}

telegram.messages.sendPhoto(photo).then((userCazzo) => {
    console.log("USER", userCazzo);
}).catch((error) => {
    console.error("VAFF", JSON.stringify(error));
});