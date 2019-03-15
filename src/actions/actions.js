import * as types from '../const/actionTypes';

export const updatePlayerName = e => ({
  type: types.UPDATE_PLAYER_NAME,
  payload: e.target.value
});

export const authenticatePlayer = () => ({
  type: types.AUTHENTICATE,
  payload: true
});
export const updatePlayerPass = e => ({
  type: types.UPDATE_PLAYER_PASS,
  payload: e.target.value
});

export const signUpFailure = (error, boolean) => ({
  type: types.SIGNUP_FAILURE,
  payload: [error, boolean]
});

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  payload: error
});

export const setNewGameState = state => ({
  type: types.SET_NEW_GAME_STATE,
  payload: JSON.parse(state)
});

export function addPlayer(username, password) {
  console.log('inside add player', username, password);
  const stringified = JSON.stringify({
    username,
    password
  });

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
        newState => {
          dispatch(startGame(newState));
        }
        // err => dispatch(signUpFailure("Username already in use!"))
      )
      .catch(err => dispatch(signUpFailure('Username already in use!', true)));
  };
}

export function login(username, password) {
  console.log('inside LOGIN player', username, password);
  const stringified = JSON.stringify({
    username,
    password
  });
  console.log('jsonified', stringified);
  return dispatch => {
    fetch('/api/login', {
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
        newState => dispatch(authenticatePlayer()),
        err => dispatch(loginFailure('Wrong Password'))
      );
  };
}

export const submitReady = () => (dispatch, getStFate) => {
  const username = getState().main.playerName;
  const submitReadyData = [username];
};

// NEWLY ADDED

export const addWebSocketToStore = ws => ({
  type: types.ADD_SOCKET_TO_STORE,
  payload: ws
});

export const addGid = addGameId => ({
  type: types.ADD_GAME_ID,
  payload: addGameId
});
