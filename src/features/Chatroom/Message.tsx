import React from 'react'
import { Message as MsgType } from '../../types/State'
import SystemMessage from './SystemMessage'
import UserMessage from './UserMessage'

const Message: React.FC<MsgType> = ({ user, text, timestamp, type }) =>
  type === 'system'
    ? <SystemMessage user={user} text={text} timestamp={timestamp} />
    : <UserMessage user={user} text={text} timestamp={timestamp} />

export default Message
