import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'
import openSocket from 'socket.io-client';


class App extends Component {
  constructor(props) {
    super(props);
    socket = openSocket('http://localhost:8000');
  }

  ComponentDidMount() {
    
  }

  render() {
    return(
      <div className="app">
        <MainContainer />
      </div>
    )
  }
}

export default App;