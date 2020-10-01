import type { Action } from './types/Action'
import type { Message, State } from './types/State'

type Payload = Record<string, string>

const initState: State = {
  infoMessage: '',
  messages: [],
  nickname: '',
  userList: []
}

const handlers: Record<string, CallableFunction> = {
  LOGIN: (state: State, { nickname }: Payload): State => ({
    ...state,
    nickname
  }),
  LOGOUT: (state: State, { message }: Payload): State => ({
    ...state,
    infoMessage: message,
    messages: [],
    nickname: '',
    userList: []
  }),
  RECEIVE_MESSAGE: (state: State, payload: Message): State => ({
    ...state,
    messages: state.messages.concat(payload)
  }),
  default: (state: State): State => state
}

export default (state: State = initState, action: Action): State => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}
