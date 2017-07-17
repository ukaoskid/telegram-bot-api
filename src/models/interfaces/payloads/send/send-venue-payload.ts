import { IBaseSendPayload } from "./base-send-payload";

/**
 * Send Venue API Payload
 */
export interface ISendVenuePayload extends IBaseSendPayload {

  /**
   * Latitude of the venue.
   */
  latitude: number,

  /**
   * Longitude of the venue.
   */
  longitude: number,

  /**
   * Name of the venue.
   */
  title: string,

  /**
   * Address of the venue.
   */
  address: string,

  /**
   * Foursquare identifier of the venue.
   */
  foursquare_id?: string
}