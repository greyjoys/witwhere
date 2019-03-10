import * as types from '../const/actionTypes';

const initialState = {
  playerName: '',
  playerPass: '',
  playerList: [],
  promptList: ['This is a prompt', 'this is another prompt'],
  p1Answer: '',
  p2Answer: '',
  gameReady: false,
  timer: '',
  gameStage: 'lobby',
  p1AnswerVoteCount: 0,
  p2AnswerVoteCount: 0
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.TEST_ACTION: {
      const newTextValue = action.payload

      return {
        ...state,
        newTextValue,
      };
    }

    default: {
      return state;
    }
  }

}

export default mainReducer;