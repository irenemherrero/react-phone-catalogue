import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import ReactDOM from 'react-dom'
import './assets/style.css'
import { App } from './App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
