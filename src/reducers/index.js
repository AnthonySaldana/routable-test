import { combineReducers } from 'redux';

import IssueReducer from './IssueReducer';

const appReducer = combineReducers({
  issues: IssueReducer
});

const rootReducer = (state, action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;