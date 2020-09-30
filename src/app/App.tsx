import React from 'react'
import { useSelector } from 'react-redux'
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from '../features/Home/Home'
import type { State } from '../types/State'

const App: React.FC = () => {
  const nickname = useSelector((state: State) => state.nickname)

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chatroom" />
    </Switch>
  )
}

export default App
