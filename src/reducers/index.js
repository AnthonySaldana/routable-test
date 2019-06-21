import { combineReducers } from 'redux';

import GitReducer from './GitReducer';

const appReducer = combineReducers({
  git: GitReducer
});

const rootReducer = (state, action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;