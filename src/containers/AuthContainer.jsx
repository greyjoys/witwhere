import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';

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

  // submitReady: e => {
  //   dispatch(actions.submitReady(e));
  // },
  addPlayer: (playerName, playerPass) => {
    dispatch(actions.addPlayer(playerName, playerPass));
  }
});

// Component Body

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth-container">
        <h1> Inside auth container</h1>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <Route path={'/login'} render={() => <Login {...this.props} />} />
        <Route path={'/signup'} component={Signup} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
