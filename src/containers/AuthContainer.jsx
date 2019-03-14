import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';

const mapStateToProps = store => ({
  // playerName: store.auth.playerName,
  // playerPass: store.auth.playerPass
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
    this.state = {
      isLoggedIn: false,
      userClickedButton: null
    };
    this.loginClicked = this.loginClicked.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
  }

  loginClicked() {
    console.log('hello');
    this.setState({ userClickedButton: 'login' });
  }

  signUpClicked() {
    console.log('world');
    this.setState({ userClickedButton: 'signup' });
  }

  render() {
    // if (this.state.)
    if (this.state.userClickedButton === 'login') {
      return <Redirect to="/auth/login" />;
    }
    if (this.state.userClickedButton === 'signup') {
      return <Redirect to="/auth/signup" />;
    }
    return (
      <Router>
        <React.Fragment>
          <div className="auth-container">
            <h1>Inside auth container</h1>
            <button onClick={this.loginClicked}>Login</button>
            <button onClick={this.signUpClicked}>Sign Up</button>
          </div>
          <Link to="/auth/login">Login</Link>
          <Route path={'/auth/login'} component={Login} />
          <Route path={'/auth/signup'} component={Signup} />
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
