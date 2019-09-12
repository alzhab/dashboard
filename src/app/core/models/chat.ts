import { Message } from "./message";

export interface Chat {
  id: number;
  userId: number;
  companionId: number;
  messages: Message[];
}
