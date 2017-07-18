import { IShippingOption } from "../../entities/payments/shipping-option";
/**
 * Answer Shipping Query API Payload.
 */
export interface IAnswerShippingQueryPayload {
    /**
     * Unique identifier for the query to be answered.
     */
    shipping_query_id: string;
    /**
     * Specify True if delivery to the specified address is possible and False if there are any problems
     * (for example, if delivery to the specified address is not possible).
     */
    ok: boolean;
    /**
     * Required if ok is True. A JSON-serialized array of available shipping options.
     */
    shipping_options?: IShippingOption[];
    /**
     * Required if ok is False. Error message in human readable form that explains why it is impossible
     * to complete the order (e.g. "Sorry, delivery to your desired address is unavailable').
     * Telegram will display this message to the user.
     */
    error_message?: string;
}
