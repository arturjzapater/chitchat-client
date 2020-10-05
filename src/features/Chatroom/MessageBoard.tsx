import React, { useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import useSocket from '../Socket/useSocket'
import type { Message as MsgType, State } from '../../types/State'
import { useHistory } from 'react-router-dom'
import Message from './Message'
import InputForm from '../InputForm/InputForm'
import TypingInfo from './TypingInfo'
import Leave from './Leave'

const scrollToElementRef = ({ current }: React.MutableRefObject<HTMLDivElement | null>) => {
  current?.scrollIntoView({ behavior: 'smooth' })
}

const MessageBoard: React.FC = () => {
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
    <section className="flex-grow flex flex-col justify-between mx-2">
      <div className="overflow-y-auto h-v-72 flex flex-col bubble p-2">
        <Leave fn={() => socket?.close()} />
        {messages.map((x: MsgType) => <Message key={`${x.user}-${x.timestamp}`} {...x} />)}
        <div ref={bottomRef} />
      </div>
      <TypingInfo />
      <InputForm
        onBlur={() => socket?.setIsTyping(false)}
        onFocus={() => socket?.setIsTyping(true)}
        onSubmit={handeSendMessage}
        submit="Send"
        className="flex-col sm:flex-row"
      />
    </section>
  )
}

export default MessageBoard
