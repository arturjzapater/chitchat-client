import type { Action } from '../../types/Action'
import type { Dispatch } from 'redux'

export const login = (nickname: string): Action => ({
  type: 'LOGIN',
  payload: nickname
})

export const loginError = (message: string): Action => ({
  type: 'LOGOUT',
  payload: message
})

export const connect = (nickname: string) =>
  (dispatch: Dispatch): void => {
    fetch(`/api/users/${nickname}/exists`)
      .then(res => res.json())
      .then(({ exists }) => {
        if (exists) dispatch(loginError('Failed to connect. Nickname already taken.'))
        else dispatch(login(nickname))
      })
      .catch(() => dispatch(loginError('Connection error.')))
  }
