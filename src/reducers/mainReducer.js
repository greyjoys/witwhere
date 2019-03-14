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
  overallGamesState: 0,
  maxPlayers: 5,
  maxPoints: 5,
  roundState: 1,
  //
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
    case types.ADVANCE_STAGE: {
      let newStageValue = state.gameStage + 1;
      if (newStageValue === 6) newStageValue = 1;

      return {
        ...state,
        gameStage: newStageValue
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

    case types.ADD_PLAYER_FAILURE: {
      let newPlayerName = action.payload;
      let newPlayerPass = action.payload;
      return {
        ...state,
        playerPass: newPlayerPass,
        playerName: newPlayerName
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
