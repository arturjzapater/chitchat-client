import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import { login, loginError } from './LoginActions'
import type { State } from '../../types/State'

const Login: React.FC = () => {
  const nickname = useSelector((state: State) => state.nickname)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (nickname: string): void => {
    dispatch(login(nickname))
  }

  useEffect(() => {
    if (nickname !== '') {
      fetch(`/api/users/${nickname}/exists`)
        .then(res => res.json())
        .then(({ exists }) => {
          if (exists) dispatch(loginError('Failed to connect. Nickname already taken.'))
          else history.push('/chatroom')
        })
        .catch(() => dispatch(loginError('Connection error.')))
    }
  }, [nickname])

  return (
    <section>
      <p>Please, input a nickname to connect</p>
      <InputForm
        onSubmit={handleLogin}
        submit="Connect"
        required={true}
      />
    </section>
  )
}

export default Login
