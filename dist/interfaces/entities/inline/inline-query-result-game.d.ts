import { IInlineQueryResult } from "./inline-query-result";
import { IInlineKeyboardMarkup } from "./inline-keyboard-markup";
/**
 * Represents a Game.
 */
export interface IInlineQueryResultGame extends IInlineQueryResult {
    /**
     * Type of the result, must be game.
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
    /**
     * Short name of the game.
     */
    game_short_name: string;
    /**
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
}
