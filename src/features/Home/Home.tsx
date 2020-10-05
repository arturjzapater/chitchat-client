import React from 'react'
import Login from '../Login/Login'
import InfoMessage from '../InfoMessage/InfoMessage'
import SectionHeader from '../SectionHeader/SectionHeader'

const Home: React.FC = () => (
  <>
    <SectionHeader
      title="Welcome to ChitChat!"
      text="A chat application for people to connect and have a good time chatting together."
    />
    <Login />
    <InfoMessage />
  </>
)

export default Home
