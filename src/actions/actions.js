import * as types from '../const/actionTypes'

export const testAction = () => ({
  type: types.TEST_ACTION,
  payload: 123,
});

export const updatePlayerName = (value) => ({
  type: types.UPDATE_PLAYER_NAME,
  payload: value
});

export const updatePlayerPass = (value) => ({
  type: types.UPDATE_PLAYER_PASS,
  payload: value
});

export const testButton = () => (dispatch) => {
  console.log('test')
  fetch('http://localhost:3000/api/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'username':'user', 'password':'pass'})
  })
  .then((newStateResponse) => { return JSON.parse(newStateResponse) })
  .then((newState) => {
    dispatch({
      type: types.TEST_BUTTON,
      payload: newState
    })
  })
};

export const addPlayer = () => (dispatch, getState) => {
  const pName = getState().main.playerName;
  const pPass = getState().main.playerPass;
  const playerData = [pName, pPass];
  // lets send that player to the database!
  fetch('/api/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(playerData)
  })
    .then((newStateResponse) => { return newStateResponse })
    .then((newState) => {
      dispatch({
        type: types.ADD_PLAYER,
        payload: newState
      })
    })
};

