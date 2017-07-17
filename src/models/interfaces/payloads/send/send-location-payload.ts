import { IBaseSendPayload } from "./base-send-payload";

/**
 * Send Location API Payload
 */
export interface ISendLocationPayload extends IBaseSendPayload {

  /**
   * Latitude of location.
   */
  latitude: number,

  /**
   * Longitude of location.
   */
  longitude: number
}