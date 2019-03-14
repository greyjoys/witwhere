import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'

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

  
  render(props) {
    console.log(this.props)
    return (
      <Router>
        <div className="auth-container">
          <h1>Inside auth container</h1>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          
          <Route path={"/login"}
          render ={ (props) =>{
            return(
            <Login {...this.props}/>
            )
          }}
    
          />
          <Route path={"/signup"}
          render ={ (props) => {
            return(
            <Signup {...this.props}/>
            )
          }}
          />
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);