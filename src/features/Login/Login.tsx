import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import { addNickname } from './LoginActions'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (nickname: string): void => {
    dispatch(addNickname(nickname))
    history.push('/chatroom')
  }

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
