import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types/State'
import UserItem from './UserItem'

const UserList: React.FC = () => {
  const userList = useSelector((state: State) => state.userList)

  return (
    <section className="mx-2 my-4 p-2 md:my-0 overflow-y-auto md:h-v-85 bubble">
      <h2 className="font-semibold text-center">
        Participants
      </h2>
      <ul className="flex flex-wrap md:flex-col md:flex-no-wrap list-none">
        {userList.map(x => <UserItem key={x.id} {...x} />)}
      </ul>
    </section>
  )
}

export default UserList
