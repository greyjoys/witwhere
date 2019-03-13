import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('initiating socket connection');
    const socket = io(`${window.location.href}`);
    console.log(`${window.location.href}`);
    socket.on('message', data => console.log(data));
  }

  render() {
    return (
      <div className="app">
        <MainContainer />
      </div>
    );
  }
}

export default App;
