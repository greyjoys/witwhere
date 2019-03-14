import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import io from 'socket.io-client';

// Import Children

import Menu from './components/Menu.jsx';
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

import * as actions from './actions/actions';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  testSocket: state => {
    dispatch(actions.testSocket(state));
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('initiating socket connection');
    console.log(window.location.href);
    const socket = io('http://localhost:8000');
    console.log(typeof socket);
    console.log(`${window.location.href}`);
    // socket.on('message', data => console.log(data));
    socket.on('message', data => {
      this.props.testSocket(data);
      console.log(data);
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>**** WITWHERE 64 V1.00 BASIC V2 ****</h1>
          <Route path={'/'} component={AuthContainer} />
          <Route path={'/'} component={Menu} />
          <Route path={'/'} component={MainContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
