import { IShippingAddress } from "./shipping-address";
export interface IOrderInfo {
    /**
     * User name.
     */
    name?: string;
    /**
     * User's phone number
     */
    phone_number?: string;
    /**
     * User email
     */
    email?: string;
    /**
     * User shipping address.
     */
    shipping_address?: IShippingAddress;
}
