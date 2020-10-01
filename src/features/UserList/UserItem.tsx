import React from 'react'
import type { UserItem as UserItemProps } from '../../types/State'

const UserItem: React.FC<UserItemProps> = ({ nickname, joined, isTyping }) => (
  <li className="mx-4 my-1 break-words leading-tight">
    <span>{nickname}</span>
    <span>{isTyping ? '(...)' : ''}</span>
    <span className="text-sm italics">(joined {new Date(joined).toUTCString()})</span>
  </li>
)

export default UserItem
