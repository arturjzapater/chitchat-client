import type { Dispatch } from 'redux'
import { server } from '../../../config/app'
import type { Action } from '../../types/Action'

const makeOpts = (nickname: string) => ({
  method: 'POST',
  body: JSON.stringify({ nickname }),
  headers: {
    'Content-Type': 'application/json'
  }
})

export const login = (nickname: string, token: string): Action => ({
  type: 'LOGIN',
  payload: {
    nickname,
    token
  }
})

export const loginError = (message: string): Action => ({
  type: 'LOGOUT',
  payload: message
})

export const connect = (nickname: string) =>
  (dispatch: Dispatch): void => {
    // fetch(`${server}api/users/${nickname}/exists`)
    //   .then(res => res.json())
    //   .then(({ exists }) => {
    //     if (exists) dispatch(loginError('Failed to connect. Nickname already taken.'))
    //     else dispatch(login(nickname))
    //   })
    //   .catch(() => dispatch(loginError('Connection error.')))
    fetch(`${server}api/users`, makeOpts(nickname))
      .then(res => res.json())
      .then(({ ok, token }) => {
        if (!ok) dispatch(loginError('Failed to connect. Nickname already taken.'))
        else dispatch(login(nickname, token))
      })
      .catch(() => dispatch(loginError('Connection error.')))
  }
