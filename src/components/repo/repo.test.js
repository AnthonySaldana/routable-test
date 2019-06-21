import React from 'react';
import ReactDOM from 'react-dom';
import Repo from '../repo';

const mockProps = {
    repo: {
        name: "Test Repo",
        open_issues: 5
    }
};

let elem;

beforeEach(() => {
    elem = document.createElement('div');
    ReactDOM.render(<Repo repo={mockProps.repo} />, elem);
});

it('Matches Snapshot', () => {
  expect(elem).toMatchSnapshot();
});

it('Repo Name matches up', () => {
    expect(elem.getElementsByClassName('repoName')[0].innerHTML).toEqual('Test Repo');
});

it('Repo Open Issues matches up', () => {
    expect(elem.getElementsByClassName('repoIssues')[0].innerHTML).toEqual('Open Issues: 5');
});