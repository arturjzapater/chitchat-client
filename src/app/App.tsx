import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Chatroom from '../features/Chatroom/Chatroom'
import Header from './Header'
import Home from '../features/Home/Home'

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <main className="flex-grow mt-2">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chatroom" component={Chatroom} />
        </Switch>
      </Router>
    </main>
  </Provider>
)

export default App
