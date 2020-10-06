import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, receiveMessage, updateUserList } from './SocketActions'
import { url } from '../../../config/server'
import type { Message, State, UserItem } from '../../types/State'

interface SocketInterface {
  socket: SocketIOClient.Socket,
  sendMessage: CallableFunction,
  setIsTyping: CallableFunction,
  close: CallableFunction
}

const useSocket = (onLogout: CallableFunction): SocketInterface | null => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>()
  const nickname = useSelector((state: State) => state.nickname)
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io(`${url}socket`)

    socket.emit('join', nickname)

    socket.on('new message', (payload: Message) => {
      dispatch(receiveMessage(payload))
    })

    socket.on('update userlist', (payload: UserItem[]) => {
      dispatch(updateUserList(payload))
    })

    socket.on('inactive', () => {
      socket.emit('inactive')
      dispatch(logout('Disconnected due to inactivity.'))
      onLogout()
    })

    socket.on('disconnect', () => {
      socket.emit('leave')
      dispatch(logout('Disconnected from server'))
      onLogout()
    })

    setSocket(socket)

    return () => {
      socket.close()
    }
  }, [])

  if (!socket) return null

  return {
    socket,
    sendMessage: (message: string): void => {
      socket.emit('new message', message)
    },
    setIsTyping: (): void => {
      socket.emit('user typing')
    },
    close: (): void => {
      socket.emit('leave')
      socket.close()
      dispatch(logout('Successfully logged out.'))
      onLogout()
    }
  }
}

export default useSocket
