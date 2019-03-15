import * as types from '../const/actionTypes';

const initialState = {
  playerName: '',
  playerPass: '',
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  let newPlayer = {
    id: '',
    ready: false,
    answer: ''
  };

  switch (action.type) {
    case types.UPDATE_PLAYER_NAME: {
      let newPlayerName = action.payload;

      return {
        ...state,
        playerName: newPlayerName
      };
    }

    case types.AUTHENTICATE: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case types.UPDATE_PLAYER_PASS: {
      let newPlayerPass = action.payload;

      return {
        ...state,
        playerPass: newPlayerPass
      };
    }

    case types.ADD_PLAYER: {
      return {
        ...state
      };
    }

    case types.ADD_PLAYER_FAILURE: {
      let newPlayerName = action.payload;
      let newPlayerPass = action.payload;
      return {
        ...state,
        playerPass: newPlayerPass,
        playerName: newPlayerName
      };
    }

    case types.LOGIN_USER: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
