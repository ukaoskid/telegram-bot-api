import { Telegram } from "./models/telegram/telegram";
import { ISendMessagePayload } from "./models/interfaces/payloads/requests/send-message-payload";
import { IForwardMessagePayload } from "./models/interfaces/payloads/requests/forward-message";
import { ISendPhotoPayload } from "./models/interfaces/payloads/requests/send-photo-payload";

let telegram: Telegram = new Telegram("372720809:AAHtX0vmO77v2xeCef9xp9hY021SDhPq3Gc");
let photo: ISendMessagePayload = {
  chat_id: 74594377,
  text: "testing a text message"
}

telegram.messages.sendMessage(photo).then((userCazzo) => {
  console.log("USER", userCazzo);
}).catch((error) => {
  console.error("VAFF", JSON.stringify(error));
});