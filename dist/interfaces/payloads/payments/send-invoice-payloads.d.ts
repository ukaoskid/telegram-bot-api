import { ILabeledPrice } from "../../entities/payments/labeled-price";
import { IInlineKeyboardMarkup } from "../../entities/inline-keyboard-markup";
/**
 * Send Invoice API Payload.
 */
export interface ISendInvoicePayload {
    /**
     * Unique identifier for the target private chat.
     */
    chat_id: number;
    /**
     * Product name, 1-32 characters.
     */
    title: string;
    /**
     * Product description, 1-255 characters.
     */
    description: string;
    /**
     * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user,
     * use for your internal processes.
     */
    payload: string;
    /**
     * Payments provider token, obtained via Botfather.
     */
    provider_token: string;
    /**
     * Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter.
     */
    start_parameter: string;
    /**
     * Three-letter ISO 4217 currency code, see more on currencies.
     */
    currency: string;
    /**
     * Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost,
     * delivery tax, bonus, etc.).
     */
    prices: ILabeledPrice[];
    /**
     * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
     * People like it better when they see what they are paying for.
     */
    photo_url?: string;
    /**
     * Photo size.
     */
    photo_size?: number;
    /**
     * Photo width.
     */
    photo_width?: number;
    /**
     * Photo height.
     */
    photo_height?: number;
    /**
     * Pass True, if you require the user's full name to complete the order.
     */
    need_name?: boolean;
    /**
     * Pass True, if you require the user's phone number to complete the order.
     */
    need_phone_number?: boolean;
    /**
     * Pass True, if you require the user's email to complete the order.
     */
    need_email?: boolean;
    /**
     * Pass True, if you require the user's shipping address to complete the order.
     */
    need_shipping_address?: boolean;
    /**
     * Pass True, if the final price depends on the shipping method.
     */
    is_flexible?: boolean;
    /**
     * Sends the message silently. Users will receive a notification with no sound.
     */
    disable_notification?: boolean;
    /**
     * If the message is a reply, ID of the original message.
     */
    reply_to_message_id?: number;
    /**
     * A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown.
     * If not empty, the first button must be a Pay button.
     */
    reply_markup?: IInlineKeyboardMarkup;
}
