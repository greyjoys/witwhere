import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import io from 'socket.io-client';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Lobby from '../components/Lobby.jsx';
import Waiting from '../components/game-components/Waiting.jsx';
import Voting from '../components/game-components/Voting.jsx';
import Results from '../components/game-components/Results.jsx';
import Final from '../components/game-components/Final.jsx';
import Menu from '../components/Menu.jsx';

const mapStateToProps = store => ({
  gameStage: store.main.gameStage,
  gid: store.main.gid,
  overallGameState: store.main.overallGameState,
  player1username: store.main.player1username,
  player2username: store.main.player2username,
  player1response: store.main.player1response,
  player2response: store.main.player2response,
  prompt: store.main.prompt,
  playerList: store.main.playerList,
  maxPoints: store.main.maxPoints,
  maxPlayers: store.main.maxPlayers
});

const mapDispatchToProps = dispatch => ({
  // addSocket: ws => {
  //   dispatch(actions.addWebSocketToStore(ws));
  // }
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log('initiating socket connection');
    const socket = io('http://localhost:8000');
    // socket.on('message', data => console.log(data));
    socket.on('message', data => {
      this.props.testSocket(data);
      console.log(data);
    });
    console.log(this.props);
    // this.props.addSocket(socket);
  }

  render() {
    return (
      <Router>
        <main className="main-container">
          {/* <Route path="/" render={() => <Lobby />} /> */}
          <Menu />
          <Waiting />
          <Voting />
          <Results />
          <Final />
        </main>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);