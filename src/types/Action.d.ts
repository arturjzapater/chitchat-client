import type { Message, UserItem } from './State'

interface Action {
  type: string,
  payload: Record<string, unknown> | Message | UserItem[]
}

interface MessageAction extends Action {
  payload: Message
}

export type { Action, MessageAction }
