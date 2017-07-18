import { IInputMessageContent } from "./input-message-content";

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
export interface IInputVenueMessageContent extends IInputMessageContent {

  /**
   * Float	Latitude of the venue in degrees.
   */
  latitude: number,

  /**
   * Float	Longitude of the venue in degrees.
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
   * Foursquare identifier of the venue, if known.
   */
  foursquare_id?: string
}