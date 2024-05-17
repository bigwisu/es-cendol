export interface Message {
    id: string;
    sender: string;
    content: string;
    dateTime: Date
}

export enum MESSAGE_TYPE {
    USER = "user",
    AGENT = "agent"
}