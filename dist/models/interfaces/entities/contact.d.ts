export interface IContact {
    /**
     * Contact's phone number.
     */
    phone_number: string;
    /**
     * Contact's first name.
     */
    first_name: string;
    /**
     * Contact's last name.
     */
    last_name?: string;
    /**
     * Contact's user identifier in Telegram.
     */
    user_id?: number;
}
