import { IUser } from "../../user";
import { IChat } from "../../chat";
import { IMessageEntity } from "../../message-entity";

export interface IMessageResponse {

    /**
     * Unique message identifier inside this chat
     */
    message_id: number;

    /**
     * Sender, can be empty for messages sent to channels
     */
    from?: IUser,

    /**
     * Date the message was sent in Unix time
     */
    date: number,

    /**
     * Conversation the message belongs to.
     */
    chat: IChat,

    /**
     * For forwarded messages, sender of the original message
     */
    forward_from?: IUser,

    /**
     * For messages forwarded from a channel, information about the original channel.
     */
    forward_from_chat?: IChat,

    /**
     * For forwarded channel posts, identifier of the original message in the channel.
     */
    forward_from_message_id?: number,

    /**
     * For forwarded messages, date the original message was sent in Unix time.
     */
    forward_date?: number,

    /**
     * For replies, the original message. Note that the Message object in this field will not contain further
     * reply_to_message fields even if it itself is a reply.
     */
    reply_to_message?: IMessageResponse,

    /**
     * Date the message was last edited in Unix time.
     */
    edit_date?: number,

    /**
     * For text messages, the actual UTF-8 text of the message, 0-4096 characters.
     */
    text?: string,

    /**
     * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text.
     */
    entities?: IMessageEntity[],

    /**
     * Message is an audio file, information about the file.
     */
    audio?: IAudioResponse,

    /**
     * Message is a general file, information about the file.
     */
    document?: IDocumentResponse,

    /**
     * Message is a game, information about the game.
     */
    game?: IGameReponse,

    /**
     * Message is a photo, available sizes of the photo.
     */
    photo?: IPhotoSizeResponse[],

    /**
     * Message is a sticker, information about the sticker.
     */
    sticker?: IStickerResponse,

    /**
     * Message is a video, information about the video.
     */
    video?: IVideoResponse,

    /**
     * Message is a voice message, information about the file.
     */
    voice?: IVoiceResponse,

    /**
     * Message is a video note, information about the video message.
     */
    video_note?: IVideoNoteReponse,

    /**
     * New members that were added to the group or supergroup and information
     * about them (the bot itself may be one of these members).
     */
    new_chat_members?: IUser[],

    /**
     * Caption for the document, photo or video, 0-200 characters.
     */
    caption?: string,

    /**
     * Message is a shared contact, information about the contact.
     */
    contact?: IContactResponse,

    /**
     * Message is a shared location, information about the location.
     */
    location?: ILocationResponse,

    /**
     * Message is a venue, information about the venue.
     */
    venue?: IVenueResponse,

    /**
     * A new member was added to the group, information about them (this member may be the bot itself).
     */
    new_chat_member?: IUser,

    /**
     * A member was removed from the group, information about them (this member may be the bot itself).
     */
    left_chat_member?: IUser,

    /**
     * A chat title was changed to this value.
     */
    new_chat_title?: string,

    /**
     * A chat photo was change to this value.
     */
    new_chat_photo?: IPhotoSizeResponse[],

    /**
     * Service message: the chat photo was deleted.
     */
    delete_chat_photo?: boolean,

    /**
     * Service message: the group has been created.
     */
    group_chat_created?: boolean,

    /**
     * Service message: the supergroup has been created. This field can‘t be received in a message coming
     * through updates, because bot can’t be a member of a supergroup when it is created.
     * It can only be found in reply_to_message if someone replies to a very first message
     * in a directly created supergroup.
     */
    supergroup_chat_created?: boolean,

    /**
     * Service message: the channel has been created. This field can‘t be received in a message coming
     * through updates, because bot can’t be a member of a channel when it is created.
     * It can only be found in reply_to_message if someone replies to a very first message in a channel.
     */
    channel_chat_created?: boolean,

    /**
     * The group has been migrated to a supergroup with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it.
     * But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe
     * for storing this identifier.
     */
    migrate_to_chat_id?: number,

    /**
     * The supergroup has been migrated from a group with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it.
     * But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe
     * for storing this identifier.
     */
    migrate_from_chat_id?: number,

    /**
     * Specified message was pinned. Note that the Message object in this field will not contain
     * further reply_to_message fields even if it is itself a reply.
     */
    pinned_message?: IMessageResponse,

    /**
     * Message is an invoice for a payment, information about the invoice.
     */
    invoice?: IInvoiceResponse,

    /**
     * Message is a service message about a successful payment, information about the payment.
     */
    successful_payment?: ISuccessfulPayment
}