import * as types from '../const/actionTypes'

export const testAction = () => ({
  type: types.TEST_ACTION,
  payload: 123,
});

export const updateFooterInput = (e) => ({
  type: types.UPDATE_FOOTER_INPUT,
  payload: e.target.value
});

export const updatePlayerName = (e) => ({
  type: types.UPDATE_PLAYER_NAME,
  payload: e.target.value
});

export const updatePlayerPass = (e) => ({
  type: types.UPDATE_PLAYER_PASS,
  payload: e.target.value
});

export const advanceStage = () => ({
  type: types.ADVANCE_STAGE
});

export const testButton = () => (dispatch) => {
  console.log('test')
  fetch('http://localhost:8080/api/signin', {
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
  const playerData = {
    username: pName,
    password: pPass
  };
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

