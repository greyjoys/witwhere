import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

const mapStateToProps = store => ({
<<<<<<< HEAD
  gameStage: store.main.gameStage,
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
  playerList: store.main.playerList,
  signUpError: store.main.signUpError,
  loginError: store.main.loginError,
=======
  // playerName: store.auth.playerName,
  // playerPass: store.auth.playerPass
>>>>>>> 4ddd6822fb6deedca01cd249d8ac64530762620a
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
    this.state = {
      isLoggedIn: false,
      userClickedButton: null
    }
    this.loginClicked = this.loginClicked.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
  }

  loginClicked() {
    this.setState({ userClickedButton: 'login' })
  }
  
  signUpClicked() {
    this.setState({ userClickedButton: 'signup' })
  }

  render() {

    if (this.state.userClickedButton === 'login') {
      return <Redirect to='/auth/login' />
    }
    if (this.state.userClickedButton === 'signup') {
      return <Redirect to='/auth/signup' />
    }
    
    return (
<<<<<<< HEAD
      <div className="auth-container">
        <h1> Inside auth container</h1>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <Route path={'/login'} render={() => <Login {...this.props} />} />
        <Route path={'/signup'} render={() => <Signup {...this.props} />} />
      </div>
=======
      <Router>
        <div className="auth-container">
          <h1>Inside auth container</h1>
          <button onClick={ this.loginClicked }>Login</button>
          <button onClick={ this.signUpClicked }>Sign Up</button>
        </div>
      </Router>
>>>>>>> 4ddd6822fb6deedca01cd249d8ac64530762620a
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);