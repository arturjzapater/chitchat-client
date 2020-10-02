import React from 'react'
import type { UserItem as UserItemProps } from '../../types/State'

const UserItem: React.FC<UserItemProps> = ({ nickname, isTyping }) => (
  <li className="mx-4 my-1 break-words leading-tight">
    <span>{nickname}</span>
    <span>{isTyping ? ' (...)' : ''}</span>
  </li>
)

export default UserItem
