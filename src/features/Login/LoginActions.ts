import type { Action } from '../../types/Action'

export const addNickname = (nickname: string): Action => ({
  type: 'LOGIN',
  payload: {
    nickname
  }
})
