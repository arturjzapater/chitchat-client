import React from 'react'
import { formatTime } from '../../common/helpers/time'
import type { MessageProps } from './MessageProps'

const MessageHeader: React.FC<MessageProps> = ({ text, timestamp, user }) => (
  <div className="italic text-sm">
    <span className="text-xs">{formatTime(timestamp)}</span>
    <span className="font-semibold">&nbsp;{user}&nbsp;</span>
    <span>{text}</span>
  </div>
)

export default MessageHeader
