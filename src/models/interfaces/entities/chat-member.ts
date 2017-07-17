import { IUser } from "./user";

export interface IChatMember {

  /**
   * Information about the user.
   */
  user: IUser,

  /**
   * The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
   */
  status: string,

  /**
   * Restictred and kicked only. Date when restrictions will be lifted for this user, unix time.
   */
  until_date?: number,

  /**
   * Administrators only. True, if the bot is allowed to edit administrator privileges of that user.
   */
  can_be_edited?: boolean,

  /**
   * Administrators only. True, if the administrator can change the chat title, photo and other settings.
   */
  can_change_info?: boolean,

  /**
   *  Administrators only. True, if the administrator can post in the channel, channels only.
   */
  can_post_messages?: boolean,

  /**
   * Administrators only. True, if the administrator can edit messages of other users, channels only.
   */
  can_edit_messages?: boolean,

  /**
   * Administrators only. True, if the administrator can delete messages of other users.
   */
  can_delete_messages?: boolean,

  /**
   * Administrators only. True, if the administrator can invite new users to the chat.
   */
  can_invite_users?: boolean,

  /**
   * Administrators only. True, if the administrator can restrict, ban or unban chat members.
   */
  can_restrict_members?: boolean,

  /**
   * Administrators only. True, if the administrator can pin messages, supergroups only.
   */
  can_pin_messages?: boolean,

  /**
   * Administrators only. True, if the administrator can add new administrators with a subset of
   * his own privileges or demote administrators that he has promoted, directly or indirectly
   * (promoted by administrators that were appointed by the user).
   */
  can_promote_members?: boolean,

  /**
   * Restricted only. True, if the user can send text messages, contacts, locations and venues.
   */
  can_send_messages?: boolean,

  /**
   * Restricted only. True, if the user can send audios, documents, photos, videos,
   * video notes and voice notes, implies can_send_messages.
   */
  can_send_media_messages?: boolean,

  /**
   * Restricted only. True, if the user can send animations, games, stickers and use inline bots,
   * implies can_send_media_messages.
   */
  can_send_other_messages?: boolean,

  /**
   * Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages.
   */
  can_add_web_page_previews?: boolean
}