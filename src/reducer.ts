import type { Action } from './types/Action'
import type { Message, State, UserItem } from './types/State'

const initState: State = {
  infoMessage: '',
  messages: [],
  nickname: '',
  userList: []
}

const handlers: Record<string, CallableFunction> = {
  LOGIN: (state: State, payload: string): State => ({
    ...state,
    nickname: payload
  }),
  LOGOUT: (state: State, payload: string): State => ({
    ...state,
    infoMessage: payload,
    messages: [],
    nickname: '',
    userList: []
  }),
  UPDATE_USERLIST: (state: State, payload: UserItem[]): State => ({
    ...state,
    userList: payload
  }),
  RECEIVE_MESSAGE: (state: State, payload: Message): State => ({
    ...state,
    messages: state.messages.concat(payload)
  }),
  default: (state: State): State => state
}

export default (state: State = initState, action?: Action): State => {
  if (!action) return handlers.default(state)

  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}
