import React from 'react'
import { useSelector } from 'react-redux'
import makeTypingMessage from '../../helpers/makeTypingMessage'
import type { State } from '../../types/State'

const TypingInfo: React.FC = () => {
  const userList = useSelector((state: State) => state.userList)
  const nickname = useSelector((state: State) => state.nickname)

  return (
    <section className="h-6 mx-6">
      <p className="italic text-sm">{makeTypingMessage(userList, nickname)}</p>
    </section>
  )
}

export default TypingInfo
