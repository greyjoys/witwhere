import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Waiting from '../components/game-components/Waiting.jsx'
import Voting from '../components/game-components/Voting.jsx'
import Results from '../components/game-components/Results.jsx'
import Final from '../components/game-components/Final.jsx'

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
  advanceStage: () => {
    dispatch(actions.advanceStage())
  },
  updatePlayerName: (e) => {
    dispatch(actions.updatePlayerName(e))
  },
  updatePlayerPass: (e) => {
    dispatch(actions.updatePlayerPass(e))
  },
  updateFooterInput: (e) => {
    dispatch(actions.updateFooterInput(e))
  },
  submitReady: (e) => {
    dispatch(actions.submitReady(e))
  },
  addPlayer: () => {
    dispatch(actions.addPlayer())
  }
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
  };

  render(props) {

    return (
      <main className="main-container">
        <Waiting />
        <Voting />
        <Results />
        <Final />
      </main>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);