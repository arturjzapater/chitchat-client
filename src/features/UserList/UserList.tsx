import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types/State'
import UserItem from './UserItem'

const UserList: React.FC = () => {
  const userList = useSelector((state: State) => state.userList)

  return (
    <section className="mx-8 md:w-1/6 md:overflow-y-auto md:h-v-80 bubble">
      <h2 className="font-semibold mb-2">
        Participants
      </h2>
      <ul className="flex flex-wrap md:flex-col md:flex-no-wrap list-none">
        {userList.map(x => <UserItem key={x.id} {...x} />)}
      </ul>
    </section>
  )
}

export default UserList
