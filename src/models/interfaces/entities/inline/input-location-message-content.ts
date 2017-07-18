import { IInputMessageContent } from "./input-message-content";

/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
export interface IInputLocationMessageContent extends IInputMessageContent {

  /**
   * Float	Latitude of the location in degrees.
   */
  latitude: number,

  /**
   * Float	Longitude of the location in degrees.
   */
  longitude: number
}