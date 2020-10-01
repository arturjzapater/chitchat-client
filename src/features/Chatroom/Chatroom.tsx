import React, { useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import useSocket from '../Socket/useSocket'
import type { Message as MsgType, State } from '../../types/State'
import { useHistory } from 'react-router-dom'
import Message from './Message'
import InputForm from '../InputForm/InputForm'

const scrollToElementRef = ({ current }: React.MutableRefObject<HTMLDivElement | null>) => {
  current?.scrollIntoView({ behavior: 'smooth' })
}

const Chatroom: React.FC = () => {
  const messages = useSelector((state: State) => state.messages)
  const bottomRef = useRef<HTMLDivElement>(null)
  const history = useHistory()

  const socket = useSocket(() => history.push('/'))

  useLayoutEffect(() => {
    scrollToElementRef(bottomRef)
  }, [messages])

  const handeSendMessage = (message: string) => {
    socket?.sendMessage(message)
  }

  return (
    <section>
      <div>
        {messages.map((x: MsgType) => <Message key={`${x.user}-${x.timestamp}`} {...x} />)}
        <div ref={bottomRef} />
      </div>
      <InputForm
        onSubmit={handeSendMessage}
        submit="Send"
      />
    </section>
  )
}

export default Chatroom
