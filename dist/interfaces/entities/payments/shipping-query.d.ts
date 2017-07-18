import { IUser } from "../user";
import { IShippingAddress } from "./shipping-address";
/**
 * This object contains information about an incoming shipping query.
 */
export interface IShippingQuery {
    /**
     * Unique query identifier.
     */
    id: string;
    /**
     * User who sent the query.
     */
    from: IUser;
    /**
     * Bot specified invoice payload.
     */
    invoice_payload: string;
    /**
     * User specified shipping address.
     */
    shipping_address: IShippingAddress;
}
