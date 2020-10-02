import type { Action } from '../../types/Action'

export const login = (nickname: string): Action => ({
  type: 'LOGIN',
  payload: {
    nickname
  }
})

export const loginError = (message: string): Action => ({
  type: 'LOGOUT',
  payload: {
    message
  }
})
