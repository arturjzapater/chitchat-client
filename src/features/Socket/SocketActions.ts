import type { Action, MessageAction } from '../../types/Action'
import type { Message } from '../../types/State'

export const logout = (message: string): Action => ({
  type: 'LOGOUT',
  payload: {
    message
  }
})

export const receiveMessage = (payload: Message): MessageAction => ({
  type: 'RECEIVE_MESSAGE',
  payload
})
