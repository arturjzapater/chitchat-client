import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../features/Home/Home'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chatroom" />
    </Switch>
  </Router>
)

export default App
