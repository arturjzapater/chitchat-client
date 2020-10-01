import type { Message } from './State'

interface Action {
  type: string,
  payload: Record<string, unknown> | Message
}

interface MessageAction extends Action {
  payload: Message
}

export type { Action, MessageAction }
