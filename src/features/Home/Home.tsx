import React from 'react'
import type { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { State } from '../../types/State'
import Login from '../Login/Login'

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const nickname = useSelector((state: State) => state.nickname)

  if (nickname !== '') history.push('/chatroom')

  return (
    <Login />
  )
}

export default Home
