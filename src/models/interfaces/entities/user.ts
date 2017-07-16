export interface IUser {

  /**
   * Unique identifier for this user or bot.
   */
  id: number,

  /**
   * User‘s or bot’s first name.
   */
  first_name: string,

  /**
   * User‘s or bot’s last name.
   */
  last_name?: string,

  /**
   * User‘s or bot’s username.
   */
  username?: string,

  /**
   * IETF language tag of the user's language.
   */
  language_code?: string
}