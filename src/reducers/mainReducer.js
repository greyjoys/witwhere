import * as types from '../const/actionTypes';

const initialState = {
  playerName: '',
  playerPass: '',
  playerList: [{ id: "", ready: false, answer: "" }],
  promptList: [`A bad time to shake someone's hand`, "Tony, I've got some bad news:"],
  p1Answer: '',
  p2Answer: '',
  gameReady: false,
  timer: '',
  gameStage: 1,
  p1AnswerVoteCount: 0,
  p2AnswerVoteCount: 0,
  footerInput: '',
};



const mainReducer = (state = initialState, action) => {
  let newPlayer = {
    id: "",
    ready: false,
    answer: ''
  }

  switch (action.type) {

    case types.ADVANCE_STAGE: {
      let newStageValue = state.gameStage + 1;
      if (newStageValue === 6) newStageValue = 1;

      return {
        ...state,
        gameStage: newStageValue,
      };

    }

    case types.UPDATE_FOOTER_INPUT: {

      let newFooterInput = action.payload;

      return {
        ...state,
        footerInput: newFooterInput,
      };
    }

    case types.UPDATE_PLAYER_NAME: {

      let newPlayerName = action.payload;

      return {
        ...state,
        playerName: newPlayerName,
      };
    }

    case types.UPDATE_PLAYER_PASS: {

      let newPlayerPass = action.payload;

      return {
        ...state,
        playerPass: newPlayerPass,
      };
    }

    case types.TEST_ACTION: {
      const newTextValue = action.payload;

      return {
        ...state,
        newTextValue,
      };
    }

    case types.ADD_PLAYER: {
      return {
        ...state
      }
    }

    case types.ADD_PLAYER_FAILURE: {
      let newPlayerName = action.payload;
      let newPlayerPass = action.payload;
      return {
        ...state,
        playerPass: newPlayerPass,
        playerName: newPlayerName
      }
    }

    case types.START_GAME: {
      return state = action.payload
    }
    case types.LOGIN_USER: {
      return {
        ...state
      }
    }

    default: {
      return state;
    }
  }

}

export default mainReducer;