import * as types from '../const/actionTypes';

export const updatePlayerName = e => ({
  type: types.UPDATE_PLAYER_NAME,
  payload: e.target.value
});

export const updatePlayerPass = e => ({
  type: types.UPDATE_PLAYER_PASS,
  payload: e.target.value
});

export const addPlayerFailure = () => ({
  type: types.ADD_PLAYER_FAILURE,
  payload: ''
});

export const startGame = state => ({
  type: types.START_GAME,
  payload: state
});

export function addPlayer(username, password) {
  console.log('inside add player', username, password);
  const stringified = JSON.stringify({
    username,
    password
  });
  console.log('jsonified', stringified);
  return dispatch => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(
        newState => dispatch(startGame(newState)),
        err => dispatch(addPlayerFailure())
      );
  };
}

export const submitReady = () => (dispatch, getStFate) => {
  const username = getState().main.playerName;
  const submitReadyData = [username];
};

/**
 * NEWLY ADDED
 *
 */

export const addWebSocketToStore = ws => ({
  type: types.ADD_SOCKET_TO_STORE,
  payload: ws
});

export const addGid = addGameId => ({
  type: types.ADD_GAME_ID,
  payload: addGameId
});
