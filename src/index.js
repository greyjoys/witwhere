import {render} from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store'
import Commodore64 from './styles/fonts/Commodore64.TTF'
require('./styles/main.scss')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
)
