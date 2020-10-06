import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import UserItem from './UserItem'
import type { State } from '../../types/State'

const UserList: React.FC = () => {
  const userList = useSelector((state: State) => state.userList)
  const [display, setDisplay] = useState(false)
  const [btnText, setBtnText] = useState('Show')
  const [visibility, setVisibility] = useState('hidden')

  const changeDisplay = (bool: boolean): void => {
    setDisplay(bool)
    setBtnText(bool ? 'Hide' : 'Show')
    setVisibility(bool ? 'flex' : 'hidden')
  }

  return (
    <section
      id="user-list"
      className="mx-2 my-4 p-2 overflow-y-auto order-first bubble md:my-0 md:h-v-83 md:order-last"
    >
      <header className="flex justify-between md:justify-center">
        <h2 className="font-semibold text-center">
        Participants
        </h2>
        <button
          className="button bg-gray-500 text-gray-100 md:hidden hover:bg-gray-400"
          onClick={() => changeDisplay(!display)}
        >
          {btnText}
        </button>
      </header>
      <ul className={`${visibility} flex-wrap mt-2 md:flex md:flex-col md:flex-no-wrap list-none`}>
        {userList.map(x => <UserItem key={x.id} {...x} />)}
      </ul>
    </section>
  )
}

export default UserList
