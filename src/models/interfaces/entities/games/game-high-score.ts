import { IUser } from "../user";

/**
 * This object represents one row of the high scores table for a game.
 */
export interface IGameHighScore {

  /**
   * Position in high score table for the game
   */
  position: number,

  /**
   * User.
   */
  user: IUser,

  /**
   * Score.
   */
  score: number
}