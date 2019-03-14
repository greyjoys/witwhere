import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import Children

import * as actions from '../actions/actions';
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';

// Redux Methods

const mapStateToProps = store => ({
  playerName: store.auth.playerName,
  playerPass: store.auth.playerPass
});

const mapDispatchToProps = dispatch => ({
  updatePlayerName: e => {
    dispatch(actions.updatePlayerName(e));
  },
  updatePlayerPass: e => {
    dispatch(actions.updatePlayerPass(e));
  },
  addPlayer: (playerName, playerPass) => {
    dispatch(actions.addPlayer(playerName, playerPass));
  },
  login: (playerName, playerPass) => {
    dispatch(actions.login(playerName, playerPass));
  }
});

// Component Body

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  };
  
  render(props) {

    return (
      <Router>
        <div className="auth-container">
          <h1>Inside Auth container</h1>
          <Link to='/auth/login'>Login</Link>
          <Link to='/auth/signup'>Sign Up</Link>
          <Route
            path={'/auth/login'}
            render={ props => <Login { ...this.props } /> }
          />
          <Route
            path={'/auth/signup'}
            render={ props => <Signup { ...this.props } /> }
          />
        </div>
      </Router>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);