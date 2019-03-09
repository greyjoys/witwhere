import * as types from '../const/actionTypes';

const initialState = {
  testValue: 0,
  anotherTestValue: 'test',
};

const mainReducer = (state=initialState, action) => {

  switch(action.type) {

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