import { IInlineKeyboardMarkup } from "../../entities/inline-keyboard-markup";
import { IReplyKeyboardMarkup } from "../../entities/reply-keyboard-markup";
import { IReplyKeyboardRemove } from "../../entities/reply-keyboard-remove";
import { IForceReply } from "../../entities/force-reply";
export interface IBaseSendPayload {
    /**
     * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
     */
    chat_id: number | string;
    /**
     * Sends the message silently. Users will receive a notification with no sound.
     */
    disable_notification?: boolean;
    /**
     * If the message is a reply, ID of the original message.
     */
    reply_to_message_id?: number;
    /**
     * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,
     * instructions to remove reply keyboard or to force a reply from the user.
     */
    reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
