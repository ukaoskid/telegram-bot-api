import { IBaseSendPayload } from "./base-send-payload";

/**
 * Send Contact API Payload
 */
export interface ISendContactPayload extends IBaseSendPayload {

  /**
   * Contact's phone number.
   */
  phone_number: string,

  /**
   * Contact's first name.
   */
  first_name: string,

  /**
   * Contact's last name.
   */
  last_name?: string
}