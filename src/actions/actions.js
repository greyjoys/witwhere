import * as types from '../const/actionTypes';

export const testAction = () => ({
  type: types.TEST_ACTION,
  payload: 123
});

export const updateFooterInput = e => ({
  type: types.UPDATE_FOOTER_INPUT,
  payload: e.target.value
});

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

export const advanceStage = () => ({
  type: types.ADVANCE_STAGE
});

export const startGame = state => ({
  type: types.START_GAME,
  payload: state
});

export const testSocket = webSocketValue => ({
  type: types.TEST_SOCKET,
  payload: webSocketValue
});

export const testButton = () => dispatch => {
  console.log('test');
  fetch('http://localhost:8000/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify({ username: 'user', password: 'pass' })
  })
    .then(newStateResponse => {
      return JSON.parse(newStateResponse);
    })
    .then(newState => {
      dispatch({
        type: types.TEST_BUTTON,
        payload: newState
      });
    });
};

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
