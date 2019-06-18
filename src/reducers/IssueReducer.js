import {
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILURE
  } from '../actions/IssuesActions';
  
  const INITIAL_STATE = {
    issues: {
      data: "NA"
    }
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_ISSUES:
        return {
          data: "PROCESSING"
        };
      case FETCH_ISSUES_SUCCESS:
        return {
          data: "SUCCESS"
        };
      case FETCH_ISSUES_FAILURE:
        return {
          data: "SUCCESS"
        };
      default: return state;
    }
  }