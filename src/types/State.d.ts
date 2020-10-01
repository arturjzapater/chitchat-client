export interface Message {
  user: string,
  text: string,
  timestamp: number
}

export interface UserItem {
  id: string,
  nickname: string,
  isTyping: boolean,
  joined: number,
}

export interface State {
  infoMessage: string,
  messages: Message[],
  nickname: string,
  userList: UserItem[]
}
