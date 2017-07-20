import { IBaseEditPayload } from "./base-edit-payload";
/**
 * Edit Message Caption API Payload.
 */
export interface IEditMessageCaptionPayload extends IBaseEditPayload {
    /**
     * New caption of the message.
     */
    caption?: string;
}
