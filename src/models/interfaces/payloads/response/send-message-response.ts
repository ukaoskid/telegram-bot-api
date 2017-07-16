export interface ISendMessageResponse {

    ok: boolean,
    result: {
        message_id: number,
        from: {
            id: number,
            first_name: string,
            username: string
        },
        chat: {
            id: number,
            first_name: string,
            last_name: string,
            username: string,
            type: string
        },
        date: number,
        text: string
    }
}