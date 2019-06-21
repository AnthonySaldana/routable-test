/*
 * action types
 */

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';

export const TOGGLE_ISSUE = 'TOGGLE_ISSUE';

const endpoint = process.env.REACT_APP_ENDPOINT;
const token = process.env.REACT_APP_GIT_TOKEN;

/*
 * action creators
 */

export function fetchRepos() {
  let data = {
    mock: "mock"
  };
    
  return (dispatch) => {
    fetch(`${endpoint}/user/repos`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(r=> r.json())
    .then((response) => {
      data = response;
      dispatch(
        { type: FETCH_REPOS_SUCCESS, data }
      );
    })
    .catch((error) => {
      dispatch(
        { type: FETCH_REPOS_FAILURE, error }
      );
    });
  }
}

export function fetchIssues(repo, user) {
  let data;
    
  return (dispatch) => {
    fetch(`${endpoint}/repos/${user}/${repo}/issues`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(r=> r.json())
    .then((response) => {
      data = response;
      dispatch(
        { type: FETCH_ISSUES_SUCCESS, data }
      );
    })
    .catch((error) => {
      dispatch(
        { type: FETCH_ISSUES_FAILURE, error }
      );
    });
  }
}

export function toggleIssue(state) {
  return { type: TOGGLE_ISSUE, state}
}
