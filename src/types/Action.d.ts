import type { Message, UserItem } from './State'

interface Action {
  type: string,
  payload: string | Message | UserItem[]
}

interface MessageAction extends Action {
  payload: Message
}

export type { Action, MessageAction }
