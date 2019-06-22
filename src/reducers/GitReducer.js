import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILURE,
    REORDER_ISSUES
  } from '../actions/GitActions';
  
  const INITIAL_STATE = {
    repos: [],
    issues: [],
    loading: false,
    error: false
  };

  /**
   * listOfObject - our list of issues
   * nodeOneId - Id of our first node
   * nodeTwoId - id of our second node
   * **/
  function reorderIssues( listOfObjects, nodeOneId, nodeTwoId ) {
    var nodePos = listOfObjects.findIndex(function(x) {return x.id === parseInt(nodeOneId); });
    var targetPos = listOfObjects.findIndex(function(x) {return x.id === parseInt(nodeTwoId); });
    listOfObjects.splice(targetPos + 1, 0, listOfObjects[nodePos]);
    listOfObjects.splice(nodePos, 1);
    return listOfObjects;
  }
  
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
          repos: [],
          error: 'Repo Fetch Failed'
        };
      case FETCH_ISSUES:
        return {
          ...state,
          issues: [],
          loading: true
        };
      case FETCH_ISSUES_SUCCESS:
        return {
          ...state,
          issues: action.data,
          loading: false
        };
      case FETCH_ISSUES_FAILURE:
        return {
          ...state,
          issues: [],
          loading: false,
          error: 'Issues Fetch Failed'
        };
      case REORDER_ISSUES:
        const { nodeOne, nodeTwo } = action.data;
        state.issues = reorderIssues(state.issues, nodeOne, nodeTwo);
        return {
          ...state,
        };
      default: return state;
    }
  }
