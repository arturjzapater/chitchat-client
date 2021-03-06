import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Chatroom from '../features/Chatroom/Chatroom'
import Header from './Header'
import Home from '../features/Home/Home'

const App: React.FC = () => (
  <>
    <Header />
    <main className="flex-grow mt-2">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chatroom" component={Chatroom} />
        </Switch>
      </Router>
    </main>
  </>
)

export default App
