export interface Message {
  user: string,
  text: string,
  timestamp: number
}

export interface UserItem {
  nickname: string,
  isTyping: boolean,
  joined: number,
}

export interface State {
  messages: Message[],
  nickname: string,
  userList: UserItem[]
}
