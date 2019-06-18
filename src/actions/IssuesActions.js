/*
 * action types
 */

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';

export const FETCH_ISSUE = 'FETCH_ISSUE';
export const FETCH_ISSUE_SUCCESS = 'FETCH_ISSUE_SUCCESS';
export const FETCH_ISSUE_FAILURE = 'FETCH_ISSUE_FAILURE';

/*
 * action creators
 */

export function fetchIssues(key) {
    const data = {
        key: key,
        mock: "mock"
    }
  return { type: FETCH_ISSUES, data }
}

export function fetchIssue(id) {
    const data = {
        id: id,
        mock: "mock"
    }
  return { type: FETCH_ISSUE, data }
}
