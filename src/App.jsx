import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import Children

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Lobby from './components/Lobby.jsx';
import MainContainer from './containers/MainContainer.jsx';

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
      <Router>
        <React.Fragment>
          <h1>**** WITWHERE 64 V1.00 BASIC V2 ****</h1>
          <Route path={'/login'} component={Login} />
          <Route path={'/signup'} component={Signup} />
          <Route path={'/lobby'} component={Lobby} />
          <Route path={'/main'} component={MainContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
