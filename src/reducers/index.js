import { combineReducers } from 'redux';

// import all reducers here
import mainReducer from './mainReducer';
import authReducer from './authReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  main: mainReducer,
  auth: authReducer
});

// make the combined reducers available for import
export default reducers;
