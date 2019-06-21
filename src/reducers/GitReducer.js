import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILURE
  } from '../actions/GitActions';
  
  const INITIAL_STATE = {
    repos: [],
    issues: []
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_REPOS:
        return {
          ...state,
          repos: "PROCESSING"
        };
      case FETCH_REPOS_SUCCESS:
        return {
          ...state,
          repos: action.data
        };
      case FETCH_REPOS_FAILURE:
        return {
          ...state,
          repos: "FAILURE"
        };
      case FETCH_ISSUES:
        return {
          ...state,
          issues: "PROCESSING"
        };
      case FETCH_ISSUES_SUCCESS:
        return {
          ...state,
          issues: action.data
        };
      case FETCH_ISSUES_FAILURE:
        return {
          ...state,
          issues: "FAILURE"
        };
      default: return state;
    }
  }
