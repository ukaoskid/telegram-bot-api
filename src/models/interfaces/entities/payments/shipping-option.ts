import { ILabeledPrice } from "./labeled-price";

/**
 * This object represents one shipping option.
 */
export interface IShippingOption {

  /**
   * Shipping option identifier.
   */
  id: string,

  /**
   * Option title.
   */
  title: string,

  /**
   * List of price portions.
   */
  prices: ILabeledPrice[]
}