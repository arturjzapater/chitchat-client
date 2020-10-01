import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Chatroom from '../features/Chatroom/Chatroom'
import Home from '../features/Home/Home'
// import type { State } from '../types/State'

const App: React.FC = () => {
  const infoMessage = useSelector(state => state.infoMessage)
  console.log(infoMessage)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chatroom" component={Chatroom} />
      </Switch>
    </Router>
  )
}

export default App
