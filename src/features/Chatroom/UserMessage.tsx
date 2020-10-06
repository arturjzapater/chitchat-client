import React from 'react'
import MessageHeader from './MessageHeader'
import type { MessageProps } from './MessageProps'

const UserMessage: React.FC<MessageProps> = ({ user, text, timestamp }) => (
  <article className="message">
    <MessageHeader
      text="said"
      timestamp={timestamp}
      user={user}
    />
    <p className="pl-4">
      {text}
    </p>
  </article>
)

export default UserMessage
