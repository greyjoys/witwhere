import * as types from '../const/actionTypes';

const initialState = {
  playerName: '',
  playerPass: '',
  playerList: [{ id: '', ready: false, answer: '' }],
  promptList: [
    `A bad time to shake someone's hand`,
    "Tony, I've got some bad news:"
  ],
  p1Answer: '',
  p2Answer: '',
  gameReady: false,
  timer: '',
  gameStage: 1,
  count: 0,
  p1AnswerVoteCount: 0,
  p2AnswerVoteCount: 0,
  footerInput: '',
  loginError: null,
  signUpError: null
};

const mainReducer = (state = initialState, action) => {
  let newPlayer = {
    id: '',
    ready: false,
    answer: ''
  };

  switch (action.type) {
    case types.ADVANCE_STAGE: {
      let newStageValue = state.gameStage + 1;
      if (newStageValue === 6) newStageValue = 1;

      return {
        ...state,
        gameStage: newStageValue
      };
    }

    case types.TEST_SOCKET: {
      const newCount = (state.count += 1);

      return {
        ...state,
        count: newCount
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

    case types.START_GAME: {
      return { ...state, ...action.payload };
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

export default mainReducer;
