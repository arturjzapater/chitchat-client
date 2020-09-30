import type { Action } from '../../types/Action'

export const addNickname = (nickname: string): Action => ({
  type: 'ADD_NICKNAME',
  payload: {
    nickname
  }
})
