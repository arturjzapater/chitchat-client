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
    <Router>
      <Switch>
        <main className="bg-gray-200 flex-grow">
          <Route exact path="/" component={Home} />
          <Route path="/chatroom" component={Chatroom} />
        </main>
      </Switch>
    </Router>
  </>
)

export default App
