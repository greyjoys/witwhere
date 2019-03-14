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
  roundState: store.main.roundState,
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
  // Username From Auth Store
  username: store.auth.playerName,
  // WebSocket
  ws: store.main.webSocket
});

const mapDispatchToProps = dispatch => ({
  addSocket: ws => {
    dispatch(actions.addWebSocketToStore(ws));
  },
  addGid: gid => {
    dispatch(actions.addGid(gid));
  },
  setNewGameState: gameState => {
    dispatch(actions.setNewGameState(gameState));
  }
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gidTextBox: '',
      responseTextBox: 'this is the response text box'
    };
    this.createNewGame = this.createNewGame.bind(this);
    this.joinGame = this.joinGame.bind(this);
    this.handleGidTextBoxChange = this.handleGidTextBoxChange.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.handleResponseTextChanges = this.handleResponseTextChanges.bind(this);
    this.handleVoteClick = this.handleVoteClick.bind(this);
  }

  componentWillMount() {
    // console.log('initiating socket connection');
    const socket = io('http://localhost:8000');
    // test heart beat
    socket.on('message', msg => {
      console.log('from message', msg);
    });

    socket.on('newState', newState => {
      this.props.setNewGameState(newState);
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
    // ws.on('JOIN_RES', data => {
    //   console.log(data);
    // });
  }

  submitResponse(ws, gid) {
    let playerNumber;
    if (this.props.username === this.props.player1username) {
      playerNumber = 1;
    } else {
      playerNumber = 2;
    }
    ws.emit(
      'ADD_RESPONSE',
      JSON.stringify({
        gid,
        playerNumber,
        response: this.state.responseTextBox
      })
    );
  }

  handleResponseTextChanges(e) {
    this.setState({
      responseTextBox: e.target.value
    });
  }

  handleVoteClick(e) {
    console.log('handle vote click');
    console.log(e.target.name);
    this.props.ws.emit(
      'SUBMIT_VOTE',
      JSON.stringify({
        gid: this.props.gid,
        player: e.target.name
      })
    );
  }

  render() {
    const menuJSX = [];
    const components = [];
    if (this.props.overallGameState === 'start') {
      components.push(
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
      );
    }

    let waitingJSX;
    if (
      this.props.overallGameState === 1 &&
      (this.props.username === this.props.player1username ||
        this.props.username === this.props.player2username)
    ) {
      waitingJSX = (
        <Waiting
          updateResponse={this.handleResponseTextChanges}
          submitResponse={this.submitResponse}
          ws={this.props.ws}
          gid={this.props.gid}
          responseText={this.state.responseTextBox}
        />
      );
    }

    let votingJSX;
    if (
      this.props.overallGameState === 1 &&
      this.props.roundState === 3 &&
      (this.props.username !== this.props.player1username &&
        this.props.username !== this.props.player2username)
    ) {
      console.log('adding voting jsx');
      votingJSX = (
        <Voting
          response1={this.props.player1response.response}
          response2={this.props.player2response.response}
          handleVoteClick={this.handleVoteClick}
          ws={this.props.ws}
          gid={this.props.gid}
        />
      );
    }
    return (
      // <Router>
      <main className="main-container">
        {/* <Route path="/" render={() => <Lobby />} /> */}
        {components}
        {waitingJSX ? waitingJSX : null}
        {/* {menuJSX} */}
        {/* <Waiting /> */}
        {/* {waitingJSX} */}
        {/* <Voting /> */}
        {/* {votingJSX} */}
        {votingJSX ? votingJSX : null}
        <Results />
        <Final />
      </main>
      // </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);