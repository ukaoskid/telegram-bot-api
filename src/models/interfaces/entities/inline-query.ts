import { IUser } from "./user";
import { ILocation } from "./location";

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could
 * return some default or trending results.
 */
export interface IInlineQuery {

  /**
   * Unique identifier for this query.
   */
  id: string,

  /**
   * Sender.
   */
  from: IUser,

  /**
   * Sender location, only for bots that request user location.
   */
  location?: ILocation,

  /**
   * Text of the query (up to 512 characters).
   */
  query: string,

  /**
   * Offset of the results to be returned, can be controlled by the bot.
   */
  offset: string
}