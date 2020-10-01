import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  logout,
  receiveMessage,
  updateUserList
} from './SocketActions'
import type { Message, State, UserItem } from '../../types/State'

interface SocketInterface {
  socket: SocketIOClient.Socket,
  sendMessage: CallableFunction
}

const useSocket = (onLogout: CallableFunction): SocketInterface | null => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>()
  const nickname = useSelector((state: State) => state.nickname)
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io('/socket')

    socket.emit('join', nickname)

    socket.on('nickname taken', () => {
      dispatch(logout('Failed to connect, nickname already taken.'))
      onLogout()
    })

    socket.on('new message', (payload: Message) => {
      dispatch(receiveMessage(payload))
    })

    socket.on('update userlist', (payload: UserItem[]) => {
      dispatch(updateUserList(payload))
    })

    setSocket(socket)

    return () => {
      socket.disconnect()
    }
  }, [])

  if (!socket) return null

  return {
    socket,
    sendMessage: (message: string):void => {
      socket.emit('new message', message)
    }
  }
}

export default useSocket
