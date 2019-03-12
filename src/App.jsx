import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'
import openSocket from 'socket.io-client';


class App extends Component {
  constructor(props) {
    super(props);
  }

  ComponentDidMount() {
    
  }

  render() {
    return(
      <div>
        <MainContainer />
      </div>
    )
  }
}

export default App;