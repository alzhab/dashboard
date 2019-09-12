import { Chat } from "./chat";

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  login: string;
  password: string;
  avatar: string;
  chats: Chat[];
}
