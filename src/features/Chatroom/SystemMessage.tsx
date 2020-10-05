import React from 'react'
import MessageHeader from './MessageHeader'
import type { MessageProps } from './MessageProps'

const SystemMessage: React.FC<MessageProps> = ({ user, text, timestamp }) => (
  <article>
    <MessageHeader
      text={text}
      timestamp={timestamp}
      user={user}
    />
  </article>
)

export default SystemMessage
