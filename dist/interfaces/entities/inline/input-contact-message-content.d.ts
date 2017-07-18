import { IInputMessageContent } from "./input-message-content";
/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
export interface IInputContactMessageContent extends IInputMessageContent {
    /**
     * Contact's phone number.
     */
    phone_number: string;
    /**
     * Contact's first name.
     */
    first_name: string;
    /**
     * Contact's last name.
     */
    last_name?: string;
}
