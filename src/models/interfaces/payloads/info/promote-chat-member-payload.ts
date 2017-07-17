/**
 * Promote Chat Member API Payload.
 */
export interface IPromoteChatMemberPayload {

  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chat_id: number | string,

  /**
   * Unique identifier of the target user.
   */
  user_id: number,

  /**
   * Pass True, if the administrator can change chat title, photo and other settings.
   */
  can_change_info?: boolean,

  /**
   * Pass True, if the administrator can create channel posts, channels only.
   */
  can_post_messages?: boolean,

  /**
   * Pass True, if the administrator can edit messages of other users, channels only.
   */
  can_edit_messages?: boolean,

  /**
   * Pass True, if the administrator can delete messages of other users.
   */
  can_delete_messages?: boolean,

  /**
   * Pass True, if the administrator can invite new users to the chat.
   */
  can_invite_users?: boolean,

  /**
   * Pass True, if the administrator can restrict, ban or unban chat members.
   */
  can_restrict_members?: boolean,

  /**
   * Pass True, if the administrator can pin messages, supergroups only.
   */
  can_pin_messages?: boolean,

  /**
   * Pass True, if the administrator can add new administrators with a subset of his own privileges or
   * demote administrators that he has promoted, directly or
   * indirectly (promoted by administrators that were appointed by him).
   */
  can_promote_members?: boolean
}