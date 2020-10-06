import React from 'react'
import SystemMessage from './SystemMessage'
import UserMessage from './UserMessage'
import type { Message as MsgType } from '../../types/State'

const Message: React.FC<MsgType> = ({ user, text, timestamp, type }) =>
  type === 'system'
    ? <SystemMessage user={user} text={text} timestamp={timestamp} />
    : <UserMessage user={user} text={text} timestamp={timestamp} />

export default Message
