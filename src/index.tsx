import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import SocketProvider from './features/Socket/Socket'
import App from './app/App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    {/* <SocketProvider> */}
    <App />
    {/* </SocketProvider> */}
  </Provider>,
  document.getElementById('app')
)
