import React, { useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import Leave from './Leave'
import Message from './Message'
import TypingInfo from './TypingInfo'
import useSocket from '../../common/Socket/useSocket'
import type { Message as MsgType, State } from '../../types/State'

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
      <div className="overflow-y-auto h-v-70 flex flex-col bubble p-2">
        <Leave onClick={() => socket?.close()} />
        {messages.map((x: MsgType) => <Message key={`${x.user}-${x.timestamp}`} {...x} />)}
        <div ref={bottomRef} />
      </div>
      <InputForm
        onChange={() => socket?.setIsTyping()}
        onSubmit={handeSendMessage}
        submit="Send"
        className="flex-col sm:flex-row mt-3"
        id="new-msg-form"
      />
      <TypingInfo />
    </section>
  )
}

export default MessageBoard
