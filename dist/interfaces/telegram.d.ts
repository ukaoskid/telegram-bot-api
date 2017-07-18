import { IMessages } from "./services/messages";
import { IInfo } from "./services/info";
import { IUpdates } from "./services/updates";
export interface ITelegram {
    messages: IMessages;
    info: IInfo;
    updates: IUpdates;
}
