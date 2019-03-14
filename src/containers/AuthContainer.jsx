import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';

const mapStateToProps = store => ({
  gameStage: store.main.gameStage,
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
  playerList: store.main.playerList,
  signUpError: store.main.signUpError,
  loginError: store.main.loginError,
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
  },
  login: (playerName, playerPass) => {
    dispatch(actions.login(playerName, playerPass));
  }
});

// Component Body

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Router>
        <div className="auth-container">
          <h1>Are you ready to do the thing?</h1>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Route 
            path={'/login'} 
            render={props => <Login {...props} /> } 
          />
          <Route path={'/signup'} component={ Signup } />
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);