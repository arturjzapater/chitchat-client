import React from 'react'
import { useSelector } from 'react-redux'
import useSocket from '../Socket/useSocket'
import { State } from '../../types/State'
import { useHistory } from 'react-router-dom'

const Chatroom: React.FC = () => {
  const nickname = useSelector((state: State) => state.nickname)
  const history = useHistory()

  const socket = useSocket(() => history.push('/'))

  return (
    <div>
      Hi, {nickname}!
    </div>
  )
}

export default Chatroom
