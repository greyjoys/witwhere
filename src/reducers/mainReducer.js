import * as types from '../const/actionTypes';

const initialState = {

  gid: -1,
  username: 'defaultplayer',
  users: {},
  player1response: {},
  player2response: {},
  player1username: 'Player1',
  player2username: 'Player2',
  prompt: '',
  overallGameState: 'start',
  maxPlayers: 3,
  maxPoints: 5,
  roundState: 1,
  webSocket: undefined
};

const mainReducer = (state = initialState, action) => {
  let newPlayer = {
    id: '',
    ready: false,
    answer: ''
  };

  switch (action.type) {
    case types.ADD_SOCKET_TO_STORE: {
      const ws = action.payload;
      return {
        ...state,
        webSocket: ws
      };
    }

    case types.ADD_GAME_ID: {
      const newGid = action.payload;
      return {
        ...state,
        gid: newGid
      };
    }
    case types.SET_NEW_GAME_STATE: {
      let newGameState = action.payload;
      console.log('newGameState:', newGameState);
      return {
        ...state,
        ...newGameState
      };
    }

    case types.UPDATE_FOOTER_INPUT: {
      let newFooterInput = action.payload;

      return {
        ...state,
        footerInput: newFooterInput
      };
    }

    case types.UPDATE_PLAYER_NAME: {
      let newPlayerName = action.payload;

      return {
        ...state,
        playerName: newPlayerName
      };
    }

    case types.UPDATE_PLAYER_PASS: {
      let newPlayerPass = action.payload;

      return {
        ...state,
        playerPass: newPlayerPass
      };
    }

    case types.TEST_ACTION: {
      const newTextValue = action.payload;

      return {
        ...state,
        newTextValue
      };
    }

    case types.ADD_PLAYER: {
      return {
        ...state
      };
    }
    // case types.SIGN_UP: {
    //   return {
    //     ...state
    //   }
    // }

    case types.LOGIN_FAILURE: {
      const loginError = action.payload;
      console.log('login error', action.payload)
      return {
        ...state,
        loginError,
      };
    }

    case types.SIGNUP_FAILURE: {
      const signUpError = action.payload;
      console.log('signup error', action.payload)
      return {
        ...state,
        signUpError,
      };
    }

    // case types.START_GAME: {
    //   return { ...state, ...action.payload };
    // }
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

export default mainReducer;
