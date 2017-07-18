import { IUser } from "../user";
import { IOrderInfo } from "./order-info";
/**
 * This object contains information about an incoming pre-checkout query.
 */
export interface IPreCheckoutQuery {
    /**
     * Unique query identifier.
     */
    id: string;
    /**
     * User who sent the query.
     */
    from: IUser;
    /**
     * Three-letter ISO 4217 currency code.
     */
    currency: string;
    /**
     * Total price in the smallest units of the currency (integer, not float/double). For example,
     * for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of
     * digits past the decimal point for each currency (2 for the majority of currencies).
     */
    total_amount: number;
    /**
     * Bot specified invoice payload.
     */
    invoice_payload: string;
    /**
     * Identifier of the shipping option chosen by the user.
     */
    shipping_option_id?: string;
    /**
     * Order info provided by the user.
     */
    order_info?: IOrderInfo;
}
