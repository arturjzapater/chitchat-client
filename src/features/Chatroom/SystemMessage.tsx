import React from 'react'

interface SystemMessageProps {
  user: string,
  text: string,
  timestamp: number
}

const SystemMessage: React.FC<SystemMessageProps> = ({ user, text, timestamp }) => (
  <article className="italic text-sm">
    <span>{new Date(timestamp).toUTCString()}</span>
    <span className="font-semibold">&nbsp;{user}&nbsp;</span>
    <span>{text}</span>
  </article>
)

export default SystemMessage
