import React from 'react'
import MessageHeader from './MessageHeader'
import type { MessageProps } from './MessageProps'

const UserMessage: React.FC<MessageProps> = ({ user, text, timestamp }) => (
  <article>
    <MessageHeader
      text="said"
      timestamp={timestamp}
      user={user}
    />
    <p>{text}</p>
  </article>
)

export default UserMessage
