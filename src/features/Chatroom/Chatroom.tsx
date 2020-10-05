import React from 'react'
import MessageBoard from './MessageBoard'
import UserList from '../UserList/UserList'

const Chatroom: React.FC = () => (
  <section className="flex flex-col md:grid md:grid-cols-chat m-4">
    <MessageBoard />
    <UserList />
  </section>
)

export default Chatroom
