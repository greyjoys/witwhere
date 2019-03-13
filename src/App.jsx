import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className="app">
        <h1>**** WITWHERE 64 V1.00 BASIC V2 ****</h1>
        <MainContainer />
      </div>
    );
  };
};

export default App;