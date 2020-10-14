import type { Message, UserItem } from './State'

interface LoginPayload {
  nickname: string,
  token: string
}

interface Action {
  type: string,
  payload?: string | Message | UserItem[] | LoginPayload
}

interface MessageAction extends Action {
  payload: Message
}

export type { Action, LoginPayload, MessageAction }
