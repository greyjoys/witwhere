import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import { createStore, applyMiddleware } from "redux";


import App from './App.jsx'
import Commodore64 from './styles/fonts/Commodore64.TTF'

require('./styles/main.scss')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);