import React from 'react'

interface UserMessageProps {
  user: string,
  text: string,
  timestamp: number
}

const UserMessage: React.FC<UserMessageProps> = ({ user, text, timestamp }) => (
  <article>
    <div className="italic text-sm">
      <span>{new Date(timestamp).toUTCString()}</span>
      <span className="font-semibold">&nbsp;{user}&nbsp;</span>
      <span>said</span>
    </div>
    <p>{text}</p>
  </article>
)

export default UserMessage
