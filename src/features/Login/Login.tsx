import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import { connect } from './LoginActions'
import type { State } from '../../types/State'

const Login: React.FC = () => {
  const nickname = useSelector((state: State) => state.nickname)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (nickname: string): void => {
    dispatch(connect(nickname))
  }

  useEffect(() => {
    if (nickname !== '') {
      history.push('/chatroom')
    }
  }, [nickname])

  return (
    <section className="m-2 my-4 sm:w-4/5 md:w-3/5 lg:1/2 sm:mx-auto">
      <InputForm
        onSubmit={handleLogin}
        submit="Connect"
        required={true}
        className="flex-col"
      />
    </section>
  )
}

export default Login
