import React from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import { addNickname } from './LoginActions'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <section>
      <p>Please, input a nickname to connect</p>
      <InputForm
        onSubmit={(nickname: string) => dispatch(addNickname(nickname))}
        submit="Connect"
        required={true}
      />
    </section>
  )
}

export default Login
