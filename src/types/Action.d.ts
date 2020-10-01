import type { Message } from './State'

interface Action {
  type: string,
  payload: Record<string, unknown> | Message
}

export type { Action }
