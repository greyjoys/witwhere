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
  maxPlayers: store.main.maxPlayers,
  username: store.main.username,
  //
  ws: store.main.webSocket
});

const mapDispatchToProps = dispatch => ({
  addSocket: ws => {
    dispatch(actions.addWebSocketToStore(ws));
  },
  addGid: gid => {
    dispatch(actions.addGid(gid));
  },
  startGame: gameState => {
    dispatch(actions.startGame(gameState));
  }
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gidTextBox: ''
    };
    this.createNewGame = this.createNewGame.bind(this);
    this.joinGame = this.joinGame.bind(this);
    this.handleGidTextBoxChange = this.handleGidTextBoxChange.bind(this);
  }

  componentWillMount() {
    // console.log('initiating socket connection');
    const socket = io('http://localhost:8000');
    // test heart beat
    socket.on('message', msg => {
      console.log('from message', msg);
    });

    socket.on('newState', newState => {
      console.log(newState);
      this.props.startGame(newState);
    });

    this.props.addSocket(socket);
  }

  handleGidTextBoxChange(e) {
    this.setState({
      gidTextBox: e.target.value
    });
  }

  createNewGame(ws, addGid) {
    ws.emit('CREATE', '');
    ws.on('CREATE_RES', gid => {
      addGid(gid);
    });
  }

  joinGame(ws, gid, username) {
    ws.emit('JOIN', { gid, username });
    ws.on('JOIN_RES', data => {
      console.log(data);
    });
  }

  render() {
    return (
      <Router>
        <main className="main-container">
          {/* <Route path="/" render={() => <Lobby />} /> */}
          <Menu
            handleCreateNewGame={this.createNewGame}
            ws={this.props.ws}
            reduxAddGid={this.props.addGid}
            handleJoinGame={this.joinGame}
            gid={this.props.gid}
            handleGidTextBoxChange={this.handleGidTextBoxChange}
            gidTextBoxValue={this.state.gidTextBox}
            username={this.props.username}
          />
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
