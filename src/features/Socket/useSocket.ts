import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  logout,
  receiveMessage
} from './SocketActions'
import type { Message, State } from '../../types/State'

const useSocket = (onLogout: CallableFunction): SocketIOClient.Socket | undefined => {
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

    setSocket(socket)

    // phoenixChannel.join()
    //   .receive('ok', res => {
    //     setChannel(phoenixChannel)
    //     console.log('Joined successfully!', res)
    //   })
    //   .receive('error', res => console.log('Oopsies!', res))

    // phoenixChannel.on('new_message', ({ message, user }) => {
    //   dispatch(receiveMessage(message, user))
    // })

    // phoenixChannel.on('user_joined', ({ user }) => {
    //   dispatch(systemMessage(`${user} joined the conversation`))
    // })

    // phoenixChannel.on('user_left', ({ user }) => {
    //   dispatch(systemMessage(`${user} left the conversation`))
    // })

    // phoenixChannel.on('presence_state', state => {
    //   dispatch(presenceState(state))
    // })

    // phoenixChannel.on('presence_diff', diff => {
    //   dispatch(presenceDiff(diff))
    // })
    return () => {
      socket.disconnect()
    }
  }, [])

  return socket

  // return {
  //   channel,
  //   sendMessage: message => channel.push('new_message', { message }),
  //   setTyping: typing => channel.push('user_typing', { typing })
  // }
}

export default useSocket
